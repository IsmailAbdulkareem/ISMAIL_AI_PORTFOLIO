/**
 * Device detection utilities for 3D rendering optimization
 */

export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

export const hasWebGLSupport = (): boolean => {
  if (typeof window === 'undefined') return false

  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch (e) {
    return false
  }
}

export const getDevicePerformance = (): 'high' | 'medium' | 'low' => {
  if (typeof window === 'undefined') return 'medium'

  // Check for hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 2

  // Check for device memory (if available)
  const memory = (navigator as any).deviceMemory || 4

  // Check if mobile
  const isMobile = isMobileDevice()

  if (isMobile) {
    return cores >= 6 && memory >= 4 ? 'medium' : 'low'
  }

  if (cores >= 8 && memory >= 8) return 'high'
  if (cores >= 4 && memory >= 4) return 'medium'
  return 'low'
}

export const shouldUse3D = (): boolean => {
  if (typeof window === 'undefined') return false

  const hasWebGL = hasWebGLSupport()
  const performance = getDevicePerformance()

  // Only use 3D on devices with WebGL and at least medium performance
  return hasWebGL && performance !== 'low'
}

export const get3DSettings = () => {
  const performance = getDevicePerformance()

  return {
    particleCount: performance === 'high' ? 1500 : performance === 'medium' ? 800 : 400,
    enablePostProcessing: performance === 'high',
    shadowQuality: performance === 'high' ? 2048 : performance === 'medium' ? 1024 : 512,
    antialias: performance !== 'low',
    pixelRatio: performance === 'high' ? 2 : 1,
  }
}
