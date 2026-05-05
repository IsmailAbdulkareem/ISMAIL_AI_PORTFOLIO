'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Text } from '@react-three/drei'
import * as THREE from 'three'

interface ProjectCard3DProps {
  position: [number, number, number]
  title: string
  color: string
  onClick: () => void
  isActive: boolean
}

export default function ProjectCard3D({
  position,
  title,
  color,
  onClick,
  isActive
}: ProjectCard3DProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (!meshRef.current) return

    const time = state.clock.getElapsedTime()

    // Floating animation
    meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.1

    // Rotation on hover
    if (hovered) {
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        Math.PI * 0.1,
        0.1
      )
    } else {
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        0,
        0.1
      )
    }

    // Scale on active
    const targetScale = isActive ? 1.2 : hovered ? 1.1 : 1
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    )
  })

  return (
    <group position={position}>
      <RoundedBox
        ref={meshRef}
        args={[2, 2.5, 0.2]}
        radius={0.1}
        smoothness={4}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
      >
        <meshStandardMaterial
          color={color}
          metalness={0.3}
          roughness={0.4}
          emissive={color}
          emissiveIntensity={hovered ? 0.3 : 0.1}
        />
      </RoundedBox>

      <Text
        position={[0, 0, 0.15]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
      >
        {title}
      </Text>
    </group>
  )
}
