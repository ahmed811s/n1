import { motion } from "framer-motion";

const AnimatedHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      
    </motion.div>
  );
};

export default AnimatedHeader;
