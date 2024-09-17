"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: ReactNode }) {
  const path = usePathname();
  return (
    <motion.div
      key={path}
      initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
}
