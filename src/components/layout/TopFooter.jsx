"use client" // Needed for Framer Motion

import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView, useMotionValue, animate } from 'framer-motion';
import { ArrowRight, CarFront, Users, Headset } from 'lucide-react';

const TopFooter = () => {
  // Animation controls for the glowing circle behind the button
  const circleControls = useAnimation();
  const handleHoverStart = () => {
    circleControls.start({
      opacity: 1,
      scale: 1.6,
      filter: 'blur(40px)',
      transition: { duration: 0.3, ease: "easeOut" }
    });
  };
  const handleHoverEnd = () => {
    circleControls.start({
      opacity: 0.3,
      scale: 1,
      filter: 'blur(50px)',
      transition: { duration: 0.3, ease: "easeOut" }
    });
  };

  // No longer directly animating numbers as the counter section is removed.
  // Keeping motion values and states in case the feature is reintroduced or for future expansion.
  const vehiclesCountMotion = useMotionValue(0);
  const customersCountMotion = useMotionValue(0);
  const [displayVehicles, setDisplayVehicles] = useState(0);
  const [displayCustomers, setDisplayCustomers] = useState(0);
  
  // Ref for potential future content, or can be removed if not needed.
  const counterRef = useRef(null);
  const isCounterInView = useInView(counterRef, { once: true, amount: 0.5 });

  useEffect(() => {
    // These animations are now purely for demonstration if the counter section is re-added.
    // They don't affect current rendering without the counter section.
    if (isCounterInView) {
      const unsubscribeVehicles = vehiclesCountMotion.on("change", (latest) => {
        setDisplayVehicles(Math.round(latest));
      });
      const unsubscribeCustomers = customersCountMotion.on("change", (latest) => {
        setDisplayCustomers(Math.round(latest));
      });

      animate(vehiclesCountMotion, 500, { duration: 2, ease: "easeOut" });
      animate(customersCountMotion, 10000, { duration: 2.5, ease: "easeOut" });

      return () => {
        unsubscribeVehicles();
        unsubscribeCustomers();
      };
    }
  }, [isCounterInView, vehiclesCountMotion, customersCountMotion]);

  return (
    <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Main background gradient: deep, rich blues */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1015] via-[#040608] to-[#0A1015]"></div>

        {/* Illuminated grid pattern (subtle lines) - teal-green themed, less opacity */}
        <div className="absolute inset-0 illuminated-grid-animation opacity-10"></div> {/* Reduced opacity */}

        {/* Dynamic, flowing light trails/particles - teal-green themed, more subtle */}
        <div className="absolute inset-0 light-trails-container animate-light-trails">
          <div className="light-trail trail-1"></div>
          <div className="light-trail trail-2"></div>
          <div className="light-trail trail-3"></div>
        </div>

        {/* Animated Car Background - positioned lower and more visible */}
        <div className="absolute inset-x-0 bottom-0 h-48 sm:h-64 md:h-80 w-full overflow-hidden z-0 flex items-end justify-center">
          {/* Animated car */}
          <div className="animated-car-topfooter">
            <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="car-svg">
              {/* Main Car Body - Teal-green for theme, slightly less bright */}
              <path d="M95 25H5C2.23858 25 0 27.2386 0 30V40C0 42.7614 2.23858 45 5 45H95C97.7614 45 100 42.7614 100 40V30C100 27.2386 97.7614 25 95 25Z" fill="#1A9F7A"/> {/* Darker teal-green */}
              {/* Wheels - Darker, with a subtle inner glow */}
              <circle cx="25" cy="40" r="8" fill="#1F2937"/> 
              <circle cx="75" cy="40" r="8" fill="#1F2937"/> 
              {/* Window - Lighter teal-green for visibility, slightly dimmed */}
              <rect x="20" y="15" width="60" height="15" rx="5" fill="#40BDA5"/> {/* Slightly darker teal-green for window */}
              {/* Headlights/Taillights - Small glowing circles */}
              <circle cx="98" cy="32" r="2" fill="#FFD700" className="headlight-glow"/>
              <circle cx="2" cy="32" r="2" fill="#FF6347" className="taillight-glow"/>
            </svg>
          </div>
        </div>

      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#20c997]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your Next Adventure, Begins Here.
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-neutral-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Book a premium vehicle for an unforgettable journey. <br className="hidden md:block"/> Seamless experience, every mile.
        </motion.p>
        
        <div className="relative inline-block">
          <motion.div
            className="absolute rounded-full bg-[#20c997] transform -translate-x-1/2 -translate-y-1/2"
            style={{ width: '220px', height: '220px', top: '50%', left: '50%', zIndex: -1 }}
            initial={{ opacity: 0.3, scale: 1, filter: 'blur(50px)' }}
            animate={circleControls}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />
          <motion.button
            className="px-10 py-5 bg-gradient-to-r from-[#20c997] to-[#1a9f7a] text-white font-bold rounded-full shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3 mx-auto text-xl relative z-0"
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            onClick={() => window.location.href='#'}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span>Reserve Your Ride</span>
            <ArrowRight size={28} />
          </motion.button>
        </div>

      </div>

      {/* Tailwind CSS custom animations and styles for the new background */}
      <style>{`
        /* --- General Background Theme --- */
        .bg-gradient-to-br {
            background-color: #0A1015; /* Base dark color */
        }

        /* --- Illuminated Grid Pattern (Teal-Green Themed) --- */
        .illuminated-grid-animation {
            background-image: repeating-linear-gradient(0deg,
                rgba(32, 201, 151, 0.08) 0px, /* Reduced opacity for subtlety */
                rgba(32, 201, 151, 0.08) 1px,
                transparent 1px,
                transparent 50px
            ),
            repeating-linear-gradient(90deg,
                rgba(32, 201, 151, 0.08) 0px,
                rgba(32, 201, 151, 0.08) 1px,
                transparent 1px,
                transparent 50px
            );
            background-size: 50px 50px; 
            animation: grid-pulse 10s linear infinite alternate; 
        }

        @keyframes grid-pulse {
            0% { opacity: 0.1; }
            50% { opacity: 0.2; } /* Less intense pulse */
            100% { opacity: 0.1; }
        }

        /* --- Dynamic Light Trails/Particles (Teal-Green Themed) --- */
        .light-trails-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            filter: blur(20px); /* Slightly less blur for more distinct trails */
            opacity: 0.6; /* Overall opacity of trails */
        }

        .light-trail {
            position: absolute;
            background: linear-gradient(to right, 
                rgba(32, 201, 151, 0) 0%, 
                rgba(32, 201, 151, 0.5) 50%, /* Slightly less bright */
                rgba(20, 160, 120, 0.3) 100% 
            );
            border-radius: 50%; 
            opacity: 0; 
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            box-shadow: 0 0 20px rgba(32, 201, 151, 0.4); /* Less intense glow */
        }

        .trail-1 {
            width: 300px; height: 50px; 
            top: 10%; left: -50%;
            animation: move-trail-1 25s -5s infinite; 
        }
        .trail-2 {
            width: 400px; height: 70px; 
            top: 60%; left: -80%;
            animation: move-trail-2 30s -10s infinite;
        }
        .trail-3 {
            width: 250px; height: 40px; 
            top: 40%; left: -30%;
            animation: move-trail-3 20s -2s infinite;
        }

        @keyframes move-trail-1 {
            0% { transform: translateX(0); opacity: 0; }
            10% { opacity: 0.7; }
            90% { opacity: 0.7; }
            100% { transform: translateX(150vw); opacity: 0; }
        }
        @keyframes move-trail-2 {
            0% { transform: translateX(0); opacity: 0; }
            10% { opacity: 0.6; }
            90% { opacity: 0.6; }
            100% { transform: translateX(160vw); opacity: 0; }
        }
        @keyframes move-trail-3 {
            0% { transform: translateX(0); opacity: 0; }
            10% { opacity: 0.8; }
            90% { opacity: 0.8; }
            100% { transform: translateX(140vw); opacity: 0; }
        }

        /* --- Animated Car Styles (Softer, Smaller, Less Bright) --- */
        .animated-car-topfooter {
            position: absolute;
            bottom: 0px; /* Changed to 0px to make it touch the bottom */
            left: -20%; 
            width: 250px; 
            height: 125px; 
            animation: move-car-topfooter 50s linear infinite; 
            opacity: 0.6; 
            filter: drop-shadow(0 0 10px rgba(32, 201, 151, 0.5)); 
            z-index: 2; 
        }

        .car-svg {
            width: 100%;
            height: 100%;
            transform: scaleX(-1); /* Keep flipped */
        }

        @keyframes move-car-topfooter {
            0% { transform: translateX(-100vw) scaleX(-1); } 
            100% { transform: translateX(150vw) scaleX(-1); }
        }

        .headlight-glow {
            filter: blur(3px); 
            animation: light-flicker 2s infinite alternate; 
        }
        .taillight-glow {
            filter: blur(3px); 
            animation: light-flicker 2s infinite alternate; 
        }

        @keyframes light-flicker {
            0% { opacity: 1; }
            50% { opacity: 0.8; } 
            100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default TopFooter;
