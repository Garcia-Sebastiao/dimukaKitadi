import React from "react";
import { motion } from "framer-motion";

export default function Button(props) {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.5,
        },
      }}
      className={`py-4 px-8 ${props.style} transition duration-150 text-white rounded-ss-[28px] rounded-s-[42px] rounded-ee-[28px] rounded-e-[42px] hover:brightness-90`}
      href=""
    >
      {props.value}
    </motion.a>
  );
}
