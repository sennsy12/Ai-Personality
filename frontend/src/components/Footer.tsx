import { Github } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/your-username/ai-personality"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
            <span className="text-gray-400">|</span>
            <span className="text-sm text-gray-500">© {new Date().getFullYear()} AI Personality Insights</span>
          </div>
        </div>
      </div>
    </footer>
  )
} 