import PostList from "@/components/PostList";

export default function Home() {

  return (
    <section className="page-container" id="home">
      <div className="header">
        <h2>Bem-vindo ao Bolso Cheio A.I.</h2>
        <p>Seu blog de finanças com conteúdo 100% produzido por inteligência artificial</p>
      </div>
      <PostList/>
    </section>
  )
}
