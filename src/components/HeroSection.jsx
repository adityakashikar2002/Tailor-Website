// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../utils/useIntersectionObserver';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="relative  bg-gradient-to-r from-slate-50 to-white overflow-hidden h-[500px]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto h-full flex items-center px-6 relative z-10">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-12">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 font-serif leading-tight tracking-tight">
              Crafting <span className="text-indigo-600">Timeless</span> Elegance Since 1985
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Bespoke tailoring that celebrates your individuality. Each stitch tells a story of craftsmanship and attention to detail.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/services" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Our Services
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:-translate-y-1"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:flex lg:w-1/2 items-center justify-center pl-12">
          <motion.div 
            className="relative w-full max-w-xl"
            initial={{ opacity: 0, x: 100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              alt="Master tailor at work"
              className="w-full h-auto object-cover rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
              src="https://images.unsplash.com/photo-1606055059939-7e0386191381?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-800">40 Years</p>
                  <p className="text-sm text-gray-600">Of Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, -15, 0],
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full"></div>
      </motion.div> */}
    </section>
  );
};

export default HeroSection;