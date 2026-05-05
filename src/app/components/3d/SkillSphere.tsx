'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import SkillOrb from './SkillOrb'
import * as THREE from 'three'

const skills = {
  frontend: [
    { name: 'React', color: '#61dafb', size: 0.4 },
    { name: 'Next.js', color: '#000000', size: 0.4 },
    { name: 'TypeScript', color: '#3178c6', size: 0.35 },
    { name: 'Tailwind', color: '#06b6d4', size: 0.35 },
  ],
  backend: [
    { name: 'Node.js', color: '#339933', size: 0.4 },
    { name: 'Python', color: '#3776ab', size: 0.4 },
    { name: 'MongoDB', color: '#47a248', size: 0.35 },
    { name: 'Prisma', color: '#2d3748', size: 0.3 },
  ],
  devops: [
    { name: 'Docker', color: '#2496ed', size: 0.35 },
    { name: 'Kubernetes', color: '#326ce5', size: 0.35 },
    { name: 'Linux', color: '#fcc624', size: 0.3 },
    { name: 'Git', color: '#f05032', size: 0.3 },
  ],
  ai: [
    { name: 'OpenAI', color: '#10a37f', size: 0.35 },
    { name: 'LangChain', color: '#1c3c3c', size: 0.3 },
    { name: 'Hugging Face', color: '#ff9d00', size: 0.3 },
  ],
}

export default function SkillSphere() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    // Gentle rotation of entire skill sphere
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
  })

  // Arrange skills in orbital layers
  const allSkills = [
    // Inner orbit - Frontend (radius 2)
    ...skills.frontend.map((skill, i) => ({
      ...skill,
      position: [
        Math.cos((i / skills.frontend.length) * Math.PI * 2) * 2,
        0,
        Math.sin((i / skills.frontend.length) * Math.PI * 2) * 2,
      ] as [number, number, number],
      orbitSpeed: 1.2,
    })),
    // Middle orbit - Backend (radius 3)
    ...skills.backend.map((skill, i) => ({
      ...skill,
      position: [
        Math.cos((i / skills.backend.length) * Math.PI * 2) * 3,
        0.5,
        Math.sin((i / skills.backend.length) * Math.PI * 2) * 3,
      ] as [number, number, number],
      orbitSpeed: 1.0,
    })),
    // Outer orbit - DevOps (radius 4)
    ...skills.devops.map((skill, i) => ({
      ...skill,
      position: [
        Math.cos((i / skills.devops.length) * Math.PI * 2) * 4,
        -0.5,
        Math.sin((i / skills.devops.length) * Math.PI * 2) * 4,
      ] as [number, number, number],
      orbitSpeed: 0.8,
    })),
    // Top orbit - AI (radius 2.5)
    ...skills.ai.map((skill, i) => ({
      ...skill,
      position: [
        Math.cos((i / skills.ai.length) * Math.PI * 2) * 2.5,
        1.5,
        Math.sin((i / skills.ai.length) * Math.PI * 2) * 2.5,
      ] as [number, number, number],
      orbitSpeed: 0.9,
    })),
  ]

  return (
    <group ref={groupRef}>
      {allSkills.map((skill, index) => (
        <SkillOrb
          key={`${skill.name}-${index}`}
          position={skill.position}
          skill={skill.name}
          color={skill.color}
          size={skill.size}
          orbitSpeed={skill.orbitSpeed}
        />
      ))}

      {/* Connection lines between skill categories */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={0}
            array={new Float32Array([])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#3b82f6" opacity={0.2} transparent />
      </lineSegments>

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={5}
        maxDistance={15}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
      />
    </group>
  )
}
