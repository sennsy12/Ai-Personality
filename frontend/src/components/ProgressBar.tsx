import * as Progress from '@radix-ui/react-progress'

interface ProgressBarProps {
  progress: number
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>Progress</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <Progress.Root className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <Progress.Indicator
          className="h-full bg-primary transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </Progress.Root>
    </div>
  )
} 