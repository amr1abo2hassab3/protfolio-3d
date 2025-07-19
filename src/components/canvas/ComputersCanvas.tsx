import { FaLocationArrow } from 'react-icons/fa6';
import { Spotlight } from '../ui/Spotlight';
import TextGenerateEffect from '../ui/TextGenerateEffect';
import MagicButton from '../ui/MagicButton';

const ComputersCanvas = () => {
  return (
    <div className="my-20 md:my-0">
      {/* Spotlights */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid background */}
      
  

      {/* Main content */}
      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with React
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I'm Amr, a React Developer based in Egypt.
          </p>

          <a href="#about">
            <MagicButton title="Show My Cv" icon={<FaLocationArrow />} position="right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComputersCanvas;
