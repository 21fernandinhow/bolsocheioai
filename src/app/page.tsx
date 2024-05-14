import Link from "next/link"
import Image from "next/image"

// async function getPosts() {

//   const response = await fetch(`${process.env.NEXT_PUBLIC_POSTS_URL}`, {
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json',
//           'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
//       },
//       next: { revalidate: 300 }
//   });

//   if (!response.ok) {
//       throw new Error('Erro ao buscar posts')
//   }

//   return response.json();
// };

export default async function ProvisoryHome() {

  return (
      <section>
        <Link href="https://bolsocheio.ai">
          <Image src={'/logo.png'}
              width={90}
              height={60}
              alt={"Bol$o Cheio AI"}          
          />
        </Link>
        <h1>Em breve...</h1>
      </section>
  )
}

