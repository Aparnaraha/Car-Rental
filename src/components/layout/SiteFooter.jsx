"use client" // Needed for Framer Motion

import React, { useState, useRef, useEffect } from 'react';
// Removed NavLink import, as standard <a> tags are used for navigation
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Phone, MapPin, Mail, Star, Users, Briefcase, Plane, Map, Gift, Waypoints, Truck, Heart, UserCheck, Award, Hourglass, Facebook, Twitter, Instagram, Linkedin, Wifi, CreditCard, Clock, ChevronDown, Car // Added Car icon for logo
} from 'lucide-react'; // All necessary Lucide icons for various sections

const SiteFooter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const footerRef = useRef(null); // Ref for the whole footer to detect inView status
  const isInView = useInView(footerRef, { once: true, amount: 0.2 }); // Trigger animations when 20% of footer is in view


  const servicesList = [
    'Airport Pickup',
    'Corporate Booking',
    'Local',
    'Marriage Booking',
    'Round Trip',
    'Spare Driver',
    'VIP Booking',
    'One Way'
  ];

  // Function to handle form submission and open WhatsApp
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    // Using a custom message box instead of alert()
    const messageBox = document.createElement('div');
    messageBox.className = 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-6 rounded-lg shadow-lg z-50';
    messageBox.innerHTML = `
      <p class="text-center font-semibold text-lg mb-4">Please fill out all fields.</p>
      <div class="flex justify-center">
        <button onclick="this.parentElement.parentElement.remove()" class="px-4 py-2 bg-gradient-to-r from-teal-600 to-green-500 rounded-lg">OK</button>
      </div>
    `;
    if (!name || !email || !service) {
      document.body.appendChild(messageBox);
      return;
    }

    const phoneNumber = '8093011746';
    const message = `Hello Cab Pilot, I would like to get in touch. My name is ${name}. My email is ${email}. I provide ${service} service.`; // Corrected message to reflect "service" as provided, not "interested in"
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Define variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2, // Delay before child animations start
        staggerChildren: 0.1 // Staggers the animation of child elements
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.footer 
      className="relative bg-black text-neutral-400 py-12 overflow-hidden" // Re-added relative and overflow-hidden
      ref={footerRef} // Attach ref here
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animate when in view
    >
      {/* Dynamic background layers (mimicking the hero section from your image) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Main background gradient, subtle and dark */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1015] via-[#040608] to-[#040608]"></div>

        {/* Dynamic, shadowy particle layer (blobs) */}
        <div className="absolute inset-0 background-blobs-container animate-blob-group-move-footer">
          <div className="background-blob blob-sf-1"></div>
          <div className="background-blob blob-sf-2"></div>
          <div className="background-blob blob-sf-3"></div>
        </div>

        {/* Subtle, moving diagonal lines/texture */}
        <div className="absolute inset-0 background-lines-animation-footer opacity-5"></div>
      </div>

      {/* Newsletter Form Section (Full-width row) */}
      <div className="container mx-auto px-4 relative z-10 mb-12">
        <motion.div variants={itemVariants}>
          {/* Animated Header Section with new contact info and rating */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="flex-1">
              <motion.h4
                className="text-2xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400"
                variants={itemVariants}
              >
                Stay Updated with Car Rental
              </motion.h4>
              <motion.p
                className="text-sm leading-relaxed text-neutral-300"
                variants={itemVariants}
              >
                Get the latest updates on luxury car offers, travel tips, and exclusive deals.
              </motion.p>
            </div>
            
            {/* New Contact and Rating Info */}
            <div className="flex flex-col gap-4 text-sm font-semibold">
              <motion.div
                className="flex items-center space-x-2 text-amber-400" // Changed to amber for consistency with homepage testimonials
                variants={itemVariants}
              >
                <Star size={18} className="fill-amber-400" />
                <Star size={18} className="fill-amber-400" />
                <Star size={18} className="fill-amber-400" />
                <Star size={18} className="fill-amber-400" />
                <Star size={18} className="fill-amber-400" />
                <span className="text-neutral-300 ml-2">Rated 4.9 Stars on Google</span> {/* Updated rating text */}
              </motion.div>
              <motion.a 
                href="https://www.google.com/search?q=Car+Rental+review" // Generic search link
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-teal-400 underline hover:no-underline transition-all duration-300" // Teal link color
                variants={itemVariants}
              >
                Review on Google
              </motion.a>
            </div>
          </div>

          {/* New form layout with name, email, service, and submit button */}
          <form onSubmit={handleWhatsAppSubmit} className="flex flex-col md:flex-row items-center gap-4">
            <motion.input 
              type="text" 
              placeholder="Your Name" 
              className="w-full md:w-auto flex-grow px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 border border-neutral-600" // Updated bg, border, focus ring
              whileHover={{ scale: 1.02 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <motion.input 
              type="email" 
              placeholder="Your Email" 
              className="w-full md:w-auto flex-grow px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 border border-neutral-600" 
              whileHover={{ scale: 1.02 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <motion.select
              className="w-full md:w-auto flex-grow px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 border border-neutral-600"
              whileHover={{ scale: 1.02 }}
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Select a service</option>
              {servicesList.map((svc) => (
                <option key={svc} value={svc}>{svc}</option>
              ))}
            </motion.select>
            <motion.button 
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-teal-600 to-green-500 text-white font-semibold rounded-lg shadow-lg transition-colors w-full md:w-auto" // Updated button gradient
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,255,0.5)" }} // Teal glow
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </form>
          <hr className="border-t border-neutral-700 mt-8 pt-4 relative z-10" /> {/* Updated border color */}
        </motion.div>
      </div>

      {/* Main Content Grid (Four columns) */}
      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info with Social Media */}
        <motion.div variants={linkVariants}>
          <h4 className="text-xl font-bold text-white mb-4">Your reliable partner for luxury transportation.</h4> {/* Updated text */}
          <p className="text-sm leading-relaxed mb-4 text-neutral-300"> {/* Updated text color */}
            We ensure safe, timely, and hassle-free rides with our premium fleet.
          </p>
          {/* Icons with a subtle scale and a subtle, smooth rotation on hover */}
          <div className="flex items-center space-x-4 mt-4 mb-4"> {/* Added mb-4 for spacing */}
            <motion.a 
              href="#" 
              className="text-neutral-400 hover:text-white transition-colors text-2xl" // Updated default color
              whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.2 } }}
              aria-label="Facebook"
            >
              <Facebook strokeWidth={1.5}/> {/* Used Lucide icon */}
            </motion.a>
            <motion.a 
              href="#" 
              className="text-neutral-400 hover:text-white transition-colors text-2xl"
              whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.2 } }}
              aria-label="Twitter"
            >
              <Twitter strokeWidth={1.5}/> {/* Used Lucide icon */}
            </motion.a>
            <motion.a 
              href="#" 
              className="text-neutral-400 hover:text-white transition-colors text-2xl"
              whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.2 } }}
              aria-label="Instagram"
            >
              <Instagram strokeWidth={1.5}/> {/* Used Lucide icon */}
            </motion.a>
            <motion.a 
              href="#" 
              className="text-neutral-400 hover:text-white transition-colors text-2xl"
              whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.2 } }}
              aria-label="LinkedIn"
            >
              <Linkedin strokeWidth={1.5}/> {/* Used Lucide icon */}
            </motion.a>
          </div>
          {/* Logo on a new line with additional text, now a clickable link to home */}
          <motion.a
            href="/" // Link to home page
            className="flex flex-col items-start space-y-1 text-teal-400 hover:text-white transition-colors duration-300 group" // Added group for hover effect
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center space-x-2">
              <Car size={28} strokeWidth={1.5} /> {/* Car icon */}
              <span className="font-bold text-xl">Car Rental</span> {/* Text for the logo */}
            </div>
            <p className="text-xs text-neutral-400 group-hover:text-white transition-colors duration-300">A Unit Of JBSG Consultancy</p> {/* New text */}
          </motion.a>
        </motion.div>

        {/* Our Services */}
        <motion.div variants={linkVariants}>
          <h4 className="text-xl font-bold text-white mb-4">Our Services</h4>
          <ul className="space-y-2">
            {/* List items with a subtle hover effect */}
            <motion.li 
              whileHover={{ x: 10, color: "#20c997", transition: { duration: 0.1 } }} // Teal-green hover color
            >
              <a href="/services/airport-pickup" className="flex items-center nav-link-underline-footer"> {/* Changed to <a> */}
                <Plane size={18} className="mr-2 text-teal-400" /> Airport Pickup
              </a>
            </motion.li>
            <motion.li 
              whileHover={{ x: 10, color: "#20c997", transition: { duration: 0.1 } }}
            >
              <a href="/services/corporate" className="flex items-center nav-link-underline-footer"> {/* Changed to <a> */}
                <Briefcase size={18} className="mr-2 text-teal-400" /> Corporate Booking
              </a>
            </motion.li>
            <motion.li 
              whileHover={{ x: 10, color: "#20c997", transition: { duration: 0.1 } }}
            >
              <a href="/services/local-booking" className="flex items-center nav-link-underline-footer"> {/* Changed to <a> */}
                <Map size={18} className="mr-2 text-teal-400" /> Local
              </a>
            </motion.li>
            <motion.li 
              whileHover={{ x: 10, color: "#20c997", transition: { duration: 0.1 } }}
            >
              <a href="/services/wedding" className="flex items-center nav-link-underline-footer"> {/* Changed to <a> */}
                <Heart size={18} className="mr-2 text-teal-400" /> Marriage Booking
              </a>
            </motion.li>
            <motion.li 
              whileHover={{ x: 10, color: "#20c997", transition: { duration: 0.1 } }}
            >
              <a href="/services/round-trip" className="flex items-center nav-link-underline-footer"> {/* Changed to <a> */}
                <Waypoints size={18} className="mr-2 text-teal-400" /> Round Trip
              </a>
            </motion.li>
            <motion.li 
              whileHover={{ x: 10, color: "#20c997", transition: { duration: 0.1 } }}
            >
              <a href="/services/spare-driver" className="flex items-center nav-link-underline-footer"> {/* Changed to <a> */}
                <UserCheck size={18} className="mr-2 text-teal-400" /> Spare Driver
              </a>
            </motion.li>
            <motion.li 
              whileHover={{ x: 10, color: "#20c997", transition: { duration: 0.1 } }}
            >
              <a href="/services/vip" className="flex items-center nav-link-underline-footer"> {/* Changed to <a> */}
                <Award size={18} className="mr-2 text-teal-400" /> VIP Booking
              </a>
            </motion.li>
            <motion.li 
              whileHover={{ x: 10, color: "#20c997", transition: { duration: 0.1 } }}
            >
              <a href="/services/one-way" className="flex items-center nav-link-underline-footer"> {/* Changed to <a> */}
                <Truck size={18} className="mr-2 text-teal-400" /> One Way
              </a>
            </motion.li>
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={linkVariants}>
          <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {/* Another style of hover animation, a simple scale-up effect */}
            <motion.li whileHover={{ scale: 1.05, originX: 0, transition: { duration: 0.1 } }}>
              <a href="/about" className="hover:text-teal-400 transition-colors">About Us</a> {/* Changed to <a> */}
            </motion.li>
            <motion.li whileHover={{ scale: 1.05, originX: 0, transition: { duration: 0.1 } }}>
              <a href="/faq" className="hover:text-teal-400 transition-colors">FAQ</a> {/* Changed to <a> */}
            </motion.li>
            <motion.li whileHover={{ scale: 1.05, originX: 0, transition: { duration: 0.1 } }}>
              <a href="/contact" className="hover:text-teal-400 transition-colors">Contact</a> {/* Changed to <a> */}
            </motion.li>
            <motion.li whileHover={{ scale: 1.05, originX: 0, transition: { duration: 0.1 } }}>
              <a href="/booking" className="hover:text-teal-400 transition-colors">Book Now</a> {/* Changed to <a> */}
            </motion.li>
            <motion.li whileHover={{ scale: 1.05, originX: 0, transition: { duration: 0.1 } }}>
              <a href="/terms-and-conditions" className="hover:text-teal-400 transition-colors">Terms & Conditions</a> {/* Changed to <a> */}
            </motion.li>
          </ul>
        </motion.div>

        {/* Contact Us */}
        <motion.div variants={linkVariants}>
          <h4 className="text-xl font-bold text-white mb-4">Contact Us</h4>
          <ul className="space-y-4">
            {/* Contact list items with a glow effect on hover */}
            <motion.li whileHover={{ color: "#20c997", textShadow: "0 0 8px #20c997", transition: { duration: 0.1 } }} className="flex items-start transition-all">
              <Phone size={18} className="mr-2 text-teal-400 mt-1" />
              <div>
                <span className="block">8093011746</span>
                <span className="block text-xs text-neutral-400">Mon-Sun, 9 AM - 9 PM</span>
              </div>
            </motion.li>
            <motion.li whileHover={{ color: "#20c997", textShadow: "0 0 8px #20c997", transition: { duration: 0.1 } }} className="flex items-start transition-all">
              <Mail size={18} className="mr-2 text-teal-400 mt-1" />
              <div>
                <span className="block">srinibas@carrental.in</span> {/* Updated domain */}
                <span className="block text-xs text-neutral-400">support@carrental.in</span> {/* Updated domain */}
                <span className="block text-xs text-neutral-400">accounts@carrental.in</span> {/* Updated domain */}
                <span className="block text-xs text-neutral-400">24/7 Email Support</span>
              </div>
            </motion.li>
            <motion.li whileHover={{ color: "#20c997", textShadow: "0 0 8px #20c997", transition: { duration: 0.1 } }} className="flex items-start transition-all">
              <MapPin size={18} className="mr-2 text-teal-400 mt-1" />
              <div>
                <p className="text-sm">Car Rental Office, PLOT NO-18, KHATA NO-171/155, 1st FLOOR NEAR INDIAN OIL PETROL PUMP, SAMANTRAPUR, NUAGAON, Bhubaneswar, Odisha, 751002</p> {/* Updated name */}
                <span className="block text-xs text-neutral-400">Corporate Office</span>
              </div>
            </motion.li>
          </ul>
          {/* Quick Approval section moved here */}
          <div className="mt-8">
            <p className="font-semibold text-white flex items-center">
              <Hourglass size={18} className="mr-2 text-teal-400" /> Quick Approval in 24 Hours
            </p>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-neutral-700 mt-2 pt-2 text-sm relative z-10"> {/* Updated border color */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-neutral-500 mb-2 md:mb-0">
            © {new Date().getFullYear()} Car.Rental. All rights reserved. {/* Updated name */}
          </p>
          <motion.a 
            href="/terms-and-conditions" 
            className="text-neutral-500 transition-colors duration-300 relative group underline" // Added group for hover effect
            whileHover={{ 
              color: "#20c997", // Blue color on hover
              textShadow: "0 0 10px rgba(18, 168, 138, 0.8)", // Blue shadowy glow
              scale: 1.02 // Slight scale for emphasis
            }}
          >
            Terms & Conditions
          </motion.a>
        </div>
      </div>

      {/* Tailwind CSS custom animations and styles for the footer background */}
      <style>{`
        /* --- Footer Specific Background Animations --- */
        .background-blobs-container {
            width: 300%; 
            height: 300%; 
            top: -100%; 
            left: -100%; 
            position: absolute;
            filter: blur(30px); /* Tuned for more distinct glow */
        }

        .background-blob {
            position: absolute;
            border-radius: 50%; 
            opacity: 0.55; /* Higher opacity for clear visibility */
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-timing-function: ease-in-out;
            box-shadow: 0 0 100px rgba(0,255,255,0.6); /* Stronger internal glow for twinkling */
        }

        /* Tuned blob animations for precise movement and scale from image */
        .blob-sf-1 { /* Renamed for footer */
            width: 650px; height: 650px; 
            background: rgba(0, 100, 200, 0.9); /* Darker, more saturated blue */
            top: 10%; left: -5%;
            animation: blob-move-sf-1 30s ease-in-out infinite alternate; 
        }
        .blob-sf-2 { /* Renamed for footer */
            width: 750px; height: 750px; 
            background: rgba(100, 0, 150, 0.9); /* Darker, more saturated purple */
            bottom: 0%; right: -10%;
            animation: blob-move-sf-2 40s ease-in-out infinite alternate;
        }
        .blob-sf-3 { /* Renamed for footer */
            width: 600px; height: 600px; 
            background: rgba(0, 200, 200, 0.9); /* Darker, more saturated cyan */
            top: 70%; left: 20%;
            animation: blob-move-sf-3 25s ease-in-out infinite alternate; 
        }

        @keyframes blob-move-sf-1 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(700px, 750px) scale(1.4); } 
            100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes blob-move-sf-2 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-750px, -680px) scale(1.35); } 
            100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes blob-move-sf-3 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(680px, -720px) scale(0.65); } 
            100% { transform: translate(0, 0) scale(1); }
        }

        @keyframes animate-blob-group-move-footer {
            0% { transform: translate(-80%, -80%); } /* Increased starting offset for more range */
            25% { transform: translate(40%, -75%); }
            50% { transform: translate(-75%, 80%); }
            75% { transform: translate(80%, -40%); }
            100% { transform: translate(-80%, -80%); } 
        }
        .animate-blob-group-move-footer {
            animation: animate-blob-group-move-footer 120s linear infinite; /* Faster continuous flow for dynamism */
        }

        .background-lines-animation-footer {
            background-image: repeating-linear-gradient(45deg,
                rgba(255,255,255,0.3) 0px, /* Highest opacity for lines */
                rgba(255,255,255,0.3) 2px,
                transparent 2px,
                transparent 50px /* Even denser lines */
            );
            background-size: 100px 100px; /* Smaller background size for maximum density */
            animation: lines-pan-footer 40s linear infinite; /* Fastest and continuous */
        }

        /* Tuned lines animation for precise noticeable panning */
        @keyframes lines-pan-footer {
            0% { background-position: 0 0; }
            25% { background-position: 2000px 600px; } /* Most aggressive movement */
            50% { background-position: 1000px 2000px; } /* Most aggressive movement */
            75% { background-position: -600px 1000px; } /* Most aggressive movement */
            100% { background-position: 0 0; }
        }

        /* --- Custom Link Underline for Services List in Footer --- */
        .nav-link-underline-footer {
          display: inline-flex;
          position: relative;
          padding-bottom: 2px; /* Less padding than main nav */
          background-image: linear-gradient(to right, #20c997, #20c997); /* Teal-green color */
          background-size: 0% 1px; /* Thinner underline */
          background-repeat: no-repeat;
          background-position: 0% 100%;
          transition: background-size 0.3s ease-out, color 0.3s ease-out;
        }

        .nav-link-underline-footer:hover {
          background-size: 100% 1px;
          color: white; 
        }
      `}</style>
    </motion.footer>
  );
};

