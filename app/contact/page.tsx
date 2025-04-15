import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'info@azsoft.ru',
    href: 'mailto:info@azsoft.ru',
  },
  {
    icon: Phone,
    title: 'Телефон',
    content: '+7 (XXX) XXX-XX-XX',
    href: 'tel:+7XXXXXXXXXX',
  },
  {
    icon: MapPin,
    title: 'Адрес',
    content: 'г. Москва, ул. Примерная, д. 123',
    href: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Часы работы',
    content: 'Пн-Пт: 9:00 - 18:00',
  },
]

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Свяжитесь с нами
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Готовы начать проект или есть вопросы? Заполните форму ниже, и мы свяжемся
          с вами в ближайшее время.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-8">Контактная информация</h2>
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-start space-x-4"
              >
                <div className="rounded-full bg-primary/10 p-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-8">Форма обратной связи</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
} 