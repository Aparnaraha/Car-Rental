"use client" // Needed for Framer Motion

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, MapPin, Tag, ArrowRight, Filter, ChevronLeft, ChevronRight, Newspaper } from 'lucide-react'; // Icons for blog cards, filters, pagination

// BlogCard component, similar to the Home page's Card
const BlogCard = ({ title, date, excerpt, category, imageUrl, link }) => {
  return (
    <motion.div
      className={`relative bg-neutral-800 rounded-xl p-6 transition-all duration-300 transform border border-neutral-700 
                  hover:border-[#20c997] hover:shadow-[0_0_20px_rgba(32,201,151,0.4)]
                  flex flex-col h-full overflow-hidden group`} // Ensure consistent height for cards in grid, added group for nested hover
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03, z: 10 }} // z-index on hover to prevent clipping issues with other cards
    >
      {imageUrl && (
        <div className="mb-4 rounded-lg overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-115" // Slower, more pronounced zoom
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x200/20c997/ffffff?text=Blog+Image" }} // Fallback image
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-sm font-semibold text-white bg-[#20c997] px-3 py-1 rounded-full">{category}</span> {/* Category badge */}
          </div>
        </div>
      )}
      <div className="flex items-center text-neutral-400 text-sm mb-3">
        <Calendar size={16} className="mr-2 text-[#20c997]" />
        <span>{date}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#20c997] transition-colors duration-300">{title}</h3>
      <p className="text-neutral-300 text-sm flex-grow mb-4 leading-relaxed">{excerpt}</p>
      <a 
        href={link} 
        className="inline-flex items-center text-[#20c997] font-semibold hover:text-white transition-all duration-200 group-hover:scale-105" // Scale on hover
      >
        Read More
        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" /> {/* Arrow moves on hover */}
      </a>
    </motion.div>
  );
};

