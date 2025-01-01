import { usePersonalityAnalysis } from './hooks/usePersonalityAnalysis'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ProgressBar } from './components/ProgressBar'
import { QuestionCard } from './components/QuestionCard'
import { ResultCard } from './components/ResultCard'
import { LoadingScreen } from './components/LoadingScreen'

function App() {
  const {
    currentQuestion,
    currentQuestionText,
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
    isLastQuestion,
    isFirstQuestion,
    totalQuestions
  } = usePersonalityAnalysis()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {!loading && !result && (
            <>
              <h2 className="text-2xl font-bold text-center mb-8">
                Discover Your Personality Profile
              </h2>
              
              <ProgressBar progress={progress} />

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                  {error}
                </div>
              )}

              <QuestionCard
                question={currentQuestionText}
                answer={answers[currentQuestion]}
                onAnswerChange={handleAnswerChange}
                onNext={handleNext}
                onPrevious={handlePrevious}
                onReset={reset}
                loading={loading}
                isLastQuestion={isLastQuestion}
                isFirstQuestion={isFirstQuestion}
                canProceed={canProceed}
                currentQuestion={currentQuestion}
                totalQuestions={totalQuestions}
              />
            </>
          )}

          {loading && <LoadingScreen />}

          {!loading && result && (
            <ResultCard
              result={result}
              onRetake={reset}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