export default SiteFooter;


// "use client" // Needed for Framer Motion

// import React, { useState, useRef, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { motion, AnimatePresence, useInView } from 'framer-motion';
// import {
//   Phone, MapPin, Mail, Star, Users, Briefcase, Plane, Map, Gift, Waypoints, Truck, Heart, UserCheck, Award, Hourglass, Facebook, Twitter, Instagram, Linkedin, Wifi, CreditCard, Clock, ChevronDown // Added relevant Lucide icons for footer
// } from 'lucide-react'; // All necessary Lucide icons for various sections

// const SiteFooter = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [service, setService] = useState('');
//   const footerRef = useRef(null); // Ref for the whole footer to detect inView status
//   const isInView = useInView(footerRef, { once: true, amount: 0.2 }); // Trigger animations when 20% of footer is in view


//   const servicesList = [
//     'Airport Pickup',
//     'Corporate Booking',
//     'Local',
//     'Marriage Booking',
//     'Round Trip',
//     'Spare Driver',
//     'VIP Booking',
//     'One Way'
//   ];

//   // Function to handle form submission and open WhatsApp
//   const handleWhatsAppSubmit = (e) => {
//     e.preventDefault();
//     // Using a custom message box instead of alert()
//     const messageBox = document.createElement('div');
//     messageBox.className = 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-6 rounded-lg shadow-lg z-50';
//     messageBox.innerHTML = `
//       <p class="text-center font-semibold text-lg mb-4">Please fill out all fields.</p>
//       <div class="flex justify-center">
//         <button onclick="this.parentElement.parentElement.remove()" class="px-4 py-2 bg-gradient-to-r from-teal-600 to-green-500 rounded-lg">OK</button>
//       </div>
//     `;
//     if (!name || !email || !service) {
//       document.body.appendChild(messageBox);
//       return;
//     }

