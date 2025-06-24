// src/components/AboutSection.jsx
import React from 'react';
import useIntersectionObserver from '../utils/useIntersectionObserver';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col lg:flex-row items-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          {/* <div className="lg:w-1/2 mb-16 lg:mb-0 lg:pr-12 relative">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1667573958220-fb5f7c61d661?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Master tailor at work" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white p-6 rounded-xl shadow-lg">
                <span className="block text-4xl font-bold">37</span>
                <span className="block text-sm">Years Experience</span>
              </div>
            </div>
          </div> */}
          <div className="lg:w-1/2 mb-16 lg:mb-0 lg:pr-12 relative">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1736003042250-46d46e9e3233?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Master tailor at work"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white p-6 rounded-xl shadow-lg">
                <span className="block text-4xl font-bold">37</span>
                <span className="block text-sm">Years Experience</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif tracking-tight">
              Our <span className="text-indigo-600">Tailoring</span> Heritage
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 1985, StitchCraft began as a small atelier in Milan before bringing our expertise to global clients. Our founder trained under Italy's most respected master tailors, bringing authentic craftsmanship to every garment.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Today, we blend traditional techniques with modern innovation. Each piece is a collaboration between client and artisan, resulting in clothing that tells your unique story through impeccable craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Meet Our Tailors
              </button>
              <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-all transform hover:-translate-y-1">
                Our Process
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;