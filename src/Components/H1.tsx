import { motion } from "motion/react";

type H1Type = {
    text: string;
}

export default function H1({ text }: H1Type) {
  return (
    <motion.h1
      animate={{
        backgroundPosition: ["10% 70%", "90% 40%", "33% 60%", "50% 90%"],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.5, 2],
      }}
      className="mb-4 bg-radial from-orange-500 from-10% to-fuchsia-700 to-85% bg-clip-text text-3xl font-light text-transparent text-center"
      style={{ backgroundSize: "200% 200%" }}
    >
      {text}
    </motion.h1>
  );
}