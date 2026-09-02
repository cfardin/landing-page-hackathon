"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const ITEMS = [
    {
        name: "Living Room",
        img: "https://i.ibb.co.com/DHcp0ZZH/734008893-1670206525110840-4556845434530645596-n.jpg",
    },
    {
        name: "Bedroom",
        img: "https://i.ibb.co.com/h1KJZpdW/736449064-1670206528444173-4375750925473556720-n.jpg",
    },
    {
        name: "Dining",
        img: "https://i.ibb.co.com/KpSPZXhj/736420675-1670206595110833-5351120681345196574-n.jpg",
    },
    {
        name: "Showcase",
        img: "https://i.ibb.co.com/FLsp7ZzG/736989787-1672336724897820-6637246498013831067-n.jpg",
    },
    {
        name: "Storage & Essentials",
        img: "https://i.ibb.co.com/prfpRgt9/737046509-1672336761564483-389144073028099862-n.jpg",
    },
    {
        name: "Bespoke",
        img: "https://i.ibb.co.com/hRd19r3R/736675191-1672336771564482-1918114807941403944-n.jpg",
        signature: true,
    },
];

const Collections = () => {
    return (
        <section
            id="collections"
            className="overflow-hidden bg-[#F5F2EC] py-16 sm:py-20 md:py-24"
        >
            {/* Heading */}
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
                <span className="text-[10px] tracking-[0.15em] text-[#A98753] sm:text-xs">
                    OUR COLLECTIONS
                </span>

                <h2 className="mt-3 font-serif text-3xl leading-tight text-[#16221F] sm:text-4xl md:text-5xl">
                    Find Your Way Home.
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#2B1C13]/60">
                    Explore furniture designed for every room in your home.
                </p>
            </div>

            {/* Marquee */}
            <div className="mt-10 sm:mt-12 md:mt-14">
                <Marquee
                    direction="left"
                    speed={40}
                    delay={0}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    gradient={false}
                    autoFill={true}
                >
                    {ITEMS.map((item) => (
                        <a
                            key={item.name}
                            href="#"
                            className="group relative mx-2 block h-[380px] w-[270px] shrink-0 overflow-hidden rounded-md sm:mx-3 sm:h-[440px] sm:w-[310px] lg:h-[500px] lg:w-[360px]"
                        >
                            {/* Image */}
                            <Image
                                src={item.img}
                                alt={item.name}
                                fill
                                sizes="360px"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/40" />

                            {/* Card Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center text-white">
                                {item.signature && (
                                    <span className="text-[9px] tracking-[0.2em] text-white/80 sm:text-[10px]">
                                        SIGNATURE
                                    </span>
                                )}

                                <h3 className="font-serif text-2xl sm:text-3xl">
                                    {item.name}
                                </h3>

                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-sm text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#16221F]">
                                    →
                                </span>
                            </div>
                        </a>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Collections;