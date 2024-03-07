"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import PostBox, {PostBoxProps} from "./PostBox"
import { useState } from "react"

type PostListProps = {
    posts: PostBoxProps[]
}

export default function PostList({posts}:PostListProps) {

    const [postsIndex, setPostsIndex] = useState(0)
    const [search, setSearch] = useState('')
    const lowerCaseSearch = search.toLowerCase()
    const filteredPosts = posts.filter(item => item.title.toLowerCase().includes(lowerCaseSearch))
    const postsPerPage = window.innerWidth >= 1440 ? 5 : window.innerWidth >= 1073 ? 3 : 4

    const nextPosts = () => {
        if(postsIndex + postsPerPage < filteredPosts.length){
            setPostsIndex(postsIndex + postsPerPage)
            console.log(postsIndex)
        }
    }

    const previousPosts = () => {
        if(postsIndex >= postsPerPage){
            setPostsIndex(postsIndex - postsPerPage)
        }
    }

    return(
        <>
            <div className="search">
                <label htmlFor="search"><FontAwesomeIcon icon={faMagnifyingGlass}/></label>
                <input 
                    placeholder='Pesquisar...' 
                    type="text" 
                    value={search}
                    onChange={(ev) => {
                        setPostsIndex(0)
                        setSearch(ev.target.value)
                    }}
                    id="search" 
                />
            </div>
            
            <section className="posts">

                {
                    filteredPosts.length > 0 && (
                        
                        filteredPosts.slice(postsIndex, postsIndex + postsPerPage).map((item, index)=>{
                            return <PostBox key={index} _id={item._id} title={item.title} date={item.date} content={item.content}/>
                        })
                        
                    ) || (
                        <p>{posts.length > 0 ? "Não foram encontrados artigos para sua pesquisa" : "Erro ao carregar artigos. Tente novamente mais tarde"}</p>
                    )
                }

            </section>

            {filteredPosts.length > postsPerPage && (
                <section className="pagination">
                    {postsIndex > 0 && (
                        <button onClick={previousPosts}>Página Anterior</button>
                    )}
                    {filteredPosts.length - postsIndex > postsPerPage && (
                        <button onClick={nextPosts}>Próxima Página</button>
                    )}
                </section>
            )}
        </>
    )
}