import ContactForm from "@/components/ContactForm";

export const metadata = {
    title: "Contato | Bol$o Cheio A.I",
    description: `Entre em contato com Bol$o Cheio A.I, seu blog de finanças com conteúdo 100% produzido por inteligência artificial!`,
}

export default function Contact() {

    return (
      <section className="page-container" id="contact">
        <h2>Contato</h2>
        <p>Envie sua mensagem para nós através do formulário abaixo. Estamos sempre abertos a ouvir feedbacks, avisos, propostas ou sugestões!</p>
        <ContactForm/>
      </section>
    )
}