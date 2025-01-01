import { useState, useEffect } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { QUESTIONS_PER_SESSION, GEMINI_PROMPT, getRandomQuestions } from '../constants/questions'
import { formatGeminiResponse } from '../utils/formatGeminiResponse'

export const usePersonalityAnalysis = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [sessionQuestions, setSessionQuestions] = useState<string[]>([])
  const [answers, setAnswers] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)

  // Initialize random questions for the session
  useEffect(() => {
    const randomQuestions = getRandomQuestions()
    setSessionQuestions(randomQuestions)
    setAnswers(Array(QUESTIONS_PER_SESSION).fill(''))
  }, [])

  const progress = ((currentQuestion + 1) / QUESTIONS_PER_SESSION) * 100

  const handleNext = () => {
    if (answers[currentQuestion].trim() && currentQuestion < QUESTIONS_PER_SESSION - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else if (answers[currentQuestion].trim() && currentQuestion === QUESTIONS_PER_SESSION - 1) {
      analyzePersonality()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleAnswerChange = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answer
    setAnswers(newAnswers)
  }

  const canProceed = answers[currentQuestion]?.trim().length > 0

  const reset = () => {
    const newRandomQuestions = getRandomQuestions()
    setSessionQuestions(newRandomQuestions)
    setResult(null)
    setCurrentQuestion(0)
    setAnswers(Array(QUESTIONS_PER_SESSION).fill(''))
    setError(null)
  }

  const analyzePersonality = async () => {
    if (answers.some(answer => !answer.trim())) {
      setError('Please answer all questions before proceeding.')
      return
    }

    setLoading(true)
    setError(null)
    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

      const questionsAndAnswers = sessionQuestions.map((q, i) => 
        `${q}\nAnswer: ${answers[i]}`
      ).join('\n\n')

      const prompt = GEMINI_PROMPT.replace('{questions_and_answers}', questionsAndAnswers)
      const result = await model.generateContent(prompt)
      const response = await result.response
      const formattedResponse = await formatGeminiResponse(response.text())
      setResult(formattedResponse)
    } catch (error) {
      console.error('Error analyzing personality:', error)
      setError('Sorry, there was an error analyzing your personality. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return {
    currentQuestion,
    currentQuestionText: sessionQuestions[currentQuestion] || '',
    answers,
    handleAnswerChange,
    progress,
    handleNext,
    handlePrevious,
    loading,
    error,
    result,
    reset,
    canProceed,
    isLastQuestion: currentQuestion === QUESTIONS_PER_SESSION - 1,
    isFirstQuestion: currentQuestion === 0,
    totalQuestions: QUESTIONS_PER_SESSION
  }
} 