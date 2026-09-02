"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const WHATSAPP = "https://wa.me/8801960481983";

const LINKS = [
    { label: "Collections", href: "#collections" },
    { label: "Bespoke", href: "#bespoke" },
    {label : "Gallery", href : "#gallery" },
    { label: "Our Story", href: "#about" },
    { label: "Visit Us", href: "#footer" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-green-900 bg-ivory/95 backdrop-blur-md">
            <div className="container mx-auto flex min-h-18 items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-12">
                
                {/* Logo */}
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2 sm:gap-3"
                    onClick={() => setOpen(false)}
                >
                    {/* Logo image */}
                    <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-sm border-ink sm:h-9 sm:w-9">
                        <Image
                            src="/main_logo.jpg"
                            width={100}
                            height={100}
                            alt="Heaven Furniture Mart logo"
                            className="h-full w-full object-cover"
                        />
                    </span>

                    {/* Brand name */}
                    <span className="flex flex-col leading-none">
                        <span className="font-serif text-base text-ink sm:text-lg">
                            Heaven
                        </span>

                        <span className="mt-1 text-[8px] tracking-[0.15em] text-brass sm:text-[10px]">
                            FURNITURE MART
                        </span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-6 text-xl tracking-[0.18em] text-brown/60 lg:flex xl:gap-10">
                    {LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="whitespace-nowrap transition-colors duration-200 hover:text-ink"
                        >
                            {link.label.toUpperCase()}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-green-900 hover:text-white hidden shrink-0 items-center gap-2 border border-green-900 rounded-sm px-4 py-2.5 text-[10px] tracking-[0.15em] text-brass transition-all duration-200 hover:border-ink hover:bg-ink hover:text-ivory lg:flex xl:px-5"
                >
                    <span className="font-bold">BOOK A CONSULTATION</span>
                    <span aria-hidden="true">↗</span>
                </a>

                {/* Mobile / Tablet Menu Button */}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                >
                    {open ? (
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                        >
                            <path
                                d="M4 4L18 18M18 4L4 18"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                        >
                            <path
                                d="M2 6h18M2 11h18M2 16h18"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile / Tablet Menu */}
            {open && (
                <div className="border-t border-b border-green-900/20 bg-ivory px-4 py-5 sm:px-6 lg:hidden">
                    <nav className="flex flex-col">
                        {LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="border-b border-brown/10 py-4 text-[11px] tracking-[0.18em] text-brown/70 transition-colors hover:text-ink"
                            >
                                {link.label.toUpperCase()}
                            </a>
                        ))}

                        {/* Mobile CTA */}
                        <a
                            href={WHATSAPP}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpen(false)}
                            className="mt-5 flex items-center justify-center gap-2 border border-green-900 px-4 py-3 text-[10px] font-medium tracking-[0.15em] text-brass transition-all duration-200 hover:border-ink hover:bg-ink hover:text-ivory"
                        >
                            <span>BOOK A CONSULTATION</span>
                            <span aria-hidden="true">↗</span>
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;