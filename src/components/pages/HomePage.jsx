"use client" // Needed for Framer Motion

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
// Assuming react-router-dom is used for NavLink
import { NavLink } from 'react-router-dom';
import {
  Car, Calendar, MapPin, Star, Shield, Clock, Phone, Award, Users, Fuel, Settings, CheckCircle, Headphones, CreditCard, MapIcon, Wrench, Wifi, TrendingUp, Globe, Heart, Trophy, Quote, ChevronLeft, ChevronRight, Menu, ArrowRight, DollarSign, BatteryCharging, Cloud, Gauge, UserCheck, ChevronDown, X, Lightbulb, Zap, Rocket // Added new Lucide icons
} from 'lucide-react'; // All necessary Lucide icons for various sections

// NOTE: In a real project, Navbar and Footer would be imported from separate files:
// import Navbar from './Navbar'; // Removed as per user request
// import Footer from './Footer';

// Helper Component: Animated Counter
const Counter = ({ from = 0, to, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Detect once when in view

  useEffect(() => {
    if (isInView) { // Only start animation if in view
      let start;
      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        const easedProgress = easeOutQuad(percentage); // Apply easing for smoother animation
        setCount(Math.floor(easedProgress * (to - from) + from));

        if (progress < duration) {
          requestAnimationFrame(animate);
        } else {
          setCount(to); // Ensure final value is exact
        }
      };
      requestAnimationFrame(animate);

      function easeOutQuad(t) {
        return t * (2 - t);
      }
    }
  }, [to, duration, from, isInView]); // Add isInView as a dependency

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};


