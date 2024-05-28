export async function getPosts() {
  try {
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
  } catch (error) {
    console.error(error)
  }
};

export default function Posts() {

    return (
      <section>
        <h1>Posts</h1>
      </section>
    )
}