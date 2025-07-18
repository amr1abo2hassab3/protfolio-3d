import React from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '../../utils/motion';

interface TextGenerateEffectProps {
  words: string;
  className?: string;
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 2 } },
};

const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({ words, className }) => {
  const wordsArray = words.split(' ');

  return (
    <div className={cn('font-bold', className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          <motion.div variants={containerVariants} initial="hidden" animate="show">
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                variants={wordVariants}
                className={`${
                  idx > 3 ? 'text-purple-500' : 'dark:text-white text-black'
                } opacity-0`}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
