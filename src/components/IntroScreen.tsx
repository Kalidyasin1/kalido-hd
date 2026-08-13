import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'

export default function IntroScreen() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const played = sessionStorage.getItem('kalido_intro_v2_played') || sessionStorage.getItem('kalido_intro_played')
    if (!played) {
      setVisible(true)
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('kalido_intro_v2_played', '1')
          setVisible(false)
        }
      })
      tl.to({}, { duration: .6 })
      tl.to({}, { duration: .6 })
      tl.to({}, { duration: .8 })
      tl.to({}, { duration: .4 })
    }
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center text-white">
        <div className="text-6xl font-heading tracking-wider shimmer">KALIDO</div>
        <div className="mt-3 inline-flex items-center gap-2">
          <div className="bg-kalido-gold text-black px-2 py-1 rounded font-semibold">HD</div>
          <div className="text-sm opacity-80">Learn • Create • Earn</div>
        </div>
      </div>
    </div>
  )
}
