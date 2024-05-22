import Logout from "@/components/Logout"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Home() {

    const session = await getServerSession()
    
    if(!session){
        redirect("/")
    }

    return (
      <div id="not-found">
        <section>
          <h1>Entrou</h1>
          <Logout />
        </section>
      </div>
    )
}