import { motion } from 'framer-motion';

const Spinner = () => (
  <motion.div
    animate={{
      rotate: 360,
      borderRadius: ['50% 50%', '2% 50%'],
      x: 75,
    }}
    initial={{
      x: -75,
    }}
    transition={{
      repeat: Infinity,
      repeatType: "reverse",
      duration: 2,
      ease: 'easeInOut',
    }}
    style={{
      height: '50px',
      background: '#ed1d24',
      width: '50px',
      borderRadius: '2% 50%',
    }}
  ></motion.div>
);

export default Spinner;
