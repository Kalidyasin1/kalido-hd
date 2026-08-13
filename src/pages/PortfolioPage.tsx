import React from 'react'
import type { PortfolioItem } from '../types'

const sample: PortfolioItem[] = [
  { id: 'p1', title: 'Project 1', description: 'Desc', tags: ['repair'], image: '/images/gallery/sample1.jpg', category: 'Mobile Repair' },
  { id: 'p2', title: 'Project 2', description: 'Desc', tags: ['tech'], image: '/images/gallery/sample2.jpg', category: 'Technology' }
]

export default function PortfolioPage(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl mb-4">Portfolio</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {sample.map(p => (
          <div key={p.id} className="glass p-4 rounded">
            <img src={p.image} alt={p.title} className="mb-3 rounded" />
            <div className="font-semibold">{p.title}</div>
            <div className="text-sm text-text-muted">{p.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
