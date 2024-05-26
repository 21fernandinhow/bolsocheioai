import Link from "next/link"

export const metadata = {
    title: "Página não encontrada | Bolso Cheio A.I",
    description: `O Bolso Cheio A.I. é uma inovação no mundo das finanças e investimentos. Este blog é único, pois todo o seu conteúdo é gerado 
    automaticamente por uma inteligência artificial de ponta, baseada em GPT, e capaz de produzir artigos perspicazes sobre educação financeira e 
    princípios de investimentos de maneira ágil e precisa.`,
}

export default function NotFoundPage() {
	return (
        <section id="not-found">
            <h1>Página não encontrada</h1>
            <p>Parece que o conteúdo que você está buscando não existe ... </p>
            <Link href='/' className="btn-lg">Voltar ao Início</Link>
        </section>
    )
}