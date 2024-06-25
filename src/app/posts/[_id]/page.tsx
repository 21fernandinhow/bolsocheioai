import type { Metadata } from 'next'
import { notFound } from 'next/navigation';
import SharePostButtons from '@/components/SharePostButtons';

export async function generateMetadata({ params }: { params: { _id: string }}):Promise<Metadata>{

    const post = await getPostById(params._id);

    return{
        title: post.title,
        description: post.content.slice(0, 150)
    }
}

async function getPostById(_id:string) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_POSTS_URL}/${_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
        },
        next: {revalidate: 1800} // half a hour
    });
  
    if (!response.ok) {
        return notFound()
    }
  
    return response.json();
};

export default async function PostPage({ params }: { params: { _id: string } }) {

    const post = await getPostById(params._id);
    const formattedDate = new Date(post.date).toLocaleDateString('pt-BR');
    
    const formatText = (text: string) => {
        return text.replace(/\*{1,2}(.*?)\*{1,2}/g, '<strong>$1</strong>').replace(/###/g, "");
    };
    
    return(
        <section id="post">

            <h2>{post.title}</h2>
            <h4>{formattedDate} <SharePostButtons id={params._id} title={post.title}/></h4>

            {post.content.split("\n").map((item:string, index:number) => (
                <p 
                    key={index} 
                    dangerouslySetInnerHTML={
                        { __html: formatText(item)}
                    }
                />
            ))}

        </section>
    )
}