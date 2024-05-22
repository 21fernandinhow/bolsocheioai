import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { parseUrl } from "next/dist/shared/lib/router/utils/parse-url"

const handler = NextAuth({
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_LOGIN_URL}`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" , 'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,}
        })

        const user = await res.json()

        if (res.ok && user) {
          return user
        }
        
        return null
      }
    })
  ]
})

export { handler as GET, handler as POST }