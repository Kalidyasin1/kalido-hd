import React from 'react'
import Header from './Header'
import Footer from './Footer'
import FloatingSocialBar from './FloatingSocialBar'
import Chatbot from './Chatbot'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen relative text-white" style={{ background: 'var(--bg-primary)' }}>
      <Header />
      <FloatingSocialBar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default Layout
