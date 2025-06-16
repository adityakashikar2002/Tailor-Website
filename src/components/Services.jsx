import React from 'react';

const Services = () => {
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
    <div className="bg-white text-secondary py-16">
      <div className="max-w-7xl mx-auto px-6">
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-x-20 gap-y-12 justify-center">
          {services.map((service) => (
            <article key={service.id} className="flex flex-col items-center text-center max-w-xs mx-auto">
              <img alt={service.title} className="mb-6 w-[300px] h-[350px] object-cover" src={service.image} />
              <div className="flex items-center mb-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white font-semibold mr-3 select-none">
                  {service.id}
                </div>
                <h3 className="text-xl font-semibold leading-tight">{service.title}</h3>
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