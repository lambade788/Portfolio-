import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)

  const positions = useMemo(() => {
    const count = 2000
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.x = t * 0.02
      ref.current.rotation.y = t * 0.03
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

function LaptopShape() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const screenRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t * 0.4) * 0.4
      meshRef.current.position.y = Math.sin(t * 0.6) * 0.3
    }
  })

  return (
    <group ref={meshRef} position={[1.5, 0, 0]}>
      {/* Laptop base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.4, 0.12, 1.6]} />
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      {/* Laptop screen */}
      <mesh ref={screenRef} position={[0, 0.9, -0.7]} rotation={[-0.4, 0, 0]}>
        <boxGeometry args={[2.4, 1.6, 0.08]} />
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>
      {/* Screen display */}
      <mesh position={[0, 0.9, -0.65]} rotation={[-0.4, 0, 0]}>
        <boxGeometry args={[2.1, 1.3, 0.01]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.3}
          metalness={0}
          roughness={1}
        />
      </mesh>
      {/* Glow light from screen */}
      <pointLight position={[0, 0.9, -0.5]} intensity={1.5} color="#3b82f6" distance={4} />
    </group>
  )
}

function NetworkLines() {
  const linesRef = useRef<THREE.Group>(null!)

  const lines = useMemo(() => {
    const pts: [THREE.Vector3, THREE.Vector3][] = []
    const nodes = Array.from({ length: 12 }, () =>
      new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6
      )
    )
    nodes.forEach((a, i) => {
      nodes.forEach((b, j) => {
        if (i < j && a.distanceTo(b) < 5) {
          pts.push([a, b])
        }
      })
    })
    return pts
  }, [])

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group ref={linesRef}>
      {lines.map(([a, b], i) => {
        const points = [a, b]
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        const material = new THREE.LineBasicMaterial({ color: '#8b5cf6', transparent: true, opacity: 0.25 })
        const line = new THREE.Line(geometry, material)
        return <primitive key={i} object={line} />
      })}
    </group>
  )
}

const HeroCanvas: React.FC = () => {
  return (
    <div className="hero-canvas" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-5, 3, 2]} intensity={1} color="#8b5cf6" />
        <pointLight position={[3, -3, 4]} intensity={0.8} color="#06b6d4" />

        <ParticleField />
        <LaptopShape />
        <NetworkLines />
      </Canvas>
    </div>
  )
}

export default HeroCanvas
