// src/components/Layout/TopHeader.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const TopHeader = () => {
  const taglines = [
    'Your Journey, Our Priority.',
    'Seamless Travel, Every Time.',
    'Driven by Excellence.',
    'Experience the Difference.'
  ];
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  // Automatically cycle through taglines every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prevIndex) => 
        (prevIndex + 1) % taglines.length
      );
    }, 4000); // Change tagline every 4 seconds
    
    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [taglines.length]);

  const taglineVariants = {
    initial: { opacity: 0, scale: 0.8, filter: "blur(4px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { opacity: 0, scale: 0.8, filter: "blur(4px)", transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <motion.header 
      className="bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 text-gray-300 py-3 md:py-4 px-4 overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Contact Information & Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm font-semibold">
          {/* Phone Number with hover effect */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05, color: "#3B82F6", transition: { duration: 0.1 } }}
          >
            <i className="fas fa-phone-alt text-blue-400"></i>
            <a href="tel:+918093011746" className="hover:text-blue-400 transition-colors">+91 8093011746</a>
          </motion.div>
          
          {/* Email Address with hover effect */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05, color: "#3B82F6", transition: { duration: 0.1 } }}
          >
            <i className="fas fa-envelope text-blue-400"></i>
            <a href="mailto:srinibas@cabpilot.in" className="hover:text-blue-400 transition-colors">srinibas@cabpilot.in</a>
          </motion.div>
        </div>

        {/* Dynamic Tagline (visible on larger screens) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTaglineIndex}
            className="hidden md:flex text-sm text-gray-400 italic font-medium"
            variants={taglineVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {taglines[currentTaglineIndex]}
          </motion.div>
        </AnimatePresence>

        {/* Google Rating and Review Link */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <div className="flex items-center space-x-1 text-sm font-semibold text-yellow-400">
            {/* Five star icons */}
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <span className="text-gray-300 ml-1">Rated 5 Stars on Google</span>
          </div>
          
          <motion.a 
            href="https://www.google.com/search?q=Cab+Pilot+Bhubaneswar+review" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-3 py-1.5 border border-blue-400 text-blue-400 rounded-full text-sm font-medium transition-all duration-300"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#2C5282", 
              color: "#E0E7FF",
              boxShadow: "0 4px 20px rgba(66, 153, 225, 0.5)" // Increased shadow effect
            }}
          >
            Review on Google
          </motion.a>
        </div>

        {/* Social Media Icons & Call-to-Action Button */}
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          {/* Social icons with a slight scale and a subtle, smooth rotation on hover */}
          <motion.a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors text-xl"
            whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.2 } }}
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </motion.a>
          <motion.a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors text-xl"
            whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.2 } }}
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </motion.a>
          <motion.a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors text-xl"
            whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.2 } }}
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </motion.a>
          <motion.a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors text-xl"
            whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.2 } }}
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default TopHeader;
