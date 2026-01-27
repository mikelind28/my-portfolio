import { IoClose } from "react-icons/io5";

type SideBarType = { 
    setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>> 
}

export default function Sidebar({ setSideBarOpen }: SideBarType ) {
    return (
        <div className="z-100 h-dvh w-dvw bg-linear-to-b from-dark-violet4 to-dark-violet3">
            <IoClose
                onClick={() => setSideBarOpen(false)}
                className="pl-2 pt-4 shrink-0 size-12 text-white"
            />
            
            <nav>
                <ul className="p-6 text-pink-100 text-2xl space-y-4">
                    <li>
                        Home
                    </li>

                    <li>
                        Portfolio
                    </li>

                    <li>
                        About Me
                    </li>

                    <li>
                        Contact
                    </li>

                    <li>
                        GitHub
                    </li>
                </ul>
            </nav>
        </div>
    );
}