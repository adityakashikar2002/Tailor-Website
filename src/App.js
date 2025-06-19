// // import React, { useState } from 'react';
// // import { Routes, Route } from 'react-router-dom';
// // import Navbar from './components/Navbar';
// // import HeroSection from './components/HeroSection';
// // import Services from './components/Services';
// // import AboutSection from './components/AboutSection';
// // import WhyChooseUs from './components/WhyChooseUs';
// // import VideoSection from './components/VideoSection';
// // import Testimonial from './components/Testimonial';
// // import InstagramSection from './components/InstagramSection';
// // import Footer from './components/Footer';
// // import ScrollToTop from './components/ScrollToTop';
// // import Loader from './components/Loader';
// // import Contact from './pages/Contact';
// // import About from './pages/About';
// // import Blog from './pages/Blog';

// // function App() {
// //   const [animationsEnabled, setAnimationsEnabled] = useState(false);

// //   return (
// //     <div className="bg-white">
// //       <Loader onLoaded={() => setAnimationsEnabled(true)} />
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={
// //           <>
// //             <HeroSection animationsEnabled={animationsEnabled} />
// //             <Services animationsEnabled={animationsEnabled} />
// //             <AboutSection animationsEnabled={animationsEnabled} />
// //             <WhyChooseUs animationsEnabled={animationsEnabled} />
// //             <VideoSection animationsEnabled={animationsEnabled} />
// //             <Testimonial animationsEnabled={animationsEnabled} />
// //             <InstagramSection animationsEnabled={animationsEnabled} />
// //           </>
// //         } />
// //         <Route path="/contact" element={<Contact/>} />
// //         <Route path="/about" element={<About/>} />
// //         <Route path="/blog" element={<Blog/>} />
// //       </Routes>
// //       <Footer />
// //       <ScrollToTop />
// //     </div>
// //   );
// // }

// // export default App;


// // src/App.js
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import Services from './components/Services';
// import AboutSection from './components/AboutSection';
// import Testimonial from './components/Testimonial';
// import Footer from './components/Footer';
// import ScrollToTop from './components/ScrollToTop';
// import About from './pages/About';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <div className="bg-white">
//       <Navbar />
//       <ScrollToTop />
//       <Routes>
//         <Route path="/" element={
//           <>
//             <HeroSection />
//             <Services />
//             <AboutSection />
//             <Testimonial />
//           </>
//         } />
//         <Route path="/about" element={<About />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;


// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonial from './components/Testimonial';
import VideoSection from './components/VideoSection';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Service from './pages/Service';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="bg-white">
      <Loader onLoaded={() => setLoaded(true)} />
      {loaded && (
        <>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <Services />
                <AboutSection />
                <WhyChooseUs />
                <VideoSection />
                <Testimonial />
                <InstagramSection />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Service/>} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;