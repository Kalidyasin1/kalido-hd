import React from 'react'

export default function SocialMediaPage(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl mb-4">Social Media</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="glass p-4 rounded">TikTok Overview</div>
        <div className="glass p-4 rounded">Telegram Channels</div>
        <div className="glass p-4 rounded">Instagram</div>
      </div>
    </div>
  )
}
