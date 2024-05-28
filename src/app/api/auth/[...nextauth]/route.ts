import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  pages: {
    signIn: "/login",
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
        user.user.name = user.user.username

        if (res.ok && user) {
          return user.user
        }
        
        return null
      }
    })
  ]
})

export { handler as GET, handler as POST }