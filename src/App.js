// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import Services from './components/Services';
// import AboutSection from './components/AboutSection';
// import WhyChooseUs from './components/WhyChooseUs';
// import VideoSection from './components/VideoSection';
// import Testimonial from './components/Testimonial';
// import InstagramSection from './components/InstagramSection';
// import Footer from './components/Footer';
// import ScrollToTop from './components/ScrollToTop';
// import Loader from './components/Loader';

// function App() {
//   return (
//     <div className="bg-white">
//       <Loader />
//       <Navbar />
//       <Routes>
//         <Route path="/" element={
//           <>
//             <HeroSection />
//             <Services />
//             <AboutSection />
//             <WhyChooseUs />
//             <VideoSection />
//             <Testimonial />
//             <InstagramSection />
//           </>
//         } />
//         {/* Add other routes as needed */}
//         {/* <Route path="/about" element={<AboutPage />} /> */}
//         {/* <Route path="/services" element={<ServicesPage />} /> */}
//       </Routes>
//       <Footer />
//       <ScrollToTop />
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import VideoSection from './components/VideoSection';
import Testimonial from './components/Testimonial';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

function App() {
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  return (
    <div className="bg-white">
      <Loader onLoaded={() => setAnimationsEnabled(true)} />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection animationsEnabled={animationsEnabled} />
            <Services animationsEnabled={animationsEnabled} />
            <AboutSection animationsEnabled={animationsEnabled} />
            <WhyChooseUs animationsEnabled={animationsEnabled} />
            <VideoSection animationsEnabled={animationsEnabled} />
            <Testimonial animationsEnabled={animationsEnabled} />
            <InstagramSection animationsEnabled={animationsEnabled} />
          </>
        } />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;