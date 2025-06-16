import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonial = () => {
  return (
    <div className="bg-white text-secondary py-20">
      <section className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl mx-auto relative">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="absolute -left-12 top-0 w-16 h-16 text-[#f9d9d6] opacity-60"
          />
          <p className="text-base leading-relaxed tracking-tight max-w-xl">
            Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts &amp; elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.
          </p>
          <div className="flex items-center mt-16 space-x-6">
            <div className="flex-shrink-0 rounded-full border border-[#d9b7a9] p-[2px]">
              <img
                alt="Portrait of a woman wearing a red hat smiling"
                className="rounded-full w-16 h-16 object-cover"
                src="https://storage.googleapis.com/a1aa/image/6439fdbf-7d8a-49e7-ffaa-d0ab57e2f608.jpg"
              />
            </div>
            <div>
              <h3 className="text-secondary font-semibold text-lg leading-tight">Robart Brown</h3>
              <p className="text-[#7a7a7a] text-sm leading-snug">Creative designer at Colorlib</p>
            </div>
          </div>
          <div className="flex justify-end items-center space-x-2 mt-12 text-[#f9d9d6] text-sm font-medium select-none">
            <button aria-label="Previous" className="hover:text-[#d9b7a9] transition-colors">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
            <span className="text-secondary">1</span>
            <span>2</span>
            <button aria-label="Next" className="hover:text-[#d9b7a9] transition-colors">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
          <hr className="border-t border-[#f3f3f3] mt-20" />
        </div>
      </section>
    </div>
  );
};

export default Testimonial;