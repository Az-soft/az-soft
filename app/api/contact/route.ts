import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, company } = await request.json()

    // Проверяем наличие необходимых переменных окружения
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      throw new Error('SMTP configuration is missing')
    }

    // Создаем транспорт для отправки email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Проверяем соединение с SMTP сервером
    try {
      await transporter.verify()
    } catch (error) {
      console.error('SMTP connection error:', error)
      throw new Error('Failed to connect to SMTP server')
    }

    // Формируем email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'info@az-soft.kz',
      subject: 'Новая заявка с сайта AZ Soft',
      html: `
        <h2>Новая заявка с сайта</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        ${company ? `<p><strong>Компания:</strong> ${company}</p>` : ''}
        <p><strong>Сообщение:</strong></p>
        <p>${message}</p>
      `,
    }

    // Отправляем email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send message' },
      { status: 500 }
    )
  }
} 