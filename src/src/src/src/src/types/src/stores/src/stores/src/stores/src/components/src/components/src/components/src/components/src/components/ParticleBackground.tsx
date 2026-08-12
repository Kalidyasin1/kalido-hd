import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = canvasRef.current
    if (!el) return
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 50

    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    el.appendChild(renderer.domElement)

    const particlesCount = Math.round(window.innerWidth > 1400 ? 85 : window.innerWidth > 800 ? 50 : 28)
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i++) positions[i] = (Math.random() - 0.5) * 200
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({ color: 0xd4a853, size: 1.8, transparent: true, opacity: 0.9 })
    const points = new THREE.Points(geometry, material)
    scene.add(points)

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    let frame = 0
    let raf = 0
    const animate = () => {
      frame += 0.01
      points.rotation.y += 0.0015
      points.rotation.x = Math.sin(frame) * 0.02
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      if (renderer.domElement && el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10" />
  )
}
