import { useContext } from "react";
import H1 from "../Components/H1";
import { motion } from "motion/react";
import { DarkModeOnContext } from "../App";

export default function Contact() {
  const darkModeOn = useContext(DarkModeOnContext);

  return (
    <main className="mx-auto flex h-fit w-full max-w-120 flex-col gap-2 p-5">
      <title>Mike Lind | Web Dev - Contact</title>
      <H1 text={"Contact."} />

      <div className="flex flex-col gap-4">
        <div className="light:my-0 relative mt-2 mb- flex h-fit w-full items-center justify-center overflow-visible rounded-xl p-4">
          <motion.div
            initial={{ opacity: darkModeOn ? 0 : 1, scale: darkModeOn ? 0.75 : 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="light:bg-linear-to-b light:from-white light:to-white light:shadow-sm/15 light:blur-none light:h-full light:w-full absolute -z-10 h-[95%] w-[95%] rounded-xl bg-radial from-fuchsia-800/80 from-40% to-fuchsia-900/50 bg-clip-content blur-lg"
          ></motion.div>

          <div className="mt-2 mb-4 mx-12 flex flex-col items-center gap-2 p-2 font-light">
            <p className="light:text-fuchsia-700 light:text-shadow-none text-lg text-fuchsia-100 text-shadow-md/15">
              Reach me at...
            </p>

            <p className="light:text-fuchsia-800 light:text-shadow-none text-nowrap text-center text-base/5 text-fuchsia-200 text-shadow-sm">
              <a href="mailto:mike@mike-lind-dev.com" className="font-mono">mike@mike-lind-dev.com</a>
            </p>
          </div>
        </div>

        <div className="light:my-0 relative mt-2 mb-4 flex h-fit w-full items-center justify-center overflow-visible rounded-xl p-4">
          <motion.div
            initial={{ opacity: darkModeOn ? 0 : 1, scale: darkModeOn ? 0.75 : 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="light:bg-linear-to-b light:from-white light:to-white light:shadow-sm/15 light:blur-none light:h-full light:w-full absolute -z-10 h-[95%] w-[95%] rounded-xl bg-radial from-fuchsia-800/80 from-40% to-fuchsia-900/50 bg-clip-content blur-lg"
          ></motion.div>

          <div className="mt-2 mb-4 mx-12 flex flex-col items-center gap-2 p-2 font-light">
            <p className="light:text-fuchsia-700 light:text-shadow-none text-nowrap text-center text-lg/6 text-fuchsia-100 text-shadow-md/15">
              Find my work on GitHub:
            </p>

            <a href="https://github.com/mikelind28" className="light:text-fuchsia-800 light:text-shadow-none text-center text-base/5 text-orange-100/95 text-shadow-sm">
              <img src={darkModeOn ? '/images/github-white.png' : '/images/github-black.png'} />
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}
