import { motion } from "motion/react";
import { type ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";
import { NavLink, useLocation } from "react-router";

type AnimatedLinkType = {
  children: ReactNode; 
  url: string; 
  newTab: boolean; 
  setGlobalNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function AnimatedLink({ children, url, newTab, setGlobalNavOpen }: AnimatedLinkType) {
  let location = useLocation();

  return (
    <motion.li
      className="relative inline w-fit"
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={() => setGlobalNavOpen(false)}
    >
      <NavLink
        to={url}
        target={ newTab ? "_blank" : "_self"} 
        rel="noopener noreferrer"
        className={({ isActive }) => 
          isActive ? 'font-extrabold cursor-default' : 'cursor-pointer font-light tracking'
        }
      >
        {children}
      </NavLink>

      <motion.span
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: location.pathname === url ? 0 : 1 },
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        style={{ originX: 0 }}
        className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-current"
      />
    </motion.li>
  );
}

type GlobalNavType = {
  setGlobalNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function GlobalNav({ setGlobalNavOpen }: GlobalNavType) {
  return (
    <div className="from-dark-violet4 to-dark-violet3 h-dvh w-dvw bg-linear-to-b md:hidden">
      <IoClose
        onClick={() => setGlobalNavOpen(false)}
        className="size-12 shrink-0 cursor-pointer pt-4 pl-2 text-white"
      />

      <nav>
        <ul className="flex flex-col gap-5 p-6 text-2xl text-pink-100 *:hover:text-pink-50">
          <AnimatedLink url={"/"} newTab={false} setGlobalNavOpen={setGlobalNavOpen}>
            Home
          </AnimatedLink>

          <AnimatedLink url={"/portfolio"} newTab={false} setGlobalNavOpen={setGlobalNavOpen}>
            Portfolio
          </AnimatedLink>

          <AnimatedLink url={"/about"} newTab={false} setGlobalNavOpen={setGlobalNavOpen}>
            About Me
          </AnimatedLink>

          <AnimatedLink url={"/contact"} newTab={false} setGlobalNavOpen={setGlobalNavOpen}>
            Contact
          </AnimatedLink>

          <AnimatedLink 
            url={"https://github.com/mikelind28"}
            newTab={true}
            setGlobalNavOpen={setGlobalNavOpen}
          >
            <div className="flex items-center gap-2">
              GitHub <LuExternalLink />
            </div>
          </AnimatedLink>
        </ul>
      </nav>
    </div>
  );
}
