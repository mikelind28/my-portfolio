import { animate, delayInSeconds, motion, useScroll, useTransform } from "motion/react";
import H1 from "../Components/H1";
import { useEffect, useRef, useState, type ReactNode } from "react";
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
      <div className="flex items-center gap-2">
        <img
          src={`./src/images/proficiency-logos/${img}`}
          className="h-full w-5 rounded-xs shadow-xs/90 shadow-fuchsia-950"
        />
        <p className="text-xl">{text}</p>
      </div>
    </li>
  );
}

type AboutH2Type = {
    text: string;
}

function AboutH2({ text }: AboutH2Type) {
  return (
    <h2 className="mb-4 text-2xl font-normal text-rose-100 text-shadow-md/15 font-serif">
      {text}
    </h2>
  );
}

type GlowingBackgroundType = {
  children: ReactNode;
  glowClass: string;
}

function GlowingBackground({ children, glowClass }: GlowingBackgroundType ) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center', 'end start']
  });

  const brightness = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1.2, 0.3])
  const filter = useTransform(brightness, (b) =>
  `blur(24px) brightness(${b})`
)

  return (
    <div ref={ref} className="relative flex flex-col w-full items-center">
      <motion.div
        style={{ filter }}
        className={`
            will-change-transform
            transform-gpu
            absolute -z-10 
            scale-90
            inset-[-5%]
            rounded-4xl ${glowClass} blur-md bg-clip-content
        `}
      />
      {children}
    </div>
  )
}

const delimiter = "";

function UseAnimatedText({ text }: {text: string}) {
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    const controls = animate(0, text.split(delimiter).length, {
      duration: 20,
      onUpdate(latest) {
        if (text[Math.floor(latest) - 2] === '.') {
          controls.pause();
          setTimeout(() => controls.play(), 1200);
        } else {
          setCursor(Math.floor(latest));
        }
      },
    });

    return () => controls.stop();
  }, [text]);

  return text.split(delimiter).slice(0, cursor).join(delimiter);
}

export default function About() {
  return (
    <main className="mx-auto w-full max-w-120 h-fit p-2 pt-0 flex flex-col gap-4">
      <H1 text={"About Me."} />

      <div className="flex flex-col gap-8 px-4 mb-8">
        <GlowingBackground glowClass="bg-radial from-fuchsia-800/50 from-40% to-fuchsia-900/40">
          <div className="m-8 w-full px-6 text-center">
            <AboutH2 text={"My Background"} />

            <p className="mx-4 text-base/6 text-orange-100/95 text-shadow-sm whitespace-pre-line font-mono">
              <UseAnimatedText text={`I received my Bachelor of Fine Arts from the University of Wisconsin-Madison, where I double-majored in Studio Art and Art History.\n\nLater, while working at the Walker Art Center, I got professional experience working with the collections database. I wrote queries and designed user interfaces for our staff. I fell in love with this combination of coding, data, and design, which prompted me to take a full-stack web development coding bootcamp course through the University of Minnesota and edX.\n\nI grew up in Wisconsin, but now live in Minneapolis with my wife, our dog, and our cat.`} />
            </p>
          </div>
        </GlowingBackground>

        <GlowingBackground glowClass='bg-radial from-orange-700/70 from-40% to-orange-800/40'>
          <div className="m-8 w-full px-6 text-center">
            <AboutH2 text={"My Proficiencies"} />

            <ul className="flex flex-col items-center gap-2 text-base/5 font-light text-orange-100">
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
        </GlowingBackground>

        <GlowingBackground glowClass="bg-radial from-green-800/70 from-40% to-green-900/50">
          <div className="m-8 px-6 text-center">
            <AboutH2 text={"Miscellaneous"} />

            <p className="mx-4 text-base/6 text-orange-100/95 text-shadow-sm whitespace-pre-line font-mono">
              <UseAnimatedText text={`In my free time, I enjoy spending time with my wife, along with our dog and cat. We love exploring the many nature preserves surrounding the Twin Cities. I frequently oscillate between practicing piano, guitar, drums, and digital mixing. My latest gaming obsessions include Hollow Knight: Silksong and Baldur's Gate 3.`} />
            </p>
          </div>
        </GlowingBackground>
      </div>
    </main>
  );
}
