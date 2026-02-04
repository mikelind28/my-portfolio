import { AnimatePresence, motion } from "motion/react";
import Header from "./Components/Header";
import GlobalNav from "./Components/GlobalNav";
import "./index.css";
import { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "./Components/Sidebar";

function App() {
  const [globalNavOpen, setGlobalNavOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
        <AnimatePresence>
          {globalNavOpen && (
            <motion.div
              initial={{ y: "-100%", opacity: 5 }}
              animate={{ y: 0, opacity: 100 }}
              transition={{ type: "tween", ease: "circOut", duration: 0.5 }}
              exit={{ y: "-100%", opacity: 0 }}
              className="fixed z-100"
            >
              <GlobalNav setGlobalNavOpen={setGlobalNavOpen} />
            </motion.div>
          )}
        </AnimatePresence>

        <Header globalNavOpen={globalNavOpen} setGlobalNavOpen={setGlobalNavOpen} />
        
        <div className="sm:flex sm:gap-4">
          <Sidebar globalNavOpen={globalNavOpen} />
          <Outlet />
        </div>
    </motion.div>
  );
}

export default App;
