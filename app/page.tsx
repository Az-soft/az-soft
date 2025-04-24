'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Code, Smartphone, MessageSquare, Database, Layout, Users, Mail, Phone, MapPin, Clock, Award, Heart, Target } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { useRef } from 'react'
import ThemeLogo from './components/ThemeLogo'

const services = [
  {
    title: 'Веб-разработка',
    description: 'Создание современных веб-приложений с использованием передовых технологий.',
    icon: Code,
    features: [
      'Разработка на React, Next.js, Vue.js',
      'Серверная разработка на Node.js, Python, PHP',
      'Интеграция с внешними API и сервисами',
      'Оптимизация производительности и SEO',
      'Тестирование и отладка',
    ],
  },
  {
    title: 'Мобильные приложения',
    description: 'Разработка нативных и кроссплатформенных мобильных приложений.',
    icon: Smartphone,
    features: [
      'Нативная разработка (Swift, Kotlin)',
      'Кроссплатформенная разработка (React Native, Flutter)',
      'Интеграция с мобильными сервисами',
      'Push-уведомления и аналитика',
      'Тестирование на реальных устройствах',
    ],
  },
  {
    title: 'Чат-боты',
    description: 'Интеллектуальные чат-боты для автоматизации коммуникаций.',
    icon: MessageSquare,
    features: [
      'Разработка для Telegram, WhatsApp, Viber',
      'Интеграция с CRM и другими системами',
      'Обработка естественного языка (NLP)',
      'Аналитика и отчетность',
      'Мультиязычная поддержка',
    ],
  },
  {
    title: 'CRM-системы',
    description: 'Индивидуальные CRM-решения для управления клиентами и продажами.',
    icon: Database,
    features: [
      'Индивидуальная разработка под задачи',
      'Интеграция с существующими системами',
      'Аналитика и отчеты',
      'Автоматизация рабочих процессов',
      'Мобильный доступ',
    ],
  },
  {
    title: 'UI/UX дизайн',
    description: 'Создание удобных и привлекательных интерфейсов для ваших продуктов.',
    icon: Layout,
    features: [
      'Исследование пользователей',
      'Прототипирование и вайрфрейминг',
      'Дизайн интерфейсов',
      'Создание дизайн-систем',
      'Тестирование удобства использования',
    ],
  },
  {
    title: 'IT-консалтинг',
    description: 'Экспертная помощь в выборе и внедрении IT-решений.',
    icon: Users,
    features: [
      'Аудит IT-инфраструктуры',
      'Разработка IT-стратегии',
      'Выбор технологий и решений',
      'Управление проектами',
      'Обучение персонала',
    ],
  },
]

const values = [
  {
    title: 'Профессионализм',
    description:
      'Мы постоянно развиваемся и следим за последними трендами в IT-индустрии, чтобы предлагать нашим клиентам только лучшие решения.',
    icon: Award,
  },
  {
    title: 'Клиентоориентированность',
    description:
      'Каждый проект для нас уникален. Мы внимательно слушаем клиентов и разрабатываем решения, которые точно соответствуют их потребностям.',
    icon: Heart,
  },
  {
    title: 'Инновации',
    description:
      'Мы не боимся сложных задач и всегда ищем новые, более эффективные способы их решения.',
    icon: Target,
  },
  {
    title: 'Командная работа',
    description:
      'Наша команда - это сплоченный коллектив профессионалов, где каждый вносит свой вклад в общий успех.',
    icon: Users,
  },
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

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8"
          >
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                IT-решения для вашего бизнеса
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                AZ Soft - профессиональная IT-компания, предоставляющая полный спектр услуг
                по разработке программного обеспечения, дизайну и консалтингу.
              </p>
              <div className="mt-10 flex gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="gradient-border-btn">
                  <Link href="#contact">
                    Связаться с нами
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center w-full lg:w-auto">
              <ThemeLogo />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем комплексные IT-решения для вашего бизнеса
            </p>
          </motion.div>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card"
              >
                <div className="service-card__inner">
                  {/* Front of the card */}
                  <div className="service-card__front">
                    <div className="mb-8">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="service-card__title px-4">{service.title}</h3>
                  </div>

                  {/* Back of the card */}
                  <div className="service-card__back">
                    <div className="w-full">
                      <h3 className="service-card__title mb-4">{service.title}</h3>
                      <p className="service-card__description">{service.description}</p>
                      <ul className="service-card__features">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start space-x-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Наши ценности
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы строим долгосрочные отношения с клиентами на основе доверия и качества
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в ближайшее время.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{info.title}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
