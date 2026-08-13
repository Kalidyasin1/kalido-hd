import React, { useState } from 'react'

export default function CommunityPage(){
  const [comment, setComment] = useState('')
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl mb-4">Community</h1>
      <div className="mb-6">
        <iframe src="https://t.me/s/kalid1life" style={{width:'100%',height:350}}></iframe>
      </div>
      <div className="glass p-4 rounded">
        <textarea className="w-full p-2 bg-transparent border rounded mb-2" rows={4} value={comment} onChange={(e)=>setComment(e.target.value)} />
        <button className="cta-gold px-4 py-2 rounded">Submit</button>
      </div>
    </div>
  )
}
