"use client"

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const auth = async (e: any) => {
    e.preventDefault()

    const data = {
      username: username,
      password: password
    }

    signIn("credentials", {
      ...data,
      callbackUrl: "/"
    })
  }

  return (
    <div id="login">
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

      </section>
    </div>
  )
}