const Blog = () => {
  const allBlogPosts = [
    {
      title: "The Future of Luxury Car Rentals: Autonomous & Electric Fleets",
      date: "August 15, 2025",
      excerpt: "Explore upcoming trends in the luxury car rental industry, from electric supercars to AI-powered booking experiences. Get ready for a revolution in premium mobility.",
      category: "Trends",
      imageUrl: "https://placehold.co/600x300/1a7d61/ffffff?text=Future+EVs",
      link: "#blog-post-1"
    },
    {
      title: "Top 7 Scenic Road Trips Across India in a Premium SUV",
      date: "August 10, 2025",
      excerpt: "Discover breathtaking routes perfect for a high-performance SUV. Unleash the power of luxury on scenic highways across diverse landscapes.",
      category: "Travel",
      imageUrl: "https://placehold.co/600x300/1a7d61/ffffff?text=India+Roadtrip",
      link: "#blog-post-2"
    },
    {
      title: "Corporate Mobility Solutions: Elevating Your Business Travel",
      date: "August 5, 2025",
      excerpt: "A guide to selecting the ideal luxury car for corporate travel. Make a lasting impression and ensure comfort on your next executive journey.",
      category: "Business",
      imageUrl: "https://placehold.co/600x300/1a7d61/ffffff?text=Corporate+Travel",
      link: "#blog-post-3"
    },
    {
      title: "Essential Tips for Maintaining Your Luxury Rental Car",
      date: "July 28, 2025",
      excerpt: "Learn essential tips for maintaining your luxury rental car to ensure a perfect driving experience. Small steps for a big difference in journey quality.",
      category: "Maintenance",
      imageUrl: "https://placehold.co/600x300/1a7d61/ffffff?text=Car+Care+Tips",
      link: "#blog-post-4"
    },
    {
      title: "Our Commitment to Green Mobility: The Electric Vehicle Advantage",
      date: "July 20, 2025",
      excerpt: "Dive into our growing selection of electric luxury vehicles. Experience high performance with a low environmental footprint for a sustainable future.",
      category: "Green Mobility",
      imageUrl: "https://placehold.co/600x300/1a7d61/ffffff?text=Eco+Luxury",
      link: "#blog-post-5"
    },
    {
      title: "The Strategic Benefits of Long-Term Luxury Car Rentals",
      date: "July 15, 2025",
      excerpt: "Explore the advantages of extended luxury car rentals for personal and professional use. Flexibility and prestige, without the hassle of ownership.",
      category: "Services",
      imageUrl: "https://placehold.co/600x300/1a7d61/ffffff?text=LongTermRental",
      link: "#blog-post-6"
    },
    {
      title: "Beyond Driving: Meet Our Expert Chauffeur Team",
      date: "July 8, 2025",
      excerpt: "Meet the dedicated professionals who ensure your safe and luxurious journey. Our chauffeurs are trained for excellence, discretion, and impeccable service.",
      category: "Team",
      imageUrl: "https://placehold.co/600x300/1a7d61/ffffff?text=ChauffeurTeam",
      link: "#blog-post-7"
    },
    {
      title: "Luxury Cars on the Big Screen: Iconic Rentals",
      date: "June 30, 2025",
      excerpt: "A thrilling look at iconic luxury cars featured in famous movies. Discover how you can rent these cinematic beauties for your own star-studded experience.",
      category: "Entertainment",
      imageUrl: "https://placehold.co/600x300/1a7d61/ffffff?text=Movie+Cars+Iconic",
      link: "#blog-post-8"
    },
    {
      title: "Your Definitive Guide to Seamless Airport Transfers",
      date: "June 25, 2025",
      excerpt: "Practical tips for stress-free luxury airport pickups and drop-offs. Start or end your travel in ultimate comfort and punctuality.",
      category: "Travel Tips",
      imageUrl: "https://placehold.co/600x300/1a7d61/ffffff?text=AirportTransfers",
      link: "#blog-post-9"
    },
    {
      title: "Wedding Day Grandeur: Choosing the Perfect Luxury Car",
      date: "June 18, 2025",
      excerpt: "How to select the ideal luxury car to make a grand entrance on your wedding day. Arrive in unparalleled style and create unforgettable memories.",
      category: "Events",
      imageUrl: "https://placehold.co/600x300/1a7d61/ffffff?text=Wedding+Luxury",
      link: "#blog-post-10"
    },
    {
      title: "The VIP Experience: Unlocking Exclusive Booking Services",
      date: "June 10, 2025",
      excerpt: "Discover the unparalleled perks of our VIP booking services, meticulously tailored for clients who demand the very best in luxury and convenience.",
      category: "VIP",
      imageUrl: "https://placehold.co/600x300/1a7d61/ffffff?text=VIP+Access",
      link: "#blog-post-11"
    },
    {
      title: "Innovation on Wheels: The Evolution of In-Car Technology",
      date: "June 3, 2025",
      excerpt: "From advanced infotainment systems to groundbreaking autonomous driving features, explore the cutting-edge technology integrating into modern luxury cars.",
      category: "Technology",
      imageUrl: "https://placehold.co/600x300/1a7d61/ffffff?text=Car+Tech+Future",
      link: "#blog-post-12"
    },
    {
      title: "Our Meticulous Process: How We Select & Maintain Our Fleet",
      date: "May 28, 2025",
      excerpt: "A transparent glimpse into how we rigorously select and maintain our fleet of high-end vehicles, ensuring optimal quality, safety, and performance for every ride.",
      category: "Fleet",
      imageUrl: "https://placehold.co/600x300/1a7d61/ffffff?text=Fleet+Maintenance",
      link: "#blog-post-13"
    },
    {
      title: "Summer Driving Delights: Renting a Luxury Convertible",
      date: "May 20, 2025",
      excerpt: "Embrace the sun and open roads with our exquisite range of luxury convertibles. The perfect choice for a stylish, exhilarating summer escape.",
      category: "Seasonal",
      imageUrl: "https://placehold.co/600x300/1a7d61/ffffff?text=Summer+Convertible",
      link: "#blog-post-14"
    },
    {
      title: "Driving Responsibly: Our Commitment to Corporate Social Responsibility",
      date: "May 15, 2025",
      excerpt: "Our unwavering commitment to sustainable practices and active community engagement. Discover how we are driving responsibly for a better future, one mile at a time.",
      category: "CSR",
      imageUrl: "https://placehold.co/600x300/1a7d61/ffffff?text=CSR+Initiatives",
      link: "#blog-post-15"
    },
  ];

  const categories = ["All", "Trends", "Travel", "Business", "Maintenance", "Green Mobility", "Services", "Team", "Entertainment", "Travel Tips", "Events", "VIP", "Technology", "Fleet", "Seasonal", "CSR"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Display 6 posts per page

  const filteredPosts = selectedCategory === "All"
    ? allBlogPosts
    : allBlogPosts.filter(post => post.category === selectedCategory);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return; // Prevent out-of-bounds
    setCurrentPage(pageNumber);
  };

  const getPaginationGroup = () => {
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);
    
    // Adjust if near the beginning or end
    if (currentPage <= 3) {
      end = Math.min(totalPages, 5);
    }
    if (currentPage >= totalPages - 2) {
      start = Math.max(1, totalPages - 4);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans relative z-0">
      {/* Absolute container for the complex background layers, same as Home.jsx */}
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

        {/* Subtle, moving diagonal lines/texture - mimic the very faint vertical elements */}
        <div className="absolute inset-0 background-lines-animation opacity-5"></div>
      </div>

      <main className="container mx-auto py-16 px-4 relative z-10 min-h-[calc(100vh-8rem)]">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-10 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#20c997] text-center w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Latest Insights & News
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-neutral-300 mb-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Stay updated with the world of luxury car rentals, travel tips, and automotive innovations.
        </motion.p>

        {/* Category Filter */}
        <motion.div 
          className="mb-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="text-neutral-300 flex items-center mr-2"><Filter size={18} className="mr-1 text-[#20c997]"/> Filter by:</span>
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 
                          ${selectedCategory === cat 
                            ? 'bg-[#20c997] text-white shadow-md' 
                            : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600 hover:text-white border border-neutral-600'
                          }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {currentPosts.map((post, index) => (
              <BlogCard key={post.link} {...post} /> // Use unique link as key for AnimatePresence
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            className="flex justify-center items-center gap-2 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-3 rounded-full bg-neutral-700 text-neutral-300 hover:bg-[#20c997] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            {getPaginationGroup().map((page) => (
              <motion.button
                key={page}
                onClick={() => paginate(page)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 
                            ${currentPage === page 
                              ? 'bg-[#20c997] text-white shadow-lg' 
                              : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600 hover:text-white border border-neutral-600'
                            }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {page}
              </motion.button>
            ))}

            <motion.button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-3 rounded-full bg-neutral-700 text-neutral-300 hover:bg-[#20c997] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </motion.div>
        )}

        {/* Call to Action / Featured Blog Section */}
        <motion.div
          className="mt-20 p-8 md:p-12 bg-neutral-800 rounded-2xl border border-neutral-700 shadow-xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Newspaper size={64} className="text-[#20c997] mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#20c997] leading-tight">
            Subscribe for Exclusive Insights
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-8">
            Get the latest articles, exclusive offers, and expert tips on luxury car rentals directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-6 py-3 rounded-full bg-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#20c997] w-full sm:w-80"
            />
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-[#20c997] to-[#1a9f7a] text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              whileHover={{ boxShadow: "0 0 20px rgba(32, 201, 151, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe Now
            </motion.button>
          </div>
        </motion.div>

      </main>

      {/* Tailwind CSS custom animations and styles for the background */}
      <style>{`
        /* --- Complex Background Styling (Copied from Home.jsx) --- */

        .background-blobs-container {
            width: 150%; 
            height: 150%;
            top: -25%;
            left: -25%;
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

        .blob-1 {
            width: 400px; height: 400px;
            background: rgba(32, 201, 151, 0.4); /* Teal green blob */
            top: 10%; left: 15%;
            animation: blob-move-1 50s linear infinite alternate;
        }
        .blob-2 {
            width: 500px; height: 500px;
            background: rgba(20, 160, 120, 0.4); /* Darker teal green blob */
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
            background: rgba(20, 160, 120, 0.4); 
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
            100% { transform: translate(-20%, -20%); } 
        }
        .animate-blob-group-move {
            animation: blob-group-move 180s linear infinite alternate; 
        }

        /* Subtle moving diagonal lines/texture */
        .background-lines-animation {
            background-image: repeating-linear-gradient(45deg,
                rgba(32, 201, 151, 0.02) 0px, /* Teal green lines */
                rgba(32, 201, 151, 0.02) 2px,
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
      `}</style>
    </div>
  );
};

export default Blog;
