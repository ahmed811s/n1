
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center h-screen"
    >
      <h1 className="text-4xl font-bold">plokoasda!</h1>
      <h1 className="text-3xl font-bold text-red-500">مرحبا بك!</h1>
      <h2 className="text-2xl font-bold">hamoedsds!</h2>
      
    </motion.div>
  );
};

export default HomePage;