import PostList from "@/components/PostList";

async function getPosts() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_POSTS_URL}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      next: { revalidate: 300 }
  });

  if (!response.ok) {
      throw new Error('Erro ao buscar posts')
  }

  return response.json();
};

export default async function Home() {

  const posts = await getPosts()

  return (
    <section id="home">
      <div className="header">
        <h2>Bem-vindo ao Bolso Cheio A.I.</h2>
        <p>Seu blog de finanças com conteúdo gratuito 100% produzido por inteligência artificial.</p>
      </div>
      <PostList posts={posts.reverse()}/>
    </section>
  )
}

