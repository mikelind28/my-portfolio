import { useState, type ReactNode } from "react";
import Divider from "../Components/Divider";
import H1 from "../Components/H1";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";
import { LuExternalLink } from "react-icons/lu";

type DevTagType = {
  text: string;
  img: string;
};

function DevTag({ text, img }: DevTagType) {
  return (
    <li className="light:bg-neutral-50 light:inset-shadow-orange-950 light:px-2.5 light:inset-shadow-sm/20 light:border-0 rounded-sm border border-amber-700 bg-orange-950/90 px-2 py-1 inset-shadow-sm/25 inset-shadow-fuchsia-950">
      <div className="flex items-center gap-2">
        <img
          src={`/images/proficiency-logos/${img}`}
          className="h-full w-5 rounded-xs drop-shadow-xs/75"
          alt={`${text} logo`}
        />
        <p className="light:text-transparent light:bg-clip-text light:bg-linear-to-b light:from-orange-500 light:from-10% light:via-fuchsia-700 light:via-40% light:to-fuchsia-950 text-base font-light text-orange-100">
          {text}
        </p>
      </div>
    </li>
  );
}

type PortfolioItemType = {
  title: string;
  children: ReactNode | ReactNode[];
};

// bg-linear-to-b from-fuchsia-700/40 via-fuchsia-900/33 via-10% to-fuchsia-700/40 

// bg-linear-[180deg,oklch(35%_0.253_323.949),oklch(25%_0.17_325.612)_10%,oklch(15%_0.17_325.612)_85%,oklch(25%_0.253_323.949)]

