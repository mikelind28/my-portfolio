import { motion } from "motion/react";
import H1 from "../Components/H1";
// CHANGING BG COLOR WITH SCROLL:
// const containerRef = useRef<HTMLDivElement | null>(null);
// const { scrollYProgress } = useScroll({ container: containerRef });

// const { innerLightness, outerLightness, innerChroma, outerChroma, innerHue, outerHue } = useTransform(scrollYProgress, [0, 1], {
//     innerLightness: [0.452, 0.47],
//     outerLightness: [0.401, 0.408],
//     innerChroma: [0.211, 0.157],
//     outerChroma: [0.17, 0.123],
//     innerHue: [324.591, 37.304],
//     outerHue: [325.612, 38.172]
// });

// const background = useTransform([innerLightness, outerLightness, innerChroma, outerChroma, innerHue, outerHue], ([il, ol, ic, oc, ih, oh]) =>
//     `radial-gradient(
//         circle,
//         oklch(${il} ${ic} ${ih} / 0.8) 40%,
//         oklch(${ol} ${oc} ${oh} / 0.5) 100%
//     )`
// );

type ProficiencyListItemType = {
    text: string; 
    img: string;
}

function ProficiencyListItem({ text, img }: ProficiencyListItemType) {
  return (
    <li className="rounded-sm bg-orange-950/90 px-2 py-1 inset-shadow-sm/25 inset-shadow-fuchsia-950">
      <div className="flex items-center gap-1">
        <img
          src={`./src/images/proficiency-logos/${img}`}
          className="h-full w-5 rounded-xs shadow-xs/90 shadow-fuchsia-950"
        />
        <p>{text}</p>
      </div>
    </li>
  );
}

type AboutH2Type = {
    text: string;
}

function AboutH2({ text }: AboutH2Type) {
  return (
    <h2 className="mb-2 text-xl font-normal text-rose-100 text-shadow-md/15">
      {text}
    </h2>
  );
}

export default function About() {
  return (
    <main className="w-full p-2 pt-0">
      <H1 text={"About Me."} />

      <div className="relative mt-4 mb-4 flex flex-col items-center gap-2 font-light">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute -z-10 h-full w-[90%] rounded-xl bg-radial from-fuchsia-800/80 from-40% to-fuchsia-900/50 bg-clip-content blur-md"
        />

        <div className="m-8 px-4 text-center">
          <AboutH2 text={"My Background"} />

          <p className="text-base/5 text-orange-100/95 text-shadow-sm">
            I received my Bachelor of Fine Arts from the University of
            Wisconsin-Madison, where I double-majored in Studio Art and Art
            History.
            <br />
            <br />
            Later, while working at the Walker Art Center, I got professional
            experience working with the collections database. I wrote queries
            and designed user interfaces for our staff. I fell in love with this
            combination of coding, data, and design, which prompted me to take a
            full-stack web development coding bootcamp course through the
            University of Minnesota and edX.
            <br />
            <br />I grew up in Wisconsin, but now live in Minneapolis with my
            wife, our dog, and our cat.
          </p>
        </div>
      </div>

      <div className="relative mt-8 mb-4 flex w-full flex-col items-center gap-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="absolute -z-10 h-full w-[90%] rounded-xl bg-radial from-orange-800/80 from-40% to-orange-900/50 bg-clip-content blur-md"
        />

        <div className="m-8 w-full px-4 text-center">
          <AboutH2 text={"My Proficiencies"} />

          <ul className="flex flex-col items-center gap-1 text-base/5 font-light text-orange-100">
            <ProficiencyListItem text={"JavaScript"} img={"javascript.jpg"} />
            <ProficiencyListItem
              text={"TypeScript"}
              img={"typescript.svg.png"}
            />
            <ProficiencyListItem text={"HTML"} img={"html.png"} />
            <ProficiencyListItem text={"CSS"} img={"css.svg.png"} />
            <ProficiencyListItem text={"Vite"} img={"vite.svg"} />
            <ProficiencyListItem text={"React"} img={"react.png"} />
            <ProficiencyListItem
              text={"React Router"}
              img={"react-router.png"}
            />
            <ProficiencyListItem text={"Tailwind CSS"} img={"tailwind.svg"} />
            <ProficiencyListItem text={"PostgreSQL"} img={"postgresql.png"} />
            <ProficiencyListItem text={"Node.js"} img={"node-js.svg"} />
            <ProficiencyListItem text={"Express"} img={"express.svg"} />
          </ul>
        </div>
      </div>

      <div className="relative mt-8 mb-4 flex flex-col items-center gap-2 font-light">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          className="absolute -z-10 h-full w-[90%] rounded-xl bg-radial from-green-800/80 from-40% to-green-900/50 bg-clip-content blur-md"
        />

        <div className="m-8 px-4 text-center">
          <AboutH2 text={"Miscellaneous"} />

          <p className="text-center text-base/5 text-orange-100/95 text-shadow-sm">
            In my free time, I enjoy spending time with my wife, along with our
            dog and cat. We love exploring the many nature preserves surrounding
            the Twin Cities. I frequently oscillate between practicing piano,
            guitar, drums, and digital mixing. My latest gaming obsessions
            include <span className="italic">Hollow Knight: Silksong</span> and{" "}
            <span className="italic">Baldur's Gate 3</span>.
          </p>
        </div>
      </div>
    </main>
  );
}
