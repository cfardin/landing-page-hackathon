"use client";

import Image from "next/image";
import Link from "next/link";

import { proofs } from "@/data";

const PHOTOS = [
    {
        src: proofs[3],
        alt: "Heaven Furniture Mart showroom",
        className: "col-span-1 row-span-1",
    },
    {
        src: proofs[1],
        alt: "Heaven Furniture Mart furniture collection",
        className: "col-span-1 row-span-1",
    },
    {
        src: proofs[2],
        alt: "Heaven Furniture Mart interior",
        className: "col-span-2 row-span-2",
    },
];

const SocialProof = () => {
    return (
        <section
            id="social-proof"
            className="overflow-hidden bg-green-950 px-4 py-16 text-[#F6F1E7] sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-28 xl:px-20"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
                {/* =========================
                    LEFT — PHOTO GRID
                ========================== */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {PHOTOS.map((photo) => (
                        <div
                            key={photo.src}
                            className={`group relative overflow-hidden ${photo.className}`}
                        >
                            <div className="relative aspect-square w-full overflow-hidden sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[220px]">
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    sizes="(max-width: 1024px) 50vw, 30vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                                {/* subtle overlay */}
                                <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* =========================
                    RIGHT — SOCIAL PROOF
                ========================== */}
                <div className="flex flex-col justify-center">
                    {/* Label */}
                    <div className="flex items-center gap-3 text-sm tracking-[0.18em] sm:text-xs">
                        <span className="text-[#A98753] ">
                            REAL SPACES. REAL CRAFT.
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
                        Made to belong
                        <br />
                        <em className="italic text-[#A98753]">
                            in your space.
                        </em>
                    </h2>

                    {/* Description */}
                    <p className="mt-6 max-w-md text-xl font-semibold leading-6 text-[#F6F1E7]/65 sm:text-[15px] sm:leading-7">
                        From individual statement pieces to complete interiors,
                        every project is crafted with attention to proportion,
                        material, and the way you live.
                    </p>

                    {/* Trust stats */}
                    <div className="mt-9 grid grid-cols-2 border-y border-[#F6F1E7]/10">
                        <div className="border-r border-[#F6F1E7]/10 py-5 pr-4">
                            <span className="block font-serif text-2xl text-[#A98753] sm:text-3xl">
                                2020
                            </span>

                            <span className="mt-1 block text-[9px] tracking-[0.14em] text-[#F6F1E7]/45 sm:text-[10px]">
                                ESTABLISHED
                            </span>
                        </div>

                        <div className="py-5 pl-5">
                            <span className="block font-serif text-2xl text-[#A98753] sm:text-3xl">
                                AGRABAD
                            </span>

                            <span className="mt-1 block text-[9px] tracking-[0.14em] text-[#F6F1E7]/45 sm:text-[10px]">
                                CHATTOGRAM
                            </span>
                        </div>
                    </div>

                    {/* Recognition */}
                    <div className="mt-6 border-b border-[#F6F1E7]/10 pb-6">
                        <span className="block text-xl tracking-[0.16em] text-[#A98753]">
                            RECOGNITION
                        </span>

                        <p className="mt-2 max-w-md text-sm text-[#F6F1E7]/70">
                            Member of the Chittagong Chamber of Commerce &
                            Industry.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-7">
                        <Link
                            href="#collections"
                            className="inline-flex rounded-sm items-center gap-3 border border-[#A98753] px-5 py-3 text-[10px] tracking-[0.14em] text-[#F6F1E7] transition-all duration-300 hover:bg-[#A98753] hover:text-[#16221F] sm:px-6 sm:py-3.5 sm:text-xs"
                        >
                            EXPLORE OUR WORK
                            <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;