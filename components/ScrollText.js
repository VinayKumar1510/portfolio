"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ScrollText({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="text-3xl font-bold"
    >
      {children}
    </motion.div>
  );
}
