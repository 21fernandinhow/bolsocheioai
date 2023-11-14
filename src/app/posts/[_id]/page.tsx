import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { _id: string }}):Promise<Metadata>{

    const post = await getPostById(params._id);

    return{
        title: post.title,
        description: post.content.slice(0,150)
    }
}

async function getPostById(_id:string) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_POSTS_URL}/${_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
        },
    });
  
    if (!response.ok) {
        throw new Error('Erro ao buscar posts')
    }
  
    return response.json();
};

export default async function PostPage({ params }: { params: { _id: string } }) {

    const post = await getPostById(params._id);
    const formattedDate = new Date(post.date).toLocaleDateString('pt-BR');
    
    return(
        <section id="post">

            <h2>{post.title}</h2>
            <h4>{formattedDate}</h4>

            {post.content.split("\n").map((item:string, index:number) => (
                <p key={index}>{item}</p>
            ))}

        </section>
    )
}