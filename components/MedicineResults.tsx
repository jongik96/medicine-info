interface MedicineResultsProps {
  results: {
    categories: Array<{
      name: string
      description: string
      popularity: number
      examples: string[]
      warnings: string[]
      sources: string[]
    }>
    generalAdvice: string
    disclaimer: string
  }
}

export default function MedicineResults({ results }: MedicineResultsProps) {
  const sortedCategories = [...results.categories].sort((a, b) => b.popularity - a.popularity)

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              {results.generalAdvice}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {sortedCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {category.name}
              </h3>
              <div className="flex items-center space-x-1">
                <span className="text-sm text-gray-500">人気度:</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < category.popularity ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-4">{category.description}</p>

            {category.examples.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">例:</h4>
                <div className="flex flex-wrap gap-2">
                  {category.examples.map((example, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {category.warnings.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-red-700 mb-2">注意事項:</h4>
                <ul className="space-y-1">
                  {category.warnings.map((warning, idx) => (
                    <li key={idx} className="text-sm text-red-600 flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {warning}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {category.sources.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">情報源:</h4>
                <div className="space-y-1">
                  {category.sources.map((source, idx) => (
                    <p key={idx} className="text-xs text-gray-500">
                      {source}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
