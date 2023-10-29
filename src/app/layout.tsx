import type { Metadata } from 'next'
import Navbar from "@/components/Navbar"
import "@/css/style.css"
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'

export const metadata: Metadata = {
  title: 'Bol$o Cheio AI',
  description: 'Um blog de finanças com conteúdo 100% feito por inteligência artificial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body data-theme={'light'}>
        <Navbar/>
        {children}
        <Newsletter/>
        <Footer/>
      </body>
    </html>
  )
}
