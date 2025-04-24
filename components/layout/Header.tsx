'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'Услуги', href: '/#services' },
  { name: 'О компании', href: '/#values' },
  { name: 'Контакты', href: '/#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [logo, setLogo] = useState('/logo-dark-theme.png')
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    setLogo(theme === 'dark' ? '/logo-white-theme.png' : '/logo-dark-theme.png')
  }, [theme])

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const id = href.substring(1) // Remove the # symbol
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
        setMobileMenuOpen(false)
      }
    }
  }

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    if (href.startsWith('#')) {
      return false
    }
    return pathname === href
  }

  if (!mounted) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-0 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div 
            className="relative w-48 h-20 md:w-56 md:h-24 lg:w-64 lg:h-28 group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={logo}
              alt="AZ Soft Logo"
              fill
              className="object-contain transition-opacity duration-200 group-hover:opacity-80"
              priority
            />
          </motion.div>
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith('#')) {
                  e.preventDefault()
                  handleNavigation(item.href)
                }
              }}
              className={`nav-link text-sm font-medium ${
                isActive(item.href) ? 'text-primary' : 'text-foreground/60'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="btn-hover rounded-full p-2 hover:bg-accent/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )
            ) : (
              <div className="h-5 w-5" />
            )}
          </button>

          <button
            className="btn-hover md:hidden rounded-md p-2 hover:bg-accent/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? 'auto' : 0,
        }}
        className="md:hidden"
      >
        <div className="container mx-auto space-y-1 px-4 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith('#')) {
                  e.preventDefault()
                  handleNavigation(item.href)
                } else {
                  setMobileMenuOpen(false)
                }
              }}
              className={`nav-link block rounded-md px-3 py-2 text-base font-medium ${
                isActive(item.href)
                  ? 'bg-accent text-accent-foreground'
                  : 'text-foreground/60 hover:bg-accent/50 hover:text-accent-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  )
} 