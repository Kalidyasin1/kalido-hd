import React, { useEffect } from 'react'
import { useAuthStore } from '../../stores/useAuthStore'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard(){
  const user = useAuthStore(state=>state.user)
  const logout = useAuthStore(state=>state.logout)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate('/admin/login')
  }, [user])

  return (
    <div className="min-h-screen bg-kalido-surface p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-heading text-2xl">Admin Dashboard</h1>
          <div>
            <button className="glass-btn mr-2" onClick={() => navigate('/')}>View Site</button>
            <button className="glass-btn" onClick={() => { logout(); navigate('/') }}>Logout</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass p-4 rounded">Visitors: 12,345</div>
          <div className="glass p-4 rounded">Pageviews: 43,210</div>
          <div className="glass p-4 rounded">Comments: 32</div>
        </div>

      </div>
    </div>
  )
}
