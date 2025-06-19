// // import React from 'react';
// // import useIntersectionObserver from '../utils/useIntersectionObserver';

// // const AboutSection = () => {
// //   const [ref, isVisible] = useIntersectionObserver({
// //     threshold: 0.1,
// //     triggerOnce: true
// //   });

// //   return (
// //     <div ref={ref} className="relative bg-white">
// //       <section className={`relative ml-32 mr-32 flex justify-end bg-light min-h-[480px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[720px] ${isVisible ? 'animate-fade-in' : ''}`}>
// //         <div className={`absolute left-16 top-16 md:top-24 md:left-24 lg:left-32 lg:top-32 xl:left-40 xl:top-10 max-w-[600px] ${isVisible ? 'animate-slide-in-left' : ''}`}>
// //           <img
// //             alt="Man in dark checkered suit with red tie holding suit lapels"
// //             className="w-full h-auto object-cover"
// //             src="https://storage.googleapis.com/a1aa/image/2629d8bf-3814-41b9-a775-b7d3917cf08b.jpg"
// //           />
// //         </div>
// //         <div className={`absolute left-[420px] top-[280px] md:left-[480px] md:top-[360px] lg:left-[520px] lg:top-[400px] xl:left-[580px] xl:top-[240px] max-w-[280px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px] ${isVisible ? 'animate-slide-in-up' : ''}`}>
// //           <img
// //             alt="Woman with short hair wearing green sweater and measuring tape around neck in tailor studio"
// //             className="w-full h-auto object-cover"
// //             src="https://storage.googleapis.com/a1aa/image/29454725-010d-47ca-2c3b-7f8291c42b8a.jpg"
// //           />
// //         </div>
// //         <div className={`relative z-10 flex flex-col justify-center px-8 py-16 md:py-24 md:px-16 lg:px-24 xl:px-32 max-w-[600px] text-secondary ${isVisible ? 'animate-slide-in-right' : ''}`} style={{ marginLeft: '480px' }}>
// //           <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
// //             About our
// //             <br />
// //             tailor house
// //           </h2>
// //           <p className="text-base md:text-lg font-normal mb-6 max-w-[420px]">
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
// //           </p>
// //           <p className="text-sm md:text-base font-light mb-10 max-w-[420px] leading-relaxed">
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
// //           </p>
// //           <button className="bg-primary text-white text-xs md:text-sm font-semibold tracking-widest uppercase py-3 px-8 w-max hover:bg-opacity-90 transition">
// //             More about us
// //           </button>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default AboutSection;




// // src/components/AboutSection.jsx
// import React from 'react';

// const AboutSection = () => {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col lg:flex-row items-center">
//           <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
//             <div className="relative">
//               <img 
//                 src="https://images.unsplash.com/photo-1667573958220-fb5f7c61d661?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//                 alt="Master tailor at work" 
//                 className="rounded-lg shadow-xl w-[600px] h-[auto]"
//               />
//               <div className="absolute -bottom-6 -right-6 bg-amber-700 text-white p-6 rounded-lg shadow-lg">
//                 <span className="block text-4xl font-bold">37</span>
//                 <span className="block text-sm">Years Experience</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="lg:w-1/2">
//             <h2 className="text-4xl font-bold text-gray-800 mb-6 font-serif">Our Tailoring Heritage</h2>
//             <p className="text-lg text-gray-600 mb-6">
//               Founded in 1985, StitchCraft began as a small atelier in Milan before bringing our expertise to global clients. Our founder, Marco Fellini, trained under some of Italy's most respected master tailors.
//             </p>
//             <p className="text-lg text-gray-600 mb-8">
//               Today, we continue the tradition of meticulous craftsmanship while embracing modern techniques. Each garment is a collaboration between client and artisan, resulting in pieces that are as unique as the individuals who wear them.
//             </p>
//             <div className="flex space-x-4">
//               <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium transition-all">
//                 Meet Our Tailors
//               </button>
//               <button className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all">
//                 Our Process
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


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