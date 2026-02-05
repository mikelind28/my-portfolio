import { AnimatePresence, motion } from "motion/react";
import Header from "./Components/Header";
import DropDownNav from "./Components/DropDownNav";
import "./index.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "./Components/SidebarNav";

function App() {
  const [dropDownNavOpen, setDropDownNavOpen] = useState(false);
  const [darkModeOn, setDarkModeOn] = useState(true);

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.style.backgroundColor = darkModeOn ? 'var(--color-dark-violet4)' : 'var(--color-white)'
    }

    const html = document.querySelector('html');
    if (html) {
      html.setAttribute('data-theme', darkModeOn ? '' : 'light');
    }
  }, [darkModeOn]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
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
        
        <div className="sm:flex sm:gap-4">
          <Sidebar dropDownNavOpen={dropDownNavOpen} />
          <Outlet />
        </div>
    </motion.div>
  );
}

export default App;
