'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function ThemeLogo() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <motion.img
        src="/az_soft_logo_black.png"
        alt="AZ Soft Logo"
        className="w-full max-w-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    )
  }

  return (
    <motion.img
      src={theme === 'dark' ? '/az_soft_logo_black_white.png' : '/az_soft_logo_black.png'}
      alt="AZ Soft Logo"
      className="w-full max-w-md"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    />
  )
} 