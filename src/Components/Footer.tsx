import { motion } from "motion/react";
import { DarkModeOnContext } from "../App";
import { useContext, type ReactNode } from "react";
import { LuExternalLink } from "react-icons/lu";
import { useLocation, NavLink } from "react-router";

type AnimatedFooterLinkType = {
  children: ReactNode;
  url: string;
  newTab: boolean;
};

function AnimatedFooterLink({ children, url, newTab }: AnimatedFooterLinkType) {
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
            ? "light:text-fuchsia-950 light:font-semibold cursor-default font-extrabold text-pink-100"
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

export default function Footer() {
    const darkModeOn = useContext(DarkModeOnContext);
    
    return (
        <motion.footer 
            initial={{ y: '200%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative h-full w-full max-w-160 mx-auto flex items-start justify-center overflow-visible rounded-xl p-4"
        >
            <motion.div
                initial={{ opacity: darkModeOn ? 0 : 1, scale: darkModeOn ? 0.75 : 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="light:bg-linear-to-b light:from-white light:to-white light:shadow-sm/15 light:blur-none light:h-full light:w-full absolute -z-10 h-[150%] w-[95%] rounded-xl bg-radial from-fuchsia-900/40 from-40% to-fuchsia-950/10 bg-clip-content blur-lg"
            ></motion.div>

            <nav>
                <ul className="light:text-fuchsia-950/85 *:hover:light:text-fuchsia-950 flex flex-col items-center gap-3 p-6 pt-18 text-sm text-pink-200/90 *:hover:text-pink-50">
                    <AnimatedFooterLink url={"/"} newTab={false}>
                        Home
                    </AnimatedFooterLink>
    
                    <AnimatedFooterLink url={"/portfolio"} newTab={false}>
                        Portfolio
                    </AnimatedFooterLink>
    
                    <AnimatedFooterLink url={"/about"} newTab={false}>
                        About Me
                    </AnimatedFooterLink>
    
                    <AnimatedFooterLink url={"/contact"} newTab={false}>
                        Contact
                    </AnimatedFooterLink>
    
                    <AnimatedFooterLink url={"https://github.com/mikelind28"} newTab={true}>
                        <div className="flex items-center gap-2">
                            GitHub <LuExternalLink />
                        </div>
                    </AnimatedFooterLink>
                </ul>
            </nav>
        </motion.footer>
    );
}