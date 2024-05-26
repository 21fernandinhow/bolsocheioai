import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import LoginForm from "@/components/LoginForm";

export default async function Login() {

  const session = await getServerSession()
    
  if(session){
      redirect("/")
  }

  return (
    <div id="login">
      <LoginForm/>
    </div>
  )
}