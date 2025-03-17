import { PROJECTS_And_Achievements } from "../constraints";
import {motion} from "framer-motion";

export default function ProjectsAndAchievements() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, y:-100}}
                transition={{duration:1.5}}  
                className="my-20 text-center text-4xl">Projects
                    <span className="text-neutral-500 ml-4">And Achievements</span>
            </motion.h1>
                <div>
                    {PROJECTS_And_Achievements.map((project, index) => (
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <motion.div 
                                whileInView={{opacity:1, x:0}}
                                initial={{opacity:0, x:-100}}
                                transition={{duration:0.5}}
                                className="w-full lg:w-1/4">
                                <img 
                                    src={project.image} 
                                    width={150}
                                    height={150}
                                    alt={project.title}
                                    className="mb-6 rounded"
                                />
                            </motion.div>

                            <div className="w-full max-w-xl lg:w-3/4">
                                <motion.h6 
                                    whileInView={{opacity:1, x:0}}
                                    initial={{x:100, opacity:0}}
                                    transition={{duration:0.5}} 
                                    className="mb-2 font-semibold">
                                        {project.title}
                                </motion.h6>

                                <motion.p 
                                    whileInView={{opacity:1, x:0}}
                                    initial={{x:100, opacity:0}}
                                    transition={{duration:0.5}} 
                                    className="mb-4 text-neutral-400">
                                        {project.description}
                                </motion.p>

                                <div className="flex flex-wrap items-center gap-1">
                                    {project.technologies.map((techno, index) => 
                                        <motion.a 
                                            whileInView={{opacity:1, x:0}}
                                            initial={{x:100, opacity:0}}
                                            transition={{duration:0.5}}  
                                            key={index} 
                                            className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                                            href={techno.link}>{techno.tech}
                                        </motion.a>
                                    )} 
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>
        </div>
    );
}