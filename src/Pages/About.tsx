import {
  animate,
  motion,
  stagger,
  useScroll,
  useTransform,
  type AnimationPlaybackControlsWithThen,
} from "motion/react";
import H1 from "../Components/H1";
import { useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { DarkModeOnContext } from "../App";
import { IoPause, IoRefresh } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";

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
const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

type ProficiencyListItemType = {
  text: string;
  img: string;
};

function ProficiencyListItem({ text, img }: ProficiencyListItemType) {
  return (
    <motion.li
      variants={item}
      className="light:bg-neutral-50 light:inset-shadow-orange-950 light:px-2.5 light:inset-shadow-sm/15 rounded-sm bg-orange-950/90 px-2 py-1 inset-shadow-sm/25 inset-shadow-fuchsia-950"
    >
      <div className="flex items-center gap-2">
        <img
          src={`/images/proficiency-logos/${img}`}
          className="h-full w-5 rounded-xs drop-shadow-xs/75"
        />
        <p className="light:text-transparent light:bg-clip-text light:bg-linear-to-b light:from-orange-500 light:from-10% light:via-fuchsia-700 light:via-40% light:to-fuchsia-950 text-xl font-light text-orange-100">
          {text}
        </p>
      </div>
    </motion.li>
  );
}

type AboutH2Type = {
  text: string;
};

function AboutH2({ text }: AboutH2Type) {
  return (
    <h2 className="light:font-light light:text-fuchsia-900/90 light:text-shadow-none mb-4 text-2xl font-extralight tracking-wider text-rose-100 text-shadow-md/15">
      {text}
    </h2>
  );
}

type GlowingBackgroundType = {
  children: ReactNode;
  glowClass: string;
};

function GlowingBackground({ children, glowClass }: GlowingBackgroundType) {
  const ref = useRef<HTMLDivElement>(null);
  const darkModeOn = useContext(DarkModeOnContext);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"],
  });

  const brightness = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.3, 1.2, 0.3],
  );
  const filter = useTransform(brightness, (b) =>
    darkModeOn ? `blur(24px) brightness(${b})` : `blur(0px) brightness(100%)`,
  );

  return (
    <div ref={ref} className="relative flex w-full flex-col items-center">
      <motion.div
        style={{ filter }}
        className={`light:rounded-xl absolute inset-[-5%] -z-10 scale-90 transform-gpu rounded-4xl will-change-transform ${glowClass} bg-clip-content`}
      />
      {children}
    </div>
  );
}

const delimiter = "";

type UseAnimatedTextType = {
  text: string;
  animationState: "playing" | "paused" | "complete";
  setAnimationState: React.Dispatch<
    React.SetStateAction<"playing" | "paused" | "complete">
  >;
  resetTrigger: number;
};

function UseAnimatedText({
  text,
  animationState,
  setAnimationState,
  resetTrigger,
}: UseAnimatedTextType) {
  const [cursor, setCursor] = useState(0);
  const controlsRef = useRef<AnimationPlaybackControlsWithThen>(null);
  const autoPauseTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setCursor(0);

    const controls = animate(0, text.split(delimiter).length + 3, {
      duration: 20,
      onUpdate(latest) {
        setCursor(Math.floor(latest));
      },
      onComplete() {
        setAnimationState("complete");
      },
    });

    controlsRef.current = controls;

    return () => {
      controls.stop();
      if (autoPauseTimeoutRef.current) {
        clearTimeout(autoPauseTimeoutRef.current);
      }
    };
  }, [text, resetTrigger]);

  // Pause briefly when encountering a period.
  useEffect(() => {
    if (
      controlsRef.current &&
      animationState === "playing" &&
      text[Math.floor(cursor) - 1] === "."
    ) {
      controlsRef.current.pause();

      // Clear any existing timeout
      if (autoPauseTimeoutRef.current) {
        clearTimeout(autoPauseTimeoutRef.current);
      }

      // Auto-resume after period pause (only if still playing)
      autoPauseTimeoutRef.current = setTimeout(
        () => controlsRef.current!.play(),
        1200,
      );
    }
  }, [cursor, animationState, text]);

  useEffect(() => {
    if (!controlsRef.current) return;

    // Clear any pending auto-resume when manually pausing
    if (animationState === "paused" && autoPauseTimeoutRef.current) {
      clearTimeout(autoPauseTimeoutRef.current);
      autoPauseTimeoutRef.current = null;
    }

    if (animationState === "playing") {
      controlsRef.current.play();
      console.log("playing");
    } else if (animationState === "paused") {
      controlsRef.current.pause();
      console.log("paused");
    }
  }, [animationState]);

  // useEffect(() => {
  //   if (animationState === 'playing' && cursor >= text.split(delimiter).length) {
  //     setResetTrigger(prev => prev + 1);
  //   }
  // }, [animationState, cursor, text]);

  return text.split(delimiter).slice(0, cursor).join(delimiter);
}

