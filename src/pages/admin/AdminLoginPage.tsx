import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../stores/useAuthStore'

export default function AdminLoginPage(){
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [err, setErr] = useState('')
  const login = useAuthStore(state=>state.login)
  const navigate = useNavigate()

  async function onLogin(e: React.FormEvent) {
    e.preventDefault()
    const ok = await login(user, pass)
    if (ok) navigate('/admin/dashboard')
    else setErr('Invalid credentials')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={onLogin} className="w-full max-w-md glass p-6 rounded">
        <h2 className="text-2xl font-heading mb-4">Admin Login</h2>
        <input className="w-full p-2 mb-3 bg-transparent border rounded" placeholder="Username" value={user} onChange={(e)=>setUser(e.target.value)} />
        <input className="w-full p-2 mb-3 bg-transparent border rounded" placeholder="Password" type="password" value={pass} onChange={(e)=>setPass(e.target.value)} />
        {err && <div className="text-sm text-red-400 mb-2">{err}</div>}
        <button className="cta-gold w-full py-2 rounded">Login</button>
      </form>
    </div>
  )
}
