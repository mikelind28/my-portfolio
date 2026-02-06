// import { TabGroup, TabList, Tab } from "@headlessui/react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import {
  IoClose,
  IoMenuOutline,
  IoMoonOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import { Link } from "react-router";

type DarkModeToggleType = {
  setDarkModeOn: React.Dispatch<React.SetStateAction<boolean>>;
};

function DarkModeToggle({ setDarkModeOn }: DarkModeToggleType) {
  const [isOn, setIsOn] = useState(
    localStorage.getItem("theme") === "dark" ||
      localStorage.getItem("theme") === null
      ? true
      : false,
  );

  const toggleSwitch = () => setIsOn(!isOn);

  useEffect(() => {
    isOn ? setDarkModeOn(true) : setDarkModeOn(false);
  }, [isOn]);

  return (
    <button
      onClick={toggleSwitch}
      className={`light:bg-fuchsia-700/30 light:inset-shadow-xs/20 flex h-7 w-14 cursor-pointer items-center justify-between rounded-full bg-white/15`}
    >
      <motion.div
        animate={{ x: isOn ? 0 : 28 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className={`light:drop-shadow-[0px_1px_1px_rgba(0,0,0,0.20)] light:bg-white absolute m-0.5 size-6 rounded-full bg-white/75`}
      />

      <IoMoonOutline
        className={`light:drop-shadow-[0px_1px_1px_rgba(0,0,0,0.20)] z-10 m-1.5 justify-self-start transition-colors duration-700 ${isOn ? "light:text-slate-950 text-fuchsia-950" : "text-white"}`}
      />
      <IoSunnyOutline
        className={`light:drop-shadow-[0px_1px_1px_rgba(0,0,0,)0.20] z-10 m-1.5 justify-self-end transition-colors duration-700 ${isOn ? "text-white" : "light:text-slate-950 text-fuchsia-950"}`}
      />
    </button>
  );
}

type HeaderType = {
  dropDownNavOpen: boolean;
  setDropDownNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkModeOn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({
  dropDownNavOpen,
  setDropDownNavOpen,
  setDarkModeOn,
}: HeaderType) {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("down");

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - scrollY.getPrevious()!;
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  return (
    <motion.header
      layout
      className={`from-dark-violet4 light:from-white light:to-white light:drop-shadow-sm/15 z-50 flex items-center justify-between bg-linear-to-b from-90% to-transparent p-4 pb-6 ${scrollDirection === "up" ? "sticky top-0" : "static"}`}
    >
      {dropDownNavOpen ? (
        <IoClose
          onClick={() => setDropDownNavOpen(false)}
          className="light:text-zinc-950 mr-2 cursor-pointer text-2xl text-white"
        />
      ) : (
        <IoMenuOutline
          onClick={() => setDropDownNavOpen(true)}
          className="light:text-zinc-950 mr-2 cursor-pointer text-2xl text-white"
        />
      )}

      <Link to={"/"}>
        <p className="group cursor-pointer text-2xl font-extralight tracking-wider">
          <span className="
            light:from-orange-400 light:via-orange-600 light:to-orange-700 
            light:group-hover:from-orange-400 light:group-hover:via-orange-500 light:group-hover:to-orange-600 
            bg-radial-[at_60%_-10%] from-amber-500/90 to-orange-500 bg-clip-text text-transparent 
            group-hover:bg-radial-[at_66%_0%] group-hover:from-amber-500 group-hover:from-40% group-hover:to-orange-400 
            transition-all duration-700">
            mike lind
          </span>

          <span className="
            light:from-orange-500/75 light:via-fuchsia-500/75 light:to-fuchsia-600 
            light:group-hover:from-fuchsia-400 light:group-hover:to-fuchsia-500 
            bg-linear-to-b from-fuchsia-600/85 to-fuchsia-700/66 bg-clip-text text-transparent 
            group-hover:bg-linear-to-b group-hover:from-fuchsia-500 group-hover:to-fuchsia-600 
            transition-all duration-700">
            {" | "}
          </span>

          <span className="
            light:group-hover:from-fuchsia-400 light:via-fuchsia-600 light:to-fuchsia-800 
            light:group-hover:to-fuchsia-500 
            bg-radial-[at_40%_10%] from-fuchsia-500 to-fuchsia-600 bg-clip-text text-transparent 
            group-hover:bg-radial-[at_33%_0%] group-hover:from-fuchsia-400 group-hover:from-20% group-hover:to-fuchsia-700 
            transition-all duration-700">
            web dev
          </span>
        </p>
      </Link>

      <DarkModeToggle setDarkModeOn={setDarkModeOn} />
    </motion.header>
  );
}
