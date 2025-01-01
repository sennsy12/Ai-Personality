import { RefreshCw } from 'lucide-react'

interface ResultCardProps {
  result: string
  onRetake: () => void
}

export const ResultCard = ({ result, onRetake }: ResultCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Your Personality Verse</h2>
      <div className="prose max-w-none">
        <div className="whitespace-pre-line text-lg text-gray-700 italic leading-relaxed">
          {result}
        </div>
      </div>
      <button
        onClick={onRetake}
        className="btn btn-primary mt-8 flex items-center justify-center gap-2"
      >
        <RefreshCw className="w-4 h-4" />
        Retake Quiz
      </button>
    </div>
  )
} 