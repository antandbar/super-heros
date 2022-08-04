import React from 'react';
import { motion } from 'framer-motion';
import './Title.css';

const Title = ({ title }) => (
  <div className="title-grid">
    <motion.h1
      className="title"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        delay: 0.2,
        type: 'spring',
      }}
    >
      {title}
    </motion.h1>
  </div>
);

export default Title;
