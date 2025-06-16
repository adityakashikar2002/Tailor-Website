import React from 'react';

const InstagramSection = () => {
  return (
    <div className="bg-white text-secondary py-12">
      <section className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-3">Follow us on Instagram</h2>
        <p className="text-base font-normal mb-10 max-w-xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Suspendisse varius enim in eros.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <img
            alt="Man in blue suit looking out window with hands clasped"
            className="w-full max-w-[600px] object-cover"
            src="https://storage.googleapis.com/a1aa/image/45fced4e-6947-4928-2ed5-3cafaff2c503.jpg"
          />
          <img
            alt="Man with afro hairstyle reading a paper in a bright studio"
            className="w-full max-w-[600px] object-cover"
            src="https://storage.googleapis.com/a1aa/image/49ddb726-cba6-4069-05b1-c3ed67c73b3d.jpg"
          />
        </div>
      </section>
    </div>
  );
};

export default InstagramSection;