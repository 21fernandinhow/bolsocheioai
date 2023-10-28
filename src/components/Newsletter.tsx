export default function Newsletter() {
    return(
        <section id="newsletter">
            <h2>Inscreva-se em nossa Newsletter!</h2>
            <p>Receba todos os conteúdos do Bolso Cheio A.I direto em seu email, <br/> todas as segundas-feiras, as 11 horas.</p>
            <form>
                <input type="text" placeholder="Nome" id="name" required></input>
                <input type="email" placeholder="E-mail" id="email" required></input>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}