'use client'

import { motion } from 'framer-motion'
import { Code, Smartphone, MessageSquare, Database, Layout } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'Корпоративный портал',
    description:
      'Разработка современного корпоративного портала для крупной компании с интеграцией различных сервисов и систем.',
    category: 'Веб-разработка',
    icon: Code,
    image: '/portfolio/corporate-portal.jpg',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    link: '/portfolio/corporate-portal',
  },
  {
    title: 'Мобильное приложение для доставки',
    description:
      'Создание мобильного приложения для службы доставки с функционалом отслеживания заказов и push-уведомлениями.',
    category: 'Мобильные приложения',
    icon: Smartphone,
    image: '/portfolio/delivery-app.jpg',
    technologies: ['React Native', 'Firebase', 'Redux'],
    link: '/portfolio/delivery-app',
  },
  {
    title: 'Чат-бот для поддержки клиентов',
    description:
      'Разработка интеллектуального чат-бота для автоматизации ответов на часто задаваемые вопросы клиентов.',
    category: 'Чат-боты',
    icon: MessageSquare,
    image: '/portfolio/chatbot.jpg',
    technologies: ['Python', 'NLP', 'Telegram API'],
    link: '/portfolio/chatbot',
  },
  {
    title: 'CRM система для ритейла',
    description:
      'Создание индивидуальной CRM системы для управления клиентами и продажами в розничной сети.',
    category: 'CRM-системы',
    icon: Database,
    image: '/portfolio/crm.jpg',
    technologies: ['Vue.js', 'Laravel', 'MySQL'],
    link: '/portfolio/crm',
  },
  {
    title: 'Редизайн интернет-магазина',
    description:
      'Полный редизайн интерфейса интернет-магазина с улучшением пользовательского опыта и конверсии.',
    category: 'UI/UX дизайн',
    icon: Layout,
    image: '/portfolio/ecommerce.jpg',
    technologies: ['Figma', 'Adobe XD', 'User Testing'],
    link: '/portfolio/ecommerce',
  },
]

const categories = [
  { name: 'Все проекты', value: 'all' },
  { name: 'Веб-разработка', value: 'web' },
  { name: 'Мобильные приложения', value: 'mobile' },
  { name: 'Чат-боты', value: 'chatbots' },
  { name: 'CRM-системы', value: 'crm' },
  { name: 'UI/UX дизайн', value: 'design' },
]

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Наши проекты
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ознакомьтесь с нашими последними работами и убедитесь в качестве наших
          решений.
        </p>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <Button
            key={category.value}
            variant="outline"
            className="rounded-full"
          >
            {category.name}
          </Button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-background rounded-lg overflow-hidden shadow-sm"
          >
            <div className="aspect-video bg-muted relative">
              {/* Здесь будет изображение проекта */}
              <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                <project.icon className="h-12 w-12 text-primary/50" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <project.icon className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-muted px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href={project.link}>
                  Подробнее
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-24"
      >
        <h2 className="text-3xl font-bold mb-6">Готовы обсудить ваш проект?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Свяжитесь с нами, и мы поможем воплотить ваши идеи в жизнь с помощью
          современных технологий.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">
            Обсудить проект
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </div>
  )
} 