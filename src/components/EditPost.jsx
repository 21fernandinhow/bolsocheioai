"use client"

import Dialog from "@/components/Dialog";
import { useState } from "react";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EditPost({initialTitle, initialContent, selector}){

    const [open, setOpen] = useState(false)
    const [feedback, setFeedback] = useState('')
    const [title, setTitle] = useState(initialTitle)
    const [content, setContent] = useState(initialContent)

    const handleEdit = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_POSTS_URL}/${selector}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
                },
                body: JSON.stringify({
                    title: title,
                    content: content
                }),
            });
        
            if (!response.ok) {
                throw new Error('Erro ao editar item')
            }
        
            setFeedback("Post editado com sucesso =)")
            setTimeout(()=>{
                window.location.reload()
            }, 2 * 1000)
        } catch (error) {
            console.error(error)
            setFeedback("Erro ao editar post :/")
        }
    }

    const handleClose = () => {
        setFeedback('')
        setOpen(false)
    }

    return (
        <>
            <span className="action-item" onClick={() => setOpen(true)}>
                <FontAwesomeIcon icon={faPenToSquare} />
            </span>

            <Dialog isOpen={open} onClose={handleClose}>

                {feedback ? 
                    <p>{feedback}</p>
                    :
                    <>
                        <h3>Editar Post</h3>

                        <form id="edit-post-form">

                            <label htmlFor="title">Título</label>
                            <input id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />

                            <label htmlFor="title">Conteúdo</label>
                            <textarea 
                                id="content" 
                                name="content" 
                                value={content}
                                rows={10} 
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </form>

                        <div className="dialog-actions">
                            <button onClick={handleClose} className="btn-outline">Cancelar</button>
                            <button onClick={handleEdit} className="btn">Salvar</button>
                        </div>
                    </>
                }

            </Dialog>
        </>
    )
}