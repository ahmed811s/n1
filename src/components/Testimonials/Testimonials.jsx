import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="py-16 text-center bg-gray-100">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold"
      >
        VAD VÅRA TIDIGARE KUNDER SÄGER
      </motion.h2>
      <p className="mt-4 text-lg text-gray-700">
        "Fantastisk service! Min bil ser ut som ny."
      </p>
    </section>
  );
};

export default Testimonials;
