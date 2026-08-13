import React, { useState } from 'react'

export default function FloatingSocialBar(){
  const [open, setOpen] = useState(true)
  return (
    <div className="hidden lg:flex fixed left-6 top-1/3 z-40">
      <div className="flex flex-col gap-2 items-center">
        <button onClick={() => setOpen(v => !v)} className="glass p-2 rounded-full">≡</button>
        {open && (
          <>
            <a className="glass p-2 rounded" href="https://www.tiktok.com/@ethc1212" target="_blank" rel="noreferrer">TT</a>
            <a className="glass p-2 rounded" href="https://t.me/kalid1life" target="_blank" rel="noreferrer">TG</a>
            <a className="glass p-2 rounded" href="https://www.instagram.com/kalid1life" target="_blank" rel="noreferrer">IG</a>
          </>
        )}
      </div>
    </div>
  )
}
