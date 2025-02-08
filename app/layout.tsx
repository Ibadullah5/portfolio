import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import type React from "react"
import BackgroundAnimation from "@/components/BackgroundAnimation"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"], variable: "--font-poppins" })

export const metadata = {
  title: "Ibadullah Riaz - Portfolio",
  description: "Software Engineer proficient in MERN stack and AI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-[#0d1117] text-gray-300 font-sans min-h-screen">
        <BackgroundAnimation />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}

