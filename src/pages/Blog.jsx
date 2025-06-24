// src/pages/Blog.jsx
import React from 'react';
import { FaCalendarAlt, FaUser, FaComment, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Blog = () => {
  const articles = [
    {
      title: "The Art of Hand-Stitched Suits",
      excerpt: "Exploring why hand-stitching remains the gold standard in bespoke tailoring and how to identify true craftsmanship.",
      date: "June 15, 2023",
      author: "Marco Fellini",
      comments: 12,
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Choosing Fabrics for Different Seasons",
      excerpt: "A guide to selecting the perfect fabric weight and composition for year-round comfort and style.",
      date: "May 28, 2023",
      author: "Sophia Ricci",
      comments: 8,
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "The Tailor's Essential Toolkit",
      excerpt: "Discover the specialized tools that enable our tailors to create garments of exceptional quality and fit.",
      date: "April 10, 2023",
      author: "Luca Bianchi",
      comments: 5,
      image: "https://images.unsplash.com/photo-1619470149079-8a526f6e409b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-indigo-700 to-indigo-800 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590071089561-2085e3d21a35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>
        <motion.div 
          className="relative z-10"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold mb-4 font-serif">Tailor's Journal</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Insights on craftsmanship, fabric selection, and timeless style from our master tailors
          </p>
        </motion.div>
      </section>

      {/* Articles Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
          >
            {articles.map((article, index) => (
              <motion.article 
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -10 }}
              >
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4">
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      {article.date}
                    </span>
                    <span className="flex items-center">
                      <FaUser className="mr-2" />
                      {article.author}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">{article.title}</h2>
                  <p className="text-gray-600 mb-6">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-500">
                      <FaComment className="mr-2" />
                      {article.comments} comments
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-800 flex items-center">
                      Read More <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-serif">Stay Updated</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for tailoring tips, style advice, and exclusive offers
            </p>
            <form className="max-w-md mx-auto flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <motion.button 
                type="submit" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-r-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;