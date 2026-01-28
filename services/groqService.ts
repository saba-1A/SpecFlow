// services/groqService.ts

export interface SpecResult {
  title: string;
  summary: string;
  userStories: string[];
  acceptanceCriteria: string[];
  technicalNotes: string;
}

export const generateSpecFromIdea = async (idea: string, imageDataUrl?: string): Promise<SpecResult> => {
  // Note: We use import.meta.env.VITE_... for Vite projects
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  if (!apiKey) {
    console.error("Missing API Key");
    throw new Error("Groq API Key is missing in .env.local");
  }

  // Use Vision model if image is present, otherwise Versatile model
  const model = imageDataUrl ? "llama-3.2-11b-vision-preview" : "llama-3.3-70b-versatile";

  const messages: any[] = [
    {
      role: "system",
      content: `You are an expert Product Manager. 
      Return ONLY valid JSON. 
      Do not use markdown blocks (no \`\`\`json).
      The JSON must match this structure:
      {
        "title": "string",
        "summary": "string",
        "userStories": ["string"],
        "acceptanceCriteria": ["string"],
        "technicalNotes": "string"
      }`
    }
  ];

  if (imageDataUrl) {
    messages.push({
      role: "user",
      content: [
        { type: "text", text: `Create a technical spec for: ${idea}` },
        { type: "image_url", image_url: { url: imageDataUrl } }
      ]
    });
  } else {
    messages.push({
      role: "user",
      content: `Create a technical spec JSON for: ${idea}`
    });
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model,
        messages: messages,
        temperature: 0.2,
        max_completion_tokens: 2000,
        response_format: { type: "json_object" } // Forces JSON to prevent crashes
      })
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(`Groq API Error: ${err.error?.message || response.statusText}`);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content || "{}";
    return JSON.parse(content);
    
  } catch (error) {
    console.error("Error in generation:", error);
    throw error;
  }
};