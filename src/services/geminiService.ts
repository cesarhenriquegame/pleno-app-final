import { GoogleGenAI } from "@google/genai";
import { Devotional } from "../types";

// Inicializa o cliente Gemini usando a variável de ambiente injetada pelo Vite
// Nota: No Vite/React, usamos process.env.API_KEY que foi definido no vite.config.ts
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDailyDevotional = async (): Promise<Devotional> => {
  try {
    const today = new Date().toLocaleDateString('pt-BR');
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Gere um devocional cristão curto e inspirador para hoje (${today}). 
      Retorne APENAS um JSON válido com a seguinte estrutura:
      {
        "verse": "O texto do versículo",
        "reference": "A referência bíblica (Livro Cap:Ver)",
        "message": "Uma mensagem curta e edificante de 2 parágrafos",
        "prayer": "Uma oração curta final"
      }
      Não use markdown code blocks, apenas o JSON puro string.`,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const text = response.text;
    if (!text) throw new Error("No content generated");
    
    return JSON.parse(text) as Devotional;
  } catch (error) {
    console.error("Error fetching devotional:", error);
    // Fallback em caso de erro (ex: falta de chave API ou erro de rede)
    return {
      verse: "O Senhor é o meu pastor, nada me faltará.",
      reference: "Salmos 23:1",
      message: "Mesmo quando a tecnologia falha, a palavra de Deus permanece fiel. Confie nEle em todos os momentos, pois Ele cuida de vós.",
      prayer: "Senhor, obrigado por estar sempre conosco e ser nossa provisão. Amém."
    };
  }
};