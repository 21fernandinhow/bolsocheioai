import NumberDataResume from "@/components/NumberDataResume";
import { getLeads } from "./leads/page";
import { getPosts } from "./posts/page";
import ExternalActions from "@/components/ExternalActions";
import NextPosts from "@/components/NextPosts";
import { getServerSession } from "next-auth";

export default async function Home() {

  const leads = await getLeads()
  const posts = await getPosts()
  const session = await getServerSession()

  return (
    <div id="home">
      <h1 className="title">Bem-vindo, {session?.user?.name}</h1>

      <div className="row">

        <div className="col col-sm">
          <NumberDataResume title="Total de Leads" value={leads.length} />
          <NumberDataResume title="Total de Posts" value={posts.length} />
          <ExternalActions/>
        </div>

        <div className="col col-lg">
          <NextPosts/>
        </div>

      </div>
    </div>
  )
}