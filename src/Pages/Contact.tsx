import { useContext } from "react";
import H1 from "../Components/H1";
import { motion } from "motion/react";
import { DarkModeOnContext } from "../App";

function ContactBox() {
  const darkModeOn = useContext(DarkModeOnContext);

  return (
    <div className="light:my-0 relative mt-2 mb-4 flex h-fit w-full items-center justify-center overflow-visible rounded-xl p-4">
      <motion.div
        initial={{ opacity: darkModeOn ? 0 : 1, scale: darkModeOn ? 0.75 : 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="light:bg-linear-to-b light:from-white light:to-white light:shadow-sm/15 light:blur-none light:h-full light:w-full absolute -z-10 h-[95%] w-[95%] rounded-xl bg-radial from-fuchsia-800/80 from-40% to-fuchsia-900/50 bg-clip-content blur-lg"
      ></motion.div>

      <div className="mt-2 mb-4 flex flex-col items-center gap-2 p-2 font-light">
        <p className="light:text-fuchsia-700 light:text-shadow-none text-lg text-rose-100 text-shadow-md/15">
          Reach me at...
        </p>

        <p className="light:text-fuchsia-800 light:text-shadow-none text-center text-base/5 text-orange-100/95 text-shadow-sm">
          <a href="mailto:mike@mike-lind-dev.com" className="font-mono">mike@mike-lind-dev.com</a>
        </p>
      </div>

    </div>
  );
}

export default function Contact() {
  return (
    <main className="mx-auto flex h-fit w-full max-w-120 flex-col gap-2 p-5">
      <title>Mike Lind | Web Dev - Contact</title>
      <H1 text={"Contact."} />

      <ContactBox />
    </main>
  );
}
