import Link from "next/link"

export default function NotFoundPage() {
	return (
        <section id="not-found">
            <h1>Página não encontrada</h1>
            <p>Parece que o conteúdo que você está buscando não existe (ainda) ... </p>
            <Link href='/' className="btn-bg">Voltar ao Início</Link>
        </section>
    )
}