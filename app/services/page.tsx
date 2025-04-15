'use client'

import { motion } from 'framer-motion'
import { Code, Smartphone, MessageSquare, Database, Layout, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Веб-разработка',
    description:
      'Создаем современные, быстрые и безопасные веб-приложения с использованием передовых технологий. Наши решения масштабируемы и оптимизированы для достижения максимальной производительности.',
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
    description:
      'Разрабатываем нативные и кроссплатформенные мобильные приложения для iOS и Android. Наши приложения отличаются высокой производительностью и отличным пользовательским опытом.',
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
    description:
      'Создаем интеллектуальные чат-боты для автоматизации коммуникаций с клиентами. Наши боты способны обрабатывать запросы, отвечать на вопросы и выполнять различные задачи.',
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
    description:
      'Разрабатываем индивидуальные CRM-решения для управления клиентами, продажами и маркетингом. Наши системы помогают автоматизировать бизнес-процессы и повысить эффективность работы.',
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
    description:
      'Создаем удобные и привлекательные интерфейсы для ваших продуктов. Наш дизайн основан на глубоком понимании пользователей и современных трендах.',
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
    description:
      'Предоставляем экспертные консультации по выбору и внедрению IT-решений. Помогаем оптимизировать процессы и повысить эффективность бизнеса с помощью технологий.',
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

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Наши услуги
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Предоставляем полный спектр IT-услуг для развития вашего бизнеса.
          Каждое решение адаптировано под ваши конкретные задачи и требования.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-background rounded-lg shadow-sm p-8"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    Обсудить проект
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 