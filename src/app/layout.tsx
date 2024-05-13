import type { Metadata } from 'next'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@/css/style.css"

config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Bolso Cheio A.I | Dashboard',
  description: 'Painel administrativo do Bolso Cheio A.I.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  )
}
