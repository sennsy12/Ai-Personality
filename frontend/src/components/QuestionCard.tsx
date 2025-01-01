import { Send, ArrowLeft, ArrowRight, Loader2, RefreshCw } from 'lucide-react'

interface QuestionCardProps {
  question: string
  answer: string
  onAnswerChange: (value: string) => void
  onNext: () => void
  onPrevious: () => void
  onReset: () => void
  loading: boolean
  isLastQuestion: boolean
  isFirstQuestion: boolean
  canProceed: boolean
  currentQuestion: number
  totalQuestions: number
}

export const QuestionCard = ({
  question,
  answer,
  onAnswerChange,
  onNext,
  onPrevious,
  onReset,
  loading,
  isLastQuestion,
  isFirstQuestion,
  canProceed,
  currentQuestion,
  totalQuestions,
}: QuestionCardProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Question {currentQuestion + 1} of {totalQuestions}</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              {Math.round((currentQuestion + 1) / totalQuestions * 100)}% Complete
            </span>
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to start over? All your answers will be cleared.')) {
                  onReset()
                }
              }}
              className="text-gray-500 hover:text-primary transition-colors flex items-center gap-1 text-sm"
              title="Start Over"
            >
              <RefreshCw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </div>

        <h3 className="text-lg text-gray-700 mb-4">{question}</h3>
        
        <div className="space-y-4">
          <textarea
            value={answer}
            onChange={(e) => onAnswerChange(e.target.value)}
            className="input min-h-[120px]"
            placeholder="Type your answer here..."
          />
          
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={onPrevious}
              disabled={isFirstQuestion || loading}
              className="btn flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>

            <button
              onClick={onNext}
              disabled={!canProceed || loading}
              className="btn btn-primary flex-1 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  {isLastQuestion ? 'Analyze Personality' : 'Next Question'}
                  {isLastQuestion ? <Send className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 