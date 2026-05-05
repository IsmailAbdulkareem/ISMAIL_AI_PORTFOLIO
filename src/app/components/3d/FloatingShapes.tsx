'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface FloatingShapeProps {
  position: [number, number, number]
  color: string
  speed?: number
}

function FloatingShape({ position, color, speed = 1 }: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return

    const time = state.clock.getElapsedTime() * speed
    meshRef.current.position.y = position[1] + Math.sin(time) * 0.5
    meshRef.current.rotation.x = time * 0.3
    meshRef.current.rotation.y = time * 0.2
  })

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[0.5, 0]} />
      <MeshDistortMaterial
        color={color}
        speed={2}
        distort={0.3}
        radius={1}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

export default function FloatingShapes() {
  const shapes = [
    { position: [-3, 2, -2], color: '#3b82f6', speed: 0.8 },
    { position: [3, -1, -3], color: '#8b5cf6', speed: 1.2 },
    { position: [-2, -2, -1], color: '#06b6d4', speed: 1.0 },
    { position: [2, 1, -2], color: '#ec4899', speed: 0.9 },
  ] as const

  return (
    <>
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
    </>
  )
}
