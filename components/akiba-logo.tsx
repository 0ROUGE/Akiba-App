"use client"

import Link from "next/link"

interface AkibaLogoProps {
  size?: "sm" | "md" | "lg"
  link?: boolean
}

export function AkibaLogo({ size = "md", link = true }: AkibaLogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  }

  const content = (
    <div className="flex items-center gap-2">
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
        <span className="font-bold text-primary-foreground text-sm">A</span>
      </div>
      <span className={`font-semibold tracking-tight text-foreground ${sizeClasses[size]}`}>
        AKIBA
      </span>
    </div>
  )

  if (link) {
    return (
      <Link href="/dashboard" className="transition-opacity hover:opacity-80">
        {content}
      </Link>
    )
  }

  return content
}
