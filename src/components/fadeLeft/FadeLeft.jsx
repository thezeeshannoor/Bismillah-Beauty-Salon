import { motion } from "framer-motion";

const FadeLeft = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -180 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeLeft;
