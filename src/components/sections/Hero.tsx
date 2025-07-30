import { motion } from 'framer-motion';

import { styles } from '../../constants/styles';
import ComputersCanvas from '../canvas/ComputersCanvas';
import HeroTextAnimation from '../HeroTextAnimation';

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full py-8`}>
      <div
        className={`relative inset-0 top-[70px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <HeroTextAnimation />
        </div>
      </div>
      <div>
        <ComputersCanvas />
      </div>
      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