//     const phoneNumber = '8093011746';
//     const message = `Hello Cab Pilot, I would like to get in touch. My name is ${name}. My email is ${email}. I am interested in your ${service} service.`;
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   // Define variants for staggered animations
//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         delayChildren: 0.2, // Delay before child animations start
//         staggerChildren: 0.1 // Staggers the animation of child elements
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
//   };

//   const linkVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
//   };

//   return (
//     <motion.footer 
//       className="relative bg-black text-neutral-400 py-12 overflow-hidden" // Re-added relative and overflow-hidden
//       ref={footerRef} // Attach ref here
//       variants={containerVariants}
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"} // Animate when in view
//     >
//       {/* Dynamic background layers (similar to homepage) - RE-ADDED */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         {/* Main background gradient, very subtle and dark */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F0F] via-black to-[#0A0A0A]"></div>

//         {/* Dynamic, shadowy particle layer using multiple CSS blobs/gradients */}
//         <div className="absolute inset-0 background-blobs-container animate-blob-group-move-footer">
//           <div className="background-blob blob-f-1"></div>
//           <div className="background-blob blob-f-2"></div>
//           <div className="background-blob blob-f-3"></div>
//         </div>

//         {/* Subtle, moving diagonal lines/texture */}
//         <div className="absolute inset-0 background-lines-animation-footer opacity-5"></div>
//       </div>

