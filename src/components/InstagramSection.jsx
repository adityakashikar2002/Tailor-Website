// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// const InstagramSection = () => {
//   return (
//     <div className="bg-white text-secondary py-12">
//       <section className="max-w-7xl mx-auto px-4 text-center">
//         <h2 className="text-3xl font-semibold mb-3">Follow us on Instagram</h2>
//         <p className="text-base font-normal mb-10 max-w-xl mx-auto leading-relaxed">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           <br />
//           Suspendisse varius enim in eros.
//         </p>
//         <div className="flex flex-col md:flex-row justify-center gap-8">
//           <div className="relative group overflow-hidden rounded-md">
//             <img
//               alt="Man in blue suit looking out window with hands clasped"
//               className="w-full max-w-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
//               src="https://storage.googleapis.com/a1aa/image/45fced4e-6947-4928-2ed5-3cafaff2c503.jpg"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center">
//               <FontAwesomeIcon 
//                 icon={faInstagram} 
//                 className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110" 
//               />
//             </div>
//           </div>
//           <div className="relative group overflow-hidden rounded-md">
//             <img
//               alt="Man with afro hairstyle reading a paper in a bright studio"
//               className="w-full max-w-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
//               src="https://storage.googleapis.com/a1aa/image/49ddb726-cba6-4069-05b1-c3ed67c73b3d.jpg"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center">
//               <FontAwesomeIcon 
//                 icon={faInstagram} 
//                 className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110" 
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default InstagramSection;






import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import useIntersectionObserver from '../utils/useIntersectionObserver';

const InstagramSection = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="bg-white text-secondary py-12">
      <section className="max-w-7xl mx-auto px-4 text-center">
        <h2 className={`text-3xl font-semibold mb-3 ${isVisible ? 'animate-fade-in' : ''}`}>Follow us on Instagram</h2>
        <p className={`text-base font-normal mb-10 max-w-xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in' : ''}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Suspendisse varius enim in eros.
        </p>
        <div className={`flex flex-col md:flex-row justify-center gap-8 ${isVisible ? 'animate-fade-in' : ''}`}>
          <div className="relative group overflow-hidden rounded-md">
            <img
              alt="Man in blue suit looking out window with hands clasped"
              className="w-full max-w-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
              src="https://storage.googleapis.com/a1aa/image/45fced4e-6947-4928-2ed5-3cafaff2c503.jpg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center">
              <FontAwesomeIcon 
                icon={faInstagram} 
                className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110" 
              />
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-md">
            <img
              alt="Man with afro hairstyle reading a paper in a bright studio"
              className="w-full max-w-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
              src="https://storage.googleapis.com/a1aa/image/49ddb726-cba6-4069-05b1-c3ed67c73b3d.jpg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center">
              <FontAwesomeIcon 
                icon={faInstagram} 
                className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstagramSection;