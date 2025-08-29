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
以下の症状に対して、適切な医薬品カテゴリーを教えてください。
直接的な薬の推奨は避け、カテゴリーベースの情報提供として回答してください。

症状: ${symptoms}

以下の形式で回答してください（JSON形式）:
{
  "categories": [
    {
      "name": "カテゴリー名",
      "description": "カテゴリーの説明",
      "popularity": 1-5の数値（人気度）,
      "examples": ["例1", "例2"],
      "warnings": ["注意事項1", "注意事項2"],
      "sources": ["厚生労働省", "日本OTC医薬品協会"]
    }
  ],
  "generalAdvice": "一般的なアドバイス",
  "disclaimer": "免責事項"
}

重要: 直接的な薬の推奨は避け、カテゴリーベースの情報提供に留めてください。
`

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "あなたは日本の医薬品に詳しい医療情報専門家です。症状に応じた医薬品カテゴリーの情報を提供しますが、直接的な薬の推奨は避け、カテゴリーベースの情報提供に留めます。"
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
            name: "一般的な対症療法",
            description: "症状を緩和するための一般的な医薬品カテゴリーです。",
            popularity: 4,
            examples: ["解熱鎮痛剤", "抗炎症剤"],
            warnings: ["長期使用は避けてください", "医師に相談してください"],
            sources: ["厚生労働省", "日本OTC医薬品協会"]
          }
        ],
        generalAdvice: "症状が重い場合は必ず医療機関を受診してください。",
        disclaimer: "この情報は参考情報であり、医師の診断を代替するものではありません。"
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
