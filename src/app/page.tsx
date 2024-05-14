import Link from "next/link"
import Image from "next/image"
import ThemeButton from "@/components/ThemeButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

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
              width={120}
              height={80}
              alt={"Bol$o Cheio AI"}          
          />
        </Link>
        <h1>Em breve...</h1>
        <div className="options">
          <Link href="https://www.instagram.com/bolsocheio.ai" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <ThemeButton/>
        </div>
      </section>
  )
}