// --- Footer Component (Defined inline for self-containment in this immersive) ---
const Footer = () => {
  return (
    <footer className="bg-black text-neutral-400 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-teal-400 mb-4">Car Rental</h3>
          <p className="text-sm mb-2">A Unit Of JBSG Consultancy</p>
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-teal-400 transition-colors duration-200">About Us</a></li>
            <li><a href="/services" className="hover:text-teal-400 transition-colors duration-200">Services</a></li>
            <li><a href="/vehicles" className="hover:text-teal-400 transition-colors duration-200">Our Fleet</a></li>
            <li><a href="/faq" className="hover:text-teal-400 transition-colors duration-200">FAQs</a></li>
            <li><a href="/blog" className="hover:text-teal-400 transition-colors duration-200">Blog</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Popular Services</h3>
          <ul className="space-y-2">
            <li><a href="/services/airport-pickup" className="hover:text-teal-400 transition-colors duration-200">Airport Pickup</a></li>
            <li><a href="/services/corporate" className="hover:text-teal-400 transition-colors duration-200">Corporate Booking</a></li>
            <li><a href="/services/wedding" className="hover:text-teal-400 transition-colors duration-200">Marriage Booking</a></li>
            <li><a href="/services/vip" className="hover:text-teal-400 transition-colors duration-200">VIP Booking</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm flex items-center mb-2"><Phone size={16} className="mr-2 text-teal-400" /> +91 8093011746</p>
          <p className="text-sm flex items-center mb-2"><MapPin size={16} className="mr-2 text-teal-400" /> 123 Luxury Lane, City, State</p>
          <p className="text-sm">info@carrental.com</p>
          <div className="flex space-x-4 mt-4">
            {/* Social Media Icons (placeholders) */}
            <a href="#" className="text-neutral-300 hover:text-teal-400 transition-colors duration-200"><i className="fab fa-facebook-f text-xl"></i></a>
            <a href="#" className="text-neutral-300 hover:text-teal-400 transition-colors duration-200"><i className="fab fa-twitter text-xl"></i></a>
            <a href="#" className="text-neutral-300 hover:text-teal-400 transition-colors duration-200"><i className="fab fa-instagram text-xl"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};


// --- TestimonialCard Component (from your previous Testimonials.jsx) ---
const TestimonialCard = ({ testimonial, isActive }) => (
  <motion.div
    className={`bg-white rounded-2xl p-8 shadow-xl border border-amber-100 transition-all duration-300 ${
      isActive ? 'scale-105 shadow-2xl' : 'scale-100'
    }`}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-4 mb-6">
      <img
        src={testimonial.avatar || "https://placehold.co/100x100/fec89a/ffffff?text=AV"}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover border-4 border-amber-200"
      />
      <div>
        <h4 className="text-lg font-bold text-gray-900 font-heading">{testimonial.name}</h4>
        <p className="text-gray-600 text-sm">{testimonial.role}</p>
        <div className="flex items-center gap-1 mt-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>
    </div>
    
    <div className="relative">
      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-amber-200" />
      <p className="text-gray-700 leading-relaxed text-lg italic pl-6">
        {testimonial.content}
      </p>
    </div>
    
    <div className="mt-6 pt-6 border-t border-gray-100">
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{testimonial.location}</span>
        <span>{testimonial.date}</span>
      </div>
    </div>
  </motion.div>
)

// --- TestimonialsAndReviews Component (from your previous Testimonials.jsx) ---
const TestimonialsAndReviews = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Executive",
      avatar: "https://placehold.co/100x100/fec89a/ffffff?text=SJ",
      content: "LuxeDrive exceeded all my expectations! The Mercedes S-Class was immaculate, and the service was absolutely premium. From booking to return, everything was seamless. I'll definitely be using them for all my business trips.",
      location: "New York, NY",
      date: "December 2024"
    },
    {
      name: "Michael Chen",
      role: "Wedding Planner",
      avatar: "https://placehold.co/100x100/fec89a/ffffff?text=MC", 
      content: "We needed luxury transportation for a high-profile wedding, and LuxeDrive delivered beyond our dreams. The fleet was stunning, drivers were professional, and the attention to detail was remarkable. Our clients were thrilled!",
      location: "Los Angeles, CA",
      date: "November 2024"
    },
    {
      name: "Emma Rodriguez",
      role: "Travel Blogger",
      avatar: "https://placehold.co/100x100/fec89a/ffffff?text=ER",
      content: "As someone who travels frequently, I can say LuxeDrive is in a league of its own. The Porsche 911 I rented was a dream to drive, and their 24/7 support made my cross-country trip worry-free. Absolutely phenomenal service!",
      location: "Miami, FL", 
      date: "October 2024"
    },
    {
      name: "David Thompson",
      role: "Tech Entrepreneur",
      avatar: "https://placehold.co/100x100/fec89a/ffffff?text=DT",
      content: "The Tesla Model S from LuxeDrive was perfect for my Silicon Valley meetings. Clean, high-tech, and environmentally conscious - exactly what I needed. The delivery service to my hotel was incredibly convenient.",
      location: "San Francisco, CA",
      date: "December 2024"
    },
    {
      name: "Lisa Park",
      role: "Fashion Designer",
      avatar: "https://placehold.co/100x100/fec89a/ffffff?text=LP",
      content: "For Fashion Week, I needed something that matched my style and LuxeDrive's Range Rover Evoque was perfect. The booking process was smooth, the car was pristine, and the experience was absolutely luxurious from start to finish.",
      location: "Chicago, IL",
      date: "September 2024"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 font-heading">
            What Our
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their 
            premium car rental experience with LuxeDrive.
          </p>
        </motion.div>

        {/* Main testimonial carousel */}
        <div className="relative mb-16">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <TestimonialCard 
                key={currentTestimonial}
                testimonial={testimonials[currentTestimonial]} 
                isActive={true}
              />
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-amber-200 flex items-center justify-center hover:bg-amber-50 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-amber-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-amber-200 flex items-center justify-center hover:bg-amber-50 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-amber-600" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial 
                    ? 'bg-amber-600 w-8' 
                    : 'bg-amber-200 hover:bg-amber-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Review summary grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-black text-gray-900 mb-2 font-heading">4.9/5</div>
            <div className="text-gray-600 mb-4">Average Rating</div>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-black text-gray-900 mb-2 font-heading">98%</div>
            <div className="text-gray-600 mb-4">Would Recommend</div>
            <div className="text-sm text-gray-500">Based on 10,000+ reviews</div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-black text-gray-900 mb-2 font-heading">#1</div>
            <div className="text-gray-600 mb-4">Luxury Car Rental</div>
            <div className="text-sm text-gray-500">Customer Choice Awards 2024</div>
          </motion.div>
        </div>

        {/* Review platforms */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Trusted Across All Platforms</h3>
            <p className="text-gray-600">See what customers are saying about us on major review platforms</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="text-2xl font-bold text-gray-900 mb-1">4.9/5</div>
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-sm text-gray-600 font-medium">Google Reviews</div>
              <div className="text-xs text-gray-500">2,847 reviews</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="text-2xl font-bold text-gray-900 mb-1">4.8/5</div>
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-sm text-gray-600 font-medium">Trustpilot</div>
              <div className="text-xs text-gray-500">1,923 reviews</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="text-2xl font-bold text-gray-900 mb-1">4.9/5</div>
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-sm text-gray-600 font-medium">Yelp</div>
              <div className="text-xs text-gray-500">1,456 reviews</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="text-2xl font-bold text-gray-900 mb-1">4.7/5</div>
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-sm text-gray-600 font-medium">Facebook</div>
              <div className="text-xs text-gray-500">3,621 reviews</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Hero Section Component ---
const HeroSection = () => {
  // Define all 8 service options with their icons
  const serviceOptions = [
    { id: 'airport-pickup', name: 'Airport Transfers', icon: <TrendingUp size={20} className="mr-2" /> },
    { id: 'local', name: 'Local Booking', icon: <MapPin size={20} className="mr-2" /> },
    { id: 'corporate', name: 'Corporate Booking', icon: <Users size={20} className="mr-2" /> },
    { id: 'vip', name: 'VIP Booking', icon: <Award size={20} className="mr-2" /> },
    { id: 'one-way', name: 'One Way', icon: <ArrowRight size={20} className="mr-2" /> },
    { id: 'round-trip', name: 'Round Trip', icon: <Globe size={20} className="mr-2" /> },
    { id: 'wedding', name: 'Wedding', icon: <Heart size={20} className="mr-2" /> },
    { id: 'spare-driver', name: 'Spare Driver', icon: <UserCheck size={20} className="mr-2" /> },
  ];

  // Initialize with the ID of the first service option, so it's open by default
  const [selectedService, setSelectedService] = useState(serviceOptions[0].id);

  const renderBookingFormContent = () => {
    // Determine initial/exit X and Y values for animation based on selectedService
    // This allows for dynamic "slide from" direction
    const initialOffsets = {
      'airport-pickup': { y: 50, x: -50 },
      'local': { y: -50, x: 50 },
      'corporate': { y: 50, x: -50 },
      'vip': { y: -50, x: 50 },
      'one-way': { y: 50, x: -50 },
      'round-trip': { y: -50, x: 50 },
      'wedding': { y: 50, x: -50 },
      'spare-driver': { y: -50, x: 50 },
    };

    const formLayout = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"; // Changed to 3 columns for more inputs
    const inputStyle = "shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-neutral-700 border-neutral-600 text-white placeholder-neutral-400";
    const labelStyle = "block text-neutral-300 text-sm font-bold mb-2";
    const submitButtonStyle = "lg:col-span-3 mt-4 px-8 py-3 bg-gradient-to-r from-teal-600 to-green-500 text-white font-bold rounded-lg shadow-xl transition-all duration-300 hover:scale-105";

    switch (selectedService) {
      case 'airport-pickup':
        return (
          <motion.div
            key="airport-form"
            initial={{ opacity: 0, ...initialOffsets[selectedService] }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, ...initialOffsets[selectedService] }} // Exit to the same direction it came from
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Airport Transfers</h3>
            <form className={formLayout}>
              <div><label htmlFor="apPickupLocation" className={labelStyle}>Pickup Location</label><input type="text" id="apPickupLocation" className={inputStyle} placeholder="e.g., Airport Terminal 1" /></div>
              <div><label htmlFor="apDropoffLocation" className={labelStyle}>Drop-off Location</label><input type="text" id="apDropoffLocation" className={inputStyle} placeholder="e.g., Hotel Grand" /></div>
              <div><label htmlFor="apPickupDate" className={labelStyle}>Pickup Date</label><input type="date" id="apPickupDate" className={inputStyle} /></div>
              <div><label htmlFor="apPickupTime" className={labelStyle}>Pickup Time</label><input type="time" id="apPickupTime" className={inputStyle} /></div>
              <div><label htmlFor="apCarType" className={labelStyle}>Preferred Car Type</label><select id="apCarType" className={inputStyle}><option>Luxury Sedan</option><option>Luxury SUV</option><option>Sports Car</option></select></div>
              <div className="lg:col-span-1"><label htmlFor="apFlightNumber" className={labelStyle}>Flight Number (Optional)</label><input type="text" id="apFlightNumber" className={inputStyle} placeholder="e.g., BA249" /></div>
              <button type="submit" className={submitButtonStyle}>Book Airport Transfer</button>
            </form>
          </motion.div>
        );
      case 'local':
        return (
          <motion.div
            key="local-form"
            initial={{ opacity: 0, ...initialOffsets[selectedService] }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, ...initialOffsets[selectedService] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Local Booking</h3>
            <form className={formLayout}>
              <div><label htmlFor="lbPickupLocation" className={labelStyle}>Pickup Location</label><input type="text" id="lbPickupLocation" className={inputStyle} placeholder="e.g., Your Home Address" /></div>
              <div><label htmlFor="lbDestination" className={labelStyle}>Destination</label><input type="text" id="lbDestination" className={inputStyle} placeholder="e.g., Local Attraction" /></div>
              <div><label htmlFor="lbDate" className={labelStyle}>Date</label><input type="date" id="lbDate" className={inputStyle} /></div>
              <div><label htmlFor="lbTime" className={labelStyle}>Time</label><input type="time" id="lbTime" className={inputStyle} /></div>
              <div><label htmlFor="lbPassengers" className={labelStyle}>Number of Passengers</label><input type="number" id="lbPassengers" className={inputStyle} min="1" placeholder="e.g., 4" /></div>
              <div><label htmlFor="lbHours" className={labelStyle}>Estimated Hours</label><input type="number" id="lbHours" className={inputStyle} min="1" placeholder="e.g., 3" /></div>
              <button type="submit" className={submitButtonStyle}>Book Local Ride</button>
            </form>
          </motion.div>
        );
      case 'corporate':
        return (
          <motion.div
            key="corporate-form"
            initial={{ opacity: 0, ...initialOffsets[selectedService] }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, ...initialOffsets[selectedService] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Corporate Booking</h3>
            <form className={formLayout}>
              <div><label htmlFor="cbCompanyName" className={labelStyle}>Company Name</label><input type="text" id="cbCompanyName" className={inputStyle} placeholder="Your Company" /></div>
              <div><label htmlFor="cbContactPerson" className={labelStyle}>Contact Person</label><input type="text" id="cbContactPerson" className={inputStyle} placeholder="Contact Person Name" /></div>
              <div><label htmlFor="cbStartDate" className={labelStyle}>Start Date</label><input type="date" id="cbStartDate" className={inputStyle} /></div>
              <div><label htmlFor="cbEndDate" className={labelStyle}>End Date</label><input type="date" id="cbEndDate" className={inputStyle} /></div>
              <div><label htmlFor="cbCarPreference" className={labelStyle}>Car Preference</label><input type="text" id="cbCarPreference" className={inputStyle} placeholder="e.g., Executive Sedans" /></div>
              <div><label htmlFor="cbTrips" className={labelStyle}>Estimated Trips/Month</label><input type="number" id="cbTrips" className={inputStyle} placeholder="e.g., 10" /></div>
              <div className="lg:col-span-3"><label htmlFor="cbRequirements" className={labelStyle}>Special Requirements</label><textarea id="cbRequirements" rows="3" className={inputStyle} placeholder="e.g., Chauffeur service, multiple offices"></textarea></div>
              <button type="submit" className={submitButtonStyle}>Submit Corporate Request</button>
            </form>
          </motion.div>
        );
      case 'vip':
        return (
          <motion.div
            key="vip-form"
            initial={{ opacity: 0, ...initialOffsets[selectedService] }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, ...initialOffsets[selectedService] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">VIP Booking</h3>
            <form className={formLayout}>
              <div><label htmlFor="vipClientName" className={labelStyle}>Client Name</label><input type="text" id="vipClientName" className={inputStyle} placeholder="VIP Client Name" /></div>
              <div><label htmlFor="vipContact" className={labelStyle}>Contact Number</label><input type="tel" id="vipContact" className={inputStyle} placeholder="+91 XXXXXXXXXX" /></div>
              <div><label htmlFor="vipDate" className={labelStyle}>Service Date</label><input type="date" id="vipDate" className={inputStyle} /></div>
              <div><label htmlFor="vipTime" className={labelStyle}>Service Time</label><input type="time" id="vipTime" className={inputStyle} /></div>
              <div><label htmlFor="vipCar" className={labelStyle}>Specific Car Model</label><input type="text" id="vipCar" className={inputStyle} placeholder="e.g., Rolls-Royce Phantom" /></div>
              <div><label htmlFor="vipChauffeur" className={labelStyle}>Chauffeur Required?</label><select id="vipChauffeur" className={inputStyle}><option>Yes</option><option>No</option></select></div>
              <div className="lg:col-span-3"><label htmlFor="vipDetails" className={labelStyle}>Event Details / Special Notes</label><textarea id="vipDetails" rows="3" className={inputStyle} placeholder="e.g., Red carpet arrival, security, specific route"></textarea></div>
              <button type="submit" className={submitButtonStyle}>Request VIP Service</button>
            </form>
          </motion.div>
        );
      case 'one-way':
        return (
          <motion.div
            key="one-way-form"
            initial={{ opacity: 0, ...initialOffsets[selectedService] }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, ...initialOffsets[selectedService] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">One-Way Trip Booking</h3>
            <form className={formLayout}>
              <div><label htmlFor="owPickupLocation" className={labelStyle}>Pickup Location</label><input type="text" id="owPickupLocation" className={inputStyle} placeholder="e.g., City A, Airport" /></div>
              <div><label htmlFor="owDropoffLocation" className={labelStyle}>Drop-off Location</label><input type="text" id="owDropoffLocation" className={inputStyle} placeholder="e.g., City B, Hotel" /></div>
              <div><label htmlFor="owDate" className={labelStyle}>Date</label><input type="date" id="owDate" className={inputStyle} /></div>
              <div><label htmlFor="owTime" className={labelStyle}>Time</label><input type="time" id="owTime" className={inputStyle} /></div>
              <div><label htmlFor="owCarType" className={labelStyle}>Preferred Car Category</label><select id="owCarType" className={inputStyle}><option>Luxury Sedan</option><option>Luxury SUV</option></select></div>
              <div><label htmlFor="owPassengers" className={labelStyle}>Number of Passengers</label><input type="number" id="owPassengers" className={inputStyle} min="1" placeholder="e.g., 2" /></div>
              <button type="submit" className={submitButtonStyle}>Book One-Way Trip</button>
            </form>
          </motion.div>
        );
      case 'round-trip':
        return (
          <motion.div
            key="round-trip-form"
            initial={{ opacity: 0, ...initialOffsets[selectedService] }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, ...initialOffsets[selectedService] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Round Trip Booking</h3>
            <form className={formLayout}>
              <div><label htmlFor="rtPickupLocation" className={labelStyle}>Pickup Location</label><input type="text" id="rtPickupLocation" className={inputStyle} placeholder="e.g., Home Address" /></div>
              <div><label htmlFor="rtDestination" className={labelStyle}>Destination</label><input type="text" id="rtDestination" className={inputStyle} placeholder="e.g., Tourist Spot" /></div>
              <div><label htmlFor="rtPickupDate" className={labelStyle}>Pickup Date</label><input type="date" id="rtPickupDate" className={inputStyle} /></div>
              <div><label htmlFor="rtDropoffDate" className={labelStyle}>Drop-off Date</label><input type="date" id="rtDropoffDate" className={inputStyle} /></div>
              <div><label htmlFor="rtPickupTime" className={labelStyle}>Pickup Time</label><input type="time" id="rtPickupTime" className={inputStyle} /></div>
              <div><label htmlFor="rtCarType" className={labelStyle}>Preferred Car Type</label><select id="rtCarType" className={inputStyle}><option>Luxury Sedan</option><option>Luxury SUV</option><option>Sports Car</option></select></div>
              <button type="submit" className={submitButtonStyle}>Book Round Trip</button>
            </form>
          </motion.div>
        );
      case 'wedding':
        return (
          <motion.div
            key="wedding-form"
            initial={{ opacity: 0, ...initialOffsets[selectedService] }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, ...initialOffsets[selectedService] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Wedding Booking</h3>
            <form className={formLayout}>
              <div><label htmlFor="wbEventDate" className={labelStyle}>Event Date</label><input type="date" id="wbEventDate" className={inputStyle} /></div>
              <div><label htmlFor="wbEventTime" className={labelStyle}>Event Time</label><input type="time" id="wbEventTime" className={inputStyle} /></div>
              <div><label htmlFor="wbVenue" className={labelStyle}>Wedding Venue</label><input type="text" id="wbVenue" className={inputStyle} placeholder="e.g., Grand Ballroom" /></div>
              <div><label htmlFor="wbBrideGroom" className={labelStyle}>Bride/Groom Name</label><input type="text" id="wbBrideGroom" className={inputStyle} placeholder="e.g., John & Jane" /></div>
              <div className="lg:col-span-1"><label htmlFor="wbCarModel" className={labelStyle}>Preferred Car Model(s)</label><input type="text" id="wbCarModel" className={inputStyle} placeholder="e.g., Rolls-Royce Ghost" /></div>
              <div className="lg:col-span-1"><label htmlFor="wbChauffeur" className={labelStyle}>Chauffeur Included?</label><select id="wbChauffeur" className={inputStyle}><option>Yes</option><option>No</option></select></div>
              <div className="lg:col-span-3"><label htmlFor="wbNotes" className={labelStyle}>Special Notes (Decorations, etc.)</label><textarea id="wbNotes" rows="3" className={inputStyle} placeholder="e.g., Floral decorations, specific drop-offs"></textarea></div>
              <button type="submit" className={submitButtonStyle}>Inquire for Wedding</button>
            </form>
          </motion.div>
        );
      case 'spare-driver':
        return (
          <motion.div
            key="spare-driver-form"
            initial={{ opacity: 0, ...initialOffsets[selectedService] }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, ...initialOffsets[selectedService] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Spare Driver Service</h3>
            <form className={formLayout}>
              <div><label htmlFor="sdDate" className={labelStyle}>Date Required</label><input type="date" id="sdDate" className={inputStyle} /></div>
              <div><label htmlFor="sdTime" className={labelStyle}>Time Required</label><input type="time" id="sdTime" className={inputStyle} /></div>
              <div><label htmlFor="sdPickupLocation" className={labelStyle}>Pickup Location (for driver)</label><input type="text" id="sdPickupLocation" className={inputStyle} placeholder="e.g., Your Home Address" /></div>
              <div><label htmlFor="sdDuration" className={labelStyle}>Estimated Duration (Hours)</label><input type="number" id="sdDuration" className={inputStyle} min="1" placeholder="e.g., 6" /></div>
              <div className="lg:col-span-1"><label htmlFor="sdVehicleType" className={labelStyle}>Your Vehicle Type</label><input type="text" id="sdVehicleType" className={inputStyle} placeholder="e.g., Sedan, SUV" /></div>
              <div className="lg:col-span-1"><label htmlFor="sdDestination" className={labelStyle}>Destination (Optional)</label><input type="text" id="sdDestination" className={inputStyle} placeholder="e.g., Event Venue" /></div>
              <div className="lg:col-span-3"><label htmlFor="sdNotes" className={labelStyle}>Special Instructions for Driver</label><textarea id="sdNotes" rows="3" className={inputStyle} placeholder="e.g., Specific route, parking details"></textarea></div>
              <button type="submit" className={submitButtonStyle}>Book Spare Driver</button>
            </form>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-neutral-900 to-black text-white py-20 md:py-32 overflow-hidden">
      {/* Background blobs for dynamic effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Adjusted blob properties for more movement */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-teal-500 opacity-10 blur-3xl animate-blob-pulse top-[10%] left-[10%]"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-green-500 opacity-10 blur-3xl animate-blob-pulse-delay bottom-[15%] right-[10%]"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-500 opacity-10 blur-3xl animate-blob-pulse top-[40%] right-[20%]"></div>
        <div className="absolute w-[350px] h-[350px] rounded-full bg-purple-500 opacity-10 blur-3xl animate-blob-pulse-delay bottom-[30%] left-[25%]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your Journey, Car Rental Made it Easy
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-neutral-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience unparalleled freedom and sophistication with our premium fleet. Where every mile is a masterpiece.
        </motion.p>
        
        {/* Unified Booking Form Container */}
        <motion.div
          className="p-4 md:p-8 bg-neutral-800 rounded-2xl shadow-2xl border border-neutral-700 w-full max-w-5xl mx-auto mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Service selection buttons (as tabs within the form) */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {serviceOptions.map((service) => (
              <motion.button
                key={service.id}
                className={`flex-1 min-w-[120px] md:min-w-[150px] lg:min-w-[180px] px-3 md:px-4 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 flex items-center justify-center whitespace-nowrap
                  ${selectedService === service.id 
                    ? 'bg-gradient-to-r from-teal-500 to-green-400 text-white shadow-md border border-teal-300'
                    : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600 hover:text-white border border-transparent'
                  }`}
                onClick={() => setSelectedService(service.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {service.icon} {service.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Dynamic Booking Form Content */}
          <AnimatePresence mode="wait">
            {selectedService && renderBookingFormContent()}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

// --- How It Works Section Component (Section 2) ---
const HowItWorksSection = () => {
  const steps = [
    { icon: MapPin, title: "Choose Location", description: "Select your convenient pickup and drop-off points from our extensive network." },
    { icon: Calendar, title: "Pick Dates", description: "Specify your desired rental start and end dates with flexibility." },
    { icon: Car, title: "Select Car", description: "Browse our luxurious and diverse fleet, then choose the perfect vehicle for your needs." },
    { icon: CreditCard, title: "Secure Payment", description: "Complete your booking safely and quickly through our encrypted payment gateway." },
    { icon: CheckCircle, title: "Enjoy Ride", description: "Pick up your impeccably maintained car and embark on your premium journey!" },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          How It Works: Your Seamless Rental Process
        </motion.h2>
        <motion.p 
          className="text-lg text-neutral-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Renting a luxury vehicle with us is straightforward and designed for your convenience. Follow these simple steps to begin your journey.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-neutral-800 p-6 rounded-lg shadow-lg border border-neutral-700 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <step.icon className="text-teal-400 mb-4" size={40} strokeWidth={1.5} />
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-neutral-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Featured Fleet / Car Showcase Section (Section 3) ---
const FeaturedFleetSection = () => {
  const cars = [
    { name: 'Mercedes-Benz S-Class', category: 'Luxury Sedan', image: 'https://placehold.co/400x250/2d3748/cbd5e0?text=Mercedes+S-Class' },
    { name: 'Porsche 911', category: 'Sports Car', image: 'https://placehold.co/400x250/2d3748/cbd5e0?text=Porsche+911' },
    { name: 'Range Rover Evoque', category: 'Luxury SUV', image: 'https://placehold.co/400x250/2d3748/cbd5e0?text=Range+Rover' },
    { name: 'Tesla Model S', category: 'Electric Luxury', image: 'https://placehold.co/400x250/2d3748/cbd5e0?text=Tesla+Model+S' },
    { name: 'Audi A8', category: 'Executive Sedan', image: 'https://placehold.co/400x250/2d3748/cbd5e0?text=Audi+A8' },
    { name: 'Lamborghini Huracan', category: 'Exotic Supercar', image: 'https://placehold.co/400x250/2d3748/cbd5e0?text=Lamborghini+Huracan' },
    { name: 'BMW X7', category: 'Premium SUV', image: 'https://placehold.co/400x250/2d3748/cbd5e0?text=BMW+X7' },
    { name: 'Rolls-Royce Ghost', category: 'Ultra Luxury', image: 'https://placehold.co/400x250/2d3748/cbd5e0?text=Rolls-Royce+Ghost' },
  ];

  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Discover Our Exquisite Fleet
        </motion.h2>
        <motion.p 
          className="text-lg text-neutral-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Step into a world of automotive excellence. Our meticulously curated collection features the latest models from the world's leading luxury car manufacturers. Each vehicle is a testament to superior engineering and unparalleled design, ensuring an unforgettable driving experience.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              className="bg-neutral-800 rounded-lg shadow-lg border border-neutral-700 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(0,255,255,0.3)' }}
            >
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <p className="text-neutral-400 text-sm">{car.category}</p>
                <NavLink to="/vehicles" className="mt-4 inline-flex items-center text-teal-400 hover:text-white transition-colors">
                  View Details <ArrowRight size={16} className="ml-2" />
                </NavLink>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.button
          className="mt-12 px-8 py-4 bg-gradient-to-r from-teal-600 to-green-500 text-white font-bold rounded-lg shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3 mx-auto text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href='/vehicles'} // Example navigation
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <span>View All Vehicles</span>
          <ArrowRight size={24} />
        </motion.button>
      </div>
    </section>
  );
};

// --- Why Choose Us / Benefits Section (Section 4 - Expanded Features) ---
const WhyChooseUsSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Seamless Booking',
      description: 'Our intuitive online platform makes booking your dream car effortless and fast, available 24/7 at your fingertips, ensuring you spend less time planning and more time enjoying.',
    },
    {
      icon: Award,
      title: 'Award-Winning Service',
      description: 'Recognized for our excellence in luxury car rentals and unwavering commitment to customer satisfaction. We strive to set the industry standard for premium service.',
    },
    {
      icon: Users,
      title: 'Professional Chauffeurs',
      description: 'Opt for experienced, discreet, and courteous chauffeurs for a truly relaxed and elevated journey, whether for business meetings, special events, or leisurely exploration.',
    },
    {
      icon: Fuel,
      title: 'Diverse Fleet Options',
      description: 'A comprehensive selection of eco-friendly, high-performance, and ultra-luxury vehicles to suit every preference and occasion. Each car is meticulously maintained for peak performance.',
    },
    {
      icon: Settings,
      title: 'Customizable Packages',
      description: 'Tailor your rental experience with personalized features, flexible durations, and bespoke services to meet your unique demands, from exclusive add-ons to custom routes.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Concierge',
      description: 'Benefit from our 24/7 personalized assistance and support for all your rental needs, inquiries, and last-minute changes, ensuring peace of mind throughout your journey.',
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Why Choose Car Rental: Unmatched Advantages
        </motion.h2>
        <motion.p 
          className="text-lg text-neutral-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          We go beyond just providing cars; we deliver a premium experience crafted for your comfort, convenience, and peace of mind. Our commitment to excellence is reflected in every service we offer.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-neutral-800 p-8 rounded-lg shadow-lg border border-neutral-700 flex flex-col items-center text-center transform hover:scale-103 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(0,255,255,0.3)' }}
            >
              <feature.icon className="text-teal-400 mb-4" size={48} strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Counter Section 1: Customer Satisfaction (Section 5) ---
const CounterSection1 = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-900 to-black text-white text-center">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Our Success in Numbers
        </motion.h2>
        <motion.p 
          className="text-lg text-neutral-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Our growth and success are a direct reflection of the trust our clients place in us and our unwavering dedication to providing an exceptional luxury car rental experience.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Users className="text-teal-400 mb-4" size={60} strokeWidth={1.5} />
            <div className="text-5xl font-extrabold text-white">
              <Counter to={15000} suffix="+" />
            </div>
            <p className="text-xl text-neutral-300 mt-2">Happy Clients</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Clock className="text-teal-400 mb-4" size={60} strokeWidth={1.5} />
            <div className="text-5xl font-extrabold text-white">
              <Counter to={10} suffix="+" />
            </div>
            <p className="text-xl text-neutral-300 mt-2">Years in Business</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Star className="text-teal-400 mb-4 fill-teal-400" size={60} strokeWidth={1.5} />
            <div className="text-5xl font-extrabold text-white">
              <Counter to={4.9} duration={2500} suffix="/5" />
            </div>
            <p className="text-xl text-neutral-300 mt-2">Average Rating</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


// --- Testimonials and Reviews Section (Section 6 - From previous Testimonials.jsx) ---
// TestimonialCard and TestimonialsAndReviews are defined earlier, but effectively this is section 6
// from the conceptual homepage flow.

// --- Special Offers / Promotions Section (Section 7) ---
const SpecialOffersSection = () => {
  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Exclusive Offers & Promotions Just For You
        </motion.h2>
        <motion.p 
          className="text-lg text-neutral-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Take advantage of our limited-time offers and make your luxury car rental experience even more rewarding. We consistently update our promotions to provide you with the best value.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Weekend Getaway", description: "Enjoy a fantastic 20% off on all luxury sedans for your exciting weekend rentals. Perfect for short trips and spontaneous adventures!", icon: Calendar, color: "orange" },
            { title: "Long-Term Discount", description: "Planning an extended trip? Save up to a generous 30% off on rentals exceeding 7 days. The longer you rent, the more you save, making extended journeys more affordable!", icon: Clock, color: "blue" },
            { title: "First Time Renter", description: "Welcome to our premium service! Get an exclusive 15% off your very first booking with us. Start your luxury journey today and experience the difference!", icon: Award, color: "purple" },
          ].map((offer, index) => (
            <motion.div
              key={index}
              className="bg-neutral-800 p-8 rounded-lg shadow-lg border border-neutral-700 flex flex-col items-center text-center transform hover:scale-103 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(0,255,255,0.3)' }}
            >
              <offer.icon className={`text-${offer.color}-400 mb-4`} size={48} strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-3">{offer.title}</h3>
              <p className="text-neutral-400">{offer.description}</p>
              <button className="mt-6 px-6 py-2 bg-gradient-to-r from-teal-600 to-green-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform">
                Claim Offer
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Our Services Deep Dive Section (Section 8) ---
const OurServicesSection = () => {
  const detailedServices = [
    {
      title: "Airport Transfers",
      description: "Hassle-free pick-up and drop-off at all major airports. Our punctual and luxurious service ensures a smooth transition to and from your flight.",
      icon: TrendingUp,
      image: "https://placehold.co/400x250/2a2a2a/ffffff?text=Airport+Transfer"
    },
    {
      title: "Corporate Bookings",
      description: "Impress clients and facilitate seamless business travel with our premium fleet and professional, discreet service tailored for corporate needs.",
      icon: Users,
      image: "https://placehold.co/400x250/2a2a2a/ffffff?text=Corporate+Booking"
    },
    {
      title: "Wedding Transportation",
      description: "Add a touch of unparalleled elegance and sophistication to your special day with our stunning wedding car rentals and dedicated service.",
      icon: Heart,
      image: "https://placehold.co/400x250/2a2a2a/ffffff?text=Wedding+Car"
    },
    {
      title: "Chauffeur Services",
      description: "Sit back, relax, and enjoy the journey while our experienced and highly professional chauffeurs navigate for you with utmost precision and courtesy.",
      icon: UserCheck,
      image: "https://placehold.co/400x250/2a2a2a/ffffff?text=Chauffeur+Service"
    },
    {
      title: "Event & VIP Services",
      description: "Tailored luxury transport solutions for high-profile events, concerts, galas, and special occasions, ensuring a memorable and exclusive experience for VIP guests.",
      icon: Trophy,
      image: "https://placehold.co/400x250/2a2a2a/ffffff?text=VIP+Event"
    },
    {
      title: "Customized Road Trips",
      description: "Design your perfect adventure with our flexible long-term rental options, allowing you to explore at your own pace and comfort.",
      icon: Globe,
      image: "https://placehold.co/400x250/2a2a2a/ffffff?text=Road+Trip"
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Our Comprehensive Services: Beyond Just Rentals
        </motion.h2>
        <motion.p 
          className="text-lg text-neutral-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          We offer a full spectrum of premium car rental services, meticulously designed to cater to your every need and elevate every journey you embark upon. From the moment you book to your final destination, we ensure perfection.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-neutral-800 rounded-lg shadow-lg border border-neutral-700 text-left overflow-hidden transform hover:scale-103 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(0,255,255,0.3)' }}
            >
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-8">
                <service.icon className="text-teal-400 mb-4" size={40} strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Counter Section 2: Fleet & Operations (Section 9) ---
const CounterSection2 = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-neutral-900 text-white text-center">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Our Reach and Resources
        </motion.h2>
        <motion.p 
          className="text-lg text-neutral-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Our expansive fleet and strategically located operations ensure that you always have access to premium vehicles, wherever your journey takes you.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Car className="text-teal-400 mb-4" size={60} strokeWidth={1.5} />
            <div className="text-5xl font-extrabold text-white">
              <Counter to={500} suffix="+" />
            </div>
            <p className="text-xl text-neutral-300 mt-2">Vehicles in Fleet</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <MapPin className="text-teal-400 mb-4" size={60} strokeWidth={1.5} />
            <div className="text-5xl font-extrabold text-white">
              <Counter to={25} suffix="+" />
            </div>
            <p className="text-xl text-neutral-300 mt-2">Pickup Locations</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Wrench className="text-teal-400 mb-4" size={60} strokeWidth={1.5} />
            <div className="text-5xl font-extrabold text-white">
              <Counter to={99} suffix="%" />
            </div>
            <p className="text-xl text-neutral-300 mt-2">Maintenance Score</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


// --- About Us Section (Section 10 - From previous Home.jsx) ---
const AboutUsSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400">
            Our Story: Driving Excellence
          </h2>
          <p className="text-lg text-neutral-300 mb-4">
            Founded with a passion for luxury and impeccable service, Car Rental is dedicated to providing an
            unforgettable driving experience. We believe that every journey should be as remarkable as the destination. Our vision is to redefine luxury car rental, making premium travel accessible and effortless for everyone.
          </p>
          <p className="text-lg text-neutral-300 mb-6">
            Our commitment extends beyond just cars; it's about delivering peace of mind, reliability, and the freedom
            to explore in style. With a meticulously maintained fleet and a team of dedicated professionals,
            we ensure every detail is handled for your comfort and satisfaction, from the moment you inquire to your safe return.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-teal-600 to-green-500 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
            Learn More About Us
          </button>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src="https://placehold.co/600x400/1a202c/e2e8f0?text=Luxury+Car+Interior" // Placeholder for an image of a luxury car
            alt="Luxury Car Fleet"
            className="rounded-xl shadow-2xl border border-neutral-700 w-full h-auto"
          />
          <div className="absolute -bottom-4 -right-4 bg-teal-500 w-24 h-24 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
            20+ <br /> Years
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- FAQ Section (Section 11) ---
const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What documents do I need to rent a car?",
      answer: "You typically need a valid driver's license, a major credit card in your name, and proof of insurance (or you can purchase ours). International renters may need an International Driving Permit."
    },
    {
      question: "Is there a minimum age for rental?",
      answer: "Yes, the minimum age to rent is usually 21, though some luxury vehicles may require renters to be 25 or older. Surcharges may apply for drivers under 25."
    },
    {
      question: "Can I pick up the car at one location and drop it off at another?",
      answer: "Yes, we offer one-way rentals between our various locations. A one-way fee may apply, which will be specified during the booking process."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Our cancellation policy varies depending on the booking type. Generally, free cancellation is available up to 24-48 hours before pickup. Please refer to your booking confirmation for specific details."
    },
    {
      question: "Are luxury vehicles available with a chauffeur?",
      answer: "Absolutely! Many of our luxury and exotic vehicles are available with our professional chauffeur service for an additional fee. This ensures a comfortable and stress-free experience."
    }
  ];

  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p 
          className="text-lg text-neutral-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Find quick answers to the most common questions about our car rental services. If you can't find what you're looking for, feel free to contact our support team.
        </motion.p>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-neutral-800 rounded-lg shadow-lg border border-neutral-700 p-6 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.5 }}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-teal-400" size={24} /> {/* Corrected to use ChevronDown */}
                </motion.div>
              </div>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="mt-4 text-neutral-400"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Blog/News Teaser Section (Section 12) ---
const BlogTeaserSection = () => {
  const blogPosts = [
    {
      title: "Top 5 Luxury Cars for Your Next Business Trip",
      excerpt: "Discover the perfect blend of comfort and style for corporate travel, ensuring you arrive in impeccable fashion and make a lasting impression.",
      image: "https://placehold.co/300x200/2d3748/cbd5e0?text=Business+Trip",
      link: "#",
    },
    {
      title: "Road Trip Essentials: What to Pack for a Luxe Adventure",
      excerpt: "Ensure a smooth and enjoyable long-distance journey with our expert tips on packing, car preparation, and maximizing your luxury travel experience.",
      image: "https://placehold.co/300x200/2d3748/cbd5e0?text=Road+Trip",
      link: "#",
    },
    {
      title: "Electric Dreams: The Rise of Luxury Electric Vehicles",
      excerpt: "Explore the future of sustainable luxury driving with our electric fleet. Learn about the benefits of EV rentals and our commitment to eco-friendly travel.",
      image: "https://placehold.co/300x200/2d3748/cbd5e0?text=EV+Luxury",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Latest From Our Blog
        </motion.h2>
        <motion.p 
          className="text-lg text-neutral-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Stay informed and inspired with our latest articles, guides, and news from the world of luxury car rentals and travel.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-neutral-800 rounded-lg shadow-lg border border-neutral-700 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(0,255,255,0.3)' }}
            >
              <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-neutral-400 text-sm mb-4">{post.excerpt}</p>
                <a href={post.link} className="inline-flex items-center text-teal-400 hover:text-white transition-colors">
                  Read More <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.button
          className="mt-12 px-8 py-4 bg-gradient-to-r from-teal-600 to-green-500 text-white font-bold rounded-lg shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3 mx-auto text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href='/blog'}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <span>View All Articles</span>
          <ArrowRight size={24} />
        </motion.button>
      </div>
    </section>
  );
};

// --- Counter Section 3: Milestones & Impact (Section 13) ---
const CounterSection3 = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-900 to-black text-white text-center">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Our Journey of Excellence
        </motion.h2>
        <motion.p 
          className="text-lg text-neutral-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          These milestones reflect our dedication to providing top-tier service and our impact on the luxury travel industry.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Gauge className="text-teal-400 mb-4" size={60} strokeWidth={1.5} /> {/* Changed Speedometer to Gauge */}
            <div className="text-5xl font-extrabold text-white">
              <Counter to={5000000} suffix="+" />
            </div>
            <p className="text-xl text-neutral-300 mt-2">Miles Driven</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <CreditCard className="text-teal-400 mb-4" size={60} strokeWidth={1.5} />
            <div className="text-5xl font-extrabold text-white">
              <Counter to={100000} suffix="+" />
            </div>
            <p className="text-xl text-neutral-300 mt-2">Bookings Completed</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Cloud className="text-teal-400 mb-4" size={60} strokeWidth={1.5} />
            <div className="text-5xl font-extrabold text-white">
              <Counter to={7500} suffix="+" />
            </div>
            <p className="text-xl text-neutral-300 mt-2">Carbon Offset Miles</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Call to Action / Book Now Banner (Section 14) ---
const CallToActionBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-700 to-green-600 text-white text-center">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Ready to Start Your Luxury Journey?
        </motion.h2>
        <motion.p
          className="text-xl mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Book your dream car today and experience unparalleled luxury and convenience with Car Rental. Our dedicated team is ready to assist you in selecting the perfect vehicle for your next adventure.
        </motion.p>
        <motion.button
          className="px-10 py-5 bg-white text-teal-700 font-bold rounded-lg shadow-xl transition-all duration-300 hover:scale-105 hover:bg-neutral-100 flex items-center justify-center space-x-3 mx-auto text-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href='/booking'}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <span>Book Your Car Now</span>
          <ArrowRight size={28} />
        </motion.button>
      </div>
    </section>
  );
};

// --- Partners / Brands Section (Section 15) ---
const PartnersSection = () => {
  const partners = [
    { name: "Mercedes-Benz", logo: "https://placehold.co/150x80/2a2a2a/ffffff?text=Mercedes" },
    { name: "Porsche", logo: "https://placehold.co/150x80/2a2a2a/ffffff?text=Porsche" },
    { name: "Tesla", logo: "https://placehold.co/150x80/2a2a2a/ffffff?text=Tesla" },
    { name: "Range Rover", logo: "https://placehold.co/150x80/2a2a2a/ffffff?text=Range+Rover" },
    { name: "BMW", logo: "https://placehold.co/150x80/2a2a2a/ffffff?text=BMW" },
    { name: "Audi", logo: "https://placehold.co/150x80/2a2a2a/ffffff?text=Audi" },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Our Esteemed Partners
        </motion.h2>
        <motion.p 
          className="text-lg text-neutral-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          We are proud to partner with the world's most prestigious automotive brands to bring you an unparalleled selection of luxury vehicles. Our collaborations ensure top-tier quality and the latest models.
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.img
              key={index}
              src={partner.logo}
              alt={`${partner.name} Logo`}
              className="h-16 md:h-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.5 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- New: Luxury Experience Section ---
const LuxuryExperienceSection = () => {
  const experiences = [
    {
      title: "Unrivaled Comfort",
      description: "Sink into plush leather seats, enjoy multi-zone climate control, and experience a ride so smooth it redefines relaxation. Every detail is crafted for your utmost comfort.",
      icon: Zap, // Changed from fas fa-couch
      image: "https://placehold.co/600x400/2a2a2a/ffffff?text=Luxury+Interior"
    },
    {
      title: "Cutting-Edge Technology",
      description: "Navigate with advanced GPS, stay connected with integrated Wi-Fi, and enjoy premium audio systems. Our cars are equipped with the latest innovations for a connected journey.",
      icon: Lightbulb, // Changed from fas fa-microchip
      image: "https://placehold.co/600x400/2a2a2a/ffffff?text=Car+Tech"
    },
    {
      title: "Superior Performance",
      description: "Experience the thrill of powerful engines, precise handling, and responsive braking. Our performance vehicles deliver an exhilarating drive without compromising safety.",
      icon: Rocket, // Already good
      image: "https://placehold.co/600x400/2a2a2a/ffffff?text=Performance+Car"
    },
    {
      title: "Impeccable Safety",
      description: "Drive with confidence knowing our fleet features advanced safety systems, including adaptive cruise control, lane-keeping assist, and comprehensive airbag systems.",
      icon: Shield, // Already good
      image: "https://placehold.co/600x400/2a2a2a/ffffff?text=Safety+Features"
    },
  ];

  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          The Unparalleled Luxury Experience
        </motion.h2>
        <motion.p 
          className="text-lg text-neutral-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Every vehicle in our collection is chosen not just for its brand, but for the holistic luxury experience it provides. We focus on details that elevate your journey, from state-of-the-art features to supreme comfort and uncompromising safety.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-neutral-800 rounded-lg shadow-lg border border-neutral-700 overflow-hidden text-left"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,255,255,0.4)' }}
            >
              <img src={exp.image} alt={exp.title} className="w-full h-64 object-cover" />
              <div className="p-8">
                {/* Render Lucide icon component */}
                <exp.icon className="text-teal-400 mb-4" size={40} strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold mb-3">{exp.title}</h3>
                <p className="text-neutral-400">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// --- Main Home Component ---
const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative z-0 homepage-background-base">
      {/* Absolute container for the complex background layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Main background gradient, very subtle and dark */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F0F] via-black to-[#0A0A0A]"></div>

        {/* Dynamic, shadowy particle layer using multiple CSS blobs/gradients */}
        <div className="absolute inset-0 background-blobs-container animate-blob-group-move">
          <div className="background-blob blob-1"></div>
          <div className="background-blob blob-2"></div>
          <div className="background-blob blob-3"></div>
          <div className="background-blob blob-4"></div>
          <div className="background-blob blob-5"></div>
        </div>

        {/* Subtle, moving diagonal lines/texture */}
        <div className="absolute inset-0 background-lines-animation opacity-5"></div>
      </div>

      {/* Render the Navbar component. In your project, this would be an import: <Navbar /> */}
      {/* <Navbar />  -- Removed as per user request */}
      <HeroSection /> {/* Section 1 */}
      <HowItWorksSection /> {/* Section 2 */}
      <FeaturedFleetSection /> {/* Section 3 */}
      <WhyChooseUsSection /> {/* Section 4 */}
      <CounterSection1 /> {/* Section 5 (Counter 1) */}
      <TestimonialsAndReviews /> {/* Section 6 */}
      <SpecialOffersSection /> {/* Section 7 */}
      <OurServicesSection /> {/* Section 8 */}
      <CounterSection2 /> {/* Section 9 (Counter 2) */}
      <LuxuryExperienceSection /> {/* NEW Section: Luxury Experience */}
      <AboutUsSection /> {/* Section 10 */}
      <FAQSection /> {/* Section 11 */}
      <BlogTeaserSection /> {/* Section 12 */}
      <CounterSection3 /> {/* Section 13 (Counter 3) */}
      <CallToActionBanner /> {/* Section 14 */}
      <PartnersSection /> {/* Section 15 */}
      {/* Render the Footer component. In your project, this would be an import: <Footer /> */}
      <Footer /> 

      {/* Tailwind CSS custom animations and styles */}
      <style>{`
        /* --- Global Animations and Utilities --- */
        @keyframes blob-pulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.15; }
        }
        @keyframes blob-pulse-delay {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.15; }
        }
        .animate-blob-pulse { animation: blob-pulse 10s infinite ease-in-out alternate; }
        .animate-blob-pulse-delay { animation: blob-pulse-delay 12s infinite ease-in-out alternate; animation-delay: 2s; }

        .background-blobs-container {
            width: 200%; /* Increased for more movement */
            height: 200%; /* Increased for more movement */
            top: -50%; /* Adjusted for centered movement */
            left: -50%; /* Adjusted for centered movement */
            position: absolute;
            filter: blur(80px); 
        }

        .background-blob {
            position: absolute;
            border-radius: 50%; 
            opacity: 0.1; 
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-timing-function: ease-in-out;
        }

        /* Adjusted blob animations for more prominent sliding */
        .blob-1 {
            width: 400px; height: 400px;
            background: rgba(0, 150, 255, 0.4); 
            top: 10%; left: 15%;
            animation: blob-move-1 50s ease-in-out infinite alternate;
        }
        .blob-2 {
            width: 500px; height: 500px;
            background: rgba(150, 50, 200, 0.4); 
            bottom: 20%; right: 10%;
            animation: blob-move-2 60s ease-in-out infinite alternate;
        }
        .blob-3 {
            width: 300px; height: 300px;
            background: rgba(0, 255, 255, 0.4); 
            top: 50%; left: 40%;
            animation: blob-move-3 45s ease-in-out infinite alternate;
        }
        .blob-4 {
            width: 350px; height: 350px;
            background: rgba(0, 100, 200, 0.4); 
            top: 30%; right: 30%;
            animation: blob-move-4 55s ease-in-out infinite alternate;
        }
        .blob-5 {
            width: 450px; height: 450px;
            background: rgba(50, 200, 100, 0.4); 
            bottom: 5%; left: 5%;
            animation: blob-move-5 70s ease-in-out infinite alternate;
        }

        @keyframes blob-move-1 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(250px, 300px) scale(1.15); } /* Increased movement */
            100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes blob-move-2 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-300px, -200px) scale(1.1); } /* Increased movement */
            100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes blob-move-3 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(200px, -250px) scale(0.9); } /* Increased movement */
            100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes blob-move-4 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-230px, 260px) scale(1.12); } /* Increased movement */
            100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes blob-move-5 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(300px, -180px) scale(0.92); } /* Increased movement */
            100% { transform: translate(0, 0) scale(1); }
        }

        @keyframes blob-group-move {
            0% { transform: translate(-30%, -30%); } /* More starting offset */
            25% { transform: translate(15%, -25%); }
            50% { transform: translate(-25%, 30%); }
            75% { transform: translate(30%, -10%); }
            100% { transform: translate(-30%, -30%); } /* Return to offset */
        }
        .animate-blob-group-move {
            animation: blob-group-move 240s linear infinite; /* Longer duration, continuous flow */
        }

        .background-lines-animation {
            background-image: repeating-linear-gradient(45deg,
                rgba(255,255,255,0.04) 0px, /* Slightly more visible lines */
                rgba(255,255,255,0.04) 2px,
                transparent 2px,
                transparent 120px /* Wider spacing */
            );
            background-size: 240px 240px; /* Larger background size for more impact */
            animation: lines-pan 120s linear infinite; /* Longer and continuous */
        }

        /* Adjusted lines animation for more noticeable panning */
        @keyframes lines-pan {
            0% { background-position: 0 0; }
            25% { background-position: 800px 200px; }
            50% { background-position: 400px 800px; }
            75% { background-position: -200px 400px; }
            100% { background-position: 0 0; }
        }

        /* --- Navbar Link Underline Specific Styling --- */
        .nav-link-underline {
          display: inline-flex; /* Use inline-flex for proper sizing with flex items and background */
          position: relative; /* Essential for containing the background */
          padding-bottom: 4px; /* Space for the underline */
          background-image: linear-gradient(to right, #00FFFF, #00FFFF); /* Greenish/teal color */
          background-size: 0% 2px; /* Initial state: 0% width, 2px height */
          background-repeat: no-repeat;
          background-position: 0% 100%; /* Position at the very bottom of the element */
          transition: background-size 0.3s ease-out, color 0.3s ease-out; /* Smooth transitions */
        }

        .nav-link-underline:hover {
          background-size: 100% 2px; /* Full width on hover */
          color: white; /* Ensure text color changes to white on hover */
        }
      `}</style>
    </div>
  );
};

export default Home;




// import React from 'react';
// import {
//   Brain, MessageSquare, Search, PenTool, Gem, Zap, ArrowRight, Asterisk, Code, Globe
// } from 'lucide-react';

// // Card.jsx
// const Card = ({ title, subtitle, description, icon: IconComponent, position }) => {
//   return (
//     <div className={`relative bg-neutral-800 rounded-lg p-6 transition-all duration-300 transform hover:-translate-y-1
//                     card-base-styles ${position === 'left' ? 'card-shadow-left-l' : 'card-shadow-right-l'}
//                     w-full sm:w-[calc(33.33%-2rem)] lg:w-72`}> {/* Adjusted width for responsiveness and margin, removed m-4 */}
//       {/* Icon for the card */}
//       <div className="absolute top-4 right-4 text-teal-400">
//         {IconComponent && <IconComponent size={28} strokeWidth={1.5} />}
//       </div>
//       <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
//       <span className="inline-block bg-neutral-700 text-teal-300 text-xs font-medium px-2.5 py-0.5 rounded-full mb-4">
//         {subtitle}
//       </span>
//       <p className="text-neutral-400 text-sm">{description}</p>
//     </div>
//   );
// };

// // Header.jsx
// const Header = () => {
//   return (
//     <header className="bg-black text-white p-4 shadow-md sticky top-0 z-50">
//       <nav className="container mx-auto flex justify-between items-center px-4">
//         <div className="flex items-center space-x-2">
//           <Asterisk className="text-teal-400" size={28} strokeWidth={1.5} /> {/* Icon for AI Fiesta */}
//           <span className="text-2xl font-bold text-teal-400">AI Fiesta</span>
//         </div>
//         <div className="hidden md:flex items-center space-x-6">
//           <div className="flex bg-neutral-800 rounded-full p-1 border border-neutral-700">
//             <a href="#" className="text-neutral-300 hover:text-white px-4 py-2 rounded-full transition-colors duration-200">Features</a>
//             <a href="#" className="text-neutral-300 hover:text-white px-4 py-2 rounded-full transition-colors duration-200">Pricing</a>
//             <a href="#" className="text-neutral-300 hover:text-white px-4 py-2 rounded-full transition-colors duration-200">FAQs</a>
//           </div>
//           <button className="bg-gradient-to-r from-teal-600 to-green-500 hover:from-teal-700 hover:to-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg flex items-center space-x-2">
//             <span>Log in</span>
//             <ArrowRight size={20} />
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// // Home.jsx
// const Home = () => {
//   const cardsData = [
//     {
//       title: 'ChatGPT 5',
//       subtitle: 'AI Rounder Explainer',
//       description: 'Great for questions, brainstorming, and clear step-by-step explanations.',
//       icon: MessageSquare, // Icon for ChatGPT
//     },
//     {
//       title: 'Perplexity Sonar Pro',
//       subtitle: 'Live Web Researcher',
//       description: 'Delivers fresh answers and news from credible, real-time sources.',
//       icon: Search, // Icon for Perplexity
//     },
//     {
//       title: 'Claude Sonnet Master',
//       subtitle: 'Co-Writing Master',
//       description: 'Refines polished emails, essays, and scripts while keeping your style.',
//       icon: PenTool, // Icon for Claude Sonnet
//     },
//     {
//       title: 'DeepSeek',
//       subtitle: 'Reasoning Specialist',
//       description: 'Excels at logic, math, and coding with clear, detailed solutions.',
//       icon: Code, // Icon for DeepSeek
//     },
//     {
//       title: 'Gemini 2.5 Pro',
//       subtitle: 'Long Context Master',
//       description: 'Handles long documents and images; tracking full context and details.',
//       icon: Gem, // Icon for Gemini
//     },
//     {
//       title: 'Grok 4',
//       subtitle: 'Creative Powerhouse',
//       description: 'Bold, unconventional ideas and punchy copy for trend-focused content.',
//       icon: Zap, // Icon for Grok
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white font-sans overflow-hidden relative z-0">
//       {/* Dynamic Background "Shadow" Effect */}
//       <div className="absolute inset-0 bg-gradient-radial from-neutral-900 via-black to-black opacity-70 animate-background-nebula"></div>

//       <Header />
//       <main className="container mx-auto py-12 px-4 text-center relative z-10">
//         <h1 className="text-4xl md:text-5xl font-bold mb-10 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300">
//           Pick the best characteristics <br /> of each AI model
//         </h1>

//         {/* Top row of cards */}
//         <div className="flex flex-wrap justify-center items-stretch my-8 gap-x-6 gap-y-8">
//           {cardsData.slice(0, 3).map((card, index) => (
//             <Card key={index} {...card} position="left" />
//           ))}
//         </div>

//         {/* Central glowing circle */}
//         <div className="flex justify-center my-8">
//           <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-teal-500 to-green-400 flex items-center justify-center shadow-lg transform scale-100 hover:scale-105 transition-transform duration-300 animate-pulse-slow">
//             <Globe size={80} className="text-white animate-spin-slow" /> {/* Icon for central circle */}
//           </div>
//         </div>

//         {/* Bottom row of cards */}
//         <div className="flex flex-wrap justify-center items-stretch my-8 gap-x-6 gap-y-8">
//           {cardsData.slice(3, 6).map((card, index) => (
//             <Card key={index + 3} {...card} position="right" />
//           ))}
//         </div>
//       </main>
//       {/* Tailwind CSS custom animations and styles */}
//       <style>{`
//         /* Card base styles: border and initial subtle glow */
//         .card-base-styles {
//           border: 1px solid rgba(200, 200, 200, 0.2); /* Subtle initial border */
//           box-shadow: 0 0 5px rgba(0, 255, 255, 0.05); /* Initial subtle glow */
//           transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
//         }

//         /* L-shape shadow for LEFT cards (left and bottom edges) */
//         .card-shadow-left-l {
//           box-shadow:
//             0 0 5px rgba(0, 255, 255, 0.05), /* Base subtle glow */
//             -10px 0 20px 5px rgba(0, 255, 255, 0.3), /* Left arm particle-like spread */
//             -15px 0 30px 10px rgba(100, 200, 255, 0.15),
//             0 10px 20px 5px rgba(0, 255, 255, 0.3), /* Bottom arm particle-like spread */
//             0 15px 30px 10px rgba(100, 200, 255, 0.15);
//         }

//         /* L-shape shadow for RIGHT cards (right and bottom edges) */
//         .card-shadow-right-l {
//           box-shadow:
//             0 0 5px rgba(0, 255, 255, 0.05), /* Base subtle glow */
//             10px 0 20px 5px rgba(0, 255, 255, 0.3), /* Right arm particle-like spread */
//             15px 0 30px 10px rgba(100, 200, 255, 0.15),
//             0 10px 20px 5px rgba(0, 255, 255, 0.3), /* Bottom arm particle-like spread */
//             0 15px 30px 10px rgba(100, 200, 255, 0.15);
//         }

//         /* Hover effect: "shadow outer space" */
//         .card-shadow-left-l:hover,
//         .card-shadow-right-l:hover {
//             box-shadow:
//                 0 0 30px rgba(0, 150, 255, 0.6), /* Deeper blue glow */
//                 0 0 60px rgba(100, 50, 200, 0.4), /* Purple tint */
//                 0 0 90px rgba(0, 255, 255, 0.2); /* Fainter teal outer glow */
//         }

//         /* Animations for the central glowing circle */
//         @keyframes pulse-slow {
//           0%, 100% {
//             box-shadow: 0 0 15px rgba(0, 255, 255, 0.4), 0 0 30px rgba(0, 255, 255, 0.2);
//           }
//           50% {
//             box-shadow: 0 0 25px rgba(0, 255, 255, 0.7), 0 0 45px rgba(0, 255, 255, 0.5);
//           }
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 4s infinite ease-in-out;
//         }

//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 15s linear infinite;
//         }

//         /* Custom radial gradient for background */
//         .bg-gradient-radial {
//           background-image: radial-gradient(circle at center, var(--tw-gradient-stops));
//         }

//         /* Background nebula movement animation for a dynamic "shadow" */
//         @keyframes background-nebula-move {
//           0% { transform: translate(0%, 0%) scale(1); opacity: 0.7; }
//           25% { transform: translate(-2%, -3%) scale(1.02); opacity: 0.75; }
//           50% { transform: translate(-5%, 2%) scale(1.05); opacity: 0.8; }
//           75% { transform: translate(-3%, -1%) scale(1.03); opacity: 0.75; }
//           100% { transform: translate(0%, 0%) scale(1); opacity: 0.7; }
//         }
//         .animate-background-nebula {
//           animation: background-nebula-move 25s infinite ease-in-out alternate;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home;
