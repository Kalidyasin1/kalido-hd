import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LanguageToggle(){
  const { i18n } = useTranslation()
  return (
    <div className="flex items-center gap-2">
      <button className="glass-btn" onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'am' : 'en')}>
        {i18n.language === 'en' ? 'EN' : 'AM'}
      </button>
    </div>
  )
}
