import { BrowserRouter } from 'react-router-dom';

import { Contact, Experience, Hero, Navbar, Works, StarsCanvas } from './components';
import { useEffect } from 'react';
import { config } from './constants/config';
import Approach from './components/Approach';

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0 overflow-hidden">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        {/* <Grid /> */}
        <Experience />
        {/* <Tech /> */}
        <Works />
        <Approach />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
