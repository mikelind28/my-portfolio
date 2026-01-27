import { motion } from "motion/react";
import type { ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";

function AnimatedLink({ children }: { children: ReactNode }) {
  return (
    <motion.span
      className="relative inline w-fit cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {children}

      <motion.span
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        style={{ originX: 0 }}
        className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-current"
      />
    </motion.span>
  );
}

type SideBarType = {
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ setSideBarOpen }: SideBarType) {
  return (
    <div className="from-dark-violet4 to-dark-violet3 h-dvh w-dvw bg-linear-to-b">
      <IoClose
        onClick={() => setSideBarOpen(false)}
        className="size-12 shrink-0 cursor-pointer pt-4 pl-2 text-white"
      />

      <nav>
        <ul className="flex flex-col gap-5 p-6 text-2xl text-pink-100 *:hover:text-pink-50">
          <AnimatedLink>
            <li>Home</li>
          </AnimatedLink>

          <AnimatedLink>
            <li>Portfolio</li>
          </AnimatedLink>

          <AnimatedLink>
            <li>About Me</li>
          </AnimatedLink>

          <AnimatedLink>
            <li>Contact</li>
          </AnimatedLink>

          <AnimatedLink>
            <li className="flex items-center gap-2">GitHub <LuExternalLink /></li>
          </AnimatedLink>
        </ul>
      </nav>
    </div>
  );
}
