export default function Disclaimer() {
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
            重要なお知らせ
          </h3>
          <div className="text-sm text-red-700 space-y-2">
            <p>
              <strong>このウェブサイトは医師の診断を代替するものではありません。</strong>
              症状が重い場合や長期間続く場合は、必ず医療機関を受診してください。
            </p>
            <p>
              当サイトで提供される情報は、一般的な参考情報であり、個別の症状や体質に応じた
              具体的な治療法や薬の使用を推奨するものではありません。
            </p>
            <p>
              薬の使用に関しては、必ず医師や薬剤師に相談し、添付文書をよく読んでから
              適切に使用してください。
            </p>
          </div>
          
          <div className="mt-4 p-3 bg-white rounded border border-red-200">
            <h4 className="text-sm font-medium text-red-800 mb-2">緊急時は以下の機関に連絡してください:</h4>
            <ul className="text-xs text-red-700 space-y-1">
              <li>• 救急車: 119</li>
              <li>• 救急相談センター: #7119</li>
              <li>• 厚生労働省 医薬・生活衛生局</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
