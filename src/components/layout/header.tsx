'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import RoxyLogoSVG from '@/components/roxy-logo'
import { cn } from '@/lib/utils'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 transition-all duration-300',
        scrolled ? 'bg-background/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <Link href="/" className="flex items-center gap-2">
        <RoxyLogoSVG className="h-8 w-8 text-primary" />
        <span className="font-headline text-xl font-bold text-foreground">Humidor Hub</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Features
        </a>
        <a href="#browse" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Discover
        </a>
        <a href="#roxy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Roxy's Corner
        </a>
        <a href="#data" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Data Management
        </a>
        <a href="#themes" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Themes
        </a>

        <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Pricing
        </a>
        <a href="#pilot" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Pilot Program
        </a>
      </nav>

      <span className="inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 inset-ring inset-ring-red-400/20">ALPHA v0.0.1.0</span>

    </header>
  )
}
