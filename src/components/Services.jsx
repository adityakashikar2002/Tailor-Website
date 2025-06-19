// import React, { useState } from 'react';
// import useIntersectionObserver from '../utils/useIntersectionObserver';

// const Services = () => {
//   const [ref, isVisible] = useIntersectionObserver({
//     threshold: 0.1,
//     triggerOnce: true
//   });
//   const [hoveredService, setHoveredService] = useState(null);

//   const services = [
//     {
//       id: 1,
//       title: "Tailor Sewing",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
//       image: "https://storage.googleapis.com/a1aa/image/4c7502a5-ea90-46de-866d-f4c5f18ce8ee.jpg"
//     },
//     {
//       id: 2,
//       title: "Measurement",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
//       image: "https://storage.googleapis.com/a1aa/image/3532b352-a042-4d59-a658-eaaa0e23a967.jpg"
//     },
//     {
//       id: 3,
//       title: "Ready-made",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
//       image: "https://storage.googleapis.com/a1aa/image/e047e95b-98c5-4dae-c4d4-c35da56f624a.jpg"
//     }
//   ];

//   return (
//     <div ref={ref} className="bg-white text-secondary py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         <section className="grid grid-cols-1 sm:grid-cols-3 gap-x-20 gap-y-12 justify-center">
//           {services.map((service, index) => (
//             <article 
//               key={service.id} 
//               className={`flex flex-col items-center text-center max-w-xs mx-auto ${isVisible ? 'animate-slide-in-up' : ''}`}
//               style={{ animationDelay: isVisible ? `${index * 0.2}s` : '0s' }}
//               onMouseEnter={() => setHoveredService(service.id)}
//               onMouseLeave={() => setHoveredService(null)}
//             >
//               <div className="relative overflow-hidden rounded-md mb-6 group">
//                 <img 
//                   alt={service.title} 
//                   className={`w-[300px] h-[350px] object-cover transition-all duration-500 ${hoveredService === service.id ? 'scale-105' : 'scale-100'}`} 
//                   src={service.image} 
//                 />
//                 {hoveredService === service.id && (
//                   <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300"></div>
//                 )}
//               </div>
//               <div className="flex items-center mb-2">
//                 <div className={`flex items-center justify-center w-8 h-8 rounded-full ${hoveredService === service.id ? 'border-2 border-accent' : 'bg-accent'} transition-all duration-300 mr-3 select-none`}>
//                   <span className={`${hoveredService === service.id ? 'text-accent' : 'text-white'}`}>
//                     {service.id}
//                   </span>
//                 </div>
//                 <h3 className={`text-xl font-semibold leading-tight transition-colors duration-300 ${hoveredService === service.id ? 'text-accent' : 'text-secondary'}`}>
//                   {service.title}
//                 </h3>
//               </div>
//               <p className="text-sm leading-relaxed max-w-[280px]">
//                 {service.description}
//               </p>
//             </article>
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Services;




// // // src/components/Services.jsx
// // import React from 'react';
// import { FaSuitcase } from 'react-icons/fa';
// import { MdOutlineContentCut } from 'react-icons/md';
// import { FaRulerCombined } from 'react-icons/fa';
// import { FaRing } from 'react-icons/fa';
// import { MdOutlineBuild } from 'react-icons/md';
// import { FaSwatchbook } from 'react-icons/fa';

// // const Services = () => {
// //   const services = [
// //     {
// //       title: "Bespoke Suits",
// //       description: "Handcrafted suits tailored to your exact measurements and style preferences, using only the finest fabrics.",
// //       icon: <FaSuitcase/>
// //     },
// //     {
// //       title: "Shirt Making",
// //       description: "Custom shirts designed to fit your body perfectly, with attention to collar style, cuffs, and fabric selection.",
// //       icon: <MdOutlineContentCut/>
// //     },
// //     {
// //       title: "Alterations",
// //       description: "Professional alterations to ensure your existing wardrobe fits you like it was made for you.",
// //       icon: <FaRulerCombined/>
// //     },
// //     {
// //       title: "Wedding Attire",
// //       description: "Complete wedding wardrobe services for grooms and wedding parties, including tuxedo rentals.",
// //       icon: <FaRing/>
// //     },
// //     {
// //       title: "Leather Crafting",
// //       description: "Custom leather jackets and accessories handcrafted by our master leather artisans.",
// //       icon: "🧥"
// //     },
// //     {
// //       title: "Fabric Consultation",
// //       description: "Expert guidance in selecting the perfect fabrics for your garments based on season and occasion.",
// //       icon: <FaSwatchbook/>
// //     }
// //   ];

// //   return (
// //     <section className="py-20 bg-white">
// //       <div className="container mx-auto px-6">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Our Tailoring Services</h2>
// //           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// //             Each service is delivered with precision and passion by our master tailors
// //           </p>
// //         </div>
        
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// //           {services.map((service, index) => (
// //             <div 
// //               key={index}
// //               className="bg-amber-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
// //             >
// //               <div className="text-5xl mb-6">{service.icon}</div>
// //               <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
// //               <p className="text-gray-600">{service.description}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Services;




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