import React from 'react';
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

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <Services />
      <AboutSection />
      <WhyChooseUs />
      <VideoSection />
      <Testimonial />
      <InstagramSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;