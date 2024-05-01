import Link from "next/link"

export default function Footer() {
    return(
        <footer>
            <hr/>
            <h4>O Bolso Cheio A.I tem seu conteúdo gerado 100% por IA (inteligência artificial).
                <br/><br/>
                O intuito do Bolso Cheio A.I é informar e ensinar sobre educação financeira de forma inovadora, com o melhor da tecnologia disponível.</h4>
            <h4>
                <Link href="https://fernandocarvalhodev.com" rel="noopener noreferrer" target="_blank">Desenvolvido por Fernando Carvalho.</Link>    
            </h4>
            <h6>Copyright Bolso Cheio A.I. 2023</h6>
        </footer>
    )
}