"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const ITEMS = [
    {
        name: "Living Room",
        img: "https://i.ibb.co.com/1fjDMnKY/784251271-1726752032789622-4156846528064326637-n.jpg",
    },
    {
        name: "Bedroom",
        img: "https://i.ibb.co.com/VWSRDS54/775777922-1719636230167869-56427641527955046-n.jpg",
    },
    {
        name: "Dining",
        img: "https://i.ibb.co.com/qYPQSvzj/781162830-1725721782892647-3495497836840174995-n.jpg",
    },
    {
        name: "Showcase",
        img: "https://i.ibb.co.com/gLfTC7w3/768205284-1711404377657721-1644144981235924073-n.jpg",
    },
    {
        name: "Storage",
        img: "https://i.ibb.co.com/vvgXhhjt/768432878-1709553134509512-2759590473845537362-n.jpg",
    },
    {
        name: "Office",
        img: "https://i.ibb.co.com/prfpRgt9/737046509-1672336761564483-389144073028099862-n.jpg",

    },
];

const Collections = () => {
    return (
        <section
            id="collections"
            className="overflow-hidden bg-[#F5F2EC] py-16 sm:py-20 md:py-24 mb-25"
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
                            className="group relative mx-2 block aspect-square w-[280px] shrink-0 overflow-hidden rounded-md sm:mx-3 sm:w-[320px] md:w-[360px] lg:w-[400px]"
                        >
                            {/* Image */}
                            <Image
                                src={item.img}
                                alt={item.name}
                                fill
                                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/40" />

                            {/* Card Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center text-white">
                                {item && (
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



