import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Line } from '@react-three/drei'
import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'

const podPoints = [
  [-3.8, 1.7, -1], [-2.8, -1.8, 0], [-1.7, 3.1, -2],
  [1.8, 2.8, -1], [3.6, 1.2, -1], [3, -2.1, 0],
  [0.8, -3.2, -1], [-0.8, -2.9, -2],
] as [number, number, number][]

function Pods() {
  const group = useRef<THREE.Group>(null)
  useFrame(({ pointer, clock }) => {
    if (!group.current) return
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.12, 0.035)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.08, 0.035)
    group.current.position.y = Math.sin(clock.elapsedTime * 0.18) * 0.08
  })

  return (
    <group ref={group}>
      {podPoints.map((point, i) => (
        <Float key={i} speed={1 + i * 0.08} floatIntensity={0.22} rotationIntensity={0.12}>
          <mesh position={point}>
            <boxGeometry args={[i % 3 === 0 ? 0.48 : 0.38, i % 3 === 0 ? 0.48 : 0.38, i % 3 === 0 ? 0.48 : 0.38]} />
            <meshStandardMaterial color="#161718" roughness={0.35} metalness={0.7} />
          </mesh>
        </Float>
      ))}
      {podPoints.map((point, i) => (
        i < podPoints.length - 1 &&
        <Line key={`line-${i}`} points={[point, podPoints[i + 1]]} color="#d9825b" lineWidth={0.45} transparent opacity={0.26} />
      ))}
      <Line points={[[0, 0, 0], ...podPoints]} color="#d9825b" lineWidth={0.45} transparent opacity={0.18} />
      <mesh>
        <icosahedronGeometry args={[0.82, 1]} />
        <meshStandardMaterial color="#d9825b" wireframe roughness={0.2} />
      </mesh>
      {Array.from({ length: 5 }).map((_, i) => (
        <Packet key={i} delay={i * 0.72} />
      ))}
    </group>
  )
}

function Packet({ delay }: { delay: number }) {
  const mesh = useRef<THREE.Mesh>(null)
  const route = useMemo(() => podPoints, [])
  useFrame(({ clock }) => {
    if (!mesh.current) return
    const t = ((clock.elapsedTime * 0.11 + delay) % 1)
    const start = route[Math.floor(t * route.length) % route.length]
    const end = route[(Math.floor(t * route.length) + 1) % route.length]
    const local = (t * route.length) % 1
    mesh.current.position.set(
      THREE.MathUtils.lerp(start[0], end[0], local),
      THREE.MathUtils.lerp(start[1], end[1], local),
      THREE.MathUtils.lerp(start[2], end[2], local),
    )
  })
  return <mesh ref={mesh}><sphereGeometry args={[0.035, 8, 8]} /><meshBasicMaterial color="#d9825b" /></mesh>
}

export default function ClusterScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => gl.setClearColor('#11100f', 0)}
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[4, 4, 5]} color="#d9825b" intensity={6} />
      <pointLight position={[-4, -3, 4]} color="#ffffff" intensity={4} />
      <Suspense fallback={null}><Pods /></Suspense>
    </Canvas>
  )
}
