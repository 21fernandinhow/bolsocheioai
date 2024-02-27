import type { Metadata } from 'next'
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import GoogleAnalytics from '@/components/GoogleAnalytics';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@/css/style.css"

config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Bolso Cheio AI',
  description: 'Um blog de finanças com conteúdo 100% feito por inteligência artificial',
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
