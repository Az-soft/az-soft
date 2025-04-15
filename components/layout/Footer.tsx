import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Главная', href: '/' },
    { name: 'Услуги', href: '/services' },
    { name: 'О компании', href: '/about' },
    { name: 'Портфолио', href: '/portfolio' },
    { name: 'Блог', href: '/blog' },
    { name: 'Контакты', href: '/contact' },
  ],
  services: [
    { name: 'Веб-разработка', href: '/services#web' },
    { name: 'Мобильные приложения', href: '/services#mobile' },
    { name: 'Чат-боты', href: '/services#chatbots' },
    { name: 'CRM-системы', href: '/services#crm' },
    { name: 'UI/UX дизайн', href: '/services#design' },
    { name: 'IT-консалтинг', href: '/services#consulting' },
  ],
}

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

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">AZ Soft</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Профессиональные IT-решения для вашего бизнеса. Разработка веб-приложений,
              мобильных приложений, чат-ботов, CRM-систем, UI/UX дизайн и IT-консалтинг.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Навигация</h3>
            <ul className="mt-4 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Услуги</h3>
            <ul className="mt-4 space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {contactInfo.map((item) => (
            <a
              key={item.text}
              href={item.href}
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.text}</span>
            </a>
          ))}
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