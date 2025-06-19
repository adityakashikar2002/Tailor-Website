// src/pages/Services.jsx
import React from 'react';
import { 
  FaSuitcase, 
  FaRuler, 
  FaCut, 
  FaRing, 
  FaTshirt, 
  FaSearch,
  FaStar,
  FaAward,
  FaShieldAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Service = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      icon: <FaSuitcase className="text-4xl" />,
      title: "Bespoke Suits",
      description: "Handcrafted suits tailored to your exact measurements using premium fabrics from world-renowned mills.",
      details: [
        "100% hand-stitched construction",
        "Custom pattern drafting",
        "Unlimited fabric selection",
        "Multiple fitting sessions"
      ]
    },
    {
      icon: <FaRuler className="text-4xl" />,
      title: "Custom Shirts",
      description: "Perfectly fitted shirts with attention to collar style, cuff design, and fabric selection.",
      details: [
        "Precision measurements",
        "Custom collar & cuff styles",
        "Mother-of-pearl buttons",
        "Monogramming available"
      ]
    },
    {
      icon: <FaCut className="text-4xl" />,
      title: "Alterations",
      description: "Professional adjustments to ensure your existing wardrobe fits perfectly.",
      details: [
        "Hemming & tapering",
        "Shoulder adjustments",
        "Lining replacements",
        "Complete reconstructions"
      ]
    },
    {
      icon: <FaRing className="text-4xl" />,
      title: "Wedding Attire",
      description: "Complete wedding wardrobe services for the entire wedding party.",
      details: [
        "Groom's bespoke suit",
        "Bridesmaids & groomsmen",
        "Tuxedo rentals",
        "Emergency alterations"
      ]
    },
    {
      icon: <FaTshirt className="text-4xl" />,
      title: "Leather Crafting",
      description: "Custom leather jackets and accessories handcrafted by our master artisans.",
      details: [
        "Premium leather selection",
        "Custom hardware options",
        "Hand-stitched details",
        "Lifetime conditioning"
      ]
    },
    {
      icon: <FaSearch className="text-4xl" />,
      title: "Fabric Consultation",
      description: "Expert guidance in selecting the perfect fabrics for your needs.",
      details: [
        "Seasonal recommendations",
        "Durability analysis",
        "Color matching",
        "Care instructions"
      ]
    }
  ];

  const benefits = [
    {
      icon: <FaStar className="text-2xl" />,
      title: "40+ Years Experience",
      description: "Generations of tailoring expertise"
    },
    {
      icon: <FaAward className="text-2xl" />,
      title: "Master Tailors",
      description: "Trained in Europe's finest ateliers"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Lifetime Guarantee",
      description: "On all our craftsmanship"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-indigo-700 to-indigo-800 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>
        <motion.div 
          className="relative z-10"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold mb-4 font-serif">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Exceptional craftsmanship tailored to your unique style and needs
          </p>
        </motion.div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Tailoring Excellence</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each service is delivered with meticulous attention to detail by our master tailors
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -10 }}
              >
                <div className="text-indigo-600 mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 font-serif">Why Choose Us</h2>
            <p className="text-xl max-w-2xl mx-auto">
              The StitchCraft difference - unparalleled quality and service
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-indigo-700 rounded-xl p-8 text-center"
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-indigo-200 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-indigo-100">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From initial consultation to final fitting - our meticulous approach
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-200 transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              {[
                {
                  step: "1",
                  title: "Consultation",
                  description: "We discuss your style preferences, needs and take initial measurements",
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                },
                {
                  step: "2",
                  title: "Fabric Selection",
                  description: "Choose from our extensive collection of premium fabrics",
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                  </svg>
                },
                {
                  step: "3",
                  title: "First Fitting",
                  description: "We create a baste fitting to perfect the silhouette",
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                },
                {
                  step: "4",
                  title: "Final Fitting",
                  description: "Your garment is perfected and ready for delivery",
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg relative z-10">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto md:mx-0 mb-4 rounded-full bg-indigo-100 text-indigo-600">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="hidden md:block absolute top-0 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white transform -translate-y-1/2 z-20" 
                    style={index % 2 === 0 ? { right: '-3px' } : { left: '-3px' }}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-serif">Ready to Begin Your Tailoring Journey?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Schedule a consultation with our master tailors today
            </p>
            <motion.button 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Service;