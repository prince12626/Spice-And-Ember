"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
      { name: "Menu", href: "/menu" },
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
      const [menuOpen, setMenuOpen] = useState(false);

      return (
            <header className="h-16 border-b border-black/10 px-12 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-50">
                  <Link href="/">
                        <h1 className="text-3xl serif font-bold tracking-wide hover:text-[#E85D04] transition-colors duration-300 cursor-pointer">
                              Spice & Ember
                        </h1>
                  </Link>

                  <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                              <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium tracking-wide text-gray-700 hover:text-[#E85D04] transition-all duration-300 hover:-translate-y-0.5 relative group"
                              >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E85D04] group-hover:w-full transition-all duration-300" />
                              </Link>
                        ))}
                  </nav>

                  <button
                        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                  >
                        <span
                              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                        />
                        <span
                              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                        />
                        <span
                              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                        />
                  </button>

                  {/* Mobile Menu */}
                  {menuOpen && (
                        <div className="absolute top-14 left-0 right-0 bg-white border-b border-black/10 flex flex-col items-center gap-6 py-8 md:hidden shadow-md">
                              {navLinks.map((link) => (
                                    <Link
                                          key={link.name}
                                          href={link.href}
                                          onClick={() => setMenuOpen(false)}
                                          className="text-base font-medium text-gray-700 hover:text-[#E85D04] transition-colors duration-300"
                                    >
                                          {link.name}
                                    </Link>
                              ))}
                              <Link href="/reservations">
                                    <button className="bg-[#E85D04] text-white px-6 py-2 rounded-full text-sm font-medium">
                                          Reserve a Table
                                    </button>
                              </Link>
                        </div>
                  )}
            </header>
      );
};

export default Navbar;
