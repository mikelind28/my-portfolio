import { useState, type ReactNode } from "react";
import Divider from "../Components/Divider";
import H1 from "../Components/H1";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";
import { LuExternalLink } from "react-icons/lu";

type PortfolioItemType = {
    title: string;
    children: ReactNode[];
}
function PortfolioItem({ title, children }: PortfolioItemType) {
  const [open, setOpen] = useState(true);

  return (
    <div className="relative self-start">
      <div
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer items-start gap-2"
      >
        <motion.div
          animate={!open ? { rotate: -90 } : {}}
          style={{ transformOrigin: "center" }}
        >
          <IoIosArrowDown className="size-8 text-amber-600" />
        </motion.div>

        <h2 className="mb-2 w-fit bg-radial-[at_40%_-10%] from-amber-500 to-orange-700 bg-clip-text text-2xl font-light text-nowrap text-transparent">
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
}

function PortfolioItemLinks({ appUrl, gitHubUrl, img }: PortfolioItemLinksType) {
  const [divOneHover, setDivOneHover] = useState(false);
  const [divTwoHover, setDivTwoHover] = useState(false);

  return (
    <div
      style={
        {
          "--border-color": `radial-gradient(circle at 25% 25%,
                    var(--color-orange-500) 0%,
                    var(--color-fuchsia-700) 100%)`,
          "--img": `url(/src/images/screenshots/${img})`,
        } as React.CSSProperties
      }
      className="relative mb-4 flex h-30 w-full items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-transparent p-4 text-center shadow-[inset_0_5px_20px_5px_rgba(0,0,0,0.75)] transition-all duration-500 [background:border-box_var(--border-color)] before:absolute before:inset-0 before:z-0 before:scale-105 before:rounded-[inherit] before:bg-(image:--img) before:bg-cover before:bg-position-[center_top_10%] before:opacity-80 before:blur-[3px] before:brightness-50 before:transition-all before:duration-500 before:content-[''] hover:brightness-120 hover:before:blur-[1px]"
    >
      <motion.div
        onHoverStart={() => setDivOneHover(true)}
        onHoverEnd={() => setDivOneHover(false)}
        className={`group z-10 flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black/50 text-xl transition-all duration-500 hover:origin-[25%] hover:scale-110 hover:drop-shadow-lg hover:drop-shadow-black/75 ${divTwoHover ? "scale-90" : ""}`}
      >
        <a
          href={appUrl}
          className="flex items-center gap-2 text-xl font-light text-amber-500 drop-shadow-md/25"
        >
          <p>App</p>
          <LuExternalLink />
        </a>
      </motion.div>

      <motion.div
        onHoverStart={() => setDivTwoHover(true)}
        onHoverEnd={() => setDivTwoHover(false)}
        className={`group z-10 flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black/50 text-xl transition-all duration-500 hover:origin-[75%] hover:scale-110 hover:drop-shadow-lg hover:drop-shadow-black/75 ${divOneHover ? "scale-90" : ""}`}
      >
        <a
          href={gitHubUrl}
          className="flex items-center gap-2 text-xl font-light text-amber-500 drop-shadow-md/25"
        >
          <p>GitHub</p>
          <LuExternalLink />
        </a>
      </motion.div>
    </div>
  );
}

type PortfolioItemDescriptionType = {
    children: ReactNode;
}

function PortfolioItemDescription({ children }: PortfolioItemDescriptionType) {
  return <p className="mx-2 mt-4 self-start text-orange-100">{children}</p>;
}

export default function Portfolio() {
  return (
    <main className="w-full p-5 pt-0">
      <H1 text={"My Portfolio."} />

      <div className="flex h-fit w-full flex-col items-center">
        <PortfolioItem title={"Window Interface API"}>
          <PortfolioItemLinks
            appUrl={"https://window-doc-nav.netlify.app"}
            gitHubUrl={""}
            img={"win-doc-nav-interfaces.png"}
          />

          <PortfolioItemDescription>
            The <span className="italic">Window Interface API</span> is a
            dashboard-style React application that allows users to see and
            interact with properties and methods of the browser's Window,
            Document, and Navigator interfaces.
          </PortfolioItemDescription>
        </PortfolioItem>

        <Divider />

        <PortfolioItem title={"myBookShelf"}>
          <PortfolioItemLinks
            appUrl={"https://my-bookshelf-wg3p.onrender.com/"}
            gitHubUrl={""}
            img={"my-bookshelf.png"}
          />

          <PortfolioItemDescription>
            <span className="italic">myBookShelf</span> is a full-stack React
            application that simulates a personal bookshelf. It uses an external
            API from OpenLibrary to fetch book and author details, allowing
            users to add books to their shelf or their wish list. Books can be
            filtered by their 'read' or 'not read' status.
          </PortfolioItemDescription>
        </PortfolioItem>

        <Divider />

        <PortfolioItem title={"myNumberArray"}>
          <PortfolioItemLinks
            appUrl={"https://my-number-array.netlify.app/"}
            gitHubUrl={""}
            img={"my-number-array.png"}
          />

          <PortfolioItemDescription>
            <span className="italic">myNumberArray</span> is a React application
            that allows you to create your own array, and then explore some of
            the common methods available to JavaScript arrays.
          </PortfolioItemDescription>
        </PortfolioItem>

        <Divider />

        <PortfolioItem title={"Nonprofit Template"}>
          <PortfolioItemLinks
            appUrl={"https://nonprofit-template.netlify.app/"}
            gitHubUrl={""}
            img={"nonprofit-template.png"}
          />

          <PortfolioItemDescription>
            <span className="italic">Nonprofit Template</span> is a single-page
            React application that simulates a basic nonprofit website.
          </PortfolioItemDescription>
        </PortfolioItem>

        <Divider />
      </div>
    </main>
  );
}
