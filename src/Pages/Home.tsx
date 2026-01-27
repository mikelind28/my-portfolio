import { motion } from "motion/react";

export default function Home() {
    return (
        <div
            className="flex flex-col w-full items-center"
        >
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
        </div>
    );
}