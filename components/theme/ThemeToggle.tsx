"use client"

import * as React from "react"
import { Suspense } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

// Lazy load the Button component
const Button = React.lazy(() => import('../../src/components/ui/Button'))

// Custom ErrorBoundary component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <div>Error loading component</div>
    }
    return this.props.children
  }
}

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </Suspense>
    </ErrorBoundary>
  )
}
