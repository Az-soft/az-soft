import { motion } from 'framer-motion'
import { Calendar, Clock, Tag } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const articles = [
  {
    title: 'Тренды веб-разработки в 2024 году',
    excerpt:
      'Обзор основных трендов и технологий, которые будут определять развитие веб-разработки в ближайшем будущем.',
    date: '15 марта 2024',
    readTime: '5 мин',
    category: 'Веб-разработка',
    image: '/blog/web-trends.jpg',
    slug: 'web-trends-2024',
  },
  {
    title: 'Как выбрать правильный стек технологий для проекта',
    excerpt:
      'Практическое руководство по выбору технологий для вашего проекта с учетом масштабируемости и производительности.',
    date: '10 марта 2024',
    readTime: '7 мин',
    category: 'Разработка',
    image: '/blog/tech-stack.jpg',
    slug: 'choosing-tech-stack',
  },
  {
    title: 'UI/UX дизайн: принципы и лучшие практики',
    excerpt:
      'Основные принципы создания удобных и привлекательных интерфейсов, которые повышают конверсию.',
    date: '5 марта 2024',
    readTime: '6 мин',
    category: 'Дизайн',
    image: '/blog/ui-ux.jpg',
    slug: 'ui-ux-principles',
  },
  {
    title: 'Разработка чат-ботов: с чего начать',
    excerpt:
      'Пошаговое руководство по созданию эффективного чат-бота для автоматизации коммуникаций с клиентами.',
    date: '1 марта 2024',
    readTime: '8 мин',
    category: 'Чат-боты',
    image: '/blog/chatbots.jpg',
    slug: 'chatbot-development',
  },
  {
    title: 'Оптимизация производительности мобильных приложений',
    excerpt:
      'Советы и техники для улучшения производительности мобильных приложений и повышения пользовательского опыта.',
    date: '25 февраля 2024',
    readTime: '6 мин',
    category: 'Мобильная разработка',
    image: '/blog/mobile-performance.jpg',
    slug: 'mobile-performance',
  },
  {
    title: 'CRM системы: как выбрать подходящую',
    excerpt:
      'Сравнение популярных CRM систем и рекомендации по выбору оптимального решения для вашего бизнеса.',
    date: '20 февраля 2024',
    readTime: '7 мин',
    category: 'CRM',
    image: '/blog/crm-systems.jpg',
    slug: 'choosing-crm',
  },
]

const categories = [
  { name: 'Все статьи', value: 'all' },
  { name: 'Веб-разработка', value: 'web' },
  { name: 'Мобильная разработка', value: 'mobile' },
  { name: 'Дизайн', value: 'design' },
  { name: 'Чат-боты', value: 'chatbots' },
  { name: 'CRM', value: 'crm' },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Блог
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Полезные статьи и материалы о разработке, дизайне и современных
          технологиях.
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

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <motion.article
            key={article.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-background rounded-lg overflow-hidden shadow-sm"
          >
            <div className="aspect-video bg-muted relative">
              {/* Здесь будет изображение статьи */}
              <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                <Tag className="h-12 w-12 text-primary/50" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Tag className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {article.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-muted-foreground mb-4">{article.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/blog/${article.slug}`}>
                  Читать статью
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Pagination */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex justify-center gap-2 mt-12"
      >
        <Button variant="outline" size="sm">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="outline" size="sm">
          ...
        </Button>
        <Button variant="outline" size="sm">
          10
        </Button>
      </motion.div>
    </div>
  )
} 