import { motion, stagger } from "motion/react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";
import H1 from "../Components/H1";
import H2Link from "../Components/H2Link";
import Divider from "../Components/Divider";

function HelloWorldWelcome() {
  return (
    <div className="relative mt-2 mb-4 light:my-0 flex h-fit w-full items-center justify-center overflow-visible rounded-xl p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="light:bg-linear-to-b light:from-white light:to-white light:shadow-sm/15 light:blur-none light:h-full light:w-full absolute -z-10 h-[95%] w-[95%] rounded-xl bg-radial from-fuchsia-800/80 from-40% to-fuchsia-900/50 bg-clip-content blur-lg"
      ></motion.div>

      <div className="mt-2 mb-4 flex flex-col items-center gap-2 p-2 font-light">
        <p className="light:text-fuchsia-700 light:text-shadow-none text-xl text-rose-100 text-shadow-md/15">
          Hello, world.
        </p>

        <p className="light:text-fuchsia-800 light:text-shadow-none text-center text-base/5 text-orange-100/95 text-shadow-sm">
          Welcome to my site. I'm excited to share my work with you!
        </p>
      </div>
    </div>
  );
}

type PortfolioItemPreviewType = {
  text: string;
  url: string;
  img: string;
  height?: number;
};

function PortfolioItemPreview({
  text,
  url,
  img,
  height = 80,
}: PortfolioItemPreviewType) {
  return (
    <div
      className="relative mb-1 flex h-30 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-transparent p-4 text-center light:shadow-[inset_0_5px_10px_5px_rgba(0,0,0,0.25)] shadow-[inset_0_5px_20px_5px_rgba(0,0,0,0.75)] transition-all duration-500 [background:border-box_var(--border-color)] light:[background:border-box_var(--border-color-light)] 
      before:absolute before:inset-0 before:z-0 before:scale-105 before:rounded-[inherit] before:bg-(image:--img) before:bg-cover before:bg-position-[center_top_10%] before:opacity-80 before:blur-[3px] before:brightness-50 before:transition-all before:duration-500 before:content-[''] 
      hover:brightness-120 hover:before:blur-[1px]
      light:before:brightness-100 light:before:opacity-50
      "
      style={
        {
          height: height,
          "--border-color": `radial-gradient(circle at 25% 25%,
                        var(--color-orange-500) 0%,
                        var(--color-fuchsia-700) 100%)`,
          "--border-color-light": `radial-gradient(circle at 25% 25%,
                        var(--color-amber-500) 0%,
                        var(--color-fuchsia-700) 100%)`,
          "--img": `url(/images/screenshots/${img})`,
        } as React.CSSProperties
      }
    >
      <Link to={url} target="_blank" rel="noopener noreferrer">
        <div className="absolute top-0 right-0 flex h-full w-12 items-center justify-center rounded-tr-[inherit] rounded-br-[inherit] bg-black/50">
          <IoIosArrowForward className="transition-color size-8 light:text-amber-500 text-amber-600 duration-300 group-hover:text-amber-500" />
        </div>
      </Link>

      <p className="bg-dark-violet4/50 group-hover:text-shadow-2xl/75 group-hover:bg-dark-violet4/75 absolute top-5.5 left-3 rounded-md px-2 py-1 text-xl font-light text-amber-500 transition-all duration-300 text-shadow-md/50 group-hover:text-amber-400">
        {text}
      </p>
    </div>
  );
}

const list = {
  hidden: {},
  show: {
    transition: {
      delayChildren: stagger(0.5),
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 2.5,
    },
  },
};

export default function Home() {
  return (
    <main className="relative mx-auto flex w-full max-w-160 flex-col items-center p-5">
      <H1 text={"Welcome."} />

      <HelloWorldWelcome />

      <Divider />

      <div className="w-full light:bg-white light:rounded-xl light:p-4 light:shadow-sm/15">
        <H2Link text={"My Portfolio"} pathName={"/portfolio"} />

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
            className={"w-full"}
          >
            <PortfolioItemPreview
              text={"Window Interface API"}
              url={"https://window-doc-nav.netlify.app"}
              img={"win-doc-nav-interfaces.png"}
            />
          </motion.li>

          <motion.li
            variants={item}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.03 }}
            className={"w-full"}
          >
            <PortfolioItemPreview
              text={"myBookShelf"}
              url={"https://my-bookshelf-wg3p.onrender.com/"}
              img={"my-bookshelf.png"}
            />
          </motion.li>

          <motion.li
            variants={item}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.03 }}
            className={"w-full"}
          >
            <PortfolioItemPreview
              text={"myNumberArray"}
              url={"https://my-number-array.netlify.app/"}
              img={"my-number-array.png"}
            />
          </motion.li>

          <Link to="/portfolio">
            <motion.div
              whileHover="hover"
              className="light:text-orange-700 group relative m-2 flex h-fit w-fit items-center justify-center overflow-visible px-8 py-2 text-xl font-light text-orange-400"
            >
              <motion.div
                variants={{
                  hover: { opacity: 1, scale: 1 },
                }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 -z-10 rounded-xl light:bg-none bg-radial from-orange-500/50 from-40% to-orange-900/50 bg-clip-content blur-lg"
              ></motion.div>

              <p className="transition-all light:duration-300 duration-1000 light:group-hover:drop-shadow-none light:group-hover:text-orange-600 light:group-hover:underline light:decoration-orange-500/0 light:group-hover:underline-offset-3 light:group-hover:decoration-1 light:group-hover:decoration-orange-500/75 group-hover:drop-shadow-md/66">
                See all...
              </p>
            </motion.div>
          </Link>
        </motion.ul>
      </div>

      <Divider />

      <div className="w-full light:bg-white light:rounded-xl light:p-4 light:shadow-sm/15">
        <H2Link text={"About Me"} pathName={"/about"} />

        <p className="light:text-fuchsia-950 light:font-light light:text-shadow-none self-start text-left text-base/5 text-orange-100/95 text-shadow-sm/15">
          My background, my proficiencies, and some more about me.
        </p>
      </div>

      <Divider />

      <div className="w-full light:bg-white light:rounded-xl light:p-4 light:shadow-sm/15">
        <H2Link text={"Contact"} pathName={"/contact"} />

        <p className="light:text-fuchsia-950 light:font-light light:text-shadow-none self-start text-left text-base/5 text-orange-100/95 text-shadow-sm/15">
          Let's get in touch!
        </p>
      </div>

      <Divider />
    </main>
  );
}
