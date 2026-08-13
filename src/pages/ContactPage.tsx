import React, { useState } from 'react'

export default function ContactPage(){
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Submitted — you can wire up Telegram deep link or server here.')
  }
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl mb-4">Contact</h1>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="glass p-4 rounded">
          <div className="font-semibold">Telegram</div>
          <a href="https://t.me/kalid1life" className="text-kalido-gold mt-2 block">t.me/kalid1life</a>
        </div>
        <div className="glass p-4 rounded">
          <div className="font-semibold">Phone</div>
          <a href="tel:+251994441442" className="mt-2 block">+251 994 441 442</a>
        </div>
        <div className="glass p-4 rounded">
          <div className="font-semibold">TikTok</div>
          <a href="https://www.tiktok.com/@halid.yasin6" className="mt-2 block">@halid.yasin6</a>
        </div>
      </div>

      <form onSubmit={onSubmit} className="glass p-6 rounded">
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="p-2 bg-transparent border rounded" />
          <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone" className="p-2 bg-transparent border rounded" />
        </div>
        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={5} className="w-full p-2 bg-transparent border rounded mb-4" placeholder="Message" />
        <button className="cta-gold px-4 py-2 rounded">Send</button>
      </form>
    </div>
  )
}
