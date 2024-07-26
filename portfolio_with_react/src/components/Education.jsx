import { EDUCATION } from "../constraints";
import { motion } from "framer-motion";

export default function Education() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, y:-100}}
                transition={{duration:1.5}} 
                className="my-20 text-center text-4xl">Education
            </motion.h1>
            <div>
                {EDUCATION.map((education, index) => (
                    <div 
                        key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div 
                            whileInView={{opacity:1, x:0}}
                            initial={{opacity:0, x:-100}}
                            transition={{duration:0.5}} 
                            className="w-full lg:w-1/4">
                                <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
                        </motion.div>

                        <motion.div 
                            whileInView={{opacity:1, x:0}}
                            initial={{x:100, opacity:0}}
                            transition={{duration:0.5}} 
                            className="w-full max-w-xl lg:3/4">
                            <h6 className="mb-2 font-semibold">{education.deg}
                                {" "} {" "}- {" "} 
                                <span className="text-sm text-purple-100">{education.board}</span>
                            </h6>

                            <motion.p 
                                whileInView={{opacity:1, x:0}}
                                initial={{x:100, opacity:0}}
                                transition={{duration:0.5}} 
                                className="mb-2 text-neutral-400">
                                    {education.sch}
                            </motion.p>

                            <motion.p 
                                whileInView={{opacity:1, x:0}}
                                initial={{x:100, opacity:0}}
                                transition={{duration:0.5}} 
                                className="mb-2 text-neutral-400">
                                    {education.p}
                            </motion.p>
                        </motion.div>
                    </div> 
                ))}
            </div>
        </div>
    );
}