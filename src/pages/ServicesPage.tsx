import React from 'react'

export default function ServicesPage(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl mb-4">Services</h1>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="glass p-4 rounded border-2 border-kalido-gold">
          <div className="font-semibold">Mobile Repair</div>
          <div className="text-sm text-text-muted mt-2">Screen, battery, water damage</div>
        </div>
        <div className="glass p-4 rounded">
          <div className="font-semibold">Online Jobs</div>
        </div>
        <div className="glass p-4 rounded">
          <div className="font-semibold">Tech & AI</div>
        </div>
        <div className="glass p-4 rounded">
          <div className="font-semibold">Content Creation</div>
        </div>
      </div>
    </div>
  )
}
