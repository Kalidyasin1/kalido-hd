import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 border-t border-white/6 bg-gradient-to-t from-transparent to-black/20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="text-2xl font-heading text-kalido-gold">KALIDO HD</div>
          <p className="text-sm text-text-muted mt-2">Learn • Create • Earn — Halid Yasin</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-text-secondary">
            <li>Portfolio</li>
            <li>Gallery</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Social</h4>
          <div className="flex gap-3">
            <a href="https://www.tiktok.com/@ethc1212" target="_blank" rel="noreferrer">TikTok</a>
            <a href="https://t.me/kalid1life" target="_blank" rel="noreferrer">Telegram</a>
            <a href="https://www.instagram.com/kalid1life" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Newsletter</h4>
          <form className="flex gap-2">
            <input className="flex-1 p-2 bg-transparent border rounded border-white/6" placeholder="Your email" />
            <button className="px-3 cta-gold rounded">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center py-4 text-sm text-white/50">© {new Date().getFullYear()} KALIDO HD</div>
    </footer>
  )
}
