import React from 'react'
import { motion } from 'framer-motion'

export default function HomePage(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <section className="min-h-[60vh] flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-5xl font-heading gradient-text">KALIDO <span className="text-kalido-gold">HD</span></h1>
            <p className="mt-4 text-lg text-text-secondary">Learn • Create • Earn — Halid Yasin</p>
            <div className="mt-6 flex gap-3">
              <button className="cta-gold px-4 py-2 rounded">Get Started</button>
              <button className="glass-btn">Explore</button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="glass p-4 rounded">
                <div className="font-bold">10K+</div>
                <div className="text-sm">Followers</div>
              </div>
              <div className="glass p-4 rounded">
                <div className="font-bold">100+</div>
                <div className="text-sm">Projects</div>
              </div>
            </div>
          </div>
          <div className="h-72 bg-gradient-to-br from-black/30 to-white/5 rounded flex items-center justify-center">
            <video src="/videos/kalido-hd.mp4" className="max-h-full" controls />
          </div>
        </div>
      </section>

      <motion.section initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:.6}} className="grid md:grid-cols-4 gap-4">
        {[...Array(8)].map((_,i)=>(
          <div key={i} className="glass p-6 rounded">
            <div className="font-semibold">Feature {i+1}</div>
            <div className="text-sm text-text-muted mt-2">Short description</div>
          </div>
        ))}
      </motion.section>

      <section>
        <h2 className="font-heading text-2xl mb-4">Featured Gallery</h2>
        <div className="grid grid-cols-3 gap-3">
          <img src="/images/gallery/sample1.jpg" alt="" />
          <img src="/images/gallery/sample2.jpg" alt="" />
          <img src="/images/gallery/sample3.jpg" alt="" />
        </div>
      </section>

    </div>
  )
}
