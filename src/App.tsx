import { AnimatePresence, motion } from 'motion/react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import './index.css'
import { useState } from 'react';

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  
  return (
    <>
      <AnimatePresence>
        {sideBarOpen && (
          <motion.div 
            initial={{ y: '-100%', opacity: 5 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{ type: 'tween', ease: 'circOut', duration: 0.5 }}
            exit={{ y: '-100%', opacity: 0 }}
            className='absolute'
          >
            <Sidebar 
              setSideBarOpen={setSideBarOpen} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Header 
        setSideBarOpen={setSideBarOpen} 
      />
    </>
  )
}

export default App;
