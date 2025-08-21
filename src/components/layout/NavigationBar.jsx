import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Menu, ArrowRight } from 'lucide-react'; // Added Car icon

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll and set header background
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close services dropdown if mobile menu is closing
    if (isMobileMenuOpen) {
      setIsServicesOpen(false);
    }
  };

  // Service links are retained as per your original structure.
  const servicesLinks = [
    { name: 'Airport Pickup', to: '/services/airport-pickup', icon: 'fas fa-plane-departure' },
    { name: 'Corporate Booking', to: '/services/corporate', icon: 'fas fa-building' },
    { name: 'Local', to: '/services/local-booking', icon: 'fas fa-map-marked-alt' },
    { name: 'Marriage Booking', to: '/services/wedding', icon: 'fas fa-ring' },
    { name: 'Round Trip', to: '/services/round-trip', icon: 'fas fa-undo-alt' },
    { name: 'Spare Driver', to: '/services/spare-driver', icon: 'fas fa-user-circle' },
    { name: 'VIP Booking', to: '/services/vip', icon: 'fas fa-crown' },
    { name: 'One Way', to: '/services/one-way', icon: 'fas fa-road' },
  ];

  // Main links adapted for Car Rental theme
  const mainLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '#', isDropdown: true, icon: 'fas fa-handshake' },
    { name: 'Contact', to: '/contact' },
    { name: 'Partner', to: '/partner' },
    { name: 'Blog', to: '/blog' },
  ];

  // Framer Motion Variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: { x: '0%', transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { x: '100%', transition: { duration: 0.4, ease: 'easeIn' } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const dropdownContainerVariants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        staggerChildren: 0.05,
        delayChildren: 0.1
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, y: 20, rotate: -5 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 120, damping: 10 } },
  };
  
  const bookNowButtonVariants = {
    rest: { 
      scale: 1, 
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      transition: { duration: 0.2 }
    },
    hover: {
      scale: 1.05,
      boxShadow: [
        '0 0 10px #00FFFF',  // Teal glow
        '0 0 20px #00FFFF',
        '0 0 30px #00FFFF',
        '0 0 20px #00FFFF',
        '0 0 10px #00FFFF'
      ],
      backgroundColor: [
        '#0D9488', // Start with teal background
        '#065F46', // Pulse to a darker green
        '#0D9488' // Return to original
      ],
      transition: {
        boxShadow: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        },
        backgroundColor: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.3,
          ease: "easeOut"
        }
      }
    },
    tap: { scale: 0.95 },
  };

  const iconVariants = {
    rest: { x: 0 },
    hover: { x: 5, transition: { type: "spring", stiffness: 300, damping: 10 } },
  };

  // Common whileHover properties for nav links
  const navLinkHoverProps = {
    scale: 1.05, 
    y: -2,
  };

  return (
    <motion.nav 
      className={`sticky top-0 z-50 transition-all duration-300 
        ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-black'}`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and company name */}
        <div className="flex flex-col md:flex-row items-center space-x-2">
          <NavLink to="/" className="flex flex-col items-center space-y-1">
            <div className="flex items-center space-x-2">
              <motion.div // Using motion.div for Lucide icon animations
                animate={{
                  scale: [1, 1.1, 1],
                  transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                }}
                whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
              >
                <Car className="text-teal-400 text-3xl" /> {/* Car icon with AI Fiesta teal color */}
              </motion.div>
              <span className="text-xl font-bold font-inter text-teal-400 tracking-widest"> {/* Teal text for logo name */}
                Car Rental
              </span>
            </div>
            <span className="hidden md:block text-xs text-neutral-400 mt-1"> {/* Gray for tagline */}
              A Unit Of JBSG Consultancy
            </span>
          </NavLink>
        </div>

        {/* Desktop Navigation Links (AI Fiesta grouped style) */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex bg-neutral-800 rounded-full p-1 border border-neutral-700"> {/* Dark background and border */}
            {mainLinks.map((link) => (
              link.isDropdown ? (
                <motion.div
                  key={link.name}
                  className="relative group"
                  onHoverStart={() => setIsServicesOpen(true)}
                  onHoverEnd={() => setIsServicesOpen(false)}
                >
                  <motion.span 
                    className="flex items-center font-semibold cursor-pointer text-neutral-300 hover:text-white transition-colors duration-200 px-4 py-2 rounded-full underline-on-hover-bg" 
                    whileHover={navLinkHoverProps} 
                  >
                    {/* Using i tag for Font Awesome icons as per your original structure */}
                    {link.icon && <i className={`${link.icon} mr-2`}></i>} 
                    {link.name}
                    <motion.i 
                      className={`fas fa-chevron-down text-xs ml-2 transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`}
                    ></motion.i>
                  </motion.span>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-neutral-800/95 backdrop-blur-md border border-neutral-700 rounded-lg shadow-2xl shadow-teal-500/10 overflow-hidden" // Darker dropdown bg
                        variants={dropdownContainerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        {servicesLinks.map((subLink) => (
                          <motion.div key={subLink.name} variants={dropdownItemVariants}>
                            <NavLink
                              to={subLink.to}
                              className="block px-6 py-3 text-sm text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors duration-200 underline-on-hover-bg" 
                            >
                              {subLink.icon && <i className={`${subLink.icon} mr-3 text-teal-400`}></i>} {/* Teal icon */}
                              {subLink.name}
                            </NavLink>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <NavLink key={link.name} to={link.to}>
                  <motion.span 
                    className="flex items-center font-semibold text-neutral-300 hover:text-white transition-colors duration-200 px-4 py-2 rounded-full underline-on-hover-bg" 
                    whileHover={navLinkHoverProps} 
                  >
                    {link.icon && <i className={`${link.icon} mr-2`}></i>}
                    {link.name}
                  </motion.span>
                </NavLink>
              )
            ))}
          </div>
        </div>

        {/* Book Now Button (AI Fiesta pulsing style) */}
        <NavLink to="/booking" className="hidden lg:block">
          <motion.button
            className="px-6 py-2 bg-gradient-to-r from-teal-600 to-green-500 text-white font-bold rounded-lg shadow-lg flex items-center space-x-2"
            variants={bookNowButtonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <span>Book Now</span>
            <ArrowRight size={20} />
          </motion.button>
        </NavLink>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu} 
          className="lg:hidden text-neutral-300 hover:text-white transition-colors"
          aria-label="Toggle mobile menu"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
          >
            <Menu size={28} className="text-teal-400" />
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed top-0 left-0 w-full h-full bg-black p-6 pt-24 z-40 overflow-y-auto"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col space-y-6">
              {mainLinks.map((link) => (
                link.isDropdown ? (
                  <motion.div key={link.name} variants={linkVariants}>
                    <motion.span 
                      onClick={() => setIsServicesOpen(!isServicesOpen)} 
                      className="flex items-center text-xl font-semibold cursor-pointer text-neutral-300 hover:text-white transition-colors duration-200 underline-on-hover-bg" 
                      whileTap={{ scale: 0.98 }}
                      whileHover={navLinkHoverProps} 
                    >
                      {link.icon && <i className={`${link.icon} mr-3`}></i>}
                      {link.name}
                      <motion.i 
                        className={`fas fa-chevron-down text-sm ml-2 transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`}
                      ></motion.i>
                    </motion.span>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          className="flex flex-col mt-4 pl-8 space-y-4"
                          variants={dropdownContainerVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          {servicesLinks.map((subLink) => (
                            <motion.div key={subLink.name} variants={dropdownItemVariants}>
                              <NavLink
                                to={subLink.to}
                                className="text-lg text-neutral-300 hover:text-white transition-colors duration-200 underline-on-hover-bg" 
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsServicesOpen(false);
                                }}
                              >
                                {subLink.icon && <i className={`${subLink.icon} mr-3`}></i>}
                                {subLink.name}
                              </NavLink>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <NavLink 
                    key={link.name} 
                    to={link.to} 
                    onClick={toggleMobileMenu}
                  >
                    <motion.div 
                      className="flex items-center text-xl font-semibold text-neutral-300 hover:text-white transition-colors duration-200 underline-on-hover-bg" 
                      variants={linkVariants}
                      whileTap={{ scale: 0.98 }}
                      whileHover={navLinkHoverProps} 
                    >
                      {link.icon && <i className={`${link.icon} mr-3`}></i>}
                      {link.name}
                    </motion.div>
                  </NavLink>
                )
              ))}
              <NavLink to="/booking" onClick={toggleMobileMenu}>
                <motion.button
                  className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-teal-600 to-green-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-teal-700 hover:to-green-600"
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.button>
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
