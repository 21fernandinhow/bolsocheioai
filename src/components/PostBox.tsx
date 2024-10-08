import Link from "next/link"

export type PostBoxProps = {
    _id: string
    title: string,
    date: string
    content: string
}

export const formatText = (text: string) => {
    return text.replace(/\*{1,2}(.*?)\*{1,2}/g, '<strong>$1</strong>').replace(/###/g, "");
};

export default function PostBox ({_id, title, date, content}: PostBoxProps) {

    const formattedDate = new Date(date).toLocaleDateString();

    return(
        <div className="post-box">
            <h3>{title}</h3>
            <h4>{formattedDate}</h4>
            {content.slice(0,120).split("\n").map((item, index) => (
                <p 
                    key={index} 
                    dangerouslySetInnerHTML={
                        { __html: formatText(item) + '...'}
                    }
            />
            ))}
                
            <Link href={`/posts/${_id}`}>Ler mais</Link>
        </div>
    )
}