'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'О компании', href: '/about' },
  { name: 'Портфолио', href: '/portfolio' },
  { name: 'Контакты', href: '/contact' },
]

const contactInfo = [
  {
    icon: Mail,
    text: 'info@az-soft.kz',
    href: 'mailto:info@az-soft.kz',
  },
  {
    icon: Phone,
    text: '+7 (771) 277-37-73',
    href: 'tel:+77712773773',
  },
  {
    icon: MapPin,
    text: 'г. Москва, ул. Примерная, д. 123',
    href: 'https://maps.google.com',
  },
]

export default function Footer() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info - Left */}
          <div className="flex flex-col gap-6 md:justify-self-start">
            <p className="text-muted-foreground">
              Профессиональные IT-решения для вашего бизнеса. Разработка веб-приложений,
              мобильных приложений, чат-ботов, CRM-систем, UI/UX дизайн и IT-консалтинг.
            </p>
          </div>

          {/* Navigation - Center */}
          <div className="flex flex-col gap-6 md:justify-self-center">
            <h3 className="text-lg font-semibold">Навигация</h3>
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts - Right */}
          <div className="flex flex-col gap-6 md:justify-self-end">
            <h3 className="text-lg font-semibold">Контакты</h3>
            <div className="flex flex-col gap-3">
              {contactInfo.map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} AZ Soft. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
} 