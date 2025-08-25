import type React from "react"
import type { Metadata } from "next"
import { Roboto_Slab, Open_Sans } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-slab",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Jazz Art",
  description: "Professional tattoo artistry and custom designs by Jazz Art tattoo salon",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${robotoSlab.variable} ${openSans.variable} antialiased`}>
      <body className="font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
