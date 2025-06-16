// import React, { useState } from 'react';

// const Services = ({ animationsEnabled }) => {
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

//   const [hoveredService, setHoveredService] = useState(null);

//   return (
//     <div className="bg-white text-secondary py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         <section className="grid grid-cols-1 sm:grid-cols-3 gap-x-20 gap-y-12 justify-center">
//           {services.map((service, index) => (
//             <article 
//               key={service.id} 
//               className={`flex flex-col items-center text-center max-w-xs mx-auto ${animationsEnabled ? 'animate-slide-in-up' : ''}`}
//               style={{ animationDelay: animationsEnabled ? `${index * 0.2}s` : '0s' }}
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




import React, { useState } from 'react';
import useIntersectionObserver from '../utils/useIntersectionObserver';

const Services = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Tailor Sewing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "https://storage.googleapis.com/a1aa/image/4c7502a5-ea90-46de-866d-f4c5f18ce8ee.jpg"
    },
    {
      id: 2,
      title: "Measurement",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "https://storage.googleapis.com/a1aa/image/3532b352-a042-4d59-a658-eaaa0e23a967.jpg"
    },
    {
      id: 3,
      title: "Ready-made",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "https://storage.googleapis.com/a1aa/image/e047e95b-98c5-4dae-c4d4-c35da56f624a.jpg"
    }
  ];

  return (
    <div ref={ref} className="bg-white text-secondary py-16">
      <div className="max-w-7xl mx-auto px-6">
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-x-20 gap-y-12 justify-center">
          {services.map((service, index) => (
            <article 
              key={service.id} 
              className={`flex flex-col items-center text-center max-w-xs mx-auto ${isVisible ? 'animate-slide-in-up' : ''}`}
              style={{ animationDelay: isVisible ? `${index * 0.2}s` : '0s' }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="relative overflow-hidden rounded-md mb-6 group">
                <img 
                  alt={service.title} 
                  className={`w-[300px] h-[350px] object-cover transition-all duration-500 ${hoveredService === service.id ? 'scale-105' : 'scale-100'}`} 
                  src={service.image} 
                />
                {hoveredService === service.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300"></div>
                )}
              </div>
              <div className="flex items-center mb-2">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${hoveredService === service.id ? 'border-2 border-accent' : 'bg-accent'} transition-all duration-300 mr-3 select-none`}>
                  <span className={`${hoveredService === service.id ? 'text-accent' : 'text-white'}`}>
                    {service.id}
                  </span>
                </div>
                <h3 className={`text-xl font-semibold leading-tight transition-colors duration-300 ${hoveredService === service.id ? 'text-accent' : 'text-secondary'}`}>
                  {service.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed max-w-[280px]">
                {service.description}
              </p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Services;