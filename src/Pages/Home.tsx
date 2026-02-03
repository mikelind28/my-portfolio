import { motion, stagger } from "motion/react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";

export function H2({ text }: { text: string }) {
  return (
    <motion.h2
      animate={{
        backgroundPosition: ["10% 70%", "90% 40%", "33% 60%", "50% 90%"],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.5, 2],
      }}
      className="mb-4 bg-radial from-orange-500 from-10% to-fuchsia-700 to-85% bg-clip-text text-3xl font-light text-transparent text-center"
      style={{ backgroundSize: "200% 200%" }}
    >
      {text}
    </motion.h2>
  );
}

function HelloWorldWelcome() {
  return (
    <div className="relative mt-2 mb-4 flex h-fit w-full place-items-center justify-center overflow-visible rounded-xl p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute -z-10 h-[95%] w-[95%] rounded-xl bg-radial from-fuchsia-800/80 from-40% to-fuchsia-900/50 bg-clip-content blur-lg"
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

function HomeH3({ text, pathName }: { text: string, pathName: string }) {
    return (
        <Link 
            to={pathName}
            className="mb-4 flex w-full flex-col gap-1"
        >
            <motion.div
                className="group flex gap-4 items-center cursor-pointer"
            >
                <motion.h3
                    initial={{ x: "150vw" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-fit text-nowrap bg-radial-[at_40%_-10%] from-amber-500 to-orange-700 bg-clip-text text-3xl font-light text-transparent"
                >
                    {text}
                </motion.h3>

                <motion.div
                    initial={{ x: "150vw" }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.1, duration: 1.1, ease: "easeOut" }}
                    className="relative flex items-center w-full"
                >
                    <IoIosArrowForward 
                        className="absolute size-8 text-amber-600 right-[calc((100%)-(--spacing(6)))] transition-all duration-700 group-active:right-0 group-hover:right-0"
                    />
                </motion.div>
            </motion.div>
        </Link>
    );
}



function PortfolioItemPreview({ text, url, imgUrl, height = 80 }: { text: string, url: string, imgUrl: string, height?: number }) {
    return (
        <div
            className="group relative w-full overflow-clip rounded-xl cursor-pointer"
            style={{ height: height }}
        >
            <Link 
                to={url}
                target='_blank'
                rel='noopener noreferrer'
                className="absolute flex h-full w-full rounded-lg bg-radial-[at_25%_25%] from-orange-400 to-fuchsia-700 bg-clip-padding p-0.5 transition-colors duration-300 group-hover:from-orange-300 group-hover:to-fuchsia-600"
            >
                <div
                    className="relative bg-dark-violet4/75 h-full w-full rounded-[10px] group-hover:bg-dark-violet4/85"
                    style={{ boxShadow: "0px 8px 12px 4px inset rgb(0 0 0 / 50%)" }}
                > 
                    <div 
                        className={`absolute h-full w-full overflow-hidden bg-cover bg-position-[center_top_10%] rounded-lg opacity-75 blur-xs group-hover:blur-none group-hover:opacity-50 transition-all duration-700`}
                        style={{ backgroundImage: `url(${imgUrl})` }}
                    >
                    </div>
                </div>

                <div className="absolute flex items-center justify-center right-0.5 top-0.5 rounded-tr-[10px] rounded-br-[10px] h-[calc(100%-4px)] w-12 bg-black/50">
                    <IoIosArrowForward className="size-8 text-amber-600 group-hover:text-amber-500 transition-color duration-300"/>
                </div>
            </Link>

            <p className="absolute bottom-2 left-4 text-xl font-light text-amber-500 text-shadow-md/50 transition-all duration-300 group-hover:text-amber-400 group-hover:text-shadow-2xl/75">
                {text}
            </p>
        </div>
    );
}

export function Divider() {
    return (
        <span className="my-4 w-full h-px bg-linear-to-r from-orange-600/75 to-orange-400/85" />
    );
}

const list = {
    hidden: {},
    show: {
        transition: {
            delayChildren: stagger(0.5)
        }
    }
}

const item = {
    hidden: { opacity: 0 },
    show: { 
        opacity: 1, 
        transition: {
            duration: 2.5
        }
    }
}

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center p-5">
        <H2 text={'Welcome.'} />

        <HelloWorldWelcome />

        <Divider />

        <HomeH3 text={"My Portfolio"} pathName={'/portfolio'} />

        <motion.ul 
            variants={list}
            initial="hidden"
            animate="show"
            className="flex w-full flex-col items-center space-y-3"
        >
            <motion.li
                variants={item}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1.03 }}
                className={'w-full'}
            >
                <PortfolioItemPreview 
                    text={'Window Interface API'}
                    url={'https://window-doc-nav.netlify.app'}
                    imgUrl={'./src/public/win-doc-nav-interfaces.png'}
                />
            </motion.li>

            <motion.li
                variants={item}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1.03 }}
                className={'w-full'}
            >
                <PortfolioItemPreview 
                    text={'myBookShelf'}
                    url={'https://my-bookshelf-wg3p.onrender.com/'}
                    imgUrl={'./src/public/my-bookshelf.png'}
                />
            </motion.li>

            <motion.li
                variants={item}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1.03 }}
                className={'w-full'}
            >
                <PortfolioItemPreview 
                    text={'myNumberArray'}
                    url={'https://my-number-array.netlify.app/'}
                    imgUrl={'./src/public/my-number-array.png'}
                />
            </motion.li>

            <div className="text-xl text-orange-400 font-light">
                <Link to='/portfolio'>
                    See all...
                </Link>
            </div>
        </motion.ul>

        <Divider />

        <HomeH3 text={"About Me"} pathName={'/about'} />

        <p className="text-left self-start text-base/5 text-orange-100/95 text-shadow-sm/15">My background, my proficiencies, and some more about me.</p>

        <Divider />

        <HomeH3 text={"Contact"} pathName={'/contact'} />

        <p className="text-left self-start text-base/5 text-orange-100/95 text-shadow-sm/15">Let's get in touch!</p>

        <Divider />
    </main>
  );
}
