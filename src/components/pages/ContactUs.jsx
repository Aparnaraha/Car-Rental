"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, 
  Send, CheckCircle, XCircle, Users, Car, Calendar, ArrowRight, 
  Info, BookOpen, DollarSign, ChevronDown, ChevronUp, Star, Award, Shield, HeadphonesIcon
} from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (Math.random() > 0.1) {
        console.log('Form submitted:', formData);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Faster animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      } 
    }
  };

  const bounce = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 150
      } 
    }
  };

  const rotate = {
    hidden: { opacity: 0, rotate: -5 },
    visible: { 
      opacity: 1, 
      rotate: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    }
  };

  const faqs = [
    {
      question: "How long does it take to get a response?",
      answer: "We strive to respond to all inquiries within 24 business hours. Complex queries might take a bit longer, but we'll keep you updated."
    },
    {
      question: "Can I get a quote over the phone?",
      answer: "Yes, you can get an estimated quote over the phone for standard rentals. For custom packages or long-term leases, we recommend using our online form or visiting our showroom."
    },
    {
      question: "What if I need immediate assistance?",
      answer: "For urgent matters, please call our 24/7 helpline at +91 8093011746. Our team is always ready to assist you."
    },
    {
      question: "What documents do I need to rent a car?",
      answer: "You'll need a valid driver's license, proof of identity, and a credit card for the security deposit. Additional documents may be required for certain vehicle categories."
    },
    {
      question: "Do you offer long-term rental options?",
      answer: "Yes, we offer flexible long-term rental plans with discounted rates for extended periods. Contact our team for customized long-term rental solutions."
    }
  ];

  // Parallax effect for hero section
  const parallaxStyle = {
    transform: `translateY(${mousePosition.y * 0.03}px)`
  };

  // Floating particles component
  const FloatingParticles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-teal-400/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans overflow-hidden" ref={containerRef}>
      {/* Hero Section with Parallax */}
      <section className="relative py-24 bg-cover bg-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
            transform: `translateY(${mousePosition.y * 0.03}px)`
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        
        {/* Floating Particles */}
        <FloatingParticles />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            We're here to assist you with all your luxury car rental needs. Reach out to us anytime!
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-green-400 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1 bg-neutral-800 p-8 rounded-xl shadow-lg border border-neutral-700 h-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-teal-400 mb-8"
              variants={staggerItem}
            >
              Contact Information
            </motion.h2>
            <motion.div className="flex items-center mb-6" variants={staggerItem}>
              <div className="relative">
                <div className="absolute -inset-2 bg-teal-400/20 rounded-full blur-sm"></div>
                <Phone size={28} className="text-green-400 mr-4 flex-shrink-0 relative z-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Phone</h3>
                <p className="text-neutral-300">+91 8093011746</p>
                <p className="text-neutral-300">+91 9876543210</p>
              </div>
            </motion.div>
            <motion.div className="flex items-center mb-6" variants={staggerItem}>
              <div className="relative">
                <div className="absolute -inset-2 bg-teal-400/20 rounded-full blur-sm"></div>
                <Mail size={28} className="text-green-400 mr-4 flex-shrink-0 relative z-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <p className="text-neutral-300">info@carrental.com</p>
                <p className="text-neutral-300">support@carrental.com</p>
              </div>
            </motion.div>
            <motion.div className="flex items-center mb-6" variants={staggerItem}>
              <div className="relative">
                <div className="absolute -inset-2 bg-teal-400/20 rounded-full blur-sm"></div>
                <MapPin size={28} className="text-green-400 mr-4 flex-shrink-0 relative z-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Our Office</h3>
                <p className="text-neutral-300">123 Luxury Lane, Metropolis</p>
                <p className="text-neutral-300">New City, State 12345, India</p>
              </div>
            </motion.div>
            <motion.div className="flex items-center mb-6" variants={staggerItem}>
              <div className="relative">
                <div className="absolute -inset-2 bg-teal-400/20 rounded-full blur-sm"></div>
                <Clock size={28} className="text-green-400 mr-4 flex-shrink-0 relative z-10" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Working Hours</h3>
                <p className="text-neutral-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-neutral-300">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-neutral-300">Sunday: Closed</p>
              </div>
            </motion.div>
            
            {/* Social Media */}
            <motion.div className="mt-8" variants={staggerItem}>
              <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  className="text-neutral-400 hover:text-teal-400 transition-colors duration-200"
                  whileHover={{ scale: 1.2, y: -5 }}
                >
                  <Facebook size={24} />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-neutral-400 hover:text-teal-400 transition-colors duration-200"
                  whileHover={{ scale: 1.2, y: -5 }}
                >
                  <Twitter size={24} />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-neutral-400 hover:text-teal-400 transition-colors duration-200"
                  whileHover={{ scale: 1.2, y: -5 }}
                >
                  <Instagram size={24} />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-neutral-400 hover:text-teal-400 transition-colors duration-200"
                  whileHover={{ scale: 1.2, y: -5 }}
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 bg-neutral-800 p-8 rounded-xl shadow-lg border border-neutral-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <motion.h2 
              className="text-3xl font-bold text-teal-400 mb-8 text-center"
              variants={rotate}
            >
              Send Us a Message
            </motion.h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={staggerItem}>
                <label htmlFor="name" className="block text-neutral-300 text-sm font-bold mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-neutral-700 border-neutral-600 text-white placeholder-neutral-400"
                  placeholder="John Doe"
                  required
                />
              </motion.div>
              <motion.div variants={staggerItem}>
                <label htmlFor="email" className="block text-neutral-300 text-sm font-bold mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-neutral-700 border-neutral-600 text-white placeholder-neutral-400"
                  placeholder="john.doe@example.com"
                  required
                />
              </motion.div>
              <motion.div className="md:col-span-2" variants={staggerItem}>
                <label htmlFor="subject" className="block text-neutral-300 text-sm font-bold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-neutral-700 border-neutral-600 text-white placeholder-neutral-400"
                  placeholder="Regarding my booking / General inquiry"
                  required
                />
              </motion.div>
              <motion.div className="md:col-span-2" variants={staggerItem}>
                <label htmlFor="message" className="block text-neutral-300 text-sm font-bold mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-neutral-700 border-neutral-600 text-white placeholder-neutral-400"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </motion.div>
              <motion.div className="md:col-span-2 text-center" variants={staggerItem}>
                <motion.button
                  type="submit"
                  className="mt-6 px-8 py-4 bg-gradient-to-r from-teal-600 to-green-500 text-white font-bold rounded-lg shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3 mx-auto text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send size={24} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 text-green-500 flex items-center justify-center"
                    >
                      <CheckCircle size={20} className="mr-2" /> Message sent successfully!
                    </motion.p>
                  )}
                  {submitStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 text-red-500 flex items-center justify-center"
                    >
                      <XCircle size={20} className="mr-2" /> Failed to send message. Please try again.
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* New Section: Why Choose Us */}
      <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
        <FloatingParticles />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Why Choose Our Luxury Car Rental
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-neutral-800 p-8 rounded-xl shadow-lg border border-neutral-700 flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="relative mb-4">
                <div className="absolute -inset-3 bg-teal-400/20 rounded-full blur-md"></div>
                <Award size={48} className="text-teal-400 relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Fleet</h3>
              <p className="text-neutral-400 text-center">Experience the finest selection of luxury vehicles, meticulously maintained for your comfort and safety.</p>
            </motion.div>
            <motion.div
              className="bg-neutral-800 p-8 rounded-xl shadow-lg border border-neutral-700 flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="relative mb-4">
                <div className="absolute -inset-3 bg-teal-400/20 rounded-full blur-md"></div>
                <HeadphonesIcon size={48} className="text-teal-400 relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-neutral-400 text-center">Our dedicated customer service team is available around the clock to assist you with any needs or inquiries.</p>
            </motion.div>
            <motion.div
              className="bg-neutral-800 p-8 rounded-xl shadow-lg border border-neutral-700 flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="relative mb-4">
                <div className="absolute -inset-3 bg-teal-400/20 rounded-full blur-md"></div>
                <Shield size={48} className="text-teal-400 relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-neutral-400 text-center">Enjoy peace of mind with comprehensive insurance coverage on all our vehicles for your protection.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Section: How We Process Your Inquiry */}
      <section className="py-20 bg-neutral-950 text-white relative overflow-hidden">
        <FloatingParticles />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            How We Process Your Inquiry
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Once you send us a message, here's what happens next. Our streamlined process ensures your query is handled efficiently and effectively.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="absolute top-16 left-1/4 right-1/4 h-1 bg-teal-500 hidden md:block"></div>
            <motion.div
              className="bg-neutral-800 p-8 rounded-xl shadow-lg border border-neutral-700 flex flex-col items-center relative z-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-lg mb-4">1</div>
              <Send size={48} className="text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Message Received</h3>
              <p className="text-neutral-400 text-center">Your message is securely received by our dedicated support team, ready for review.</p>
            </motion.div>
            <motion.div
              className="bg-neutral-800 p-8 rounded-xl shadow-lg border border-neutral-700 flex flex-col items-center relative z-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-lg mb-4">2</div>
              <Users size={48} className="text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Review</h3>
              <p className="text-neutral-400 text-center">An experienced member of our team reviews your inquiry to understand your needs fully.</p>
            </motion.div>
            <motion.div
              className="bg-neutral-800 p-8 rounded-xl shadow-lg border border-neutral-700 flex flex-col items-center relative z-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-lg mb-4">3</div>
              <Mail size={48} className="text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prompt Response</h3>
              <p className="text-neutral-400 text-center">We aim to respond to all inquiries within 24 business hours, providing comprehensive assistance.</p>
            </motion.div>
            <motion.div
              className="bg-neutral-800 p-8 rounded-xl shadow-lg border border-neutral-700 flex flex-col items-center relative z-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-lg mb-4">4</div>
              <Star size={48} className="text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Feedback Collection</h3>
              <p className="text-neutral-400 text-center">After resolving your query, we follow up to ensure your complete satisfaction with our service.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Section: Common Inquiry Topics */}
      <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
        <FloatingParticles />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Common Inquiry Topics
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            To help us serve you better, here are some common topics people contact us about. Clicking on them might answer your question or guide you.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.a
              href="#"
              className="bg-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-700 flex flex-col items-center text-center group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 rounded-full bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                <Car size={32} className="text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vehicle Availability</h3>
              <p className="text-neutral-400 text-sm">Check our fleet & specific models.</p>
              <div className="mt-4 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={20} />
              </div>
            </motion.a>
            <motion.a
              href="#"
              className="bg-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-700 flex flex-col items-center text-center group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 rounded-full bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                <DollarSign size={32} className="text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pricing & Quotes</h3>
              <p className="text-neutral-400 text-sm">Get details on rental costs.</p>
              <div className="mt-4 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={20} />
              </div>
            </motion.a>
            <motion.a
              href="#"
              className="bg-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-700 flex flex-col items-center text-center group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 rounded-full bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                <Calendar size={32} className="text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Booking Modifications</h3>
              <p className="text-neutral-400 text-sm">Change or cancel existing bookings.</p>
              <div className="mt-4 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={20} />
              </div>
            </motion.a>
            <motion.a
              href="#"
              className="bg-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-700 flex flex-col items-center text-center group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 rounded-full bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                <Info size={32} className="text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">General Information</h3>
              <p className="text-neutral-400 text-sm">Any other questions about our services.</p>
              <div className="mt-4 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={20} />
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* New Section: Visit Our Showroom */}
      <section className="py-20 bg-neutral-950 text-white relative overflow-hidden">
        <FloatingParticles />
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
              alt="Luxury Car Showroom"
              className="rounded-xl shadow-2xl border border-neutral-700 w-full h-auto object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-teal-500 w-28 h-28 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg text-center p-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Experience <br/>Luxury
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400">
              Visit Our Showroom
            </h2>
            <p className="text-lg text-neutral-300 mb-4">
              Step into our exclusive showroom and immerse yourself in the world of luxury automobiles. See our exquisite fleet up close, consult with our specialists, and envision your next journey.
            </p>
            <p className="text-lg text-neutral-300 mb-6">
              Our team is ready to provide a personalized tour and answer any questions you might have about our vehicles and services. Appointments are recommended for a dedicated experience.
            </p>
            <div className="flex items-center mb-4">
              <MapPin size={24} className="text-green-400 mr-3" />
              <p className="text-neutral-300">Car Rental Showroom, 456 Elite Drive, Grand City</p>
            </div>
            <div className="flex items-center mb-6">
              <Clock size={24} className="text-green-400 mr-3" />
              <p className="text-neutral-300">Monday - Friday: 10 AM - 5 PM</p>
            </div>
            <motion.button 
              className="px-6 py-3 bg-gradient-to-r from-teal-600 to-green-500 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book an Appointment <ArrowRight size={20} className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* New Section: Quick FAQs for Contact */}
      <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
        <FloatingParticles />
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Quick FAQs for Your Convenience
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-300 mb-10 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Before contacting us, you might find answers to common questions here.
          </motion.p>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 rounded-xl shadow-lg border border-neutral-700 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <BookOpen size={20} className="mr-3 text-teal-400" /> {faq.question}
                  </h3>
                  {activeFaq === index ? (
                    <ChevronUp size={24} className="text-teal-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-teal-400 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-neutral-400">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section
        className="py-20 bg-neutral-800 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <FloatingParticles />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 
            className="text-4xl font-bold text-teal-400 mb-8"
            variants={bounce}
          >
            Find Us on the Map
          </motion.h2>
          <motion.p 
            className="text-neutral-300 mb-8 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Our central location makes it easy to reach us. Use the map below for directions.
          </motion.p>
          <motion.div 
            className="bg-neutral-700 rounded-xl overflow-hidden shadow-lg border border-neutral-600"
            style={{ height: '500px' }}
            variants={scaleUp}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.366232725885!2d77.2123139753338!3d28.62886507567319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1691421215894!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Car Rental Location"
            ></iframe>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-900 to-green-900 text-white relative overflow-hidden">
        <FloatingParticles />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Ready to Experience Luxury?
          </motion.h2>
          <motion.p
            className="text-xl text-neutral-200 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Contact us today and let us help you find the perfect luxury vehicle for your needs.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.a
              href="tel:+918093011746"
              className="px-8 py-4 bg-white text-teal-900 font-bold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={24} className="mr-2" /> Call Now
            </motion.a>
            <motion.a
              href="mailto:info@carrental.com"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05, y: -3, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} className="mr-2" /> Email Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;