import { FaCss3, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {motion} from "framer-motion";

export default function Technologies() {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1 
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, y:-100}}
                transition={{duration:1.5}}
                className="my-20 text-center text-4xl">Technologies
                    <span className="text-neutral-500 ml-4">Known</span>
            </motion.h1>            

            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{x:-100, opacity:0}}
                transition={{duration:1.5}}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                    initial={{y:-10}}
                    animate={{
                        y:[10, -10],
                        transition: {
                            duration: 2.5,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "reverse",
                        }
                    }}
                    className="rounded-2xl border-4 border-neutral-800 p-3">
                        <FaHtml5  className="text-5xl text-orange-400"/>
                </motion.div>

                <motion.div 
                    initial={{y: -10}}
                    animate={{
                        y: [10, -10],
                        transition: {
                            duration: 3,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "reverse",
                        }
                    }}
                    className="rounded-2xl border-4 border-neutral-800 p-3">
                        <FaCss3  className="text-5xl text-blue-400"/>
                </motion.div>

                <motion.div 
                    initial={{y:-10}}
                    animate={{
                        y: [-10, 10], 
                        transition:{
                            duration: 5,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "reverse",
                        }
                    }}
                    className="rounded-2xl border-4 border-neutral-800 p-3">
                        <IoLogoJavascript  className="text-5xl text-yellow-400"/>
                </motion.div>

                <motion.div 
                    initial={{y: -10}}
                    animate={{
                        y: [10, -10],
                        transition: {
                            duration: 2,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "reverse",
                        }
                    }} 
                    className="rounded-2xl border-4 border-neutral-800 p-3">
                        <RiReactjsLine  className="text-5xl text-cyan-400"/>
                </motion.div>

                <motion.div 
                    initial={{y: -10}}
                    animate={{
                        y: [10, -10],
                        transition: {
                            duration: 6,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "reverse",
                        }
                    }} 
                    className="rounded-2xl border-4 border-neutral-800 p-3">
                        <RiTailwindCssFill  className="text-5xl text-cyan-400"/>
                </motion.div>
            </motion.div>
        </div>
    );
}