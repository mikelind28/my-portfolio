import { useState, useEffect } from "react";
import { Link } from "react-router";
import Footer from "../Components/Footer";

export default function RootErrorElement() {
  const [darkModeOn, _setDarkModeOn] = useState(
    localStorage.getItem("theme") === "dark" ||
      localStorage.getItem("theme") === null
      ? true
      : false,
  );

  useEffect(() => {
    localStorage.setItem("theme", darkModeOn ? "dark" : "light");
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.backgroundColor = darkModeOn
        ? "var(--color-dark-violet4)"
        : "var(--color-neutral-100)";
    }

    const html = document.querySelector("html");
    if (html) {
      html.setAttribute("data-theme", darkModeOn ? "" : "light");
    }

    localStorage.setItem("theme", darkModeOn ? "dark" : "light");
  }, [darkModeOn]);

  return (
    <div className="flex h-full min-h-dvh w-full flex-col items-stretch justify-between overflow-hidden">
      <header
        className={`from-dark-violet4 light:from-white light:to-white light:drop-shadow-sm/15 z-50 flex items-center justify-center bg-linear-to-b from-90% to-transparent p-4 pb-6`}
      >
        <Link to={"/"}>
          <p className="group cursor-pointer text-2xl font-extralight tracking-wider">
            <span className="light:from-orange-400 light:via-orange-600 light:to-orange-700 light:group-hover:from-orange-400 light:group-hover:via-orange-500 light:group-hover:to-orange-600 bg-radial-[at_60%_-10%] from-amber-500/90 to-orange-500 bg-clip-text text-transparent transition-all duration-700 group-hover:bg-radial-[at_66%_0%] group-hover:from-amber-500 group-hover:from-40% group-hover:to-orange-400">
              mike lind
            </span>

            <span className="light:from-orange-500/75 light:via-fuchsia-500/75 light:to-fuchsia-600 light:group-hover:from-fuchsia-400 light:group-hover:to-fuchsia-500 bg-linear-to-b from-fuchsia-600/85 to-fuchsia-700/66 bg-clip-text text-transparent transition-all duration-700 group-hover:bg-linear-to-b group-hover:from-fuchsia-500 group-hover:to-fuchsia-600">
              {" | "}
            </span>

            <span className="light:group-hover:from-fuchsia-400 light:via-fuchsia-600 light:to-fuchsia-800 light:group-hover:to-fuchsia-500 bg-radial-[at_40%_10%] from-fuchsia-500 to-fuchsia-600 bg-clip-text text-transparent transition-all duration-700 group-hover:bg-radial-[at_33%_0%] group-hover:from-fuchsia-400 group-hover:from-20% group-hover:to-fuchsia-700">
              web dev
            </span>
          </p>
        </Link>
      </header>

      <main className="flex flex-col">
        <p className="light:text-black p-8 text-center text-xl font-light text-orange-400">
          Oops! Something went wrong.
          <br />
          Looks like this page doesn't exist.
        </p>

        <Link
          to="/"
          className="text-center text-lg font-light text-fuchsia-500 hover:underline hover:decoration-1 hover:underline-offset-4"
        >
          Take me home!
        </Link>
      </main>

      <Footer />
    </div>
  );
}