function PortfolioItem({ title, children }: PortfolioItemType) {
  const [open, setOpen] = useState(true);

  return (
    <div className="light:bg-white light:border-0 light:shadow-md/25 rounded-xl px-4 py-6 relative my-4 w-full self-start 2xl:my-0 bg-fuchsia-gradient to-fuchsia-700/40 border border-fuchsia-700/40 shadow-md/100 2xl:break-inside-avoid">
      <div
        onClick={() => setOpen(!open)}
        className="group flex cursor-pointer items-start gap-2"
      >
        <motion.div
          animate={!open ? { rotate: -90 } : {}}
          style={{ transformOrigin: "center" }}
        >
          <IoIosArrowDown className="size-8 text-amber-600 transition-all duration-700 group-hover:text-amber-500" />
        </motion.div>

        <h2 className="mb-2 w-fit bg-radial-[at_40%_-10%] from-amber-500 to-orange-700 bg-clip-text text-2xl sm:text-3xl font-light text-nowrap text-transparent transition-colors duration-700 group-hover:from-amber-400 group-hover:to-orange-600 drop-shadow-xl/66 light:drop-shadow-none">
          {title}
        </h2>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "circInOut" }}
            style={{ overflow: "hidden" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type PortfolioItemLinksType = {
  appUrl: string;
  gitHubUrl: string;
  img: string;
};

function PortfolioItemLinks({
  appUrl,
  gitHubUrl,
  img,
}: PortfolioItemLinksType) {
  const [divOneHover, setDivOneHover] = useState(false);
  const [divTwoHover, setDivTwoHover] = useState(false);

  return (
    <div
      style={
        {
          "--border-color": `radial-gradient(circle at 25% 25%,
                    var(--color-orange-500) 0%,
                    var(--color-fuchsia-700) 100%)`,
          "--border-color-light": `radial-gradient(circle at 25% 25%,
                    var(--color-amber-500) 0%,
                    var(--color-fuchsia-700) 100%)`,
          "--img": `url(/images/screenshots/${img})`,
        } as React.CSSProperties
      }
      className="light:shadow-[inset_0_5px_10px_5px_rgba(0,0,0,0.25)] light:[background:border-box_var(--border-color-light)] light:before:brightness-100 light:before:opacity-50 relative mt-2 mb-4 flex h-30 w-full items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-transparent p-4 text-center shadow-[inset_0_5px_20px_5px_rgba(0,0,0,0.75)] transition-all duration-500 [background:border-box_var(--border-color)] before:absolute before:inset-0 before:z-0 before:scale-105 before:rounded-[inherit] before:bg-(image:--img) before:bg-cover before:bg-position-[center_top_10%] before:opacity-80 before:blur-[3px] before:brightness-50 before:transition-all before:duration-500 before:content-[''] hover:brightness-120 hover:before:blur-[1px]"
    >
      <motion.a
        href={appUrl}
        onHoverStart={() => setDivOneHover(true)}
        onHoverEnd={() => setDivOneHover(false)}
        target="_blank"
        rel="noopener noreferrer"
        className={`group z-10 flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black/50 text-xl transition-all duration-500 hover:origin-[25%] hover:scale-110 hover:drop-shadow-lg hover:drop-shadow-black/75 ${divTwoHover ? "scale-90" : ""}`}
      >
        <div className="flex items-center gap-2 text-xl font-light text-amber-500 drop-shadow-md/25">
          <p>App</p>
          <LuExternalLink />
        </div>
      </motion.a>

      <motion.a
        href={gitHubUrl}
        onHoverStart={() => setDivTwoHover(true)}
        onHoverEnd={() => setDivTwoHover(false)}
        target="_blank"
        rel="noopener noreferrer"
        className={`group z-10 flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black/50 text-xl transition-all duration-500 hover:origin-[75%] hover:scale-110 hover:drop-shadow-lg hover:drop-shadow-black/75 ${divOneHover ? "scale-90" : ""}`}
      >
        <div className="flex items-center gap-2 text-xl font-light text-amber-500 drop-shadow-md/25">
          <p>GitHub</p>
          <LuExternalLink />
        </div>
      </motion.a>
    </div>
  );
}

type PortfolioItemDescriptionType = {
  children: ReactNode;
};

function PortfolioItemDescription({ children }: PortfolioItemDescriptionType) {
  return (
    <p className="light:text-fuchsia-950 light:font-light mx-2 mt-4 self-start text-orange-50 sm:text-lg/7 sm:my-8">
      {children}
    </p>
  );
}

export default function Portfolio() {
  return (
    <main className="mx-auto w-full max-w-160 xl:max-w-180 p-5 2xl:max-w-7xl">
      <title>Mike Lind | Web Dev - Portfolio</title>
      <H1 text={"My Portfolio."} />

      <div className="2xl:columns-2 2xl:block 2xl:gap-15">
        <div className="flex h-fit w-full flex-col items-center 2xl:gap-6">
          <PortfolioItem title={"Back to the Shelf Again"}>
            <PortfolioItemLinks
              appUrl={"https://back-to-the-shelf-again.vercel.app/"}
              gitHubUrl={"https://github.com/mikelind28/back-to-the-shelf-again"}
              img={"bttsa.webp"}
            />

            <PortfolioItemDescription>
              <span className="italic">Back to the Shelf Again</span> is a
              full-stack React + Next.js site for a pop-up book shop in
              South-Central Wisconsin. They sell gently-used romance books at
              local vendors. The non-developer admins can log in and add new
              entries for their upcoming events, linking them to reusable
              locations, using Payload CMS.
            </PortfolioItemDescription>

            <ul className="mt-4 flex flex-wrap gap-2">
              <DevTag text={"React"} img={"react.png"} />
              <DevTag text={"TypeScript"} img={"typescript.svg.png"} />
              <DevTag text={"Next.js"} img={"nextjs.svg"} />
              <DevTag text={"Tailwind"} img={"tailwind.svg"} />
              <DevTag text={"Motion"} img={"motion.png"} />
              <DevTag text={"Postgres"} img={"postgresql.png"} />
              <DevTag text={"Payload"} img={"payload.svg"} />
              <DevTag text={"Playwright"} img={"playwright.png"} />
              <DevTag text={"Vercel"} img={"vercel.svg"} />
            </ul>
          </PortfolioItem>

          <Divider />

          <PortfolioItem title={"Window Methods"}>
            <PortfolioItemLinks
              appUrl={"https://window-doc-nav.netlify.app"}
              gitHubUrl={"https://github.com/mikelind28/window-interface-api"}
              img={"win-doc-nav-interfaces.png"}
            />

            <PortfolioItemDescription>
              <span className="italic">Window Methods</span> is a dashboard-style
              React application that allows users to see and interact with
              properties and methods of the browser's Window, Document, and
              Navigator interfaces.
            </PortfolioItemDescription>

            <ul className="mt-4 flex flex-wrap gap-2">
              <DevTag text={"React"} img={"react.png"} />
              <DevTag text={"Tailwind"} img={"tailwind.svg"} />
              <DevTag text={"TypeScript"} img={"typescript.svg.png"} />
            </ul>
          </PortfolioItem>

          <Divider />

          <PortfolioItem title={"myBookShelf"}>
            <PortfolioItemLinks
              appUrl={"https://my-bookshelf-wg3p.onrender.com/"}
              gitHubUrl={"https://github.com/mikelind28/my-bookshelf"}
              img={"my-bookshelf.png"}
            />

            <PortfolioItemDescription>
              <span className="italic">myBookShelf</span> is a full-stack React
              application that simulates a personal bookshelf. It uses an external
              API from OpenLibrary to fetch book and author details, allowing
              users to add books to their shelf or their wish list. Books can be
              filtered by their 'read' or 'not read' status.
            </PortfolioItemDescription>

            <ul className="mt-4 flex flex-wrap gap-2">
              <DevTag text={"React"} img={"react.png"} />
              <DevTag text={"React Router"} img={"react-router.png"} />
              <DevTag text={"Tailwind"} img={"tailwind.svg"} />
              <DevTag text={"Express"} img={"express.svg"} />
              <DevTag text={"Postgres"} img={"postgresql.png"} />
              <DevTag text={"TypeScript"} img={"typescript.svg.png"} />
              <DevTag text={"Render"} img={"render.svg"} />
            </ul>
          </PortfolioItem>

          <Divider />

          <PortfolioItem title={"myNumberArray"}>
            <PortfolioItemLinks
              appUrl={"https://my-number-array.netlify.app/"}
              gitHubUrl={"https://github.com/mikelind28/my-number-array"}
              img={"my-number-array.png"}
            />

            <PortfolioItemDescription>
              <span className="italic">myNumberArray</span> is a React application
              that allows you to create your own array, and then explore some of
              the common methods available to JavaScript arrays.
            </PortfolioItemDescription>

            <ul className="mt-4 flex flex-wrap gap-2">
              <DevTag text={"React"} img={"react.png"} />
              <DevTag text={"React Router"} img={"react-router.png"} />
              <DevTag text={"Tailwind"} img={"tailwind.svg"} />
              <DevTag text={"Motion"} img={"motion.png"} />
              <DevTag text={"TypeScript"} img={"typescript.svg.png"} />
            </ul>
          </PortfolioItem>

          <Divider />

          <PortfolioItem title={"Animation Experimentation"}>
            <PortfolioItemLinks
              appUrl={"https://animation-experimentation.netlify.app"}
              gitHubUrl={
                "https://github.com/mikelind28/animation-experimentation"
              }
              img={"animation-experimentation.png"}
            />

            <PortfolioItemDescription>
              <span className="italic">Animation Experimentation</span> is a
              series of (mostly interactive!) animation tests using the Motion
              animation library.
            </PortfolioItemDescription>

            <ul className="mt-4 flex flex-wrap gap-2">
              <DevTag text={"React"} img={"react.png"} />
              <DevTag text={"React Router"} img={"react-router.png"} />
              <DevTag text={"Tailwind"} img={"tailwind.svg"} />
              <DevTag text={"Motion"} img={"motion.png"} />
              <DevTag text={"TypeScript"} img={"typescript.svg.png"} />
            </ul>
          </PortfolioItem>

          <Divider />

          <PortfolioItem title={"Guitar Chords and Scales"}>
            <PortfolioItemLinks
              appUrl={"https://guitar-chords-and-scales.netlify.app/"}
              gitHubUrl={"https://github.com/mikelind28/guitar-chords-and-scales"}
              img={"guitar-chords.png"}
            />

            <PortfolioItemDescription>
              <span className="italic">Guitar Chords and Scales</span> is virtual
              fretboard that allows you to dynamically explore all of the most
              common guitar chords and scales.
            </PortfolioItemDescription>

            <ul className="mt-4 flex flex-wrap gap-2">
              <DevTag text={"React"} img={"react.png"} />
              <DevTag text={"Tailwind"} img={"tailwind.svg"} />
              <DevTag text={"TypeScript"} img={"typescript.svg.png"} />
            </ul>
          </PortfolioItem>

          <Divider />

          <PortfolioItem title={"And more..."}>
            <PortfolioItemDescription>
              More coming soon! Ask me what I'm working on :-)
            </PortfolioItemDescription>
          </PortfolioItem>

          <Divider />
        </div>
      </div>
    </main>
  );
}
