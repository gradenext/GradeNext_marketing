import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import MainNavbar from "@/components/main-navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gradenext",
  description: "Innovative educational technology platform for modern learning",
  icons: {
    icon: "/favicon.png", 
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <MainNavbar />
          {children}
      </body>
    </html>
  )
}

