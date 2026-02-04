import { motion } from "motion/react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";

type H2LinkType = {
    text: string; 
    pathName: string;
}

export default function H2Link({ text, pathName }: H2LinkType) {
  return (
    <Link to={pathName} className="mb-4 flex w-full flex-col gap-1">
      <motion.div className="group flex cursor-pointer items-center gap-4">
        <motion.h2
          initial={{ x: "150vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-fit bg-radial-[at_40%_-10%] from-amber-500 to-orange-700 bg-clip-text text-3xl font-light text-nowrap text-transparent transition-colors duration-700 group-hover:from-amber-400 group-hover:to-orange-600"
        >
          {text}
        </motion.h2>

        <motion.div
          initial={{ x: "150vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1, duration: 1.1, ease: "easeOut" }}
          className="relative flex w-full items-center"
        >
          <IoIosArrowForward className="absolute right-[calc((100%)-(--spacing(6)))] size-8 text-amber-600 transition-all duration-700 group-hover:right-0 group-active:right-0 group-hover:text-amber-500" />
        </motion.div>
      </motion.div>
    </Link>
  );
}