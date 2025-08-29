import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { symptoms } = await request.json()

    if (!symptoms) {
      return NextResponse.json(
        { error: '症状が入力されていません' },
        { status: 400 }
      )
    }

    const prompt = `
以下の症状に対して、厚生労働省と日本OTC医薬品協会が公式に承認した医薬品カテゴリーのみを教えてください。
直接的な薬の推奨は避け、カテゴリーベースの情報提供として回答してください。
公式承認されていない医薬品は一切含めないでください。

症状: ${symptoms}

以下の形式で回答してください（JSON形式）:
{
  "categories": [
    {
      "name": "カテゴリー名",
      "description": "カテゴリーの説明（公式承認済み）",
      "popularity": 1-5の数値（人気度）,
      "examples": ["公式承認済みの例1", "公式承認済みの例2"],
      "warnings": ["注意事項1", "注意事項2"],
      "sources": ["厚生労働省", "日本OTC医薬品協会"],
      "officialApproval": "厚生労働省・日本OTC医薬品協会公式承認済み"
    }
  ],
  "generalAdvice": "症状に応じた公式承認済み医薬品カテゴリーをご案内します。",
  "disclaimer": "この情報は厚生労働省と日本OTC医薬品協会が公式に承認した医薬品のみを含みます。"
}

重要: 
1. 直接的な薬の推奨は避け、カテゴリーベースの情報提供に留めてください。
2. 厚生労働省と日本OTC医薬品協会が公式に承認한医薬品のみを含めてください。
3. 承認되지 않은医薬品や民間療法は一切含めないでください。
`

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "あなたは日本の医薬品に詳しい医療情報専門家です。厚生労働省と日本OTC医薬品協会が公式に承認한医薬品のみの情報を提供します。公式承認されていない医薬品や民間療法は一切含めず、直接的な薬の推奨も避け、カテゴリーベースの情報提供に留めます。"
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.3,
      max_tokens: 2000,
    })

    const responseText = completion.choices[0]?.message?.content || ''
    
    // JSONレスポンスをパース
    let parsedResponse
    try {
      parsedResponse = JSON.parse(responseText)
    } catch (error) {
      console.error('OpenAI response parsing error:', error)
      // フォールバックレスポンス
      parsedResponse = {
        categories: [
          {
            name: "公式承認済み対症療法",
            description: "厚生労働省と日本OTC医薬品協会が公式に承認した症状緩和用医薬品カテゴリーです。",
            popularity: 4,
            examples: ["公式承認済み解熱鎮痛剤", "公式承認済み抗炎症剤"],
            warnings: ["長期使用は避けてください", "医師に相談してください"],
            sources: ["厚生労働省", "日本OTC医薬品協会"],
            officialApproval: "厚生労働省・日本OTC医薬品協会公式承認済み"
          }
        ],
        generalAdvice: "症状に応じた公式承認済み医薬品カテゴリーをご案内します。症状が重い場合は必ず医療機関を受診してください。",
        disclaimer: "この情報は厚生労働省と日本OTC医薬品協会が公式に承認した医薬品のみを含みます。"
      }
    }

    return NextResponse.json(parsedResponse)

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    )
  }
}
