// import { TabGroup, TabList, Tab } from "@headlessui/react";
import { motion } from "motion/react";
import { useState } from "react";
import { IoMenuOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router";

function DarkModeToggle() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <button
      onClick={toggleSwitch}
      className={`flex h-7 w-14 cursor-pointer items-center justify-between rounded-full bg-white/15`}
    >
      <motion.div
        animate={{ x: isOn ? 28 : 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className={`absolute m-0.5 size-6 rounded-full bg-white/75 ${isOn ? "justify-self-start" : "justify-self-end"}`}
      />

      <IoMoonOutline
        className={`z-10 m-1.5 justify-self-start transition-colors duration-700 ${isOn ? "text-white" : "text-black"}`}
      />
      <IoSunnyOutline
        className={`z-10 m-1.5 justify-self-end transition-colors duration-700 ${isOn ? "text-black" : "text-white"}`}
      />
    </button>
  );
}

type HeaderType = {
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setSideBarOpen }: HeaderType) {
  return (
    <header className="flex items-center justify-between p-4">
      <IoMenuOutline
        onClick={() => setSideBarOpen(true)}
        className="mr-2 cursor-pointer text-2xl text-white"
      />

      <Link to={'/'}>
        <h1 className="group text-2xl font-extralight tracking-wider cursor-pointer *:transition-colors *:duration-700 *:ease-in-out">
          <span className="bg-radial-[at_60%_-10%] from-amber-500/90 to-orange-500 bg-clip-text text-transparent group-hover:bg-radial-[at_66%_0%] group-hover:from-amber-500 group-hover:from-40% group-hover:to-orange-400">
            mike lind
          </span>

          <span className="bg-linear-to-b from-fuchsia-600/85 to-fuchsia-700/66 bg-clip-text text-transparent group-hover:bg-linear-to-b group-hover:from-fuchsia-500 group-hover:to-fuchsia-600">
            {" | "}
          </span>

          <span className="group-hover:bg-radial-[at_33%_0% bg-radial-[at_40%_10%] from-fuchsia-500 to-fuchsia-600 bg-clip-text text-transparent group-hover:from-fuchsia-500 group-hover:from-40% group-hover:to-fuchsia-700">
            web dev
          </span>
        </h1>
      </Link>

      <DarkModeToggle />
    </header>
  );
}
