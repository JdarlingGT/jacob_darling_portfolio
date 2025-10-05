"use client"

import React from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-destructive mb-4">Error</h1>
      <h2 className="text-2xl font-semibold mb-4">Something went wrong</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition"
      >
        Try Again
      </button>
    </div>
  )
}
