// All available personality questions
export const ALL_PERSONALITY_QUESTIONS = [
  // Original questions
  "How do you typically spend your free time?",
  "How do you handle stressful situations?",
  "How would your friends describe your personality?",
  "What motivates you to achieve your goals?",
  "How do you prefer to interact with others in social settings?",
  // Additional questions
  "What's your approach to making important decisions?",
  "How do you react when plans change unexpectedly?",
  "What kind of environment helps you feel most productive?",
  "How do you prefer to learn new things?",
  "What role do you usually take in group projects?",
  "How do you handle conflicts with others?",
  "What's your ideal way to celebrate achievements?",
  "How do you recharge after a long day?",
  "What qualities do you value most in relationships?",
  "How do you approach new challenges?",
  "What's your preferred way of expressing creativity?",
  "How do you handle feedback from others?",
  "What aspects of your personality are you working to improve?",
  "How do you maintain work-life balance?",
  "What impact do you hope to have on others?"
] as const

// Number of questions to show per session
export const QUESTIONS_PER_SESSION = 5

// Function to get random questions for a session
export const getRandomQuestions = () => {
  const shuffled = [...ALL_PERSONALITY_QUESTIONS]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled.slice(0, QUESTIONS_PER_SESSION)
}

export const GEMINI_PROMPT = `You are a professional personality analyst. Based on the following questionnaire responses, create a positive and constructive personality assessment in the form of a single cohesive paragraph, between 25 to 40 words. 

Focus on:
1. Professional strengths
2. Communication style
3. Personal growth potential
4. Team collaboration approach

Ensure the analysis is written fluently, reads naturally, and highlights growth-oriented traits in a professional tone.

Questions and Answers:
{questions_and_answers}`;
