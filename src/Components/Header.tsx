export default function Header() {
    return (
        <header className="group p-4 flex justify-around">
            <h1 className="text-2xl font-extralight tracking-wider *:transition-colors *:duration-700 *:ease-in-out">
                <span className="bg-clip-text text-transparent bg-linear-to-tl from-orange-500 to-orange-400 group-hover:bg-linear-to-tr group-hover:from-orange-500 group-hover:to-orange-300">
                    mike lind
                </span>

                <span className="bg-clip-text text-transparent bg-linear-to-b from-fuchsia-600/85 to-fuchsia-600/66 group-hover:bg-linear-to-b group-hover:from-fuchsia-500 group-hover:to-fuchsia-600">
                    {" | "}
                </span>

                <span className="bg-clip-text text-transparent bg-linear-to-tr from-fuchsia-600 to-fuchsia-500 group-hover:bg-linear-to-tl group-hover:from-fuchsia-600 group-hover:to-fuchsia-400">
                    web dev
                </span>
            </h1>
        </header>
    );
}