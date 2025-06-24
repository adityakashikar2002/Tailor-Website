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