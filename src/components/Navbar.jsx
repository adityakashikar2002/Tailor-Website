// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// const Navbar = () => {
//   return (
//     <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
//       <div className="text-[28px] font-semibold text-primary ml-20">Tailor.</div>
//       <ul className="hidden md:flex space-x-16 text-[15px] font-semibold text-secondary ml-[900px]">
//         <li><a className="hover:underline" href="#">Home</a></li>
//         <li><a className="hover:underline" href="#">About</a></li>
//         <li><a className="hover:underline" href="#">Services</a></li>
//         <li><a className="hover:underline" href="#">Blog</a></li>
//         <li><a className="hover:underline" href="#">Contact</a></li>
//       </ul>
//       <a className="hidden md:block bg-primary text-white text-[14px] font-semibold px-6 py-4 hover:bg-opacity-90 transition" href="#">VISIT US</a>
//       <button className="md:hidden text-secondary">
//         <FontAwesomeIcon icon={faBars} size="lg" />
//       </button>
//     </nav>
//   );
// };

// export default Navbar;





import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      {/* <Link to="/" className="text-[28px] font-semibold text-primary ml-20 hover:text-accent transition-colors">
        Tailor.
      </Link> */}
      <Link to="/" className="text-[28px] font-semibold text-primary ml-20 hover:text-accent transition-colors">
        Tailor.
      </Link>
      <ul className="hidden md:flex space-x-16 text-[15px] font-semibold text-secondary ml-[900px]">
        <li><Link className="hover:underline hover:text-accent transition-colors" to="/">Home</Link></li>
        <li><Link className="hover:underline hover:text-accent transition-colors" to="/about">About</Link></li>
        <li><Link className="hover:underline hover:text-accent transition-colors" to="/services">Services</Link></li>
        <li><Link className="hover:underline hover:text-accent transition-colors" to="/blog">Blog</Link></li>
        <li><Link className="hover:underline hover:text-accent transition-colors" to="/contact">Contact</Link></li>
      </ul>
      <Link className="hidden md:block bg-primary text-white text-[14px] font-semibold px-6 py-4 hover:bg-opacity-90 transition hover:scale-105" to="/visit">
        VISIT US
      </Link>
      <button className="md:hidden text-secondary hover:text-accent transition-colors">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>
    </nav>
  );
};

export default Navbar;