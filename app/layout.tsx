import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "next-themes"
import { PageTransition } from "@/components/page-transition"
import { Toaster } from "@/components/ui/sonner"

import "./globals.css"
import { AuthProvider } from "@/middleware/api/auth_context"

export const metadata: Metadata = {
  title: "Demo Website",
  description: "A beautiful demo website with light/dark mode",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider> {/* <-- wrap everything in AuthProvider */}
            <PageTransition>{children}</PageTransition>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
