'use client'

import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ProjectCard3D from './ProjectCard3D'
import * as THREE from 'three'

const projects = [
  { title: 'Mustafa Builder', color: '#3b82f6' },
  { title: 'Food Truck', color: '#8b5cf6' },
  { title: 'CV Maker', color: '#06b6d4' },
  { title: 'Gym Website', color: '#ec4899' },
  { title: 'Weather Widget', color: '#f59e0b' },
  { title: 'Pizza Pie', color: '#10b981' },
]

export default function ProjectGallery3D() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return

    // Gentle rotation
    groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1
  })

  // Arrange projects in a circular layout
  const radius = 4
  const positions = projects.map((_, index) => {
    const angle = (index / projects.length) * Math.PI * 2
    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius
    return [x, 0, z] as [number, number, number]
  })

  return (
    <group ref={groupRef}>
      {projects.map((project, index) => (
        <ProjectCard3D
          key={project.title}
          position={positions[index]}
          title={project.title}
          color={project.color}
          onClick={() => setActiveProject(index)}
          isActive={activeProject === index}
        />
      ))}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </group>
  )
}
