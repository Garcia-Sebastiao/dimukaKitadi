import React from "react";
import { motion } from "framer-motion";
export default function Member(props) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0.5 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.2,
        },
      }}
      className="w-[180px] flex-none relative h-[220px] flex justify-center items-center"
    >
      <img
        className="w-full rounded-t-[30px] rounded-ee-[78px] h-full object-cover object-center"
        src={props.memberImage}
        alt="Member Image"
      />
    </motion.div>
  );
}
