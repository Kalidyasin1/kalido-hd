import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ThemeSwitcher from './ThemeSwitcher'
import LanguageToggle from './LanguageToggle'

const links = [
  ['/', 'home'],
  ['/portfolio', 'portfolio'],
  ['/gallery', 'gallery'],
  ['/jobs', 'jobs'],
  ['/blog', 'blog'],
  ['/learning', 'learning'],
  ['/services', 'services'],
  ['/community', 'community'],
  ['/contact', 'contact'],
  ['/social', 'social']
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { t } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-40 transition-all ${scrolled ? 'backdrop-blur-lg glass border-b' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
          <div className="text-2xl font-heading tracking-wide text-kalido-gold">KALIDO</div>
          <div className="hidden sm:block text-sm text-kalido-gold-light">HD</div>
        </div>

        <nav className="hidden lg:flex gap-4 items-center text-sm">
          {links.map(([to, key]) => (
            <NavLink key={to} to={to} className={({isActive}) => `px-3 py-2 rounded ${isActive ? 'text-kalido-gold' : 'text-white/80'}`}>
              {t(key)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block"><LanguageToggle /></div>
          <div className="hidden md:block"><ThemeSwitcher /></div>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function MobileMenu() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  return (
    <>
      <button onClick={() => setOpen(true)} className="lg:hidden p-2 rounded glass-btn">Menu</button>
      {open && (
        <div className="fixed inset-0 bg-black/60 z-50">
          <div className="bg-kalido-surface w-80 h-full p-6 glass">
            <button onClick={() => setOpen(false)} className="mb-6">Close</button>
            <nav className="flex flex-col gap-3">
              {['home','portfolio','gallery','jobs','blog','learning','services','community','contact','social'].map(k => (
                <a key={k} href={`/${k === 'home' ? '' : k}`} onClick={() => setOpen(false)} className="py-2">{t(k)}</a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
