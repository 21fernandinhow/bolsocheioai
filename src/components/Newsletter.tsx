'use client'

import { useState } from "react"

export default function Newsletter() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event: any) => {

        event.preventDefault()

        const response = await fetch(`${process.env.NEXT_PUBLIC_LEADS_URL}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
            },
            body: JSON.stringify({
              name: name,
              email: email,
            }),
        })

        if(response.ok){
            alert('Inscrição efetuada com sucesso!')
        } else {
            alert('Erro ao efetuar inscrição. Atualize a página e tente novamente')
        }
        
    }
    
    return(
        <section id="newsletter">
            <h2>Inscreva-se em nossa Newsletter!</h2>
            <p>Receba todos os conteúdos do Bolso Cheio A.I direto em seu email, <br/> todas as segundas-feiras, as 11 horas.</p>
            
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="Nome" id="name" onChange={(e) => setName(e.target.value)} required></input>

                <input type="email" placeholder="E-mail" id="email" onChange={(e) => setEmail(e.target.value)} required></input>

                <button type="submit">Enviar</button>

            </form>
        </section>
    )
}