import { motion } from 'framer-motion'
import { Users, Target, Award, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          О компании
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          AZ Soft - это команда профессионалов, которая помогает бизнесу расти с
          помощью современных IT-решений. Мы создаем качественные продукты и
          предоставляем надежные услуги.
        </p>
      </motion.div>

      {/* Stats Section */}
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

      {/* Values Section */}
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

      {/* Team Section */}
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
                {/* Здесь будет изображение члена команды */}
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

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Готовы начать сотрудничество?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Свяжитесь с нами, и мы обсудим, как можем помочь вашему бизнесу расти с
          помощью современных IT-решений.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">
            Связаться с нами
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </div>
  )
} 