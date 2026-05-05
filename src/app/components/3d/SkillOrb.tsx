'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Sphere } from '@react-three/drei'
import * as THREE from 'three'

interface SkillOrbProps {
  position: [number, number, number]
  skill: string
  color: string
  size?: number
  orbitSpeed?: number
}

export default function SkillOrb({
  position,
  skill,
  color,
  size = 0.3,
  orbitSpeed = 1
}: SkillOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (!meshRef.current) return

    const time = state.clock.getElapsedTime() * orbitSpeed

    // Orbital motion
    const radius = Math.sqrt(position[0] ** 2 + position[2] ** 2)
    const angle = Math.atan2(position[2], position[0]) + time * 0.1

    meshRef.current.position.x = Math.cos(angle) * radius
    meshRef.current.position.z = Math.sin(angle) * radius
    meshRef.current.position.y = position[1] + Math.sin(time) * 0.2

    // Rotation
    meshRef.current.rotation.y += 0.01
    meshRef.current.rotation.x += 0.005

    // Scale on hover
    const targetScale = hovered ? 1.3 : 1
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    )
  })

  return (
    <group>
      <Sphere
        ref={meshRef}
        args={[size, 32, 32]}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </Sphere>

      {hovered && (
        <Text
          position={[position[0], position[1] + size + 0.5, position[2]]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill}
        </Text>
      )}
    </group>
  )
}
