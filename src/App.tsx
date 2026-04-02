import { AnimatePresence, motion } from "motion/react";
import Header from "./Components/Header";
import DropDownNav from "./Components/DropDownNav";
import "./index.css";
import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "./Components/SidebarNav";
import Footer from "./Components/Footer";

export const DarkModeOnContext = createContext<boolean | undefined>(undefined);

function App() {
  const [dropDownNavOpen, setDropDownNavOpen] = useState(false);

  // default state is 'true' if localStorage key 'theme' is 'dark' or 'null'
  // (dark mode ON is the default)
  // setDarkModeOn is passed to the DarkModeToggle in the Header
  const [darkModeOn, setDarkModeOn] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme === "dark" || theme === null;
  });

  // whenever darkModeOn changes
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.backgroundColor = darkModeOn
        ? "var(--color-dark-violet4)"
        : "var(--color-neutral-100)";
    }

    const html = document.querySelector("html");
    if (html) {
      html.setAttribute("data-theme", darkModeOn ? "" : "light");
    }

    localStorage.setItem("theme", darkModeOn ? "dark" : "light");
  }, [darkModeOn]);

  return (
    <DarkModeOnContext value={darkModeOn}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-full min-h-dvh"
      >
        <AnimatePresence>
          {dropDownNavOpen && (
            <motion.div
              initial={{ y: "-100%", opacity: 5 }}
              animate={{ y: 0, opacity: 100 }}
              transition={{ type: "tween", ease: "circOut", duration: 0.5 }}
              exit={{ y: "-100%", opacity: 0 }}
              className="fixed z-100"
            >
              <DropDownNav setDropDownNavOpen={setDropDownNavOpen} />
            </motion.div>
          )}
        </AnimatePresence>

        <Header
          dropDownNavOpen={dropDownNavOpen}
          setDropDownNavOpen={setDropDownNavOpen}
          setDarkModeOn={setDarkModeOn}
        />

        <div className="h-full min-h-dvh sm:flex sm:gap-2">
          <Sidebar dropDownNavOpen={dropDownNavOpen} />

          <div className="flex h-full min-h-dvh w-full flex-col items-center justify-between overflow-hidden">
            <Outlet />
            <Footer />
          </div>
        </div>
      </motion.div>
    </DarkModeOnContext>
  );
}

export default App;
