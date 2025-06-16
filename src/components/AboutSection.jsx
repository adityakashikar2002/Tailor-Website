// import React from 'react';

// const AboutSection = () => {
//   return (
//     <div className="relative bg-white">
//       <section className="relative flex justify-end bg-light min-h-[480px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[720px]">
//         <div className="absolute left-16 top-16 md:top-24 md:left-24 lg:left-32 lg:top-32 xl:left-40 xl:top-10 max-w-[600px]">
//           <img
//             alt="Man in dark checkered suit with red tie holding suit lapels"
//             className="w-full h-auto object-cover"
//             src="https://storage.googleapis.com/a1aa/image/2629d8bf-3814-41b9-a775-b7d3917cf08b.jpg"
//           />
//         </div>
//         <div className="absolute left-[420px] top-[280px] md:left-[480px] md:top-[360px] lg:left-[520px] lg:top-[400px] xl:left-[580px] xl:top-[240px] max-w-[280px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px]">
//           <img
//             alt="Woman with short hair wearing green sweater and measuring tape around neck in tailor studio"
//             className="w-full h-auto object-cover"
//             src="https://storage.googleapis.com/a1aa/image/29454725-010d-47ca-2c3b-7f8291c42b8a.jpg"
//           />
//         </div>
//         <div className="relative z-10 flex flex-col justify-center px-8 py-16 md:py-24 md:px-16 lg:px-24 xl:px-32 max-w-[600px] text-secondary" style={{ marginLeft: '480px' }}>
//           <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
//             About our
//             <br />
//             tailor house
//           </h2>
//           <p className="text-base md:text-lg font-normal mb-6 max-w-[420px]">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
//           </p>
//           <p className="text-sm md:text-base font-light mb-10 max-w-[420px] leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
//           </p>
//           <button className="bg-primary text-white text-xs md:text-sm font-semibold tracking-widest uppercase py-3 px-8 w-max hover:bg-opacity-90 transition">
//             More about us
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutSection;


import React from 'react';
import useIntersectionObserver from '../utils/useIntersectionObserver';

const AboutSection = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="relative bg-white">
      <section className={`relative ml-32 mr-32 flex justify-end bg-light min-h-[480px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[720px] ${isVisible ? 'animate-fade-in' : ''}`}>
        <div className={`absolute left-16 top-16 md:top-24 md:left-24 lg:left-32 lg:top-32 xl:left-40 xl:top-10 max-w-[600px] ${isVisible ? 'animate-slide-in-left' : ''}`}>
          <img
            alt="Man in dark checkered suit with red tie holding suit lapels"
            className="w-full h-auto object-cover"
            src="https://storage.googleapis.com/a1aa/image/2629d8bf-3814-41b9-a775-b7d3917cf08b.jpg"
          />
        </div>
        <div className={`absolute left-[420px] top-[280px] md:left-[480px] md:top-[360px] lg:left-[520px] lg:top-[400px] xl:left-[580px] xl:top-[240px] max-w-[280px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px] ${isVisible ? 'animate-slide-in-up' : ''}`}>
          <img
            alt="Woman with short hair wearing green sweater and measuring tape around neck in tailor studio"
            className="w-full h-auto object-cover"
            src="https://storage.googleapis.com/a1aa/image/29454725-010d-47ca-2c3b-7f8291c42b8a.jpg"
          />
        </div>
        <div className={`relative z-10 flex flex-col justify-center px-8 py-16 md:py-24 md:px-16 lg:px-24 xl:px-32 max-w-[600px] text-secondary ${isVisible ? 'animate-slide-in-right' : ''}`} style={{ marginLeft: '480px' }}>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
            About our
            <br />
            tailor house
          </h2>
          <p className="text-base md:text-lg font-normal mb-6 max-w-[420px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
          </p>
          <p className="text-sm md:text-base font-light mb-10 max-w-[420px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
          </p>
          <button className="bg-primary text-white text-xs md:text-sm font-semibold tracking-widest uppercase py-3 px-8 w-max hover:bg-opacity-90 transition">
            More about us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;