import React from 'react';
import {
  Brain, MessageSquare, Search, PenTool, Gem, Zap, ArrowRight, Asterisk, Code, Globe, Sparkle, Circle
} from 'lucide-react';

// Card.jsx
const Card = ({ title, subtitle, description, icon: IconComponent }) => {
  return (
    <div className={`relative bg-neutral-800 rounded-lg p-6 transition-all duration-300 transform hover:-translate-y-1
                    border border-neutral-700 hover:border-teal-400 hover:shadow-[0_0_20px_rgba(0,150,255,0.4)]
                    w-full sm:max-w-sm lg:w-full lg:max-w-[18rem]`}> {/* Adjusted width for responsiveness */}
      {/* Icon container at top-left, matching the new screenshot */}
      <div className="absolute -top-4 -left-4 bg-neutral-900 rounded-full p-3 border border-neutral-700 shadow-md">
        {IconComponent && <IconComponent size={24} className="text-teal-400" />}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <span className="inline-block bg-neutral-700 text-teal-300 text-xs font-medium px-2.5 py-0.5 rounded-full mb-4">
        {subtitle}
      </span>
      <p className="text-neutral-400 text-sm">{description}</p>
    </div>
  );
};

// Header.jsx
const Header = () => {
  return (
    <header className="bg-black text-white p-4 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          <Asterisk className="text-teal-400" size={28} strokeWidth={1.5} /> {/* Icon for AI Fiesta */}
          <span className="text-2xl font-bold text-teal-400">AI Fiesta</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex bg-neutral-800 rounded-full p-1 border border-neutral-700">
            <a href="#" className="text-neutral-300 hover:text-white px-4 py-2 rounded-full transition-colors duration-200">Features</a>
            <a href="#" className="text-neutral-300 hover:text-white px-4 py-2 rounded-full transition-colors duration-200">Pricing</a>
            <a href="#" className="text-neutral-300 hover:text-white px-4 py-2 rounded-full transition-colors duration-200">FAQs</a>
          </div>
          <button className="bg-gradient-to-r from-teal-600 to-green-500 hover:from-teal-700 hover:to-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg flex items-center space-x-2">
            <span>Log in</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
};

// Home.jsx
const Home = () => {
  const cardsData = [
    {
      title: 'ChatGPT 5',
      subtitle: 'AI Rounder Explainer',
      description: 'Great for questions, brainstorming, and clear step-by-step explanations.',
      icon: Sparkle, // Used Sparkle as a generic AI icon matching the image
    },
    {
      title: 'Perplexity Sonar Pro',
      subtitle: 'Live Web Researcher',
      description: 'Delivers fresh answers and news from credible, real-time sources.',
      icon: Search, // Icon for Perplexity
    },
    {
      title: 'Claude Sonnet Master',
      subtitle: 'Co-Writing Master',
      description: 'Refines polished emails, essays, and scripts while keeping your style.',
      icon: PenTool, // Icon for Claude Sonnet
    },
    {
      title: 'DeepSeek',
      subtitle: 'Reasoning Specialist',
      description: 'Excels at logic, math, and coding with clear, detailed solutions.',
      icon: Code, // Icon for DeepSeek
    },
    {
      title: 'Gemini 2.5 Pro',
      subtitle: 'Long Context Master',
      description: 'Handles long documents and images; tracking full context and details.',
      icon: Gem, // Icon for Gemini
    },
    {
      title: 'Grok 4',
      subtitle: 'Creative Powerhouse',
      description: 'Bold, unconventional ideas and punchy copy for trend-focused content.',
      icon: Zap, // Icon for Grok
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden relative z-0">
      {/* Dynamic Background "Shadow" Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-neutral-900 via-black to-black opacity-70 animate-background-nebula"></div>

      <Header />
      <main className="container mx-auto py-12 px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300">
          Pick the best characteristics <br /> of each AI model
        </h1>

        {/* Main content grid for 3 cards left, globe, 3 cards right */}
        <div className="flex flex-col lg:flex-row justify-center items-center my-8 gap-8">
          {/* Left group of cards */}
          <div className="flex flex-col items-center gap-y-8 lg:w-1/2">
            {cardsData.slice(0, 3).map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>

          {/* Central glowing circle */}
          <div className="flex justify-center flex-shrink-0 mx-auto lg:mx-0">
            <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-teal-500 to-green-400 flex items-center justify-center shadow-lg transform scale-100 hover:scale-105 transition-transform duration-300 animate-pulse-slow">
              <Globe size={80} className="text-white animate-spin-slow" /> {/* Icon for central circle */}
            </div>
          </div>

          {/* Right group of cards */}
          <div className="flex flex-col items-center gap-y-8 lg:w-1/2">
            {cardsData.slice(3, 6).map((card, index) => (
              <Card key={index + 3} {...card} />
            ))}
          </div>
        </div>
      </main>
      {/* Tailwind CSS custom animations and styles */}
      <style>{`
        /* Animations for the central glowing circle */
        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.4), 0 0 30px rgba(0, 255, 255, 0.2);
          }
          50% {
            box-shadow: 0 0 25px rgba(0, 255, 255, 0.7), 0 0 45px rgba(0, 255, 255, 0.5);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }

        /* Custom radial gradient for background */
        .bg-gradient-radial {
          background-image: radial-gradient(circle at center, var(--tw-gradient-stops));
        }

        /* Background nebula movement animation for a dynamic "shadow" */
        @keyframes background-nebula-move {
          0% { transform: translate(0%, 0%) scale(1); opacity: 0.7; }
          25% { transform: translate(-2%, -3%) scale(1.02); opacity: 0.75; }
          50% { transform: translate(-5%, 2%) scale(1.05); opacity: 0.8; }
          75% { transform: translate(-3%, -1%) scale(1.03); opacity: 0.75; }
          100% { transform: translate(0%, 0%) scale(1); opacity: 0.7; }
        }
        .animate-background-nebula {
          animation: background-nebula-move 25s infinite ease-in-out alternate;
        }
      `}</style>
    </div>
  );
};

export default Home;
