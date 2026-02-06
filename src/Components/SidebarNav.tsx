import { AnimatePresence, motion, useMotionValueEvent, useScroll  } from "motion/react";
import { useState, type ReactNode } from "react";
import { LuExternalLink } from "react-icons/lu";
import { NavLink, useLocation } from "react-router";

type AnimatedLinkType = {
  children: ReactNode;
  url: string;
  newTab: boolean;
};

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
        target={newTab ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className={({ isActive }) =>
          isActive
            ? "light:text-fuchsia-950 light:font-semibold cursor-default font-extrabold"
            : "tracking cursor-pointer font-light"
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
};

export default function SidebarNav({ dropDownNavOpen }: SidebarNavType) {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("down");

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - scrollY.getPrevious()!;
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  return (
    <AnimatePresence>
      {dropDownNavOpen && (
        <motion.div
  
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "12rem", opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "circInOut" }}
          style={{ overflow: "hidden" }}
          className={`from-dark-violet4 to-dark-violet3 light:from-neutral-50 light:from-40% light:via-orange-50 light:via-60% light:to-fuchsia-200 light:inset-shadow-[-4px_-4px_6px_rgba(0,0,0,0.10)] sticky top-0 hidden h-dvh w-50 bg-linear-to-b text-nowrap sm:block ${scrollDirection === "up" ? "top-18" : "top-0"}`}
        >
          <nav>
            <ul className="light:text-fuchsia-950/85 *:hover:light:text-fuchsia-950 flex flex-col gap-5 p-6 text-2xl text-pink-100 *:hover:text-pink-50 sm:text-xl">
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

              <AnimatedLink url={"https://github.com/mikelind28"} newTab={true}>
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
