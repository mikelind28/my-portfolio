import { useState, type ReactNode } from "react";
import { Divider, H2 } from "./Home";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";

function PortfolioItem({ title, children }: { title: string, children: ReactNode[] }) {
    const [open, setOpen] = useState(true);
    
    return (
        <div className="relative self-start">
            <div 
                onClick={() => setOpen(!open)}
                className="flex items-start gap-2 cursor-pointer"
            >
                <motion.div
                    animate={!open ? { rotate: -90 } : {}}
                    style={{ transformOrigin: 'center' }}
                >
                    <IoIosArrowDown className="size-8 text-amber-600"/>
                </motion.div>

                <h3 className="mb-3 w-fit text-nowrap bg-radial-[at_40%_-10%] from-amber-500 to-orange-700 bg-clip-text text-2xl font-light text-transparent">
                    {title}
                </h3>
            </div>

            <AnimatePresence>
                {open &&
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: 'circInOut' }}
                        style={{ overflow: 'hidden' }}
                    >
                        {children}
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
}

function PortfolioItemImageLinks({ text, url, imgUrl }: { text: string, url: string, imgUrl: string }) {
    return (
        <div
            className="group relative w-full h-30 overflow-clip rounded-xl cursor-pointer"
        >
            <a 
                href={url}
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
            </a>

            <p className="absolute bottom-2 left-4 text-xl font-light text-amber-500 text-shadow-md/50 transition-all duration-300 group-hover:text-amber-400 group-hover:text-shadow-2xl/75">
                {text}
            </p>
        </div>
    );
}

function PortfolioItemDescription({ children }: { children: ReactNode }) {
    return (
        <p className="self-start text-orange-100 mx-2 mt-4">
            {children}
        </p>
    );
}

export default function Portfolio() {
    return (
        <main className="w-full p-5 pt-0">
            <H2 text={'My Portfolio.'} />

            <div
                className="flex h-fit w-full flex-col items-center"
            >

                <PortfolioItem title={'Window Interface API'}>
                    <PortfolioItemImageLinks 
                        text={'Window Interface API'}
                        url={'https://window-doc-nav.netlify.app'}
                        imgUrl={'./src/public/win-doc-nav-interfaces.png'}
                    />

                    <PortfolioItemDescription>
                        The <span className="italic">Window Interface API</span> is a dashboard-style React application that allows users to see and interact with properties and methods of the browser's Window, Document, and Navigator interfaces.
                    </PortfolioItemDescription>
                </PortfolioItem>

                <Divider />

                <PortfolioItem title={'myBookShelf'}>
                    <PortfolioItemImageLinks 
                        text={'myBookShelf'}
                        url={'https://my-bookshelf-wg3p.onrender.com/'}
                        imgUrl={'./src/public/my-bookshelf.png'}
                    />

                    <PortfolioItemDescription>
                        <span className="italic">myBookShelf</span> is a full-stack React application that simulates a personal bookshelf. It uses an external API from OpenLibrary to fetch book and author details, allowing users to add books to their shelf or their wish list. Books can be filtered by their 'read' or 'not read' status.
                    </PortfolioItemDescription>
                </PortfolioItem>


                <Divider />

                <PortfolioItem title={'myNumberArray'}>
                    <PortfolioItemImageLinks 
                        text={'myNumberArray'}
                        url={'https://my-number-array.netlify.app/'}
                        imgUrl={'./src/public/my-number-array.png'}
                    />

                    <PortfolioItemDescription>
                        <span className="italic">myNumberArray</span> is a React application that allows you to create your own array, and then explore some of the common methods available to JavaScript arrays.
                    </PortfolioItemDescription>
                </PortfolioItem>


                <Divider />
            </div>
        </main>
    );
}