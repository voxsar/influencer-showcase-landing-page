"use client";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  initialY?: number | string;
  classname?: string;
};

function RevealOnScroll({
  children,
  delay = 0,
  duration = 0.8,
  initialY = 20,
  classname = "",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: duration, ease: "easeOut", delay: delay }}
      className={classname}
    >
      {children}
    </motion.div>
  );
}

export default RevealOnScroll;
