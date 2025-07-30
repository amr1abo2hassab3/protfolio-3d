import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';

import { Contact, Experience, Navbar, Works, StarsCanvas } from './components';
import Approach from './components/Approach';
import Footer from './components/ui/Footer';
import { config } from './constants/config';
import Services from './components/sections/Services';
import Hero from './components/sections/Hero';

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0 overflow-hidden">
        {/* Hero Section */}
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        {/* Main Sections */}
        <Experience />
        <Works />
        {/* services section  */}
        <Services />

        {/* Approach section  */}
        <Approach />

        {/* Contact Section with background animation */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#000319] relative z-0 overflow-hidden">
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
