import { TabGroup, TabList, Tab } from "@headlessui/react";
import { IoMenuOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

function DarkModeToggle() {
    return (
        <TabGroup>
            <TabList className="flex *:rounded-full *:px-2 *:py-1 *:text-xl *:font-semibold *:text-white *:focus:not-data-focus:outline-none *:data-focus:outline *:data-focus:outline-white *:data-hover:bg-white/5 *:data-selected:bg-white/10 *:data-selected:data-hover:bg-white/10">
                <Tab>
                    <IoMoonOutline />
                </Tab>

                <Tab>
                    <IoSunnyOutline />
                </Tab>
            </TabList>
        </TabGroup>
    );
}

type HeaderType = { 
    setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>> 
}

export default function Header({ setSideBarOpen }: HeaderType ) {
    return (
        <header className="p-4 flex justify-between items-center">
            <IoMenuOutline 
                onClick={() => setSideBarOpen(true)}
                className="mr-2 text-white text-2xl" 
            />

            <h1 className="group text-2xl font-extralight tracking-wider *:transition-colors *:duration-700 *:ease-in-out">
                <span className="bg-clip-text text-transparent bg-linear-to-tl from-orange-500 to-orange-400 group-hover:bg-linear-to-tr group-hover:from-orange-500 group-hover:to-orange-300">
                    mike lind
                </span>

                <span className="bg-clip-text text-transparent bg-linear-to-b from-fuchsia-600/85 to-fuchsia-600/66 group-hover:bg-linear-to-b group-hover:from-fuchsia-500 group-hover:to-fuchsia-600">
                    {" | "}
                </span>

                <span className="bg-clip-text text-transparent bg-linear-to-tr from-fuchsia-600 to-fuchsia-500 group-hover:bg-linear-to-tl group-hover:from-fuchsia-600 group-hover:to-fuchsia-400">
                    web dev
                </span>
            </h1>

            <DarkModeToggle />
        </header>
    );
}