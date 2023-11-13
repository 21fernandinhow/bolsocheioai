"use client"

import PostBox, {PostBoxProps} from "./PostBox"
import { useState } from "react"

type PostListProps = {
    posts: PostBoxProps[];
}

export default function PostList({posts}:PostListProps) {

    const [postsIndex, setPostsIndex] = useState(0);

    const nextPosts = () => {
        if(postsIndex+5<posts.length){
            setPostsIndex(postsIndex+5)
        }
    }

    const previousPosts = () => {
        if(postsIndex>=5){
            setPostsIndex(postsIndex-5)
        }
    }

    return(
        <>
            <section className="posts">

                {
                    posts.length > 0 && (
                        
                        posts.slice(postsIndex, postsIndex+5).map((item, index)=>{
                            return <PostBox key={index} _id={item._id} title={item.title} date={item.date} content={item.content}/>
                        })
                        
                    ) || (
                        <p>Erro ao carregar posts. Tente novamente mais tarde</p>
                    )
                }

            </section>

            {posts.length>5 && (
                <section className="pagination">
                    {postsIndex>0 && (
                        <button onClick={previousPosts}>Página Anterior</button>
                    )}
                    <button onClick={nextPosts}>Próxima Página</button>
                </section>
            )}
        </>
    )
}