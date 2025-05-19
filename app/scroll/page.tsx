"use client";
import React, { useEffect, useState } from "react";

const Scroll = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Handle scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowNavbar(false); // Scrolling down
            } else {
                setShowNavbar(true); // Scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <>
            <nav
                className={`fixed top-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <ul className="flex space-x-6 p-4">
                    <li>
                        <a href="#home" className="hover:text-blue-600">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-blue-600">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-blue-600">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-blue-600">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="scroll-smooth">
                <section id="home" className="min-h-screen pt-20 scroll-mt-20">
                    <h1 className="text-4xl font-bold">Home Section</h1>
                </section>
                <section id="about" className="min-h-screen pt-20 scroll-mt-20">
                    <h1 className="text-4xl font-bold">About Section</h1>
                </section>
                <section id="skills" className="min-h-screen pt-20 scroll-mt-20">
                    <h1 className="text-4xl font-bold">Skills Section</h1>
                </section>
                <section id="contact" className="min-h-screen pt-20 scroll-mt-20">
                    <h1 className="text-4xl font-bold">Contact Section</h1>
                </section>
            </div>
        </>
    );
};

export default Scroll;
