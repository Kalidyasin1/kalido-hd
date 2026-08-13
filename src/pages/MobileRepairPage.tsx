import React, { useState } from 'react'

export default function MobileRepairPage(){
  const [brand, setBrand] = useState('Samsung')
  const [model, setModel] = useState('A12')
  const [type, setType] = useState('Screen')
  const price = type==='Screen' ? 800 : type==='Battery' ? 400 : 200
  const onSubmit = () => {
    const telegram = `https://t.me/familymobail?text=Order%20-${brand}%20${model}%20${type}%20Price%20${price}`
    window.open(telegram, '_blank')
  }
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl mb-4">Mobile Repair</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass p-4 rounded">
          <div className="mb-2">Brand</div>
          <select className="w-full p-2 mb-2" value={brand} onChange={(e)=>setBrand(e.target.value)}>
            <option>Samsung</option>
            <option>Apple</option>
            <option>Huawei</option>
          </select>
          <div className="mb-2">Model</div>
          <input className="w-full p-2 mb-2" value={model} onChange={(e)=>setModel(e.target.value)} />
          <div className="mb-2">Repair type</div>
          <select className="w-full p-2 mb-2" value={type} onChange={(e)=>setType(e.target.value)}>
            <option>Screen</option>
            <option>Battery</option>
            <option>Software</option>
          </select>
          <div className="mt-3">Price: <strong>{price} ETB</strong></div>
          <button className="cta-gold mt-4 px-4 py-2 rounded" onClick={onSubmit}>Order via Telegram</button>
        </div>
        <div className="glass p-4 rounded">
          <h3 className="font-semibold mb-2">Why choose us?</h3>
          <ul className="text-sm text-text-muted">
            <li>Genuine parts</li>
            <li>Expert technicians</li>
            <li>Fast turnaround</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
