import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Chatbot(){
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{role:'user'|'bot'; text:string}[]>([
    {role:'bot', text: 'Hello! Ask me about prices, repairs, jobs or AI tools.'}
  ])
  const [input, setInput] = useState('')
  const { t } = useTranslation()

  function send() {
    if (!input.trim()) return
    const user = { role: 'user' as const, text: input }
    setMessages(m => [...m, user])
    const q = input.toLowerCase()
    let reply = "I can help with repairs, prices, jobs, AI tools and contact info."
    if (q.includes('screen')) reply = "Screen replacement: from 800+. Which model?"
    if (q.includes('battery')) reply = "Battery replacement: from 400+. Provide model."
    if (q.includes('telegram')) reply = "Our Telegram: https://t.me/kalid1life"
    if (q.includes('ai')) reply = "AI tools: Pika Labs, Runway, Gemini — check our tools list."
    setTimeout(() => setMessages(m => [...m, {role:'bot', text: reply}]), 350)
    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="w-80 bg-kalido-surface p-3 rounded-lg glass shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold">KALIDO AI</div>
            <div className="text-xs text-white/60">contextual</div>
          </div>
          <div className="h-40 overflow-y-auto mb-2 space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={`text-sm p-2 rounded ${m.role === 'bot' ? 'bg-white/3 text-white/90' : 'bg-kalido-gold text-black'}`}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input className="flex-1 bg-transparent border rounded px-2 py-1" value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=>e.key==='Enter' && send()} />
            <button className="cta-gold px-3 rounded" onClick={send}>{t('send') || 'Send'}</button>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(v => !v)} className="w-14 h-14 rounded-full bg-gradient-to-r from-kalido-gold to-kalido-gold-light text-black font-bold shadow-xl">
        AI
      </button>
    </div>
  )
}
