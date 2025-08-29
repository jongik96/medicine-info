'use client'

import { useState } from 'react'
import SymptomInput from '../components/SymptomInput'
import MedicineResults from '../components/MedicineResults'
import Disclaimer from '../components/Disclaimer'
import Header from '../components/Header'
import { useLanguage } from '../contexts/LanguageContext'

export default function Home() {
  const [symptoms, setSymptoms] = useState('')
  const [results, setResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const { t } = useLanguage()

  const handleSearch = async (symptomText: string) => {
    setSymptoms(symptomText)
    setLoading(true)
    
    try {
      const response = await fetch('/api/search-medicines', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms: symptomText }),
      })
      
      if (response.ok) {
        const data = await response.json()
        setResults(data)
      } else {
        console.error('検索に失敗しました')
      }
    } catch (error) {
      console.error('エラーが発生しました:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            {t('main.title')}
          </h1>
          
          <p className="text-center text-gray-600 mb-8 text-lg">
            {t('main.subtitle')}
          </p>
          
          <SymptomInput onSearch={handleSearch} />
          
          {loading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-2 text-gray-600">{t('main.loading')}</p>
            </div>
          )}
          
          {results && <MedicineResults results={results} />}
          
          <Disclaimer />
        </div>
      </main>
    </div>
  )
}
