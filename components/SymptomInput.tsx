'use client'

import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface SymptomInputProps {
  onSearch: (symptoms: string) => void
}

export default function SymptomInput({ onSearch }: SymptomInputProps) {
  const [symptoms, setSymptoms] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const { t, commonSymptoms } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (symptoms.trim()) {
      onSearch(symptoms.trim())
    }
  }

  const handleSymptomClick = (symptom: string) => {
    setSymptoms(symptom)
    onSearch(symptom)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      {/* 면책 고지 문구 추가 */}
      <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700 font-medium">
              {t('symptoms.disclaimer')}
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-2">
            {t('symptoms.label')}
          </label>
          <textarea
            id="symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder={t('main.searchPlaceholder')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
            rows={3}
            required
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            {t('main.searchButton')}
          </button>
          
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
          >
            {isExpanded ? t('main.hideCommonSymptoms') : t('main.showCommonSymptoms')}
          </button>
        </div>
      </form>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-700 mb-3">{t('main.commonSymptoms')}</h3>
          <div className="flex flex-wrap gap-2">
            {commonSymptoms.map((symptom) => (
              <button
                key={symptom}
                onClick={() => handleSymptomClick(symptom)}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                {symptom}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
