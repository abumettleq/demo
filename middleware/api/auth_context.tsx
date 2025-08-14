// context/AuthContext.tsx
"use client"
import React, { createContext, useContext, useEffect, useState } from "react"

interface AuthContextType {
  isAuthenticated: boolean
  loading: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  loading: true,
  login: async () => false,
  logout: async () => {},
})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  // Check login status on mount
  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/auth/status", {
          method: "GET",
          credentials: "include", // important to send cookies
        })
        const status = await res.json()
        setIsAuthenticated(status === true)
      } catch (err) {
        console.error("Status check failed", err)
        setIsAuthenticated(false)
      } finally {
        setLoading(false)
      }
    }
    checkStatus()
  }, [])

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      })
      if (res.ok) {
        setIsAuthenticated(true)
        return true
      }
    } catch (err) {
      console.error("Login failed", err)
    }
    return false
  }

  // Logout function
  const logout = async () => {
    try {
      await fetch("http://localhost:8080/api/auth/logout", {
        method: "POST",
        credentials: "include",
      })
    } catch (err) {
      console.error("Logout failed", err)
    } finally {
      setIsAuthenticated(false)
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
