// import { TabGroup, TabList, Tab } from "@headlessui/react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { IoClose, IoMenuOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router";

type DarkModeToggleType = {
  setDarkModeOn: React.Dispatch<React.SetStateAction<boolean>>;
}

function DarkModeToggle({ setDarkModeOn }: DarkModeToggleType ) {
  const [isOn, setIsOn] = useState(true);

  const toggleSwitch = () => setIsOn(!isOn);

  useEffect(() => {
    isOn ? setDarkModeOn(true) : setDarkModeOn(false);
  }, [isOn]);

  return (
    <button
      onClick={toggleSwitch}
      className={`flex h-7 w-14 cursor-pointer items-center justify-between rounded-full bg-white/15 light:bg-fuchsia-800/40`}
    >
      <motion.div
        animate={{ x: isOn ? 0 : 28 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className={`absolute m-0.5 size-6 rounded-full bg-white/75`}
      />

      <IoMoonOutline
        className={`z-10 m-1.5 justify-self-start transition-colors duration-700 ${isOn ? "text-fuchsia-950" : "text-white"}`}
      />
      <IoSunnyOutline
        className={`z-10 m-1.5 justify-self-end transition-colors duration-700 ${isOn ? "text-white" : "text-fuchsia-950"}`}
      />
    </button>
  );
}

type HeaderType = {
  dropDownNavOpen: boolean;
  setDropDownNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkModeOn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ dropDownNavOpen, setDropDownNavOpen, setDarkModeOn }: HeaderType) {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("down");

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - scrollY.getPrevious()!;
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  return (
    <motion.header
      layout
      className={`z-50 flex items-center justify-between p-4 pb-6 bg-linear-to-b from-dark-violet4 light:from-white from-90% to-transparent ${scrollDirection === 'up' ? 'sticky top-0' : 'static'}`}
    >
      {
        dropDownNavOpen
        ? 
        <IoClose
          onClick={() => setDropDownNavOpen(false)}
          className="mr-2 cursor-pointer text-2xl text-white light:text-fuchsia-950"
        />
        : 
        <IoMenuOutline
          onClick={() => setDropDownNavOpen(true)}
          className="mr-2 cursor-pointer text-2xl text-white light:text-fuchsia-950"
        />
      }

      <Link to={'/'}>
        <p className="group text-2xl font-extralight tracking-wider cursor-pointer *:transition-colors *:duration-700 *:ease-in-out">
          <span className="bg-radial-[at_60%_-10%] from-amber-500/90 to-orange-500 bg-clip-text text-transparent group-hover:bg-radial-[at_66%_0%] group-hover:from-amber-500 group-hover:from-40% group-hover:to-orange-400">
            mike lind
          </span>

          <span className="bg-linear-to-b from-fuchsia-600/85 to-fuchsia-700/66 bg-clip-text text-transparent group-hover:bg-linear-to-b group-hover:from-fuchsia-500 group-hover:to-fuchsia-600">
            {" | "}
          </span>

          <span className="group-hover:bg-radial-[at_33%_0% bg-radial-[at_40%_10%] from-fuchsia-500 to-fuchsia-600 bg-clip-text text-transparent group-hover:from-fuchsia-500 group-hover:from-40% group-hover:to-fuchsia-700">
            web dev
          </span>
        </p>
      </Link>

      <DarkModeToggle setDarkModeOn={setDarkModeOn} />
    </motion.header>
  );
}
