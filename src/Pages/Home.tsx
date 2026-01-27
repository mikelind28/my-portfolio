import { motion } from "motion/react";

function WelcomeHeader() {
    return (
        <motion.h1
            animate={{ 
                backgroundPosition: [
                    '10% 70%', 
                    '90% 80%',
                    '40% 50%',
                    '50% 70%'
                ] 
            }}
            transition={{ 
                duration: 3, 
                ease: 'easeInOut', 
                times: [0, 0.5, 2] 
            }}
            className="
                text-3xl font-light
                bg-clip-text text-transparent
                bg-[radial-gradient(circle,#e879f9,#8b5cf6,#7c3aed_90%)]
            "
            style={{ backgroundSize: "200% 200%" }}
        >
            Welcome.
        </motion.h1>
    );
}

export default function Home() {
    return (
        <div
            className="flex flex-col w-full items-center"
        >
            <WelcomeHeader />
            
            <div className="relative flex place-items-center justify-center mx-2 my-4 p-4 h-fit w-full rounded-xl overflow-visible">
                <motion.div
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut'}}
                    className="-z-10 absolute h-[90%] w-[90%] bg-fuchsia-900/50 rounded-xl blur-sm bg-clip-content"
                ></motion.div>

                <div className="flex flex-col items-center gap-2 mx-2 mt-2 mb-4 p-2 font-light">
                    <p 
                        className="text-fuchsia-100 text-xl"
                    >
                        Hello, world.
                    </p>

                    <p 
                        className="text-purple-200/95 text-base/5 text-center"
                    >
                        Welcome to my site. I'm excited to share my work with you!
                    </p>
                </div>
            </div>
        </div>
    );
}