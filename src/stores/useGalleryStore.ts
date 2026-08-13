import create from 'zustand'
import type { PortfolioItem } from '../types'

const seedFlag = 'kalido-gallery-seeded'
const imagesKey = 'kalido-gallery-images'
const categoriesKey = 'kalido-gallery-categories'

const defaultCategories = ['Technology', 'Mobile Repair', 'Content Creation', 'Social Media', 'Events', 'Behind the Scenes']

function ensureSeed() {
  if (!localStorage.getItem(seedFlag)) {
    const sample: PortfolioItem[] = [
      { id: 'g1', title: 'Workshop', description: 'Tech workshop', tags: ['tech'], image: '/images/gallery/sample1.jpg', category: 'Technology' },
      { id: 'g2', title: 'Repair', description: 'Phone repair', tags: ['repair'], image: '/images/gallery/sample2.jpg', category: 'Mobile Repair' },
      { id: 'g3', title: 'Content', description: 'Content creation', tags: ['video'], image: '/images/gallery/sample3.jpg', category: 'Content Creation' }
    ]
    localStorage.setItem(imagesKey, JSON.stringify(sample))
    localStorage.setItem(categoriesKey, JSON.stringify(defaultCategories))
    localStorage.setItem(seedFlag, '1')
  }
}

ensureSeed()

export const useGalleryStore = create<{
  images: PortfolioItem[]
  categories: string[]
  addImage: (it: PortfolioItem) => void
}>((set) => ({
  images: JSON.parse(localStorage.getItem(imagesKey) || '[]'),
  categories: JSON.parse(localStorage.getItem(categoriesKey) || '[]'),
  addImage: (it) => {
    const curr = JSON.parse(localStorage.getItem(imagesKey) || '[]')
    curr.unshift(it)
    localStorage.setItem(imagesKey, JSON.stringify(curr))
    set({ images: curr })
  }
}))
