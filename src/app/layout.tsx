import type { Metadata } from "next"
import { Akshar } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"
import { Languages } from "lucide-react"
import { LanguageContextProvider } from "@/context/LanguangeContext"
// import Navbar from "@/components/Navbar"

const akshar = Akshar({ weight: "500", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Paulo Luguenda",
  description: "My portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${akshar.className} relative select-text min-h-screen flex flex-col custom-scrollbar bg-[#000]`}
      >
        <main>
          <LanguageContextProvider>{children}</LanguageContextProvider>
        </main>
      </body>
    </html>
  )
}
