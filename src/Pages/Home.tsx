import { motion } from "motion/react";
import { IoIosArrowForward } from "react-icons/io";

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

function MyPortfolioH2() {
    return (
        <div className="flex w-full flex-col gap-1">
            <motion.div
                className="group flex gap-2 items-center cursor-pointer"
            >
                <motion.h2
                    initial={{ x: "150vw" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full bg-radial-[at_40%_-10%] from-amber-500 to-orange-700 bg-clip-text text-3xl font-light text-transparent"
                >
                    My Portfolio
                </motion.h2>

                <motion.div
                    initial={{ x: "150vw" }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.1, duration: 1.1, ease: "easeOut" }}
                    className="relative flex items-center w-full"
                >
                    <IoIosArrowForward 
                        className="absolute size-8 text-amber-600 right-[calc((100%)-(--spacing(6)))] transition-all duration-700 group-hover:right-0"
                    />
                </motion.div>
            </motion.div>

            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="h-px bg-linear-to-r from-orange-600/75 to-orange-400/85"
            />
        </div>
    );
}

function PortfolioItem({ text, imgUrl }: { text: string, imgUrl: string }) {
    return (
        <li className="group relative h-20 w-full overflow-clip rounded-xl cursor-pointer">
            <div className="absolute flex h-full w-full rounded-lg bg-radial-[at_25%_25%] from-orange-400 to-fuchsia-700 bg-clip-padding p-1 transition-colors duration-300 group-hover:from-orange-300 group-hover:to-fuchsia-600">
                <div
                    className="relative bg-dark-violet4/75 h-full w-full rounded-lg group-hover:bg-dark-violet4/85"
                    style={{ boxShadow: "0px 8px 12px 4px inset rgb(0 0 0 / 50%)" }}
                > 
                    <div 
                        className={`absolute h-full w-full overflow-hidden bg-cover bg-position-[center_top_10%] rounded-lg opacity-75 blur-xs group-hover:blur-none group-hover:opacity-50 transition-all duration-700`}
                        style={{ backgroundImage: `url(${imgUrl})` }}
                    >
                    </div>
                </div>

                <div className="absolute flex items-center justify-center right-1 top-1 rounded-tr-lg rounded-br-lg h-18 w-12 bg-black/50">
                    <IoIosArrowForward className="size-8 text-amber-600 group-hover:text-amber-500 transition-color duration-300"/>
                </div>
            </div>

            <p className=" absolute bottom-2 left-4 text-xl font-light text-amber-500 text-shadow-md/50 transition-all duration-300 group-hover:text-amber-400 group-hover:text-shadow-2xl/75">
                {text}
            </p>
        </li>
    );
}

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center p-5">
        <WelcomeHeader />

        <HelloWorldWelcome />

        <MyPortfolioH2 />

        <ul className="my-4 flex w-full flex-col items-center space-y-3">
            <PortfolioItem 
                text={'Win / Doc / Nav Interfaces'}
                imgUrl={'./src/public/win-doc-nav-interfaces.png'}
            />

            <PortfolioItem 
                text={'myBookShelf'}
                imgUrl={'./src/public/my-bookshelf.png'}
            />

            <PortfolioItem 
                text={'myNumberArray'}
                imgUrl={'./src/public/my-number-array.png'}
            />
        </ul>
    </div>
  );
}
