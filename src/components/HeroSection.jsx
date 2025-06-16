// import React from 'react';

// const HeroSection = () => {
//   return (
//     <main className="flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
//       <section
//         className="relative flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-secondary bg-opacity-90"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1585773816589-99af4e1711c1?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         {/* Rotating Icon */}
//         {/* <img
//           src="https://preview.colorlib.com/theme/tailor/assets/img/hero/hero-icon.png.webp"
//           alt="Rotating Icon"
//           className="absolute top-1 right-8 w-20 h-20 animate-spin-slow"
//         /> */}

//         <div className="relative max-w-lg text-white">
//           <img
//               src="https://preview.colorlib.com/theme/tailor/assets/img/hero/hero-icon.png.webp"
//               alt="Rotating Icon"
//               className="absolute -top-24 left-8 w-20 h-20 animate-spin-slow"
//             />
//           <h1 className="text-[40px] md:text-[48px] font-semibold leading-[1.1] mb-6">
//             We make cloths
//             <br />
//             that suit you
//           </h1>
//           <p className="text-[14px] leading-6 mb-8 max-w-md">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             varius enim in eros elementum tristique. Duis cursus, mi quis viverra
//             ornare.
//           </p>
//           <button className="bg-primary text-white text-[14px] font-semibold tracking-widest px-8 py-3 hover:bg-opacity-90 transition">
//             OUR SERVICES
//           </button>
//         </div>

//         {/* <section className="flex-1"> */}
//         <img
//           alt="Woman measuring fabric on a black mannequin in a tailor shop with shelves of fabric in the background"
//           className="w-full h-full object-cover py-14"
//           src="https://preview.colorlib.com/theme/tailor/assets/img/hero/h1_hero1.png.webp"
//         />
//       {/* </section> */}
//       </section>

      

//       {/* Custom Animation Styles */}
//       <style jsx>{`
//         .animate-spin-slow {
//           animation: spin 25s linear infinite;
//         }
//         @keyframes spin {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </main>
//   );
// };

// export default HeroSection;


import React from 'react';

const HeroSection = () => {
  return (
    // Main container uses flexbox to arrange content either in a column (mobile) or row (md and up)
    // and sets the minimum height of the hero section.
    <main className="flex flex-col min-h-[calc(100vh-64px)] font-inter">
      {/* Single hero section containing both text content and the image. */}
      {/* It uses flexbox to arrange its children in a column on mobile and a row on medium screens and up. */}
      {/* The background image is applied to this main section, with an overlay for better text readability. */}
      <section
        className="relative flex flex-col md:flex-row flex-1 p-8 md:p-16 lg:p-24 justify-center items-center rounded-lg overflow-hidden" // Added rounded-lg, overflow-hidden
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1628454787246-cd6e6accc352?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay to darken the background image for text readability */}
        <div className="absolute inset-0 bg-secondary bg-opacity-90"></div>

        {/* Text content container - flex-1 allows it to take available space */}
        <div className="relative z-10 flex-1 max-w-[600px] text-white text-center md:text-left mb-8 md:mb-0 md:mr-8 ml-64"> {/* Added z-10 for overlay, margin-right for spacing */}
          {/* Rotating Icon - positioned absolutely within this text container */}
          <img
            src="https://preview.colorlib.com/theme/tailor/assets/img/hero/hero-icon.png.webp"
            alt="Rotating Icon"
            className="absolute -top-10 md:-top-28 left-1/2 -translate-x-1/2 md:left-0 w-22 h-22 animate-spin-slow rounded-full" // Adjusted left positioning
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/000000/FFFFFF?text=Icon'; }}
          />
          <h1 className="text-[52px] md:text-[76px] font-semibold leading-[1.1] mb-6 mt-16 md:mt-0" style={{fontFamily:'Josefin Sans'}}>
            We make cloths
            <br />
            that suit you
          </h1>
          <p className="text-[14px] leading-6 mb-8 max-w-md mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare.
          </p>
          <button className="bg-primary text-white text-[14px] font-semibold tracking-widest px-8 py-3 hover:bg-opacity-90 transition rounded-md shadow-lg">
            OUR SERVICES
          </button>
        </div>

        {/* Lady sewing image container - flex-1 allows it to take available space */}
        <div className="relative z-10 flex-1 flex justify-center items-center"> {/* Added z-10 for overlay */}
          <img
            alt="Woman measuring fabric on a black mannequin in a tailor shop with shelves of fabric in the background"
            className="w-full h-auto object-cover rounded-md shadow-xl max-h-[100vh]" // Added rounded corners, shadow, and max-height
            src="https://preview.colorlib.com/theme/tailor/assets/img/hero/h1_hero1.png.webp"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x800/E0E0E0/333333?text=Sewing+Image'; }}
          />
        </div>
      </section>

      {/* Custom Animation Styles for the rotating icon */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        .font-inter {
            font-family: 'Inter', sans-serif;
        }
        .animate-spin-slow {
          animation: spin 25s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </main>
  );
};

export default HeroSection;
