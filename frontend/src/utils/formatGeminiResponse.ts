export const formatGeminiResponse = async (response: string): Promise<string> => {
  try {
    const sections = response.split('\n')
      .filter(line => line.trim() !== '')
      .filter(line => !line.match(/^\d+\./)) 
      .map(line => line.replace(/^[A-Za-z\s]+:/, '').trim()) 
      .filter(line => line.length > 0)

    
    const verse = `In the professional landscape, you shine as
${sections.slice(0, 2).join('\n')}
Your unique approach reveals
${sections.slice(-2).join('\n')}
A journey of continuous growth and possibility.`

    return verse
  } catch (error) {
    console.error('Error formatting Gemini response:', error)
    return 'A professional with unique potential, your journey unfolds with each step. Your approach to challenges and interactions reveals a path of continuous growth and meaningful impact.'
  }
} 
