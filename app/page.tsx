'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Code, Smartphone, MessageSquare, Database, Layout, Users } from 'lucide-react'

const services = [
  {
    title: 'Веб-разработка',
    description: 'Создание современных веб-приложений с использованием передовых технологий.',
    icon: Code,
  },
  {
    title: 'Мобильные приложения',
    description: 'Разработка нативных и кроссплатформенных мобильных приложений.',
    icon: Smartphone,
  },
  {
    title: 'Чат-боты',
    description: 'Интеллектуальные чат-боты для автоматизации коммуникаций.',
    icon: MessageSquare,
  },
  {
    title: 'CRM-системы',
    description: 'Индивидуальные CRM-решения для управления клиентами и продажами.',
    icon: Database,
  },
  {
    title: 'UI/UX дизайн',
    description: 'Создание удобных и привлекательных интерфейсов для ваших продуктов.',
    icon: Layout,
  },
  {
    title: 'IT-консалтинг',
    description: 'Экспертная помощь в выборе и внедрении IT-решений.',
    icon: Users,
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              IT-решения для вашего бизнеса
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              AZ Soft - профессиональная IT-компания, предоставляющая полный спектр услуг
              по разработке программного обеспечения, дизайну и консалтингу.
            </p>
            <div className="mt-10 flex gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">
                  Наши работы
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Наши услуги
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Комплексные IT-решения для развития вашего бизнеса
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-lg shadow-sm"
              >
                <service.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Готовы начать проект?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами, и мы поможем воплотить ваши идеи в жизнь с помощью
              современных технологий и профессионального подхода.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Обсудить проект
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
