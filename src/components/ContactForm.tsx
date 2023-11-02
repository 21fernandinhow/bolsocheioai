export default function ContactForm() {
    
    return(
        <form action="https://formsubmit.co/bolsocheioai@gmail.com" method="POST">

            <input type="text" name="name" id="name" placeholder="Nome: " required/>

            <input type="email" name="email" id="email" placeholder="E-mail: " required/>

            <textarea id="message" name="message" rows={2} placeholder="Mensagem" required/>

            <button type="submit">Enviar</button>

        </form>
    )
}