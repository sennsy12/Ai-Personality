import { Brain } from 'lucide-react'

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Brain className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">AI Personality Insights</h1>
              <p className="text-sm text-gray-500">Discover your unique traits</p>
            </div>
          </div>
          <nav className="flex space-x-4">
            <a href="https://makersuite.google.com/app/prompts" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-500 hover:text-primary transition-colors">
              Powered by Gemini
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
} 