import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
      <div className="z-20 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-4 md:mx-8 flex h-14 items-center">
        <p className="text-xs md:text-sm leading-loose text-muted-foreground text-left">
          &copy; 2024 Designed and developed by
          <Link
            target="_blank"
            href="https://github.com/nayaknishant656"
            className="text-primary transition-all border-primary hover:border-b-2 ml-1"
          >
            NISHANT 
          </Link>
        </p>
      </div>
    </div>
  )
}
