"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo & Home Link */}
                <Link href="/" className="text-2xl font-bold">
                    Honey Badger Wrestling Club
                </Link>
                <Image src="/hank.svg" alt="Hank the honey badger" width="25" height="25" />

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-gray-200">Home</Link>
                    <Link href="/About" className="hover:text-gray-200">About</Link>
                    <Link href="/Programs" className="hover:text-gray-200">Programs</Link>
                    <Link href="/Tournaments" className="hover:text-gray-200">Tournaments</Link>
                </div>

                {/* Mobile Menu Button (Hamburger) */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✖" : "☰"} {/* Toggle between Hamburger and Close Icon */}
                </button>
            </div>

            {/* Mobile Menu - Shows when isOpen is true */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 p-4 space-y-2 text-center">
                    <ul>
                        <li><Link href="/" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link href="/About" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link></li>
                        <li><Link href="/Programs" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Programs</Link></li>
                        <li><Link href="/Tournaments" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Tournaments</Link></li>
                    </ul>




                </div>
            )}
        </nav>
    );
};

export default Navbar;
