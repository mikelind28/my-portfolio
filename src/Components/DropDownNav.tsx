import { motion } from "motion/react";
import { type ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";
import { NavLink, useLocation } from "react-router";

type AnimatedLinkType = {
  children: ReactNode;
  url: string;
  newTab: boolean;
  setDropDownNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function AnimatedLink({
  children,
  url,
  newTab,
  setDropDownNavOpen,
}: AnimatedLinkType) {
  let location = useLocation();

  return (
    <motion.li
      className="relative inline w-fit"
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={() => setDropDownNavOpen(false)}
    >
      <NavLink
        to={url}
        target={newTab ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className={({ isActive }) =>
          isActive
            ? "light:text-neutral-900 light:font-bold cursor-default font-extrabold"
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

type DropDownNavType = {
  setDropDownNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DropDownNav({ setDropDownNavOpen }: DropDownNavType) {
  return (
    <div className="from-dark-violet4 to-dark-violet3 light:from-white light:from-10% light:via-orange-100 light:via-70% light:to-fuchsia-100 h-dvh w-dvw bg-linear-to-b sm:hidden">
      <IoClose
        onClick={() => setDropDownNavOpen(false)}
        className="light:text-neutral-900 size-12 shrink-0 cursor-pointer pt-4 pl-2 text-white"
      />

      <nav>
        <ul className="light:text-neutral-950/85 *:hover:light:text-neutral-900 flex flex-col gap-5 p-6 text-2xl text-pink-100 *:hover:text-pink-50">
          <AnimatedLink
            url={"/"}
            newTab={false}
            setDropDownNavOpen={setDropDownNavOpen}
          >
            Home
          </AnimatedLink>

          <AnimatedLink
            url={"/portfolio"}
            newTab={false}
            setDropDownNavOpen={setDropDownNavOpen}
          >
            Portfolio
          </AnimatedLink>

          <AnimatedLink
            url={"/about"}
            newTab={false}
            setDropDownNavOpen={setDropDownNavOpen}
          >
            About Me
          </AnimatedLink>

          <AnimatedLink
            url={"/contact"}
            newTab={false}
            setDropDownNavOpen={setDropDownNavOpen}
          >
            Contact
          </AnimatedLink>

          <AnimatedLink
            url={"https://github.com/mikelind28"}
            newTab={true}
            setDropDownNavOpen={setDropDownNavOpen}
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
