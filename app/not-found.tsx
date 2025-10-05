import React from "react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition"
      >
        Go Home
      </Link>
    </div>
  )
}
