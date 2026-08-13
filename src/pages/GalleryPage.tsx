import React, { useState } from 'react'
import { useGalleryStore } from '../stores/useGalleryStore'

export default function GalleryPage(){
  const { images, categories } = useGalleryStore()
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('All')
  const [masonry, setMasonry] = useState(false)
  const filtered = images.filter(i => (cat === 'All' || i.category === cat) && (i.title.toLowerCase().includes(query.toLowerCase()) || i.description.toLowerCase().includes(query.toLowerCase())))
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-6">
        <h1 className="font-heading text-3xl">Gallery</h1>
        <p className="text-text-muted">Search and explore</p>
      </header>

      <div className="flex gap-3 mb-6">
        <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search images..." className="flex-1 p-2 bg-transparent border rounded border-white/6" />
        <select value={cat} onChange={(e)=>setCat(e.target.value)} className="p-2 bg-transparent border rounded border-white/6">
          <option>All</option>
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>
        <button onClick={()=>setMasonry(s=>!s)} className="glass-btn">{masonry ? 'Masonry' : 'Grid'}</button>
      </div>

      <div className={masonry ? 'columns-3 gap-3' : 'grid grid-cols-3 gap-3'}>
        {filtered.map(img => (
          <div key={img.id} className="mb-3">
            <img src={img.image} alt={img.title} className="w-full rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}
