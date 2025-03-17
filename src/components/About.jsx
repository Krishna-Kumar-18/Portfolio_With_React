import { ABOUT_TEXT } from "../constraints";
import profile from "../assests/profile.png";
import resume from "../assests/resume.pdf";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, y:-100}}
                transition={{duration:1.5}}
                className="my-20 text-center text-4xl">
                    About 
                    <span className="text-neutral-500 ml-4">Me</span>
            </motion.h1>
            
            <div className="flex flex-wrap">
                <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:0.5}}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img 
                            width={250}
                            height={150}
                            src={profile} 
                            alt="Krishna Kumar" 
                        />
                    </div>
                </motion.div>

                <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{x:100, opacity:0}}
                    transition={{duration:0.5}}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <motion.div 
                            initial={{y: -10}}
                            animate={{
                                y: [10, -10],
                                transition: {
                                    duration: 1,
                                    ease: "linear",
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }
                            }}
                            className="mr-2 bg-blue-200 px-3 py-2 rounded-2xl border-4 border-neutral-800 text-sm font-semibold text-black">
                                Hire Me
                        </motion.div>
                        <button className="bg-blue-200 px-3 py-2 rounded-2xl border-4 border-neutral-800 text-sm font-semibold text-black"><a href={resume} download="resume">Resume</a></button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}