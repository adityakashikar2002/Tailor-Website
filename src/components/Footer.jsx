import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faPinterestP } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="bg-secondary">
      <footer className="relative flex flex-col md:flex-row items-center md:items-start justify-start md:justify-between max-w-[1200px] mx-auto px-6 md:px-12 py-12 gap-12 md:gap-0">
        <div className="flex-shrink-0 w-full md:w-[40%]">
          <img
            alt="Map of New York and Jersey City with streets and parks in grayscale"
            className="w-full h-auto rounded-sm"
            src="https://storage.googleapis.com/a1aa/image/3c1bc9e3-487d-43c0-05db-7a05d31bc3e8.jpg"
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-[30%] text-primary">
          <h2 className="text-2xl font-semibold mb-4">Tailor.</h2>
          <p className="text-white mb-6 max-w-xs leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
          <p className="text-[22px] mb-1 font-light">(80) 783 367-3904</p>
          <p className="text-xs mb-6">(80) 783 367-3904</p>
          <div className="flex gap-4">
            <a aria-label="Twitter" className="w-9 h-9 rounded-full bg-[#1a254a] flex items-center justify-center text-primary hover:text-white transition" href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#1a254a] flex items-center justify-center text-primary hover:text-white transition" href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a aria-label="Pinterest" className="w-9 h-9 rounded-full bg-[#1a254a] flex items-center justify-center text-primary hover:text-white transition" href="#">
              <FontAwesomeIcon icon={faPinterestP} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-[20%] text-white">
          <h3 className="text-primary font-semibold mb-6">Our solutions</h3>
          <nav className="flex flex-col gap-3 text-sm">
            <a className="hover:underline" href="#">Home</a>
            <a className="hover:underline" href="#">About</a>
            <a className="hover:underline" href="#">Services</a>
            <a className="hover:underline" href="#">Blog</a>
            <a className="hover:underline" href="#">Contact</a>
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