"use client";
import { Hero, Plants } from "@/snippets/components";
import { motion } from "framer-motion";
import PlantProducts from "@/snippets/constants/plantsProducts";

export default function Index() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Hero />
      <Plants products={PlantProducts} />
    </motion.div>
  );
}
