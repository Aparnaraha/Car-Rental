import React from 'react';
import {
  Brain, MessageSquare, Search, PenTool, Gem, Zap, ArrowRight, Asterisk, Code, Globe
} from 'lucide-react';

// Card.jsx
const Card = ({ title, subtitle, description, icon: IconComponent, position }) => {
  return (
    <div className={`relative bg-neutral-800 rounded-lg p-6 m-4 max-w-sm flex-grow shadow-lg border border-neutral-700 transition-all duration-300 transform hover:-translate-y-1
                    card-base-shadow ${position === 'left' ? 'card-shadow-left-l' : 'card-shadow-right-l'}`}>
      {/* Icon for the card */}
      <div className="absolute top-4 right-4 text-teal-400">
        {IconComponent && <IconComponent size={28} strokeWidth={1.5} />}
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
      icon: MessageSquare, // Icon for ChatGPT
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

        <div className="flex flex-wrap justify-center items-stretch my-8">
          {cardsData.slice(0, 3).map((card, index) => (
            <Card key={index} {...card} position="left" />
          ))}
          <div className="flex items-center justify-center p-4">
            {/* Central glowing circle */}
            <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-teal-500 to-green-400 flex items-center justify-center shadow-lg transform scale-100 hover:scale-105 transition-transform duration-300 animate-pulse-slow">
              <Globe size={80} className="text-white animate-spin-slow" /> {/* Icon for central circle */}
            </div>
          </div>
          {cardsData.slice(3, 6).map((card, index) => (
            <Card key={index + 3} {...card} position="right" />
          ))}
        </div>
      </main>
      {/* Tailwind CSS custom animations and styles */}
      <style>{`
        /* Card general subtle glow */
        .card-base-shadow {
          box-shadow: 0 0 5px rgba(0, 255, 255, 0.05);
          transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
        }

        /* Base pseudo-elements for L-shape glow */
        .card-base-shadow::before,
        .card-base-shadow::after {
            content: '';
            position: absolute;
            pointer-events: none;
            opacity: 1; /* Always visible L-shape */
            z-index: -2;
            filter: blur(8px); /* Blur for particle spread effect */
        }

        /* Shared bottom glow for both L-shapes (always visible) */
        .card-base-shadow::before {
            bottom: 0;
            height: 15px; /* Height of the glow band */
            width: 90%;
            background: linear-gradient(to right, rgba(0,255,255,0.4), rgba(100,200,255,0.2), rgba(150,100,255,0.1));
            border-radius: 0 0 8px 8px; /* Match card border radius */
            transform: translateX(-50%);
            left: 50%;
        }

        /* L-shape glow for LEFT cards (left and bottom) */
        .card-shadow-left-l::after {
            top: 0;
            left: 0;
            width: 15px; /* Width of the glow band */
            height: 90%;
            background: linear-gradient(to bottom, rgba(0,255,255,0.4), rgba(100,200,255,0.2), rgba(150,100,255,0.1));
            border-radius: 8px 0 0 8px; /* Match card border radius */
        }

        /* L-shape glow for RIGHT cards (right and bottom) */
        .card-shadow-right-l::after {
            top: 0;
            right: 0;
            width: 15px; /* Width of the glow band */
            height: 90%;
            background: linear-gradient(to bottom, rgba(0,255,255,0.4), rgba(100,200,255,0.2), rgba(150,100,255,0.1));
            border-radius: 0 8px 8px 0; /* Match card border radius */
        }

        /* Hover effect: "shadow outer space" */
        .card-base-shadow:hover {
            box-shadow:
                0 0 30px rgba(0, 150, 255, 0.6), /* Deeper blue glow */
                0 0 60px rgba(100, 50, 200, 0.4), /* Purple tint */
                0 0 90px rgba(0, 255, 255, 0.2); /* Fainter teal outer glow */
        }

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
