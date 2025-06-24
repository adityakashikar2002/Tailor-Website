// src/components/Services.jsx
import React, { useState } from 'react';
import useIntersectionObserver from '../utils/useIntersectionObserver';
import { motion } from 'framer-motion';
import {
  FaSuitcase,      // Good for Bespoke Tailoring
  FaTshirt,        // Directly represents a T-shirt, very common for clothing
  FaCut,           // Good for Alterations (represents cutting)
  FaRing,          // Still perfect for Wedding Attire
  FaJacket,        // A more general jacket icon (if FaLeatherJacket isn't available)
  FaPalette,       // Can represent fabric/colors/design for Fabric Consultation
  FaCloth,         // Alternative for Fabric or general textile
  FaTools
} from 'react-icons/fa';

const Services = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Bespoke Tailoring",
      description: "Custom suits crafted to your exact measurements with premium fabrics and hand-stitched details for unparalleled fit and comfort.",
      icon: <FaSuitcase/> // Represents tailoring/formal wear
    },
    {
      id: 2,
      title: "Shirt Making",
      description: "Handmade shirts with perfect collar fit and sleeve length, using breathable fabrics that maintain shape wash after wash.",
      icon: <FaTshirt/> // More common and likely available for shirts
    },
    {
      id: 3,
      title: "Alterations",
      description: "Professional adjustments to ensure your existing wardrobe fits perfectly, from simple hemming to complete reconstructions.",
      icon: <FaCut/> // Represents cutting/tailoring adjustments
    },
    {
      id: 4,
      title: "Wedding Attire",
      description: "Complete wedding wardrobe services including bespoke suits, tuxedo rentals, and bridal party coordination.",
      icon: <FaRing/> // Represents a wedding ring/event
    },
    {
      id: 5,
      title: "Leather Crafting",
      description: "Custom leather jackets and accessories handcrafted by our master leather artisans using traditional techniques.",
      icon: <FaTools/> // Using a more general jacket icon from FA. If you need a more specific leather icon, you might look into other icon sets or SVGs.
    },
    {
      id: 6,
      title: "Fabric Consultation",
      description: "Expert guidance in selecting the perfect fabrics for your garments based on season, occasion and personal style.",
      icon: <FaPalette/> // Represents design, colors, fabrics, or FaCloth for a more direct fabric feel.
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Our Tailoring Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each service is delivered with precision and passion by our master tailors
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              whileHover={{ y: -10 }}
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <motion.div
                className="mt-6 h-1 bg-indigo-100 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: hoveredService === service.id ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-full bg-indigo-600"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;