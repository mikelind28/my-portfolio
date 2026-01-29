import { motion } from "motion/react";

function WelcomeHeader() {
  return (
    <motion.h1
      animate={{
        backgroundPosition: ["10% 70%", "90% 40%", "33% 60%", "50% 90%"],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.5, 2],
      }}
      className="bg-radial from-orange-500 from-10% to-fuchsia-700 to-85% bg-clip-text text-3xl font-light text-transparent"
      style={{ backgroundSize: "200% 200%" }}
    >
      Welcome.
    </motion.h1>
  );
}

function HelloWorldWelcome() {
  return (
    <div className="relative my-4 flex h-fit w-full place-items-center justify-center overflow-visible rounded-xl p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute -z-10 h-[90%] w-[90%] rounded-xl bg-radial from-fuchsia-800/80 from-40% to-fuchsia-900/50 bg-clip-content blur-lg"
      ></motion.div>

      <div className="mt-2 mb-4 flex flex-col items-center gap-2 p-2 font-light">
        <p className="text-xl text-rose-100 text-shadow-md/15">Hello, world.</p>

        <p className="text-center text-base/5 text-orange-100/95 text-shadow-sm">
          Welcome to my site. I'm excited to share my work with you!
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center p-5">
      <WelcomeHeader />

      <HelloWorldWelcome />

      <div className="flex w-full flex-col gap-1">
        <motion.h2
          initial={{ x: "150vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-radial-[at_40%_-10%] from-amber-500 to-orange-700 bg-clip-text text-3xl font-light text-transparent"
        >
          My Portfolio
        </motion.h2>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-px bg-linear-to-r from-orange-600/75 to-orange-400/85"
        />
      </div>

      <div className="relative my-4 flex h-40 w-full items-center justify-center overflow-clip rounded-xl">
        <div className="absolute z-30 flex h-full w-full items-center justify-center rounded-lg bg-radial-[at_25%_25%] from-orange-400 to-fuchsia-700 bg-clip-padding p-1">
          <div
            className="bg-dark-violet4 z-20 h-full w-full rounded-lg p-1"
            style={{ boxShadow: "0px 8px 12px 4px inset rgb(0 0 0 / 50%)" }}
          >
            <div className="z-30 h-full w-full overflow-hidden rounded-lg bg-[url(/src/public/win-doc-nav-interfaces.png)] bg-cover opacity-50 blur-xs"></div>
          </div>
        </div>

        <p className="absolute bottom-2 left-4 z-30 text-xl font-light text-amber-500 text-shadow-md/50">
          Win / Doc / Nav Interfaces
        </p>
      </div>
    </div>
  );
}
