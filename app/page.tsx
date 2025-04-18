'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Code, Smartphone, MessageSquare, Database, Layout, Users, Mail, Phone, MapPin, Clock, Award, Heart, Target } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

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

const stats = [
  { label: 'Лет на рынке', value: '5+' },
  { label: 'Завершенных проектов', value: '50+' },
  { label: 'Специалистов в команде', value: '20+' },
  { label: 'Довольных клиентов', value: '100+' },
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

const team = [
  {
    name: 'Алексей Иванов',
    role: 'CEO & Основатель',
    image: '/team/alexey.jpg',
  },
  {
    name: 'Мария Петрова',
    role: 'Технический директор',
    image: '/team/maria.jpg',
  },
  {
    name: 'Дмитрий Сидоров',
    role: 'Lead Developer',
    image: '/team/dmitry.jpg',
  },
  {
    name: 'Елена Козлова',
    role: 'UI/UX Designer',
    image: '/team/elena.jpg',
  },
]

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
              <Button asChild size="lg" className="gradient-border-btn">
                <Link href="#contact">
                  Связаться с нами
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/50">
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
                    <Button asChild size="lg" className="gradient-border-btn">
                      <Link href="#contact">
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
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              О компании
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
            AZ Soft — это молодая и амбициозная команда, объединённая стремлением создавать
            современные IT-решения. Мы строим партнёрские отношения с клиентами и подходим к каждому
            проекту с максимальной вовлечённостью и вниманием к деталям.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Values */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-lg p-6 shadow-sm"
                >
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-12 w-12 text-primary/50" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Свяжитесь с нами
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
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
      </section>
    </div>
  )
}
