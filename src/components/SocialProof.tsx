// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import { proofs } from "@/data";

// const PHOTOS = [
//     {
//         src: proofs[3],
//         alt: "Heaven Furniture Mart showroom",
//         className: "col-span-1 row-span-1",
//     },
//     {
//         src: proofs[1],
//         alt: "Heaven Furniture Mart furniture collection",
//         className: "col-span-1 row-span-1",
//     },
//     {
//         src: proofs[2],
//         alt: "Heaven Furniture Mart interior",
//         className: "col-span-2 row-span-2",
//     },
// ];

// const SocialProof = () => {
//     return (
//         <section
//             id="social-proof"
//             className="overflow-hidden bg-green-950 px-4 py-16 text-[#F6F1E7] sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-28 xl:px-20"
//         >
//             <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
//                 {/* =========================
//                     LEFT — PHOTO GRID
//                 ========================== */}
//                 <div className="grid grid-cols-2 gap-3 sm:gap-4">
//                     {PHOTOS.map((photo) => (
//                         <div
//                             key={photo.src}
//                             className={`group relative overflow-hidden ${photo.className}`}
//                         >
//                             <div className="relative aspect-square w-full overflow-hidden sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[220px]">
//                                 <Image
//                                     src={photo.src}
//                                     alt={photo.alt}
//                                     fill
//                                     sizes="(max-width: 1024px) 50vw, 30vw"
//                                     className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                                 />

//                                 {/* subtle overlay */}
//                                 <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* =========================
//                     RIGHT — SOCIAL PROOF
//                 ========================== */}
//                 <div className="flex flex-col justify-center">
//                     {/* Label */}
//                     <div className="flex items-center gap-3 text-sm tracking-[0.18em] sm:text-xs">
//                         <span className="text-[#A98753] ">
//                             REAL SPACES. REAL CRAFT.
//                         </span>
//                     </div>

//                     {/* Heading */}
//                     <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
//                         Made to belong
//                         <br />
//                         <em className="italic text-[#A98753]">
//                             in your space.
//                         </em>
//                     </h2>

//                     {/* Description */}
//                     <p className="mt-6 max-w-md text-xl font-semibold leading-6 text-[#F6F1E7]/65 sm:text-[15px] sm:leading-7">
//                         From individual statement pieces to complete interiors,
//                         every project is crafted with attention to proportion,
//                         material, and the way you live.
//                     </p>

//                     {/* Trust stats */}
//                     <div className="mt-9 grid grid-cols-2 border-y border-[#F6F1E7]/10">
//                         <div className="border-r border-[#F6F1E7]/10 py-5 pr-4">
//                             <span className="block font-serif text-2xl text-[#A98753] sm:text-3xl">
//                                 2020
//                             </span>

//                             <span className="mt-1 block text-[9px] tracking-[0.14em] text-[#F6F1E7]/45 sm:text-[10px]">
//                                 ESTABLISHED
//                             </span>
//                         </div>

//                         <div className="py-5 pl-5">
//                             <span className="block font-serif text-2xl text-[#A98753] sm:text-3xl">
//                                 AGRABAD
//                             </span>

//                             <span className="mt-1 block text-[9px] tracking-[0.14em] text-[#F6F1E7]/45 sm:text-[10px]">
//                                 CHATTOGRAM
//                             </span>
//                         </div>
//                     </div>

//                     {/* Recognition */}
//                     <div className="mt-6 border-b border-[#F6F1E7]/10 pb-6">
//                         <span className="block text-xl tracking-[0.16em] text-[#A98753]">
//                             RECOGNITION
//                         </span>

//                         <p className="mt-2 max-w-md text-sm text-[#F6F1E7]/70">
//                             Member of the Chittagong Chamber of Commerce &
//                             Industry.
//                         </p>
//                     </div>

//                     {/* CTA */}
//                     <div className="mt-7">
//                         <Link
//                             href="#collections"
//                             className="inline-flex rounded-sm items-center gap-3 border border-[#A98753] px-5 py-3 text-[10px] tracking-[0.14em] text-[#F6F1E7] transition-all duration-300 hover:bg-[#A98753] hover:text-[#16221F] sm:px-6 sm:py-3.5 sm:text-xs"
//                         >
//                             EXPLORE OUR WORK
//                             <span aria-hidden="true">↗</span>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SocialProof;

// components/SocialProof.tsx

"use client";

import Image from "next/image";

const PROJECTS = [
    {
        image: "/project-1.jpg",
        category: "RESIDENTIAL",
        title: "Living Room Collection",
    },
    {
        image: "/project-2.jpg",
        category: "COMMERCIAL",
        title: "Director's Office",
    },
    {
        image: "/project-3.jpg",
        category: "BESPOKE",
        title: "Custom Furniture",
    },
];

