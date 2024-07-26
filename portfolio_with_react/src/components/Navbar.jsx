import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="mb-20 py-6 flex items-center justify-between">
            <div className="flex flex-shrink-0 items-center">
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent">K</span>
                <h2 className="mt-5 text-1xl">.K</h2>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/krishnakumar18/">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Krishna-Kumar-18">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/krishnakumar95531/">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
}