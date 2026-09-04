"use client";

import {LogoFacebook} from '@gravity-ui/icons';
import Image from "next/image";
import { FaInstagram, FaPhoneAlt, FaWhatsappSquare } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { GrYoutube } from 'react-icons/gr';
import { IoLogoFacebook, IoLogoWhatsapp, IoMdMail } from 'react-icons/io';

const WHATSAPP = "https://wa.me/8801960481983";

const ContactFooter = () => {
    return (
        <>
            {/* =========================
                CTA / CONTACT SECTION
            ========================== */}
            <section
                id="footer"
                className=" my-30 grid w-full grid-cols-1 container mx-auto gap-12 px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-12 xl:px-20"
            >
                {/* Left */}
                <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-[10px] tracking-[0.15em] sm:text-xs">
                        <span className="text-[#A98753]">COME SAY HELLO</span>
                    </div>

                    <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-[#16221F] sm:mt-8 sm:text-5xl md:text-6xl">
                        Let&apos;s make
                        <br />
                        <em className="italic text-[#2B1C13]">space</em> for
                        you.
                    </h2>
                </div>

                {/* Right */}
                <div className="flex flex-col justify-center">
                    {/* <p className="max-w-lg text-sm leading-6 text-[#2B1C13]/80 sm:text-[15px] sm:leading-7">
                        Visit our showroom or tell us a little about the
                        space you&apos;re imagining. We&apos;ll take it from
                        there.
                    </p> */}

                    {/* Google Maps */}
                    <div className="mt-6 h-56 w-full overflow-hidden sm:h-64 lg:h-60 xl:h-64">
                        <iframe
                            src="https://www.google.com/maps?q=Agrabad+Access+Road,+Chattogram,+Bangladesh&output=embed"
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                filter: "grayscale(0) contrast(1.1)",
                            }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Heaven Furniture Mart location"
                        />
                    </div>

                    {/* Contact Information */}
                    <div className="flex gap-20 mt-8 border-t border-[#2B1C13]/10 pt-5 text-xs leading-6 text-[#2B1C13]/70 sm:mt-10 sm:pt-6 sm:text-sm">
                        <div className="text-xl font-semibold">
                            <p className='flex items-center gap-2'><FaLocationDot /> Agrabad Access Road</p>
                            <p>Chattogram, Bangladesh</p>
                            <p>
                                <a
                                    href="tel:+8801960481983"
                                    className=" flex items-center gap-2 transition-colors hover:text-[#A98753]"
                                >
                                    <FaPhoneAlt /> +880 1960-481983
                                </a>
                            </p>
                            <p>
                                <a
                                    href="mailto:heavenfurnituremart@gmail.com"
                                    className="flex items-center gap-2 break-all transition-colors hover:text-[#A98753]"
                                >
                                    <IoMdMail /> heavenfurnituremart@gmail.com
                                </a>
                            </p>
                        </div>
                        <div>
                            {/* WhatsApp CTA */}
                            <a
                                href={WHATSAPP}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" mt-7 rounded-sm inline-flex w-fit items-center gap-3 bg-green-900 px-5 py-3 text-[10px] tracking-[0.12em] text-[#F6F1E7] hover:text-white transition-colors duration-200 hover:bg-[#A98753] hover:text-[#A98753] sm:px-6 sm:py-3.5 sm:text-xs"
                            >
                                <IoLogoWhatsapp  size={20} /> WHATSAPP US
                                <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================
                BOTTOM FOOTER
            ========================== */}
            <footer className="bg-green-950 px-4 py-8 text-[#F6F1E7] sm:px-6 md:px-10 lg:px-12 xl:px-20">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-7 lg:flex-row lg:justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center font-serif text-lg">
                            <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-sm border-ink sm:h-9 sm:w-9">
                                                    <Image
                                                        src="/main_logo.jpg"
                                                        width={100}
                                                        height={100}
                                                        alt="Heaven Furniture Mart logo"
                                                        className="h-full w-full object-cover"
                                                    />
                                                </span>
                        </span>

                        <span className="flex flex-col leading-none">
                            <span className="font-serif text-base">Heaven</span>

                            <span className="mt-1 text-[8px] tracking-[0.15em] text-[#A98753] sm:text-[9px]">
                                FURNITURE MART
                            </span>
                        </span>
                    </div>

                    {/* Tagline */}
                    <span className="text-center text-[9px] tracking-[0.1em] text-[#F6F1E7]/60 sm:text-xs">
                        DESIGNED FOR LIVING, MADE IN CHATTOGRAM.
                    </span>

                    {/* Social Links */}
                    <div className="flex flex-wrap justify-center gap-5 text-[9px] tracking-[0.1em] sm:gap-6 sm:text-xs">
                        <a
                            href="https://www.facebook.com/HeavenFurnitureMart"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 transition-colors hover:text-[#A98753]"
                        >
                            <IoLogoFacebook size={18} /> FACEBOOK
                        </a>

                        <a
                            href="https://www.instagram.com/heaven_furniture_ltd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 transition-colors hover:text-[#A98753]"
                        >
                            <FaInstagram size={18} /> INSTAGRAM
                        </a>

                        <a
                            href="https://www.youtube.com/@HeavenFurnitureMart"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 transition-colors hover:text-[#A98753]"
                        >
                            <GrYoutube size={18} /> YOUTUBE
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default ContactFooter;