//       {/* Newsletter Form Section (Full-width row) */}
//       <div className="container mx-auto px-4 relative z-10 mb-12">
//         <motion.div variants={itemVariants}>
//           {/* Animated Header Section with new contact info and rating */}
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
//             <div className="flex-1">
//               <motion.h4
//                 className="text-2xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400"
//                 variants={itemVariants}
//               >
//                 Stay Updated with Car Rental
//               </motion.h4>
//               <motion.p
//                 className="text-sm leading-relaxed text-neutral-300"
//                 variants={itemVariants}
//               >
//                 Get the latest updates on luxury car offers, travel tips, and exclusive deals.
//               </motion.p>
//             </div>
            
//             {/* New Contact and Rating Info */}
//             <div className="flex flex-col gap-4 text-sm font-semibold">
//               <motion.div
//                 className="flex items-center space-x-2 text-amber-400" // Changed to amber for consistency with homepage testimonials
//                 variants={itemVariants}
//               >
//                 <Star size={18} className="fill-amber-400" />
//                 <Star size={18} className="fill-amber-400" />
//                 <Star size={18} className="fill-amber-400" />
//                 <Star size={18} className="fill-amber-400" />
//                 <Star size={18} className="fill-amber-400" />
//                 <span className="text-neutral-300 ml-2">Rated 4.9 Stars on Google</span> {/* Updated rating text */}
//               </motion.div>
//               <motion.a 
//                 href="https://www.google.com/search?q=Car+Rental+review" // Generic search link
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="text-sm text-teal-400 underline hover:no-underline transition-all duration-300" // Teal link color
//                 variants={itemVariants}
//               >
//                 Review on Google
//               </motion.a>
//             </div>
//           </div>

