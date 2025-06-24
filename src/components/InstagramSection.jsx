// src/components/InstagramSection.jsx
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import useIntersectionObserver from '../utils/useIntersectionObserver';
import { motion } from 'framer-motion';

const InstagramSection = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Bespoke suit fitting"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1719563014656-802c0aa9632a?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Tailor measuring fabric"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Fabric selection"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Behind the Scenes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow our journey of craftsmanship on Instagram
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={stagger}
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img
                alt={post.alt}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                src={post.image}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center">
                <FaInstagram 
                  className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110" 
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;