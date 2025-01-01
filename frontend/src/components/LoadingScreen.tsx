import { Brain } from 'lucide-react'

export const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      <div className="relative">
        <Brain className="w-12 h-12 text-primary animate-pulse" />
        <div className="absolute inset-0 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyzing Your Responses</h3>
        <p className="text-sm text-gray-500 max-w-sm">
          Our AI is carefully analyzing your answers to create a personalized insight into your unique personality traits...
        </p>
      </div>
    </div>
  )
} 