//           {/* New form layout with name, email, service, and submit button */}
//           <form onSubmit={handleWhatsAppSubmit} className="flex flex-col md:flex-row items-center gap-4">
//             <motion.input 
//               type="text" 
//               placeholder="Your Name" 
//               className="w-full md:w-auto flex-grow px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 border border-neutral-600" // Updated bg, border, focus ring
//               whileHover={{ scale: 1.02 }}
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <motion.input 
//               type="email" 
//               placeholder="Your Email" 
//               className="w-full md:w-auto flex-grow px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 border border-neutral-600" 
//               whileHover={{ scale: 1.02 }}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <motion.select
//               className="w-full md:w-auto flex-grow px-4 py-3 bg-neutral-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 border border-neutral-600"
//               whileHover={{ scale: 1.02 }}
//               value={service}
//               onChange={(e) => setService(e.target.value)}
//             >
//               <option value="">Select a service</option>
//               {servicesList.map((svc) => (
//                 <option key={svc} value={svc}>{svc}</option>
//               ))}
//             </motion.select>
//             <motion.button 
//               type="submit"
//               className="px-6 py-3 bg-gradient-to-r from-teal-600 to-green-500 text-white font-semibold rounded-lg shadow-lg transition-colors w-full md:w-auto" // Updated button gradient
//               whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,255,0.5)" }} // Teal glow
//               whileTap={{ scale: 0.95 }}
//             >
//               Submit
//             </motion.button>
//           </form>
//           <hr className="border-t border-neutral-700 mt-8 pt-4 relative z-10" /> {/* Updated border color */}
//         </motion.div>
//       </div>

