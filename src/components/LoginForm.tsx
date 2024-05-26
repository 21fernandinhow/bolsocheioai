"use client"

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function LoginForm() {

  const searchParams = useSearchParams()
  const error = searchParams.get("error")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const auth = async (e: any) => {
    e.preventDefault()

    signIn("credentials", {
      username: username,
      password: password,
      callbackUrl: "/"
    })
  }

  return (
    <section>
        <h1>Login</h1>
        <hr/>

        <form>
            <label htmlFor="username"> Usuário </label>
            <input id="username" name="username" type="text" onChange={ (e) => setUsername(e.target.value.slice(0, 20)) } />

            <label htmlFor="password"> Senha </label>
            <input id="password" name="password" type="password" onChange={ (e) => setPassword(e.target.value.slice(0, 20)) } />

            <button onClick={auth} className="btn-lg">Entrar</button>
        </form>

        {error === "CredentialsSignin" && <p className="error-message"> <FontAwesomeIcon icon={faCircleXmark}/> Usuário ou senha inválidos!</p>}
    </section>
  )
}