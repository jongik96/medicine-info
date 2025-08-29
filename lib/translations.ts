export const translations = {
  ja: {
    // 헤더
    header: {
      title: '医薬品情報',
      home: 'ホーム',
      contact: 'お問い合わせ',
      languageSwitch: 'English'
    },
    
    // 메인 페이지
    main: {
      title: '症状別医薬品情報検索',
      subtitle: 'お困りの症状を入力して、適切な医薬品カテゴリーを検索してください',
      searchButton: '検索する',
      commonSymptoms: 'よくある症状:',
      hideCommonSymptoms: 'よくある症状を隠す',
      showCommonSymptoms: 'よくある症状を見る',
      loading: '厚生労働省、日本OTC医薬品協会の公式承認医薬品を検索中です。',
      searchPlaceholder: '例: 頭痛がして、熱も少しあります'
    },
    
    // 증상 입력
    symptoms: {
      label: '症状を入力してください',
      disclaimer: '当サイトは症状に関連する医薬品の情報を提供するものであり、特定の医薬品を推奨または推奨するものではありません。'
    },
    
    // 자주 사용되는 증상
    commonSymptoms: [
      '頭痛', '発熱', '咳', '鼻水', '腹痛', '下痢', '便秘', '吐き気',
      'めまい', '疲労感', '不眠', 'アレルギー', '関節痛', '筋肉痛'
    ],
    
    // 검색 결과
    results: {
      generalAdvice: '症状に応じた医薬品カテゴリーをご案内します。',
      popularity: '人気度:',
      examples: '例:',
      warnings: '注意事項:',
      sources: '情報源:',
      officialApproval: '厚生労働省・日本OTC医薬品協会公式承認'
    },
    
    // 면책 고지
    disclaimer: {
      title: '重要なお知らせ',
      main: 'このウェブサイトは医師の診断を代替するものではありません。症状が重い場合や長期間続く場合は、必ず医療機関を受診してください。',
      info: '当サイトで提供される情報は、一般的な参考情報であり、個別の症状や体質に応じた具体的な治療法や薬の使用を推奨するものではありません。',
      usage: '薬の使用に関しては、必ず医師や薬剤師に相談し、添付文書をよく読んでから適切に使用してください。',
      emergency: '緊急時は以下の機関に連絡してください:',
      emergencyServices: [
        '救急車: 119',
        '救急相談センター: #7119',
        '厚生労働省 医薬・生活衛生局'
      ]
    }
  },
  
  en: {
    // Header
    header: {
      title: 'Medicine Information',
      home: 'Home',
      contact: 'Contact',
      languageSwitch: '日本語'
    },
    
    // Main page
    main: {
      title: 'Symptom-Based Medicine Information Search',
      subtitle: 'Enter your symptoms to search for appropriate medicine categories',
      searchButton: 'Search',
      commonSymptoms: 'Common Symptoms:',
      hideCommonSymptoms: 'Hide Common Symptoms',
      showCommonSymptoms: 'Show Common Symptoms',
      loading: 'Searching for officially approved medicines by the Ministry of Health, Labour and Welfare and Japan OTC Medicine Association.',
      searchPlaceholder: 'Example: I have a headache and slight fever'
    },
    
    // Symptom input
    symptoms: {
      label: 'Please enter your symptoms',
      disclaimer: 'This site provides information about medicines related to symptoms and does not recommend or suggest specific medicines.'
    },
    
    // Common symptoms
    commonSymptoms: [
      'Headache', 'Fever', 'Cough', 'Runny nose', 'Stomach pain', 'Diarrhea', 'Constipation', 'Nausea',
      'Dizziness', 'Fatigue', 'Insomnia', 'Allergy', 'Joint pain', 'Muscle pain'
    ],
    
    // Search results
    results: {
      generalAdvice: 'We will guide you to medicine categories appropriate for your symptoms.',
      popularity: 'Popularity:',
      examples: 'Examples:',
      warnings: 'Warnings:',
      sources: 'Sources:',
      officialApproval: 'Officially Approved by Ministry of Health, Labour and Welfare & Japan OTC Medicine Association'
    },
    
    // Disclaimer
    disclaimer: {
      title: 'Important Notice',
      main: 'This website does not replace a doctor\'s diagnosis. If symptoms are severe or persist for a long time, please visit a medical institution.',
      info: 'The information provided on this site is general reference information and does not recommend specific treatments or medicine usage for individual symptoms or constitution.',
      usage: 'For medicine usage, please consult with a doctor or pharmacist and read the package insert carefully before appropriate use.',
      emergency: 'In case of emergency, contact the following institutions:',
      emergencyServices: [
        'Ambulance: 119',
        'Emergency Consultation Center: #7119',
        'Ministry of Health, Labour and Welfare Pharmaceutical and Medical Safety Bureau'
      ]
    }
  }
}

export type Language = 'ja' | 'en'
export type TranslationKey = keyof typeof translations.ja