//       {/* Main Content Grid (Four columns) */}
//       <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//         {/* Company Info with Social Media */}
//         <motion.div variants={linkVariants}>
//           <h4 className="text-xl font-bold text-white mb-4">Your reliable partner for luxury transportation.</h4> {/* Updated text */}
//           <p className="text-sm leading-relaxed mb-4 text-neutral-300"> {/* Updated text color */}
//             We ensure safe, timely, and hassle-free rides with our premium fleet.
//           </p>
//           {/* Icons with a subtle scale and a subtle, smooth rotation on hover */}
//           <div className="flex items-center space-x-4 mt-4">
//             <motion.a 
//               href="#" 
//               className="text-neutral-400 hover:text-white transition-colors text-2xl" // Updated default color
//               whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.2 } }}
//               aria-label="Facebook"
//             >
//               <Facebook strokeWidth={1.5}/> {/* Used Lucide icon */}
//             </motion.a>
//             <motion.a 
//               href="#" 
//               className="text-neutral-400 hover:text-white transition-colors text-2xl"
//               whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.2 } }}
//               aria-label="Twitter"
//             >
//               <Twitter strokeWidth={1.5}/> {/* Used Lucide icon */}
//             </motion.a>
//             <motion.a 
//               href="#" 
//               className="text-neutral-400 hover:text-white transition-colors text-2xl"
//               whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.2 } }}
//               aria-label="Instagram"
//             >
//               <Instagram strokeWidth={1.5}/> {/* Used Lucide icon */}
//             </motion.a>
//             <motion.a 
//               href="#" 
//               className="text-neutral-400 hover:text-white transition-colors text-2xl"
//               whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.2 } }}
//               aria-label="LinkedIn"
//             >
//               <Linkedin strokeWidth={1.5}/> {/* Used Lucide icon */}
//             </motion.a>
//           </div>
//         </motion.div>

//         {/* Our Services */}
//         <motion.div variants={linkVariants}>
//           <h4 className="text-xl font-bold text-white mb-4">Our Services</h4>
//           <ul className="space-y-2">
//             {/* List items with a subtle hover effect */}
//             <motion.li 
//               whileHover={{ x: 10, color: "#20c997", transition: { duration: 0.1 } }} // Teal-green hover color
//             >
//               <NavLink to="/services/airport-pickup" className="flex items-center nav-link-underline-footer">
//                 <Plane size={18} className="mr-2 text-teal-400" /> Airport Pickup
//               </NavLink>
//             </motion.li>
//             <motion.li 
//               whileHover={{ x: 10, color: "#20c997", transition: { duration: 0.1 } }}
//             >
//               <NavLink to="/services/corporate" className="flex items-center nav-link-underline-footer">
//                 <Briefcase size={18} className="mr-2 text-teal-400" /> Corporate Booking
//               </NavLink>
//             </motion.li>
//             <motion.li 
//               whileHover={{ x: 10, color: "#20c997", transition: { duration: 0.1 } }}
//             >
//               <NavLink to="/services/local-booking" className="flex items-center nav-link-underline-footer">
//                 <Map size={18} className="mr-2 text-teal-400" /> Local
//               </NavLink>
//             </motion.li>
//             <motion.li 
//               whileHover={{ x: 10, color: "#20c997", transition: { duration: 0.1 } }}
//             >
//               <NavLink to="/services/wedding" className="flex items-center nav-link-underline-footer">
//                 <Heart size={18} className="mr-2 text-teal-400" /> Marriage Booking
//               </NavLink>
//             </motion.li>
//             <motion.li 
//               whileHover={{ x: 10, color: "#20c997", transition: { duration: 0.1 } }}
//             >
//               <NavLink to="/services/round-trip" className="flex items-center nav-link-underline-footer">
//                 <Waypoints size={18} className="mr-2 text-teal-400" /> Round Trip
//               </NavLink>
//             </motion.li>
//             <motion.li 
//               whileHover={{ x: 10, color: "#20c997", transition: { duration: 0.1 } }}
//             >
//               <NavLink to="/services/spare-driver" className="flex items-center nav-link-underline-footer">
//                 <UserCheck size={18} className="mr-2 text-teal-400" /> Spare Driver
//               </NavLink>
//             </motion.li>
//             <motion.li 
//               whileHover={{ x: 10, color: "#20c997", transition: { duration: 0.1 } }}
//             >
//               <NavLink to="/services/vip" className="flex items-center nav-link-underline-footer">
//                 <Award size={18} className="mr-2 text-teal-400" /> VIP Booking
//               </NavLink>
//             </motion.li>
//             <motion.li 
//               whileHover={{ x: 10, color: "#20c997", transition: { duration: 0.1 } }}
//             >
//               <NavLink to="/services/one-way" className="flex items-center nav-link-underline-footer">
//                 <Truck size={18} className="mr-2 text-teal-400" /> One Way
//               </NavLink>
//             </motion.li>
//           </ul>
//         </motion.div>