const SocialProof = () => {
    return (
        <section className="overflow-hidden bg-[#F5F2EC] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-28 xl:px-20">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">

                {/* LEFT — PROJECTS */}
                <div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {/* Large image */}
                        <div className="group relative col-span-2 aspect-[16/9] overflow-hidden sm:col-span-1 sm:row-span-2 sm:aspect-auto sm:min-h-[420px]">
                            <Image
                                src={PROJECTS[0].image}
                                alt={PROJECTS[0].title}
                                fill
                                sizes="(max-width: 640px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />

                            <div className="absolute bottom-4 left-4 text-white">
                                <span className="text-[9px] tracking-[0.15em]">
                                    {PROJECTS[0].category}
                                </span>

                                <p className="mt-1 font-serif text-lg">
                                    {PROJECTS[0].title}
                                </p>
                            </div>
                        </div>

                        {/* Small image 1 */}
                        <div className="group relative aspect-square overflow-hidden">
                            <Image
                                src={PROJECTS[1].image}
                                alt={PROJECTS[1].title}
                                fill
                                sizes="(max-width: 640px) 50vw, 25vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />

                            <div className="absolute bottom-3 left-3 text-white">
                                <span className="text-[8px] tracking-[0.15em]">
                                    {PROJECTS[1].category}
                                </span>
                            </div>
                        </div>

                        {/* Small image 2 */}
                        <div className="group relative aspect-square overflow-hidden">
                            <Image
                                src={PROJECTS[2].image}
                                alt={PROJECTS[2].title}
                                fill
                                sizes="(max-width: 640px) 50vw, 25vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />

                            <div className="absolute bottom-3 left-3 text-white">
                                <span className="text-[8px] tracking-[0.15em]">
                                    {PROJECTS[2].category}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT — PROOF */}
                <div className="flex flex-col justify-center">
                    {/* Label */}
                    <div className="flex items-center gap-3 text-[10px] tracking-[0.18em] sm:text-xs">
                        <span className="font-serif italic text-[#2B1C13]">
                            05
                        </span>

                        <span className="text-[#A98753]">
                            REAL SPACES. REAL CRAFT.
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-[#16221F] sm:text-5xl md:text-6xl">
                        Furniture made
                        <br />
                        <em className="italic text-[#2B1C13]">
                            to belong.
                        </em>
                    </h2>

                    <p className="mt-6 max-w-md text-sm leading-6 text-[#2B1C13]/65 sm:text-[15px] sm:leading-7">
                        From residential interiors to professional workspaces,
                        every piece is designed around the people and spaces
                        it serves.
                    </p>

                    {/* Proof items */}
                    <div className="mt-9 border-y border-[#2B1C13]/10">
                        <div className="flex items-center justify-between py-5">
                            <div>
                                <p className="font-serif text-2xl text-[#16221F]">
                                    2020
                                </p>
                                <p className="mt-1 text-[9px] tracking-[0.15em] text-[#2B1C13]/50">
                                    ESTABLISHED
                                </p>
                            </div>

                            <span className="text-[#A98753]">01</span>
                        </div>

                        <div className="border-t border-[#2B1C13]/10" />

                        <div className="flex items-center justify-between py-5">
                            <div>
                                <p className="font-serif text-2xl text-[#16221F]">
                                    AGRABAD
                                </p>
                                <p className="mt-1 text-[9px] tracking-[0.15em] text-[#2B1C13]/50">
                                    CHATTOGRAM SHOWROOM
                                </p>
                            </div>

                            <span className="text-[#A98753]">02</span>
                        </div>

                        <div className="border-t border-[#2B1C13]/10" />

                        <div className="flex items-center justify-between py-5">
                            <div>
                                <p className="max-w-xs font-serif text-xl text-[#16221F]">
                                    Chamber of Commerce
                                </p>
                                <p className="mt-1 text-[9px] tracking-[0.15em] text-[#2B1C13]/50">
                                    BUSINESS MEMBERSHIP
                                </p>
                            </div>

                            <span className="text-[#A98753]">03</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <a
                        href="#collections"
                        className="mt-8 inline-flex w-fit items-center gap-3 border border-[#16221F] px-5 py-3 text-[10px] tracking-[0.14em] text-[#16221F] transition-all duration-300 hover:bg-[#16221F] hover:text-[#F6F1E7] sm:px-6 sm:py-3.5 sm:text-xs"
                    >
                        EXPLORE OUR COLLECTIONS
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;