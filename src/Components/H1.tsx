import { motion } from "motion/react";

type H1Type = {
  text: string;
};

export default function H1({ text }: H1Type) {
  return (
    <motion.h1
      animate={{
        backgroundPosition: [
          "10% 70%",
          "90% 40%",
          "33% 20%",
          "60% 60%",
          "50% 80%",
        ],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.85, 1],
      }}
      className="light:from-orange-600 light:from-20% light:to-fuchsia-800 light:via-fuchsia-700 light:via-60% light:to-100% mb-4 bg-radial from-orange-500 from-10% to-fuchsia-600 to-85% bg-clip-text text-center text-3xl font-light text-transparent"
      style={{ backgroundSize: "200% 200%" }}
    >
      {text}
    </motion.h1>
  );
}
