'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function Disclaimer() {
  const { t } = useLanguage()

  return (
    <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-medium text-red-800 mb-2">
            {t('disclaimer.title')}
          </h3>
          <div className="text-sm text-red-700 space-y-2">
            <p>
              <strong>{t('disclaimer.main')}</strong>
            </p>
            <p>
              {t('disclaimer.info')}
            </p>
            <p>
              {t('disclaimer.usage')}
            </p>
          </div>
          
          <div className="mt-4 p-3 bg-white rounded border border-red-200">
            <h4 className="text-sm font-medium text-red-800 mb-2">{t('disclaimer.emergency')}</h4>
            <ul className="text-xs text-red-700 space-y-1">
              {t('disclaimer.emergencyServices').map((service, idx) => (
                <li key={idx}>• {service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
