"use client"

import Dialog from "@/components/Dialog";
import { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DeleteItem({selector, endpoint}){

    const [open, setOpen] = useState(false)
    const [feedback, setFeedback] = useState('')

    const handleDelete = async () => {
        try {
            const response = await fetch(`${endpoint}/${selector}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
                },
            });
        
            if (!response.ok) {
                throw new Error('Erro ao apagar item')
            }
        
            setFeedback("Inscrito removido com sucesso =)")
            setTimeout(()=>{
                window.location.reload()
            }, 2 * 1000)
        } catch (error) {
            console.error(error)
            setFeedback("Erro ao remover inscrito :/")
        }
    }

    const handleClose = () => {
        setFeedback('')
        setOpen(false)
    }

    return (
        <>
            <span className="action-item" onClick={() => setOpen(true)}>
                <FontAwesomeIcon icon={faTrash} />
            </span>

            <Dialog isOpen={open} onClose={handleClose}>

                {feedback ? 
                    <p>{feedback}</p>
                    :
                    <>
                        <p>Tem certeza que deseja apagar este item?</p>

                        <div className="dialog-actions">
                            <button onClick={handleClose} className="btn-outline">Cancelar</button>
                            <button onClick={handleDelete} className="btn">Deletar</button>
                        </div>
                    </>
                }

            </Dialog>
        </>
    )
}