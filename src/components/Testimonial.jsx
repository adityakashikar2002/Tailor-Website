// // import React, { useState, useEffect } from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
// // import useIntersectionObserver from '../utils/useIntersectionObserver';

// // const testimonials = [
// //   {
// //     id: 1,
// //     text: "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
// //     author: "Robart Brown",
// //     role: "Creative designer at Colorlib",
// //     image: "https://storage.googleapis.com/a1aa/image/6439fdbf-7d8a-49e7-ffaa-d0ab57e2f608.jpg"
// //   },
// //   {
// //     id: 2,
// //     text: "Another great testimonial about how amazing your services are. The quality is outstanding and the customer service is exceptional.",
// //     author: "Jane Smith",
// //     role: "Marketing Director",
// //     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
// //   },
// //   {
// //     id: 3,
// //     text: "I've been using these services for years and they never disappoint. The attention to detail is remarkable and the results speak for themselves.",
// //     author: "Michael Johnson",
// //     role: "CEO, Fashion Inc.",
// //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
// //   }
// // ];

// // const Testimonial = () => {
// //   const [ref, isVisible] = useIntersectionObserver({
// //     threshold: 0.1,
// //     triggerOnce: true
// //   });
// //   const [currentTestimonial, setCurrentTestimonial] = useState(0);
// //   const [isTransitioning, setIsTransitioning] = useState(false);

// //   useEffect(() => {
// //     if (!isVisible) return;
    
// //     const interval = setInterval(() => {
// //       handleNext();
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, [currentTestimonial, isVisible]);

// //   const handleNext = () => {
// //     setIsTransitioning(true);
// //     setTimeout(() => {
// //       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
// //       setIsTransitioning(false);
// //     }, 300);
// //   };

// //   const handlePrev = () => {
// //     setIsTransitioning(true);
// //     setTimeout(() => {
// //       setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
// //       setIsTransitioning(false);
// //     }, 300);
// //   };

// //   const testimonial = testimonials[currentTestimonial];

// //   return (
// //     <div ref={ref} className="bg-white text-secondary py-20">
// //       <section className="max-w-5xl mx-auto px-6">
// //         <div className="max-w-3xl mx-auto relative">
// //           {/* <FontAwesomeIcon
// //             icon={faQuoteLeft}
// //             className="absolute -left-12 top-0 w-16 h-16 text-[#f9d9d6] opacity-60"
// //           /> */}
// //           <img src='https://preview.colorlib.com/theme/tailor/assets/img/icon/quotes-sign.png.webp' className="absolute -left-12 -top-20 w-32 h-28 text-[#f9d9d6] opacity-60"/>
// //           <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'} ml-10 mt-24`}>
// //             <p className="text-base leading-relaxed tracking-tight max-w-xl text-[18px]">
// //               {testimonial.text}
// //             </p>
// //             <div className="flex items-center mt-16 space-x-6">
// //               <div className="flex-shrink-0 rounded-full border border-[#d9b7a9] p-[2px]">
// //                 <img
// //                   alt={`Portrait of ${testimonial.author}`}
// //                   className="rounded-full w-16 h-16 object-cover"
// //                   src={testimonial.image}
// //                 />
// //               </div>
// //               <div>
// //                 <h3 className="text-secondary font-semibold text-[22px] leading-tight">{testimonial.author}</h3>
// //                 <p className="text-[#7a7a7a] text-sm leading-snug">{testimonial.role}</p>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="flex justify-end items-center space-x-2 mt-12 text-[#f9d9d6] text-sm font-medium select-none">
// //             <button 
// //               aria-label="Previous" 
// //               className="hover:text-[#d9b7a9] transition-colors"
// //               onClick={handlePrev}
// //             >
// //               <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
// //                 <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path>
// //               </svg>
// //             </button>
// //             {testimonials.map((_, index) => (
// //               <span 
// //                 key={index} 
// //                 className={`cursor-pointer ${currentTestimonial === index ? 'text-accent' : ''}`}
// //                 onClick={() => setCurrentTestimonial(index)}
// //               >
// //                 {index + 1}
// //               </span>
// //             ))}
// //             <button 
// //               aria-label="Next" 
// //               className="hover:text-[#d9b7a9] transition-colors"
// //               onClick={handleNext}
// //             >
// //               <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
// //                 <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
// //               </svg>
// //             </button>
// //           </div>
// //           <hr className="border-t border-[#f3f3f3] mt-20" />
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Testimonial;


// // src/components/Testimonial.jsx
// import React, { useState } from 'react';
// import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const Testimonial = () => {
//   const testimonials = [
//     {
//       quote: "The attention to detail in my bespoke suit was extraordinary. I've never worn anything that fit so perfectly or received so many compliments.",
//       name: "James Wilson",
//       role: "Investment Banker",
//       image: "https://randomuser.me/api/portraits/men/32.jpg"
//     },
//     {
//       quote: "As a woman in a male-dominated industry, having a perfectly tailored suit makes all the difference. StitchCraft understood exactly what I needed.",
//       name: "Sarah Chen",
//       role: "Corporate Lawyer",
//       image: "https://randomuser.me/api/portraits/women/44.jpg"
//     },
//     {
//       quote: "My wedding suit was a masterpiece. The team worked closely with me to create something that reflected my personality while honoring tradition.",
//       name: "Michael Rodriguez",
//       role: "Tech Entrepreneur",
//       image: "https://randomuser.me/api/portraits/men/75.jpg"
//     }
//   ];

//   const [current, setCurrent] = useState(0);

//   const nextTestimonial = () => {
//     setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   const prevTestimonial = () => {
//     setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   return (
//     <section className="py-20 bg-amber-800 text-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4 font-serif">Client Experiences</h2>
//           <p className="text-xl max-w-2xl mx-auto">
//             Don't just take our word for it - hear from those who've experienced our craftsmanship
//           </p>
//         </div>
        
//         <div className="max-w-4xl mx-auto relative">
//           <FaQuoteLeft className="text-amber-200 text-5xl absolute -top-8 left-0 opacity-30" />
          
//           <div className="bg-amber-900 rounded-xl p-10 shadow-lg">
//             <p className="text-xl mb-8 italic">"{testimonials[current].quote}"</p>
            
//             <div className="flex items-center">
//               <img 
//                 src={testimonials[current].image} 
//                 alt={testimonials[current].name} 
//                 className="w-16 h-16 rounded-full border-4 border-amber-200 mr-6"
//               />
//               <div>
//                 <h4 className="text-xl font-bold">{testimonials[current].name}</h4>
//                 <p className="text-amber-200">{testimonials[current].role}</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex justify-center mt-8 space-x-4">
//             <button 
//               onClick={prevTestimonial}
//               className="bg-amber-900 hover:bg-amber-950 text-white p-3 rounded-full transition-all"
//             >
//               <FaChevronLeft />
//             </button>
//             <button 
//               onClick={nextTestimonial}
//               className="bg-amber-900 hover:bg-amber-950 text-white p-3 rounded-full transition-all"
//             >
//               <FaChevronRight />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;



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