const list = {
  hidden: {},
  show: {
    transition: {
      delayChildren: stagger(0.15),
    },
  },
};

export default function About() {
  const [animationState, setAnimationState] = useState<
    "playing" | "paused" | "complete"
  >("playing");
  const [resetTrigger, setResetTrigger] = useState(0);

  return (
    <main className="light:gap-0 mx-auto flex h-fit w-full max-w-120 flex-col gap-4 p-2 pt-5">
      <H1 text={"About Me."} />

      <div className="light:gap-3 light:px-2 mb-8 flex flex-col gap-8 px-4">
        <GlowingBackground glowClass="light:from-white light:to-white light:shadow-sm/25 bg-radial from-fuchsia-800/50 from-40% to-fuchsia-900/40">
          <div className="m-8 w-full px-6 text-center">
            <AboutH2 text={"My Background"} />

            {animationState === "playing" && (
              <IoPause
                onClick={() => setAnimationState("paused")}
                className="absolute top-4 right-4 size-6 text-fuchsia-900/75"
              />
            )}

            {animationState === "paused" && (
              <IoPlay
                onClick={() => setAnimationState("playing")}
                className="absolute top-4 right-4 size-6 text-fuchsia-900/75"
              />
            )}

            {animationState === "complete" && (
              <IoRefresh
                onClick={() => {
                  setResetTrigger((prev) => prev + 1);
                  setAnimationState("playing");
                }}
                className="absolute top-4 right-4 size-6 text-fuchsia-900/75"
              />
            )}

            <p className="light:text-transparent light:bg-clip-text light:bg-linear-to-b light:from-orange-600 light:to-fuchsia-700 light:text-shadow-none mx-4 font-mono text-base/6 whitespace-pre-line text-orange-100/95 text-shadow-sm">
              <UseAnimatedText
                animationState={animationState}
                setAnimationState={setAnimationState}
                resetTrigger={resetTrigger}
                text={`I received my Bachelor of Fine Arts from the University of Wisconsin-Madison, where I double-majored in Studio Art and Art History.\n\nLater, while working at the Walker Art Center, I got professional experience working with the collections database. I wrote queries and designed user interfaces for our staff. I fell in love with this combination of coding, data, and design, which prompted me to take a full-stack web development coding bootcamp course through the University of Minnesota and edX.\n\nI grew up in Wisconsin, but now live in Minneapolis with my wife, our dog, and our cat.`}
              />
            </p>
          </div>
        </GlowingBackground>

        <GlowingBackground glowClass="light:from-white light:to-white light:shadow-sm/25 bg-radial from-orange-700/70 from-40% to-orange-800/40">
          <div className="m-8 w-full px-6 text-center">
            <AboutH2 text={"My Proficiencies"} />

            <motion.ul
              variants={list}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center gap-2"
            >
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
            </motion.ul>
          </div>
        </GlowingBackground>

        <GlowingBackground glowClass="light:from-white light:to-white light:shadow-sm/25 bg-radial from-green-800/70 from-40% to-green-900/50">
          <div className="m-8 px-6 text-center">
            <AboutH2 text={"Miscellaneous"} />

            <p className="light:text-transparent light:bg-clip-text light:bg-linear-to-b light:from-fuchsia-700 light:to-green-700 light:text-shadow-none mx-4 font-mono text-base/6 whitespace-pre-line text-orange-100/95 text-shadow-sm">
              <UseAnimatedText
                animationState={animationState}
                setAnimationState={setAnimationState}
                resetTrigger={resetTrigger}
                text={`In my free time, I enjoy spending time with my wife, along with our dog and cat. We love exploring the many nature preserves surrounding the Twin Cities. I frequently oscillate between practicing piano, guitar, drums, and digital mixing. My latest gaming obsessions include Hollow Knight: Silksong and Baldur's Gate 3.`}
              />
            </p>
          </div>
        </GlowingBackground>
      </div>
    </main>
  );
}
