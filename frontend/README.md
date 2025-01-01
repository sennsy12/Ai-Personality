# AI Personality Checker

A React.js web application that uses AI to analyze personality traits based on user responses to a questionnaire. Built with React, TypeScript, Tailwind CSS, and Google's Gemini AI.

## Features

- Clean and intuitive questionnaire interface
- Real-time progress tracking
- AI-powered personality analysis
- Responsive design
- Shareable results

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- A Gemini API key (get it from [Google AI Studio](https://makersuite.google.com/app/apikey))

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Gemini API key:
```
VITE_GEMINI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Answer the five personality questions thoughtfully and honestly
2. Click "Next Question" after each response
3. After answering all questions, click "Analyze Personality"
4. View your detailed personality analysis
5. Use the "Start Over" button to begin a new analysis

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- Google Gemini AI
- Vite
- Lucide React (icons)
- Radix UI (components)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
