// import React from 'react';
// import useIntersectionObserver from '../utils/useIntersectionObserver';

// const WhyChooseUs = () => {
//   const [ref, isVisible] = useIntersectionObserver({
//     threshold: 0.1,
//     triggerOnce: true
//   });

//   const features = [
//     {
//       icon: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services1.svg",
//       title: "Tailor Sewing",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
//     },
//     {
//       icon: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services2.svg",
//       title: "Tailor Sewing",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
//     },
//     {
//       icon: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services3.svg",
//       title: "Tailor Sewing",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
//     },
//     {
//       icon: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services4.svg",
//       title: "Tailor Sewing",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
//     }
//   ];

//   return (
//     <div ref={ref} className="bg-white text-secondary py-16">
//       <section className="max-w-7xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold mb-3">Why use our service?</h2>
//         <p className="text-base max-w-xl mx-auto mb-14">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           <br />
//           Suspendisse varius enim in eros.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-12 max-w-6xl mx-auto text-left">
//           {features.map((feature, index) => (
//             <div 
//               key={index} 
//               className={`flex flex-col items-center ${isVisible ? 'animate-slide-in-up' : ''}`}
//               style={{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }}
//             >
//               <img alt={feature.title} className="mb-4 h-12 w-12" src={feature.icon} />
//               <h3 className="font-semibold text-lg mb-3 hover:text-accent transition-colors">{feature.title}</h3>
//               <p className="text-sm leading-relaxed max-w-xs">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WhyChooseUs;


// src/components/WhyChooseUs.jsx
import React from 'react';
import useIntersectionObserver from '../utils/useIntersectionObserver';
import { motion } from 'framer-motion';
import {
  FaUsers,        // For "Master Tailors" - representing a team or experienced individuals
  FaGem,          // For "Premium Materials" - symbolizing quality, preciousness, or high value
  FaHands,        // For "Handcrafted Details" - representing manual work, craftsmanship, or care
  FaHeartbeat     // For "Lifetime Care" - suggesting ongoing care, longevity, or dedication
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: <FaUsers/>,
      title: "Master Tailors",
      description: "Our artisans average 20+ years of experience in traditional tailoring techniques."
    },
    {
      icon: <FaGem/>,
      title: "Premium Materials",
      description: "We source only the finest fabrics from renowned mills around the world."
    },
    {
      icon: <FaHands/>,
      title: "Handcrafted Details",
      description: "Every garment features hand-stitched elements for superior quality and durability."
    },
    {
      icon: <FaHeartbeat/>,
      title: "Lifetime Care",
      description: "Complimentary adjustments and maintenance for the life of your garment."
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
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Why Choose StitchCraft</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The difference is in the details - experience tailoring excellence
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-slate-50 rounded-xl p-8 text-center hover:bg-indigo-50 transition-colors"
              whileHover={{ y: -10 }}
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;