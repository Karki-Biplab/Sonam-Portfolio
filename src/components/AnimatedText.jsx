
'use client';

import { motion } from 'framer-motion';

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const AnimatedTextWord = ({ text, el: Wrapper = 'p', className, variants = defaultAnimations, staggerChildren = 0.04 }) => {
  return (
    <Wrapper className={className}>
      <motion.span
        style={{ display: 'inline-block', overflow: 'hidden' }} // Fix for layout shift
        variants={{
          visible: { transition: { staggerChildren } },
          hidden: {},
        }}
        initial="hidden"
        animate="visible"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            style={{ display: 'inline-block', willChange: 'transform' }}
            variants={variants}
            key={index}
          >
            {word + (index !== text.split(" ").length - 1 ? "\u00A0" : "")}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export const AnimatedTextCharacter = ({ text, el: Wrapper = 'p', className, variants = defaultAnimations, staggerChildren = 0.015 }) => {
  return (
    <Wrapper className={className}>
      <motion.span
        style={{ display: 'inline-block', overflow: 'hidden' }}
        variants={{
          visible: { transition: { staggerChildren } },
          hidden: {},
        }}
        initial="hidden"
        animate="visible"
      >
        {text.split("").map((character, index) => (
          <motion.span
            style={{ display: 'inline-block', willChange: 'transform' }}
            variants={variants}
            key={index}
          >
            {character === " " ? "\u00A0" : character}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

// For line-by-line reveal, inspired by jordangilroy.com hero
export const AnimatedLine = ({ text, className, delay = 0, duration = 0.8 }) => {
  const lineVariants = {
    hidden: { y: "100%" }, // Text starts completely below, opacity is not animated here
    visible: {
      y: "0%",         // Text slides up to its original position
      transition: { duration, ease: [0.25, 0.46, 0.45, 0.94], delay }
    },
  };

  return (
    <div className="overflow-hidden"> {/* This acts as the "mask" */}
      <motion.p
        className={className}
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      >
        {text}
      </motion.p>
    </div>
  );
};
