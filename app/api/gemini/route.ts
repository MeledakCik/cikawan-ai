import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "API Key missing" }, { status: 500 });
    }
    const modelName = "gemini-2.5-flash"; 
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: `Kamu adalah pakar Python. Buatkan kode murni untuk: ${prompt}. TANPA PENJELASAN.` }]
          }
        ]
      })
    });

    const data = await response.json();

    if (data.error) {
      console.error("API ERROR:", data.error);
      return NextResponse.json({ error: data.error.message }, { status: data.error.code });
    }

    // Parsing teks (Struktur v1beta biasanya sama)
    const text = data.candidates[0].content.parts[0].text;
    const cleanCode = text.replace(/```python|```/g, "").trim();

    return NextResponse.json({ code: cleanCode });
  } catch (error: any) {
    console.error("DETEKSI ERROR:", error);
    return NextResponse.json({ error: "Gagal memproses AI" }, { status: 500 });
  }
}