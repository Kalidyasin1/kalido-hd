import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      "brand": "KALIDO HD",
      "slogan": "Learn • Create • Earn",
      "home": "Home",
      "portfolio": "Portfolio",
      "gallery": "Gallery",
      "jobs": "Jobs",
      "blog": "Blog",
      "learning": "Learning",
      "services": "Services",
      "community": "Community",
      "contact": "Contact",
      "social": "Social",
      "mobile-repair": "Mobile Repair"
    }
  },
  am: {
    translation: {
      "brand": "KALIDO HD",
      "slogan": "ይማሩ • ፈጥሩ • ይገኙ",
      "home": "መነሻ",
      "portfolio": "ፖርትፎሊዮ",
      "gallery": "ጋለሪ",
      "jobs": "ስራዎች",
      "blog": "ብሎግ",
      "learning": "ትምህርት",
      "services": "አገልግሎቶች",
      "community": "ማህበረሰብ",
      "contact": "አገናኝ"
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})

export default i18n