//         {/* Quick Links */}
//         <motion.div variants={linkVariants}>
//           <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
//           <ul className="space-y-3">
//             {/* Another style of hover animation, a simple scale-up effect */}
//             <motion.li whileHover={{ scale: 1.05, originX: 0, transition: { duration: 0.1 } }}>
//               <NavLink to="/about" className="hover:text-teal-400 transition-colors">About Us</NavLink>
//             </motion.li>
//             <motion.li whileHover={{ scale: 1.05, originX: 0, transition: { duration: 0.1 } }}>
//               <NavLink to="/faq" className="hover:text-teal-400 transition-colors">FAQ</NavLink>
//             </motion.li>
//             <motion.li whileHover={{ scale: 1.05, originX: 0, transition: { duration: 0.1 } }}>
//               <NavLink to="/contact" className="hover:text-teal-400 transition-colors">Contact</NavLink>
//             </motion.li>
//             <motion.li whileHover={{ scale: 1.05, originX: 0, transition: { duration: 0.1 } }}>
//               <NavLink to="/booking" className="hover:text-teal-400 transition-colors">Book Now</NavLink>
//             </motion.li>
//             <motion.li whileHover={{ scale: 1.05, originX: 0, transition: { duration: 0.1 } }}>
//               <NavLink to="/terms-and-conditions" className="hover:text-teal-400 transition-colors">Terms & Conditions</NavLink>
//             </motion.li>
//           </ul>
//         </motion.div>

//         {/* Contact Us */}
//         <motion.div variants={linkVariants}>
//           <h4 className="text-xl font-bold text-white mb-4">Contact Us</h4>
//           <ul className="space-y-4">
//             {/* Contact list items with a glow effect on hover */}
//             <motion.li whileHover={{ color: "#20c997", textShadow: "0 0 8px #20c997", transition: { duration: 0.1 } }} className="flex items-start transition-all">
//               <Phone size={18} className="mr-2 text-teal-400 mt-1" />
//               <div>
//                 <span className="block">8093011746</span>
//                 <span className="block text-xs text-neutral-400">Mon-Sun, 9 AM - 9 PM</span>
//               </div>
//             </motion.li>
//             <motion.li whileHover={{ color: "#20c997", textShadow: "0 0 8px #20c997", transition: { duration: 0.1 } }} className="flex items-start transition-all">
//               <Mail size={18} className="mr-2 text-teal-400 mt-1" />
//               <div>
//                 <span className="block">srinibas@carrental.in</span> {/* Updated domain */}
//                 <span className="block text-xs text-neutral-400">support@carrental.in</span> {/* Updated domain */}
//                 <span className="block text-xs text-neutral-400">accounts@carrental.in</span> {/* Updated domain */}
//                 <span className="block text-xs text-neutral-400">24/7 Email Support</span>
//               </div>
//             </motion.li>
//             <motion.li whileHover={{ color: "#20c997", textShadow: "0 0 8px #20c997", transition: { duration: 0.1 } }} className="flex items-start transition-all">
//               <MapPin size={18} className="mr-2 text-teal-400 mt-1" />
//               <div>
//                 <p className="text-sm">Car Rental Office, PLOT NO-18, KHATA NO-171/155, 1st FLOOR NEAR INDIAN OIL PETROL PUMP, SAMANTRAPUR, NUAGAON, Bhubaneswar, Odisha, 751002</p> {/* Updated name */}
//                 <span className="block text-xs text-neutral-400">Corporate Office</span>
//               </div>
//             </motion.li>
//           </ul>
//           {/* Quick Approval section moved here */}
//           <div className="mt-8">
//             <p className="font-semibold text-white flex items-center">
//               <Hourglass size={18} className="mr-2 text-teal-400" /> Quick Approval in 24 Hours
//             </p>
//           </div>
//         </motion.div>
//       </div>

