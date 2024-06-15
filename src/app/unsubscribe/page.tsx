"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function Unsubscribe () {

    const [email, setEmail] = useState('');
    const [unsubscribed, setUnsubscribed] = useState(false);
    const [unsubscribeError, setUnsubscribeError] = useState(false);

    const handleSubmit = async (event: any) => {

        event.preventDefault()

        const response = await fetch('/api/unsubscribe', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
            }),
        })

        if(response.status === 200){
            setUnsubscribed(true)
        } else {
            setUnsubscribeError(true)
        }
        
    }

    return (
        <section id="newsletter">
            {
                unsubscribed ?
                <>
                    <h3>Inscrição removida com sucesso!</h3>
                    <FontAwesomeIcon icon={faCircleCheck} className="success-icon"/>
                    <p>Você não irá mais receber nossos conteúdos.</p>
                </>
                : 
                <>
                    <h3>Insira seu email abaixo para cancelar sua inscrição em nossa newsletter</h3>
                    <p>Uma pena a sua partida, você pode voltar quando desejar.</p>
                    
                    <form onSubmit={handleSubmit}>

                        <input type="email" placeholder="E-mail" id="email" onChange={(e) => setEmail(e.target.value.slice(0, 50))} required />

                        <button type="submit">Cancelar</button>

                    </form>
                    {
                        unsubscribeError ?
                        <h4 className="error-message"><FontAwesomeIcon icon={faCircleXmark} /> Erro ao cancelar inscrição. Atualize a página e tente novamente</h4>
                        :
                        null
                    }
                </>
            }
            
        </section>
    )
}