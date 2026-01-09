"use client";
import Link from "next/link";
import Image from "next/image";
import aspis_logo from "../assets/aspis_logo.png";
import risk_hunter_logo from "../assets/risk_hunter_logo.png";
import euLogo from "../assets/eu-flag.avif";

import "./navbar.css";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <motion.div
      transition={{ delay: 2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      className=" z-50 navbar fixed w-full"
    >
      <div className="flex mx-3 flex-row items-center justify-between">
        <nav className="flex flex-row items-center p-4 gap-3">
          {/* <Image src={namastox_logo} alt="logo" className="w-[100px] " /> */}
          <Link href="#about">
            <span className="text-xl text-gray-400 transition-colors duration-200 ease-in-out hover:text-[#4E4384]">
              About
            </span>
          </Link>
          <Link href="#resources">
            <span className="text-xl text-gray-400  transition-colors duration-200 ease-in-out hover:text-[#4E4384]">
              Documentation
            </span>
          </Link>
        </nav>
        <div className="hidden md:flex flex-row items-center">
          <a href="https://aspis-cluster.eu/" target="_blank">
            <Image
              className="w-[100px] partner-image"
              src={aspis_logo}
              alt="aspis logo"
            />
          </a>
          <a href="https://www.risk-hunt3r.eu/" target="_blank">
            <Image
              className="w-[100px] partner-image"
              src={risk_hunter_logo}
              alt="risk hunter logo"
            />
          </a>
          <Image
            className="w-[65px] rounded-sm partner-image"
            src={euLogo}
            alt="europe union logo"
          />
        </div>
      </div>
    </motion.div>
  );
}