//       <div className="border-t border-neutral-700 mt-2 pt-2 text-sm relative z-10"> {/* Updated border color */}
//         <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
//           <p className="text-neutral-500 mb-2 md:mb-0">
//             © {new Date().getFullYear()} Car.Rental. All rights reserved. {/* Updated name */}
//           </p>
//           <NavLink to="/terms-and-conditions" className="text-neutral-500 hover:text-white transition-colors">
//             Terms & Conditions
//           </NavLink>
//         </div>
//       </div>

//       {/* Tailwind CSS custom animations and styles for the footer background - RE-ADDED */}
//       <style>{`
//         /* --- Footer Specific Background Animations --- */
//         .background-blobs-container {
//             width: 250%; /* Increased for more movement */
//             height: 250%; /* Increased for more movement */
//             top: -75%; /* Adjusted for centered movement */
//             left: -75%; /* Adjusted for centered movement */
//             position: absolute;
//             filter: blur(60px); /* Reduced blur for more visibility */
//         }

//         .background-blob {
//             position: absolute;
//             border-radius: 50%; 
//             opacity: 0.25; /* Increased opacity for clear visibility */
//             animation-iteration-count: infinite;
//             animation-direction: alternate;
//             animation-timing-function: ease-in-out;
//         }

//         /* Adjusted blob animations for more prominent sliding */
//         .blob-f-1 {
//             width: 450px; height: 450px; /* Larger blob */
//             background: rgba(0, 150, 255, 0.6); /* Stronger color */
//             top: 25%; left: 5%;
//             animation: blob-move-f-1 40s ease-in-out infinite alternate; /* Slightly faster */
//         }
//         .blob-f-2 {
//             width: 550px; height: 550px; /* Larger blob */
//             background: rgba(150, 50, 200, 0.6); /* Stronger color */
//             bottom: 10%; right: 0%;
//             animation: blob-move-f-2 50s ease-in-out infinite alternate;
//         }
//         .blob-f-3 {
//             width: 400px; height: 400px; /* Larger blob */
//             background: rgba(0, 255, 255, 0.6); /* Stronger color */
//             top: 55%; left: 25%;
//             animation: blob-move-f-3 35s ease-in-out infinite alternate; /* Slightly faster */
//         }

//         @keyframes blob-move-f-1 {
//             0% { transform: translate(0, 0) scale(1); }
//             50% { transform: translate(400px, 450px) scale(1.2); } /* More movement, more scale */
//             100% { transform: translate(0, 0) scale(1); }
//         }
//         @keyframes blob-move-f-2 {
//             0% { transform: translate(0, 0) scale(1); }
//             50% { transform: translate(-450px, -380px) scale(1.15); } /* More movement, more scale */
//             100% { transform: translate(0, 0) scale(1); }
//         }
//         @keyframes blob-move-f-3 {
//             0% { transform: translate(0, 0) scale(1); }
//             50% { transform: translate(380px, -420px) scale(0.85); } /* More movement, more scale */
//             100% { transform: translate(0, 0) scale(1); }
//         }

//         @keyframes animate-blob-group-move-footer {
//             0% { transform: translate(-50%, -50%); } /* Increased starting offset */
//             25% { transform: translate(25%, -45%); }
//             50% { transform: translate(-45%, 50%); }
//             75% { transform: translate(50%, -25%); }
//             100% { transform: translate(-50%, -50%); } /* Return to offset */
//         }
//         .animate-blob-group-move-footer {
//             animation: animate-blob-group-move-footer 200s linear infinite; /* Shorter duration for continuous flow */
//         }

//         .background-lines-animation-footer {
//             background-image: repeating-linear-gradient(45deg,
//                 rgba(255,255,255,0.1) 0px, /* Increased opacity for clear visibility */
//                 rgba(255,255,255,0.1) 2px,
//                 transparent 2px,
//                 transparent 100px /* Slightly smaller spacing for denser lines */
//             );
//             background-size: 200px 200px; /* Adjusted background size */
//             animation: lines-pan-footer 90s linear infinite; /* Shorter duration for continuous pan */
//         }

//         /* Adjusted lines animation for more noticeable panning */
//         @keyframes lines-pan-footer {
//             0% { background-position: 0 0; }
//             25% { background-position: 1200px 300px; } /* More aggressive movement */
//             50% { background-position: 600px 1200px; } /* More aggressive movement */
//             75% { background-position: -300px 600px; } /* More aggressive movement */
//             100% { background-position: 0 0; }
//         }

//         /* --- Custom Link Underline for Services List in Footer --- */
//         .nav-link-underline-footer {
//           display: inline-flex;
//           position: relative;
//           padding-bottom: 2px; /* Less padding than main nav */
//           background-image: linear-gradient(to right, #20c997, #20c997); /* Teal-green color */
//           background-size: 0% 1px; /* Thinner underline */
//           background-repeat: no-repeat;
//           background-position: 0% 100%;
//           transition: background-size 0.3s ease-out, color 0.3s ease-out;
//         }

//         .nav-link-underline-footer:hover {
//           background-size: 100% 1px;
//           color: white; 
//         }
//       `}</style>
//     </motion.footer>
//   );
// };

// export default SiteFooter;
