// src/pages/CorporateBookingPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

// This component is for the Corporate Booking service page with a luxurious, dark theme.
// It features a sleek, professional design with striking accent colors and layered animations
// using Framer Motion and styling with Tailwind CSS.
const CorporateBookingPage = () => {
  // Animation variants for sections to fade in and slide up.
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for staggered list items for a cascading effect.
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2, // Staggered delay for a cascading effect
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Variants for the 'How It Works' section to animate step-by-step
  const stepContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  const stepItemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -15 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.6 } },
  };

  // Data for the key features section
  const corporateFeatures = [
    {
      title: 'Dedicated Account Manager',
      description: 'A single point of contact to manage all your company’s travel needs, ensuring personalized and efficient service.',
      icon: 'fas fa-user-tie',
    },
    {
      title: 'Flexible Billing Options',
      description: 'Choose from various billing methods, including monthly invoicing and direct expense reporting, for streamlined accounting.',
      icon: 'fas fa-file-invoice-dollar',
    },
    {
      title: 'Priority Service',
      description: 'Your bookings are our priority. Enjoy expedited service and premium vehicle allocation for all your corporate trips.',
      icon: 'fas fa-star',
    },
    {
      title: 'Advanced Reporting',
      description: 'Access detailed analytics and reports on travel spend, routes, and usage to optimize your company’s transportation budget.',
      icon: 'fas fa-chart-bar',
    },
  ];

  // Data for the testimonials section
  const testimonials = [
    {
      quote: "Our company's travel logistics have never been smoother. The dedicated support team is a game-changer.",
      author: "Jane Doe, CEO of TechCorp",
    },
    {
      quote: "Reliable, professional, and always on time. A service we can truly depend on for all our client meetings.",
      author: "John Smith, CFO of Global Inc.",
    },
    {
      quote: "The flexible billing and detailed reports have simplified our expense management processes dramatically.",
      author: "Emily Chen, Operations Director at Innovate Ltd.",
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-inter flex-grow">
      {/* Hero Section - Dark background with dynamic gradient and overlay */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-gray-950 text-center">
        {/* Abstract animated gradient overlay */}
        <motion.div
          className="absolute inset-0 w-full h-full opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at top left, #4a90e2, transparent), radial-gradient(circle at bottom right, #50e3c2, transparent)',
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Corporate Solutions, Elevated
          </motion.h1>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A new standard in business travel with reliability, luxury, and unmatched service.
          </motion.p>
          <motion.a
            href="#"
            className="mt-8 inline-block py-3 px-8 text-lg font-bold rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Schedule a Demo
          </motion.a>
        </div>
      </section>

      {/* Why Choose Us Section - Distinct, icon-focused design */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold mb-4 text-blue-400"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
          >
            The Advantage
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
          >
            Our core principles are designed to give your business a competitive edge.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="group bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl text-blue-400 mb-4 transition-transform duration-300 group-hover:rotate-12">
                <i className="fas fa-gem"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Unparalleled Luxury</h3>
              <p className="text-gray-400">Experience a fleet of top-tier vehicles and professional chauffeurs.</p>
            </motion.div>
            <motion.div
              className="group bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl text-blue-400 mb-4 transition-transform duration-300 group-hover:rotate-12">
                <i className="fas fa-bolt"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Seamless Efficiency</h3>
              <p className="text-gray-400">Our platform simplifies everything from booking to billing and reporting.</p>
            </motion.div>
            <motion.div
              className="group bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl text-blue-400 mb-4 transition-transform duration-300 group-hover:rotate-12">
                <i className="fas fa-lock"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Absolute Security</h3>
              <p className="text-gray-400">Your data and team's safety are our highest priority, guaranteed.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Modern, floating card design */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold mb-4 text-blue-400"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
          >
            The Process
          </motion.h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-12">
            A three-step journey to a streamlined corporate travel solution.
          </p>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={stepContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={stepItemVariants}
              className="p-8 rounded-xl bg-gray-800 shadow-xl border border-gray-700 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-bl-xl"></div>
              <h3 className="text-xl font-bold mb-2 text-white">1. Connect</h3>
              <p className="text-gray-400">Get in touch with our team to discuss your corporate needs.</p>
            </motion.div>
            <motion.div
              variants={stepItemVariants}
              className="p-8 rounded-xl bg-gray-800 shadow-xl border border-gray-700 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-bl-xl"></div>
              <h3 className="text-xl font-bold mb-2 text-white">2. Customize</h3>
              <p className="text-gray-400">We'll tailor a bespoke travel plan and billing system for your company.</p>
            </motion.div>
            <motion.div
              variants={stepItemVariants}
              className="p-8 rounded-xl bg-gray-800 shadow-xl border border-gray-700 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-bl-xl"></div>
              <h3 className="text-xl font-bold mb-2 text-white">3. Commence</h3>
              <p className="text-gray-400">Your team enjoys seamless, professional, and reliable transportation.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Full-width carousel-like design */}
      <section className="py-20 bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-blue-400"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
          >
            Client Stories
          </motion.h2>
          <div className="flex space-x-8 overflow-x-scroll no-scrollbar py-4 md:justify-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-8 rounded-xl shadow-xl flex-shrink-0 w-80 md:w-96 transform transition-transform duration-300 hover:scale-105 border border-gray-700"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <i className="fas fa-quote-left text-cyan-400 text-3xl mb-4"></i>
                <p className="text-gray-400 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-white">- {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section - More prominent and elegant */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="bg-gray-800 p-16 rounded-3xl shadow-2xl border border-gray-700"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-extrabold mb-4 text-white">Ready for a Better Way to Travel?</h3>
            <p className="text-lg text-gray-400 mb-8">
              Let's create a travel solution that works for your business.
            </p>
            <a
              href="#"
              className="inline-block py-4 px-10 text-xl font-bold rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg transform hover:scale-105"
            >
              Get a Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CorporateBookingPage;
