// src/components/Testimonial.jsx
import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Testimonial = () => {
  const testimonials = [
    {
      quote: "The attention to detail in my bespoke suit was extraordinary. I've never worn anything that fit so perfectly or received so many compliments. The craftsmanship is truly exceptional.",
      name: "James Wilson",
      role: "Investment Banker",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "As a woman in a male-dominated industry, having a perfectly tailored suit makes all the difference. StitchCraft understood exactly what I needed - professional yet feminine.",
      name: "Sarah Chen",
      role: "Corporate Lawyer",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "My wedding suit was a masterpiece. The team worked closely with me to create something that reflected my personality while honoring tradition. Worth every penny.",
      name: "Michael Rodriguez",
      role: "Tech Entrepreneur",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-indigo-600 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 font-serif">Client Experiences</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Don't just take our word for it - hear from those who've experienced our craftsmanship
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <FaQuoteLeft className="text-indigo-400 text-5xl absolute -top-8 left-0 opacity-30" />
          
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-indigo-700 rounded-xl p-10 shadow-lg"
          >
            <p className="text-xl mb-8 italic">"{testimonials[current].quote}"</p>
            
            <div className="flex items-center">
              <img 
                src={testimonials[current].image} 
                alt={testimonials[current].name} 
                className="w-16 h-16 rounded-full border-4 border-indigo-400 mr-6"
              />
              <div>
                <h4 className="text-xl font-bold">{testimonials[current].name}</h4>
                <p className="text-indigo-200">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button 
              onClick={prevTestimonial}
              className="bg-indigo-700 hover:bg-indigo-800 text-white p-3 rounded-full transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft />
            </motion.button>
            <motion.button 
              onClick={nextTestimonial}
              className="bg-indigo-700 hover:bg-indigo-800 text-white p-3 rounded-full transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;