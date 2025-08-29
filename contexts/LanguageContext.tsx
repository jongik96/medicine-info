'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language, translations } from '../lib/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  commonSymptoms: string[]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ja')

  useEffect(() => {
    // 브라우저 언어 설정 확인
    const browserLang = navigator.language
    if (browserLang.startsWith('en')) {
      setLanguage('en')
    }
  }, [])

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // 번역 키를 찾을 수 없는 경우 원본 반환
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  const commonSymptoms = translations[language].commonSymptoms

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, commonSymptoms }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
