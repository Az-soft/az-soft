'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'Услуги', href: '/#services' },
  { name: 'О компании', href: '/#values' },
  { name: 'Контакты', href: '/#contact' },
]

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'info@az-soft.kz',
    href: 'mailto:info@az-soft.kz',
  },
  {
    icon: Phone,
    title: 'Телефон',
    content: '+7 (777) 127-73-73',
    href: 'tel:+77771277373',
  },
  {
    icon: MapPin,
    title: 'Адрес',
    content: 'г. Астана, пр. Тауелсиздик, 25',
    href: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Часы работы',
    content: 'Пн-Пт: 9:00 - 18:00',
  },
]

export default function Footer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const id = href.substring(1) // Remove the # symbol
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

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
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault()
                      handleNavigation(item.href)
                    }
                  }}
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
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <item.icon className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.content}</p>
                    )}
                  </div>
                </div>
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