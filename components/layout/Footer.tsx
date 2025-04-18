import Link from 'next/link'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'О компании', href: '/about' },
  { name: 'Портфолио', href: '/portfolio' },
  { name: 'Контакты', href: '/contact' },
]

const contactInfo = [
  {
    icon: Mail,
    text: 'info@azsoft.ru',
    href: 'mailto:info@azsoft.ru',
  },
  {
    icon: Phone,
    text: '+7 (XXX) XXX-XX-XX',
    href: 'tel:+7XXXXXXXXXX',
  },
  {
    icon: MapPin,
    text: 'г. Москва, ул. Примерная, д. 123',
    href: 'https://maps.google.com',
  },
]

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info - Left */}
          <div className="flex flex-col gap-6 md:justify-self-start">
            <h3 className="text-xl font-bold">AZ Soft</h3>
            <p className="text-muted-foreground">
              Профессиональные IT-решения для вашего бизнеса. Разработка веб-приложений,
              мобильных приложений, чат-ботов, CRM-систем, UI/UX дизайн и IT-консалтинг.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.label}</span>
                </a>
              ))}
            </div>
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