import { IoClose } from "react-icons/io5";

type SideBarType = {
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ setSideBarOpen }: SideBarType) {
  return (
    <div className="from-dark-violet4 to-dark-violet3 h-dvh w-dvw bg-linear-to-b">
      <IoClose
        onClick={() => setSideBarOpen(false)}
        className="size-12 shrink-0 cursor-pointer pt-4 pl-2 text-white"
      />

      <nav>
        <ul className="space-y-4 p-6 text-2xl text-pink-100">
          <li>Home</li>

          <li>Portfolio</li>

          <li>About Me</li>

          <li>Contact</li>

          <li>GitHub</li>
        </ul>
      </nav>
    </div>
  );
}
