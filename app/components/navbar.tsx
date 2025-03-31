"use client"
import Link from "next/link";
import Image from "next/image";
import aspis_logo from "../assets/aspis_logo.png";
import risk_hunter_logo from "../assets/risk_hunter_logo.png";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="fixed z-50 navbar w-full">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <nav className="flex flex-row items-end p-4 gap-3">
          <Link href="#about">
            <span className="text-xl text-gray-400 transition-colors duration-200 ease-in-out hover:text-[#4E4384]">About</span>
          </Link>
          <Link href="#resources">
            <span className="text-xl text-gray-400  transition-colors duration-200 ease-in-out hover:text-[#4E4384]">Documentation</span>
          </Link>
        </nav>
        <div className="hidden md:flex flex-row items-center">
          <Image
            className="w-[100px]"
            src={aspis_logo}
            alt="aspis logo"
          />
          <Image
            className="w-[100px]"
            src={risk_hunter_logo}
            alt="risk hunter logo"
          />
        </div>
      </div>
    </div>
  );
}
