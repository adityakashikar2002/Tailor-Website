// import React from 'react';
// import useIntersectionObserver from '../utils/useIntersectionObserver';

// const HeroSection = () => {
//   const [ref, isVisible] = useIntersectionObserver({
//     threshold: 0.1,
//     triggerOnce: true
//   });

//   return (
//     <main 
//       ref={ref}
//       className="flex flex-col min-h-[calc(100vh-64px)] font-inter overflow-hidden"
//     >
//       <section
//         className="relative flex flex-col md:flex-row flex-1 p-8 md:p-16 lg:p-24 justify-center items-center rounded-lg overflow-hidden"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1628454787246-cd6e6accc352?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="absolute inset-0 bg-secondary bg-opacity-90"></div>

//         <div className="relative z-10 flex-1 max-w-[600px] text-white text-center md:text-left mb-8 md:mb-0 md:mr-8 ml-64">
//           <img
//             src="https://preview.colorlib.com/theme/tailor/assets/img/hero/hero-icon.png.webp"
//             alt="Rotating Icon"
//             className={`absolute -top-10 md:-top-28 left-1/2 -translate-x-1/2 md:left-0 w-22 h-22 rounded-full ${isVisible ? 'animate-spin-slow' : ''}`}
//             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/000000/FFFFFF?text=Icon'; }}
//           />
//           <div className={isVisible ? 'animate-slide-in-left' : ''}>
//             <h1 className="text-[52px] md:text-[76px] font-semibold leading-[1.1] mb-6 mt-16 md:mt-0" style={{fontFamily:'Josefin Sans'}}>
//               We make cloths
//               <br />
//               that suit you
//             </h1>
//             <p className="text-[14px] leading-6 mb-8 max-w-md mx-auto md:mx-0">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//               varius enim in eros elementum tristique. Duis cursus, mi quis viverra
//               ornare.
//             </p>
//             <button className="bg-primary text-white text-[14px] font-semibold tracking-widest px-8 py-3 hover:bg-opacity-90 transition rounded-md shadow-lg hover:scale-105">
//               OUR SERVICES
//             </button>
//           </div>
//         </div>

//         <div className={`relative z-10 flex-1 flex justify-center items-center ${isVisible ? 'animate-slide-in-right' : ''}`}>
//           <img
//             alt="Woman measuring fabric on a black mannequin in a tailor shop with shelves of fabric in the background"
//             className="w-full h-auto object-cover rounded-md shadow-xl max-h-[100vh] hover:shadow-2xl transition-shadow"
//             src="https://preview.colorlib.com/theme/tailor/assets/img/hero/h1_hero1.png.webp"
//             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x800/E0E0E0/333333?text=Sewing+Image'; }}
//           />
//         </div>
//       </section>

//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&display=swap');
//         .font-inter {
//             font-family: 'Inter', sans-serif;
//         }
//       `}</style>
//     </main>
//   );
// };

// export default HeroSection;



// // src/components/HeroSection.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import useIntersectionObserver from '../utils/useIntersectionObserver';

// const HeroSection = () => {
//     const [ref, isVisible] = useIntersectionObserver({
//     threshold: 0.1,
//     triggerOnce: true
//   });
//   return (
//     <section className="relative h-screen bg-gradient-to-r from-amber-50 to-amber-100 overflow-hidden">
//       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-10"></div>
      
//       <div className="container mx-auto h-full flex items-center px-6 relative z-10">
//         <div className="max-w-2xl">
//           <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 font-serif leading-tight">
//             Crafting Timeless <span className="text-amber-700">Elegance</span> Since 1985
//           </h1>
//           <p className="text-lg text-gray-600 mb-8 max-w-lg">
//             Bespoke tailoring that celebrates your individuality. Each stitch tells a story of craftsmanship and attention to detail.
//           </p>
//           <div className="flex space-x-4">
//             <Link 
//               to="/services" 
//               className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105"
//             >
//               Our Services
//             </Link>
//             <Link 
//               to="/about" 
//               className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all"
//             >
//               Our Story
//             </Link>
//           </div>
//         </div>
//       </div>
      
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-8 h-8 border-4 border-amber-700 border-t-transparent rounded-full"></div>
//       </div>

//       <div className={`relative z-10 flex-1 flex justify-center items-center ${isVisible ? 'animate-slide-in-right' : ''}`}>
//           <img
//             alt="Woman measuring fabric on a black mannequin in a tailor shop with shelves of fabric in the background"
//             className="w-full h-auto object-cover rounded-md shadow-xl max-h-[100vh] hover:shadow-2xl transition-shadow"
//             src="https://preview.colorlib.com/theme/tailor/assets/img/hero/h1_hero1.png.webp"
//             onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x800/E0E0E0/333333?text=Sewing+Image'; }}
//           />
//         </div>
//     </section>
//   );
// };

// export default HeroSection;


// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../utils/useIntersectionObserver';

const HeroSection = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="relative h-screen bg-gradient-to-r from-amber-50 to-amber-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto h-full flex items-center px-6 relative z-10">
        {/* Text Content - Left Side */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-12">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 font-serif leading-tight">
            Crafting Timeless <span className="text-amber-700">Elegance</span> Since 1985
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Bespoke tailoring that celebrates your individuality. Each stitch tells a story of craftsmanship and attention to detail.
          </p>
          <div className="flex space-x-4">
            <Link 
              to="/services" 
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105"
            >
              Our Services
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Image - Right Side */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center pl-12">
          <div className={`relative w-full max-w-xl ${isVisible ? 'animate-slide-in-right' : ''}`}>
            <img
              alt="Master tailor at work"
              className="w-full h-auto object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
              src="https://images.unsplash.com/photo-1684259498917-b0cde0133e14?q=80&w=1045&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x800/E0E0E0/333333?text=Tailor+At+Work'; }}
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="bg-amber-100 p-3 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-800">40 Years</p>
                  <p className="text-sm text-gray-600">Of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 border-4 border-amber-700 border-t-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;