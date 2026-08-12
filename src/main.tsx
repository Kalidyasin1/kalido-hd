import React, { Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import IntroScreen from './components/IntroScreen'
import ParticleBackground from './components/ParticleBackground'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import GalleryPage from './pages/GalleryPage'
import JobsPage from './pages/JobsPage'
import BlogPage from './pages/BlogPage'
import LearningCenterPage from './pages/LearningCenterPage'
import ServicesPage from './pages/ServicesPage'
import CommunityPage from './pages/CommunityPage'
import ContactPage from './pages/ContactPage'
import SocialMediaPage from './pages/SocialMediaPage'
import MobileRepairPage from './pages/MobileRepairPage'
import AdminLoginPage from './pages/admin/AdminLoginPage'
import AdminDashboard from './pages/admin/AdminDashboard'

function App() {
  useEffect(() => {
    const t = localStorage.getItem('kalido-theme') || 'black-gold'
    if (t) document.body.setAttribute('data-theme', t === 'black-gold' ? '' : t === 'light' ? 'light' : t.replace('-', ''))
  }, [])

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading…</div>}>
      <IntroScreen />
      <ParticleBackground />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/learning" element={<LearningCenterPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/social" element={<SocialMediaPage />} />
          <Route path="/mobile-repair" element={<MobileRepairPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Suspense>
  )
}

export default App
