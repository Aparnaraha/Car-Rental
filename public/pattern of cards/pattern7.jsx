import React from 'react';
import {
  Brain, MessageSquare, Search, PenTool, Gem, Zap, ArrowRight, Asterisk, Code, Globe, Sparkle
} from 'lucide-react';

// Card.jsx
const Card = ({ title, subtitle, description, icon: IconComponent }) => {
  return (
    <div className={`relative bg-neutral-800 rounded-lg p-6 transition-all duration-300 transform hover:-translate-y-1
                    border border-neutral-700 hover:border-teal-400 hover:shadow-[0_0_20px_rgba(0,150,255,0.4)]
                    w-full sm:max-w-sm lg:w-72`}> {/* Ensured consistent fixed width on large screens */}
      {/* Icon container at top-left */}
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
    <div className="min-h-screen bg-black text-white font-sans relative z-0">
      {/* Absolute container for the complex background layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Main background gradient, very subtle and dark */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F0F] via-black to-[#0A0A0A]"></div>

        {/* Dynamic, shadowy particle layer using multiple CSS blobs/gradients */}
        <div className="absolute inset-0 background-blobs-container animate-blob-group-move">
          {/* Blob 1: Large, faint blue */}
          <div className="background-blob blob-1"></div>
          {/* Blob 2: Medium, faint purple */}
          <div className="background-blob blob-2"></div>
          {/* Blob 3: Small, faint teal */}
          <div className="background-blob blob-3"></div>
          {/* Blob 4: Another faint blue, different position */}
          <div className="background-blob blob-4"></div>
          {/* Blob 5: Faint green */}
          <div className="background-blob blob-5"></div>
        </div>

        {/* Subtle, moving diagonal lines/texture - mimic the very faint vertical elements */}
        <div className="absolute inset-0 background-lines-animation opacity-5"></div>
      </div>

      <Header />
      <main className="container mx-auto py-16 px-4 relative z-10 min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300 text-center w-full">
          Pick the best characteristics <br /> of each AI model
        </h1>

        {/* Main content grid for 3 cards left, globe, 3 cards right */}
        <div className="flex flex-col lg:flex-row justify-center items-start my-8 gap-8 max-w-7xl mx-auto">
          {/* Left group of cards */}
          <div className="flex flex-col items-center gap-y-8 lg:w-1/3"> {/* Adjusted width for 3-column like layout */}
            {cardsData.slice(0, 3).map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>

          {/* Central glowing circle */}
          <div className="flex justify-center flex-shrink-0 lg:w-1/3"> {/* Adjusted width */}
            <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-teal-500 to-green-400 flex items-center justify-center shadow-lg transform scale-100 hover:scale-105 transition-transform duration-300 animate-pulse-slow">
              <Globe size={80} className="text-white animate-spin-slow" /> {/* Icon for central circle */}
            </div>
          </div>

          {/* Right group of cards */}
          <div className="flex flex-col items-center gap-y-8 lg:w-1/3"> {/* Adjusted width */}
            {cardsData.slice(3, 6).map((card, index) => (
              <Card key={index + 3} {...card} />
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Section - Adjusted to be consistent with previous context */}
      <section className="bg-black py-16 px-4 text-center relative z-10 border-t border-neutral-800">
        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300">
          One Window. Six Perspectives. Achieve Optimal Efficiency.
        </h2>
      </section>

      {/* Tailwind CSS custom animations and styles */}
      <style>{`
        /* --- Complex Background Styling --- */

        .background-blobs-container {
            width: 150%; /* Make container larger than viewport to allow movement */
            height: 150%;
            top: -25%;
            left: -25%;
            position: absolute;
            filter: blur(80px); /* Apply overall blur to the blobs */
        }

        .background-blob {
            position: absolute;
            border-radius: 50%; /* Make them circular */
            opacity: 0.1; /* Very faint */
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-timing-function: ease-in-out;
        }

        .blob-1 {
            width: 400px; height: 400px;
            background: rgba(0, 150, 255, 0.4); /* Faint blue */
            top: 10%; left: 15%;
            animation: blob-move-1 50s linear infinite alternate;
        }
        .blob-2 {
            width: 500px; height: 500px;
            background: rgba(150, 50, 200, 0.4); /* Faint purple */
            bottom: 20%; right: 10%;
            animation: blob-move-2 60s linear infinite alternate;
        }
        .blob-3 {
            width: 300px; height: 300px;
            background: rgba(0, 255, 255, 0.4); /* Faint teal */
            top: 50%; left: 40%;
            animation: blob-move-3 45s linear infinite alternate;
        }
        .blob-4 {
            width: 350px; height: 350px;
            background: rgba(0, 100, 200, 0.4); /* Another faint blue */
            top: 30%; right: 30%;
            animation: blob-move-4 55s linear infinite alternate;
        }
        .blob-5 {
            width: 450px; height: 450px;
            background: rgba(50, 200, 100, 0.4); /* Faint green */
            bottom: 5%; left: 5%;
            animation: blob-move-5 70s linear infinite alternate;
        }

        /* Keyframes for individual blob movements */
        @keyframes blob-move-1 {
            from { transform: translate(0, 0) scale(1); }
            to { transform: translate(100px, 150px) scale(1.1); }
        }
        @keyframes blob-move-2 {
            from { transform: translate(0, 0) scale(1); }
            to { transform: translate(-120px, -80px) scale(1.05); }
        }
        @keyframes blob-move-3 {
            from { transform: translate(0, 0) scale(1); }
            to { transform: translate(80px, -100px) scale(0.95); }
        }
        @keyframes blob-move-4 {
            from { transform: translate(0, 0) scale(1); }
            to { transform: translate(-90px, 110px) scale(1.08); }
        }
        @keyframes blob-move-5 {
            from { transform: translate(0, 0) scale(1); }
            to { transform: translate(150px, -50px) scale(0.98); }
        }

        /* Overall container movement for blobs to simulate background pan */
        @keyframes blob-group-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(-20%, -20%); } /* Pan the entire group */
        }
        .animate-blob-group-move {
            animation: blob-group-move 180s linear infinite alternate; /* Very slow overall movement */
        }

        /* Subtle moving diagonal lines/texture */
        .background-lines-animation {
            background-image: repeating-linear-gradient(45deg,
                rgba(255,255,255,0.02) 0px,
                rgba(255,255,255,0.02) 2px,
                transparent 2px,
                transparent 100px
            );
            background-size: 200px 200px;
            animation: lines-pan 90s linear infinite;
        }

        @keyframes lines-pan {
            from { background-position: 0 0; }
            to { background-position: 200px 200px; }
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
      `}</style>
    </div>
  );
};

export default Home;
