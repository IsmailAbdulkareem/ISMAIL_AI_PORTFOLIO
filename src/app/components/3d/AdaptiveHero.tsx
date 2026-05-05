'use client'

import { useEffect, useState } from 'react'
import Hero3D from './Hero3D'
import Hero from '../Hero'
import { shouldUse3D } from '@/app/utils/deviceDetection'

/**
 * Adaptive Hero component that switches between 3D and 2D based on device capabilities
 */
export default function AdaptiveHero() {
  const [use3D, setUse3D] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check device capabilities on client side
    const canUse3D = shouldUse3D()
    setUse3D(canUse3D)
    setIsLoading(false)
  }, [])

  // Show loading state briefly to prevent flash
  if (isLoading) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </section>
    )
  }

  // Render 3D version for capable devices, 2D fallback for others
  return use3D ? <Hero3D /> : <Hero />
}
