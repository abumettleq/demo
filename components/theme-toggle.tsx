"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <motion.div animate={{ rotate: theme === "dark" ? 180 : 0 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-700 dark:-rotate-90 dark:scale-0" />
      </motion.div>
      <motion.div
        className="absolute"
        animate={{ rotate: theme === "light" ? -180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-700 dark:rotate-0 dark:scale-100" />
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
