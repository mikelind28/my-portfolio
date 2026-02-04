import { AnimatePresence, motion } from "motion/react";
import { type ReactNode } from "react";
import { LuExternalLink } from "react-icons/lu";
import { NavLink, useLocation } from "react-router";

type AnimatedLinkType = {
  children: ReactNode; 
  url: string; 
  newTab: boolean; 
}

function AnimatedLink({ children, url, newTab }: AnimatedLinkType) {
  let location = useLocation();

  return (
    <motion.li
      className="relative inline w-fit"
      initial="rest"
      whileHover="hover"
      animate="rest"
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

type SidebarNavType = {
    dropDownNavOpen: boolean;
}

export default function SidebarNav({ dropDownNavOpen }: SidebarNavType) {
  return (
    <AnimatePresence>
    {dropDownNavOpen && (
        <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '12rem', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "circInOut" }}
            style={{ overflow: "hidden" }}
            className="from-dark-violet4 to-dark-violet3 h-dvh w-50 bg-linear-to-b hidden sm:block sticky top-20 text-nowrap"
        >
          <nav>
              <ul className="flex flex-col gap-5 p-6 text-2xl sm:text-xl text-pink-100 *:hover:text-pink-50">
                <AnimatedLink url={"/"} newTab={false}>
                    Home
                </AnimatedLink>

                <AnimatedLink url={"/portfolio"} newTab={false}>
                    Portfolio
                </AnimatedLink>

                <AnimatedLink url={"/about"} newTab={false}>
                    About Me
                </AnimatedLink>

                <AnimatedLink url={"/contact"} newTab={false}>
                    Contact
                </AnimatedLink>

                <AnimatedLink 
                    url={"https://github.com/mikelind28"}
                    newTab={true}
                >
                    <div className="flex items-center gap-2">
                    GitHub <LuExternalLink />
                    </div>
                </AnimatedLink>
              </ul>
          </nav>
        </motion.div>
    )}
    </AnimatePresence>
  );
}
