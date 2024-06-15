"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "./ui/button"
import { navLinks } from "@/utils/helper"

export const Header = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="w-full">
            <nav className="flex h-[90px] items-center justify-between container mx-auto px-4 py-2 md:px-8">
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/images/logo-elite-med.png"
                            alt="Logo EliteMed"
                            width={160}
                            height={160}
                        />
                    </Link>
                </div>

                <div className="hidden md:flex space-x-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-lg font-semibold ${pathname === link.href ? 'text-blue-500' : 'text-gray-700'}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <Button className="hidden md:flex items-center bg-green-600 hover:bg-green-700 text-white md:ml-4">
                    <Link href="#">
                        Request a Demo
                    </Link>
                </Button>

                <div className="md:hidden">
                    <button
                        className="text-gray-700 hover:text-gray-900 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden bg-gray-100 shadow-lg">
                    <div className="flex flex-col space-y-4 px-4 py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-lg font-semibold ${pathname === link.href ? 'text-blue-500' : 'text-gray-700'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                            <Link href="#">
                                Request a Demo
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}
