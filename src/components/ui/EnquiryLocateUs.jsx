"use client" // Needed for Framer Motion

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare, User, CheckCircle, XCircle } from 'lucide-react'; // Import necessary Lucide icons

const EnquiryLocateUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '' // Simplified form: no subject
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null); // Clear previous status

    try {
      // Basic validation
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all fields.");
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      
      // For demonstration, randomly succeed or fail
      if (Math.random() > 0.1) { // 90% success rate for demo
        console.log('Form submitted:', formData);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form on success
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

  // Framer Motion Variants
  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 50 }, // Reduced y for less vertical movement
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const contentBlockVariants = {
    hidden: { opacity: 0, x: -30 }, // Reduced x for less horizontal movement
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const mapBlockVariants = {
    hidden: { opacity: 0, x: 30 }, // Reduced x for less horizontal movement
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const formFieldVariants = {
    hidden: { opacity: 0, y: 15 }, // Reduced y for less vertical movement
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const inputFocusVariants = {
    focus: {
      borderColor: ['#20c997', '#FF073A', '#20c997'],
      boxShadow: ['0 0 0px rgba(0,0,0,0)', '0 0 10px rgba(32,201,151,0.5)', '0 0 10px rgba(255,7,58,0.5)', '0 0 10px rgba(32,201,151,0.5)'],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative bg-black text-white py-16 md:py-20 px-6 md:px-12 overflow-hidden z-0">
      {" "}
      {/* Reduced py */}
      {/* Background blobs container - Replicated for consistency */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F0F] via-black to-[#0A0A0A]"></div>
        <div className="absolute inset-0 background-blobs-container animate-blob-group-move">
          <div className="background-blob blob-1"></div>
          <div className="background-blob blob-2"></div>
          <div className="background-blob blob-3"></div>
          <div className="background-blob blob-4"></div>
          <div className="background-blob blob-5"></div>
        </div>
        <div className="absolute inset-0 background-lines-animation opacity-5"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Heading for the section */}
        <motion.div
          className="text-center mb-12" // Reduced mb
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionHeaderVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#20c997]">
            {" "}
            {/* Reduced mb */}
            Get In Touch & Find Us
          </h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            We're here to answer your questions and guide you to our location.
          </p>
        </motion.div>

        {/* Combined Section: Left (Contact Info & Form) | Right (Map) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {" "}
          {/* Reduced gap */}
          {/* Left Side: Contact Information & Short Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={contentBlockVariants}
            className="bg-neutral-900 p-6 rounded-2xl shadow-xl border border-neutral-800"
          >
            <h3 className="text-2xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FF073A]">
              {" "}
              {/* Reduced mb, text size */}
              Contact Details & Quick Enquiry
            </h3>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
            <div className="flex gap-6">
              {" "}
              {/* Reduced space-y and mb */}
              <div className="flex items-start border border-neutral-800 rounded-2xl p-2">
                <Phone
                  size={20}
                  className="text-[#20c997] mr-3 flex-shrink-0 mt-1"
                />{" "}
                {/* Reduced icon size, mr */}
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Phone Support
                  </h4>{" "}
                  {/* Reduced text size */}
                  <p className="text-neutral-300 text-sm">+91(8093011746)</p>
                </div>
              </div>
              <div className="flex items-start border border-neutral-800 rounded-2xl p-2">
                <Mail
                  size={20}
                  className="text-[#FF073A] mr-3 flex-shrink-0 mt-1"
                />{" "}
                {/* Reduced icon size, mr */}
                <div>
                  <h4 className="text-lg font-semibold text-white">Email Us</h4>{" "}
                  {/* Reduced text size */}
                  <p className="text-neutral-300 text-sm">info@carrental.com</p>
                </div>
              </div>
              </div>
              <div className="flex items-start border border-neutral-800 rounded-2xl p-2">
                <MapPin
                  size={20}
                  className="text-[#20c997] mr-3 flex-shrink-0 mt-1"
                />{" "}
                {/* Reduced icon size, mr */}
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Our Address
                  </h4>{" "}
                  {/* Reduced text size */}
                  <p className="text-neutral-300 text-sm">
                    Cab Pilot Office, PLOT NO-18, NUAGAON,
                  </p>
                  <p className="text-neutral-300 text-sm">
                    Bhubaneswar, Odisha, 751002
                  </p>
                </div>
              </div>
            </div>

            {/* Short Enquiry Form */}
            <h4 className="text-xl font-bold text-white mb-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#20c997]">
              {" "}
              {/* Reduced mb, text size */}
              Send a Quick Message
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              {" "}
              {/* Reduced space-y */}
              <motion.div variants={formFieldVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-neutral-300 mb-1"
                >
                  Your Name
                </label>{" "}
                {/* Reduced mb */}
                <motion.div
                  className="relative flex items-center"
                  whileFocus="focus"
                  variants={inputFocusVariants}
                >
                  <User
                    size={18}
                    className="absolute left-3 text-neutral-400"
                  />{" "}
                  {/* Reduced icon size */}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full p-2 rounded-xl bg-neutral-800 text-white border border-neutral-700 pl-9 focus:ring-transparent focus:border-transparent outline-none transition-all duration-300"
                    required
                  />
                </motion.div>
              </motion.div>
              <motion.div variants={formFieldVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-neutral-300 mb-1"
                >
                  Your Email
                </label>{" "}
                {/* Reduced mb */}
                <motion.div
                  className="relative flex items-center"
                  whileFocus="focus"
                  variants={inputFocusVariants}
                >
                  <Mail
                    size={18}
                    className="absolute left-3 text-neutral-400"
                  />{" "}
                  {/* Reduced icon size */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    className="w-full p-2 rounded-xl bg-neutral-800 text-white border border-neutral-700 pl-9 focus:ring-transparent focus:border-transparent outline-none transition-all duration-300"
                    required
                  />
                </motion.div>
              </motion.div>
              <motion.div variants={formFieldVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-neutral-300 mb-1"
                >
                  Your Message
                </label>{" "}
                {/* Reduced mb */}
                <motion.div
                  className="relative flex items-center"
                  whileFocus="focus"
                  variants={inputFocusVariants}
                >
                  <MessageSquare
                    size={18}
                    className="absolute left-3 top-2.5 text-neutral-400"
                  />{" "}
                  {/* Reduced icon size, adjusted top */}
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    rows="1"
                    className="w-full p-2 rounded-xl bg-neutral-800 text-white border border-neutral-700 pl-9 focus:ring-transparent focus:border-transparent outline-none transition-all duration-300 resize-y"
                    required
                  ></textarea>
                </motion.div>
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(32,201,151,0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2.5 px-6 rounded-xl font-bold text-base bg-gradient-to-r from-[#20c997] to-[#1a7d61] text-white shadow-lg flex items-center justify-center space-x-2 transition-all duration-300"
                disabled={isSubmitting}
                variants={formFieldVariants}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-3 p-2 rounded-lg text-center font-semibold text-xs bg-green-600 text-white flex items-center justify-center space-x-1.5"
                  >
                    <CheckCircle size={16} className="mr-1" />{" "}
                    <span>Message sent successfully!</span>{" "}
                    {/* Reduced icon size */}
                  </motion.p>
                )}
                {submitStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-3 p-2 rounded-lg text-center font-semibold text-xs bg-red-600 text-white flex items-center justify-center space-x-1.5"
                  >
                    <XCircle size={16} className="mr-1" />{" "}
                    <span>Failed to send message. Please try again.</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
          {/* Right Side: Google Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={mapBlockVariants}
            className="w-full h-[400px] lg:h-auto bg-neutral-900 rounded-2xl overflow-hidden shadow-xl border border-neutral-800" // Reduced fixed height for map
          >
            <iframe
              title="Our Location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.171676209411!2d85.83445899999999!3d20.247854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a105a306c5b244d%3A0xc3f3a7f8b2d1c6e0!2sCab%20Pilot%20Office!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </motion.div>
        </div>
      </div>
      {/* Tailwind CSS custom animations and styles for the background */}
      <style>{`
        /* --- Complex Background Styling (Copied for consistency) --- */

        .background-blobs-container {
            width: 150%; 
            height: 150%;
            top: -25%;
            left: -25%;
            position: absolute;
            filter: blur(80px); /* Apply overall blur to the blobs for an ethereal effect */
        }

        .background-blob {
            position: absolute;
            border-radius: 50%; /* Make them circular */
            opacity: 0.1; /* Very faint to provide subtle depth */
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-timing-function: ease-in-out;
        }

        .blob-1 {
            width: 400px; height: 400px;
            background: rgba(32, 201, 151, 0.4); /* Teal green blob */
            top: 10%; left: 15%;
            animation: blob-move-1 50s linear infinite alternate;
        }
        .blob-2 {
            width: 500px; height: 500px;
            background: rgba(255, 7, 58, 0.3); /* Neon Red blob */
            bottom: 20%; right: 10%;
            animation: blob-move-2 60s linear infinite alternate;
        }
        .blob-3 {
            width: 300px; height: 300px;
            background: rgba(32, 201, 151, 0.4); 
            top: 50%; left: 40%;
            animation: blob-move-3 45s linear infinite alternate;
        }
        .blob-4 {
            width: 350px; height: 350px;
            background: rgba(255, 7, 58, 0.3); /* Neon Red blob */
            top: 30%; right: 30%;
            animation: blob-move-4 55s linear infinite alternate;
        }
        .blob-5 {
            width: 450px; height: 450px;
            background: rgba(32, 201, 151, 0.4); 
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
            100% { transform: translate(-20%, -20%); } /* Pan the entire group slightly */
        }
        .animate-blob-group-move {
            animation: blob-group-move 180s linear infinite alternate; /* Very slow, continuous movement */
        }

        /* Subtle moving diagonal lines/texture - provides a faint grid-like effect */
        .background-lines-animation {
            background-image: repeating-linear-gradient(45deg,
                rgba(32, 201, 151, 0.02) 0px, /* Teal green lines, very faint */
                rgba(255, 7, 58, 0.02) 2px, /* Neon Red lines, very faint */
                transparent 2px,
                transparent 100px
            );
            background-size: 200px 200px;
            animation: lines-pan 90s linear infinite; /* Slow panning animation */
        }

        @keyframes lines-pan {
            from { background-position: 0 0; }
            to { background-position: 200px 200px; }
        }
      `}</style>
    </section>
  );
};

export default EnquiryLocateUs;
