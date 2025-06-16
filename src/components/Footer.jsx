import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-secondary">
      <footer className="relative flex flex-col md:flex-row items-center md:items-start justify-start md:justify-between max-w-[1200px] mx-auto px-6 md:px-12 py-12 gap-12 md:gap-0">
        <div className="flex-shrink-0 w-full md:w-[80%] -ml-96 mt-10">
          <img
            alt="Map of New York and Jersey City with streets and parks in grayscale"
            className="w-full h-full rounded-sm"
            src="https://preview.colorlib.com/theme/tailor/assets/img/gallery/map.png.webp"
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-[60%] text-primary ml-32">
          <h2 className="text-3xl font-semibold mb-4">
            <Link to="/" className="text-[28px] font-semibold text-primary hover:text-accent transition-colors">
              Tailor.
            </Link>
          </h2>
          <p className="text-white mb-6 max-w-xs leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
          <p className="text-[22px] mb-1 font-light hover:underline hover:text-accent transition-colors">(80) 783 367-3904</p>
          <p className="text-xs mb-6 hover:underline hover:text-accent transition-colors">(80) 783 367-3904</p>
          <div className="flex gap-4">
            <a aria-label="Twitter" className="w-9 h-9 rounded-full bg-[#1a254a] flex items-center justify-center text-primary hover:text-white hover:animate-flip transition" href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#1a254a] flex items-center justify-center text-primary hover:text-white hover:animate-flip transition" href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a aria-label="Pinterest" className="w-9 h-9 rounded-full bg-[#1a254a] flex items-center justify-center text-primary hover:text-white hover:animate-flip transition" href="#">
              <FontAwesomeIcon icon={faPinterestP} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-[25%] text-white">
          <h3 className="text-primary font-semibold mb-6 text-[20px]">Our solutions</h3>
          <nav className="flex flex-col gap-3 text-sm">
            <a className="hover:underline hover:text-accent transition-colors" href="#">Home</a>
            <a className="hover:underline hover:text-accent transition-colors" href="#">About</a>
            <a className="hover:underline hover:text-accent transition-colors" href="#">Services</a>
            <a className="hover:underline hover:text-accent transition-colors" href="#">Blog</a>
            <a className="hover:underline hover:text-accent transition-colors" href="#">Contact</a>
          </nav>
        </div>
      </footer>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pb-6 text-center text-white text-xs">
        Copyright ©2025 All rights reserved | This template is made with
        <span aria-label="heart" className="text-white" role="img"> ❤ </span>
        by
        <a className="text-primary hover:underline" href="https://colorlib.com" target="_blank" rel="noopener noreferrer"> Colorlib</a>
      </div>
    </div>
  );
};

export default Footer;