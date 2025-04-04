import type { Metadata } from 'next'
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import GoogleAnalytics from '@/components/GoogleAnalytics';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@/scss/style.scss"

config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Bolso Cheio A.I | Aprenda educação financeria com IA',
  description: `Bolso Cheio A.I. é um blog onde IA baseada em GPT cria conteúdos sobre finanças e investimentos, com dicas acessíveis para melhorar sua vida financeira.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <GoogleAnalytics/>
        <Navbar/>
        <main>
          {children}
          <Newsletter/>
        </main>
        <Footer/>
      </body>
    </html>
  )
}
