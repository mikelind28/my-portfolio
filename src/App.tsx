import { AnimatePresence, motion } from "motion/react";
import Header from "./Components/Header";
import DropDownNav from "./Components/DropDownNav";
import "./index.css";
import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "./Components/SidebarNav";
import Footer from "./Components/Footer";

export const DarkModeOnContext = createContext(true);

function App() {
  const [dropDownNavOpen, setDropDownNavOpen] = useState(false);
  const [darkModeOn, setDarkModeOn] = useState(
    localStorage.getItem("theme") === "dark" ||
      localStorage.getItem("theme") === null
      ? true
      : false,
  );

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
        className="min-h-dvh h-full"
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

        <div className="sm:flex sm:gap-4 min-h-dvh h-full">
          <Sidebar dropDownNavOpen={dropDownNavOpen} />
          
          <div className="flex flex-col items-center min-h-dvh h-full w-full justify-between overflow-hidden">
            <Outlet />
            <Footer />
          </div>
        </div>
      </motion.div>
    </DarkModeOnContext>
  );
}

export default App;
