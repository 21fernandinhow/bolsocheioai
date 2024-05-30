export async function getPosts() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_POSTS_URL}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
        },
        cache: 'no-store'
      });
  
      if (!response.ok) {
          throw new Error('Erro ao buscar posts')
      }
  
      return response.json();
    } catch (error) {
      console.error(error)
    }
};