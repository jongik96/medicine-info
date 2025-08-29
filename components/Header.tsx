'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'ja' ? 'en' : 'ja')
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-800">{t('header.title')}</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              {t('header.home')}
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              {t('header.categories')}
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              {t('header.contact')}
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* 언어 전환 버튼 */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 bg-primary text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
            >
              {t('header.languageSwitch')}
            </button>
            
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
