import React from 'react';
import useIntersectionObserver from '../utils/useIntersectionObserver';

const WhyChooseUs = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services1.svg",
      title: "Tailor Sewing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      icon: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services2.svg",
      title: "Tailor Sewing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      icon: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services3.svg",
      title: "Tailor Sewing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      icon: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services4.svg",
      title: "Tailor Sewing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    }
  ];

  return (
    <div ref={ref} className="bg-white text-secondary py-16">
      <section className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">Why use our service?</h2>
        <p className="text-base max-w-xl mx-auto mb-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Suspendisse varius enim in eros.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-12 max-w-6xl mx-auto text-left">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center ${isVisible ? 'animate-slide-in-up' : ''}`}
              style={{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }}
            >
              <img alt={feature.title} className="mb-4 h-12 w-12" src={feature.icon} />
              <h3 className="font-semibold text-lg mb-3 hover:text-accent transition-colors">{feature.title}</h3>
              <p className="text-sm leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;