'use client'

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function Newsletter() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [subscribeError, setSubscribeError] = useState(false);

    const handleSubmit = async (event: any) => {

        event.preventDefault()

        const response = await fetch('/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: name,
              email: email,
            }),
        })

        if(response.status === 200){
            setSubscribed(true)
        } else {
            setSubscribeError(true)
        }
        
    }
    
    return(
        <section id="newsletter">
            {
                subscribed ?
                <>
                    <h2>Inscrição realizada com sucesso!</h2>
                    <FontAwesomeIcon icon={faCircleCheck} className="success-icon"/>
                    <p>Muito obrigado por se inscrever em nossa newsletter!</p>
                    <p>Agora você receberá semanalmente os nossos conteúdos em sua caixa de emails.</p>
                </>
                : 
                <>
                    <h2>Inscreva-se em nossa Newsletter gratuita!</h2>
                    <p>Receba todos os conteúdos do Bolso Cheio A.I direto em seu email, <br/> todas as terças-feiras, as 10:30 da manhã.</p>
                    
                    <form onSubmit={handleSubmit}>

                        <input type="text" placeholder="Nome" id="name" onChange={(e) => setName(e.target.value)} required />

                        <input type="email" placeholder="E-mail" id="email" onChange={(e) => setEmail(e.target.value)} required />

                        <button type="submit">Enviar</button>

                    </form>
                    {
                        subscribeError ?
                        <h4 className="error-message"><FontAwesomeIcon icon={faCircleXmark} /> Erro ao efetuar inscrição. Atualize a página e tente novamente</h4>
                        :
                        null
                    }
                </>
            }
            
        </section>
    )
}