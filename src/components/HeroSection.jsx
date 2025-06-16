import React from 'react';
import useIntersectionObserver from '../utils/useIntersectionObserver';

const HeroSection = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <main 
      ref={ref}
      className="flex flex-col min-h-[calc(100vh-64px)] font-inter overflow-hidden"
    >
      <section
        className="relative flex flex-col md:flex-row flex-1 p-8 md:p-16 lg:p-24 justify-center items-center rounded-lg overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1628454787246-cd6e6accc352?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-secondary bg-opacity-90"></div>

        <div className="relative z-10 flex-1 max-w-[600px] text-white text-center md:text-left mb-8 md:mb-0 md:mr-8 ml-64">
          <img
            src="https://preview.colorlib.com/theme/tailor/assets/img/hero/hero-icon.png.webp"
            alt="Rotating Icon"
            className={`absolute -top-10 md:-top-28 left-1/2 -translate-x-1/2 md:left-0 w-22 h-22 rounded-full ${isVisible ? 'animate-spin-slow' : ''}`}
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/000000/FFFFFF?text=Icon'; }}
          />
          <div className={isVisible ? 'animate-slide-in-left' : ''}>
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
            <button className="bg-primary text-white text-[14px] font-semibold tracking-widest px-8 py-3 hover:bg-opacity-90 transition rounded-md shadow-lg hover:scale-105">
              OUR SERVICES
            </button>
          </div>
        </div>

        <div className={`relative z-10 flex-1 flex justify-center items-center ${isVisible ? 'animate-slide-in-right' : ''}`}>
          <img
            alt="Woman measuring fabric on a black mannequin in a tailor shop with shelves of fabric in the background"
            className="w-full h-auto object-cover rounded-md shadow-xl max-h-[100vh] hover:shadow-2xl transition-shadow"
            src="https://preview.colorlib.com/theme/tailor/assets/img/hero/h1_hero1.png.webp"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x800/E0E0E0/333333?text=Sewing+Image'; }}
          />
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&display=swap');
        .font-inter {
            font-family: 'Inter', sans-serif;
        }
      `}</style>
    </main>
  );
};

export default HeroSection;