import Link from "next/link";
import Image from "next/image";
import aspis_logo from "../assets/aspis_logo.png"
import risk_hunter_logo from "../assets/risk_hunter_logo.png"
import { TbBrowserShare, TbBrandGithub } from "react-icons/tb";

export default function Navbar() {
    return (
        <div className="container mx-auto mt-10 flex flex-row items-center justify-between">
            <nav className="flex flex-row items-end  gap-3">
                <a href="https://github.com/phi-grib/namastox" target="_blank" className="self-center cursor-pointer group transition-all duration-300 ease-in-out bg-transparent transform hover:scale-150 ">
                    <TbBrandGithub size={20} />
                </a>
                <Link href="#home">
                    <span className="text-xl  text-[#4E4384] font-semibold rounded-xl ">
                        Home
                    </span>
                </Link>
                <Link href="#about">
                    <span className="text-xl text-gray-400">
                        About
                    </span>
                </Link>

                <Link href="#resources">
                    <span className="text-xl text-gray-400">
                        Resources to Learn
                    </span>
                </Link>
            </nav>
            <div className="hidden md:visible container-partners md:flex flex-row items-center">
                <Image className="w-[100px] grayscale transition-all duration-300 ease-in-out hover:grayscale-0" src={aspis_logo} alt="aspis logo" />
                <Image className="w-[100px] grayscale transition-all duration-300 ease-in-out hover:grayscale-0" src={risk_hunter_logo} alt="aspis logo" />
            </div>
        </div>

    );
}
