import React, { useState } from 'react'
import { useThemeStore } from '../stores/useThemeStore'

const themes = [
  {id: 'black-gold', label: 'Black & Gold'},
  {id: 'dark-blue', label: 'Dark Blue'},
  {id: 'purple', label: 'Purple'},
  {id: 'green', label: 'Green'},
  {id: 'red', label: 'Red'},
  {id: 'light', label: 'Light'}
] as const

export default function ThemeSwitcher(){
  const { id, setTheme } = useThemeStore()
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button onClick={() => setOpen(v => !v)} className="glass-btn">Theme</button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 p-3 glass rounded">
          <div className="grid grid-cols-2 gap-2">
            {themes.map(t => (
              <button key={t.id} onClick={() => { setTheme(t.id as any); setOpen(false) }} className={`p-2 rounded border ${id===t.id ? 'border-kalido-gold' : 'border-white/6'}`}>
                {t.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
