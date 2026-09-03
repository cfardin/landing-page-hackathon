import Image from "next/image";
import React from "react";

const RightHero = () => {
    return (
        <div className="relative h-105 w-full overflow-hidden rounded-sm sm:h-[500px] md:h-[560px] lg:h-[620px] xl:h-[680px]">
            {/* Image */}
            <Image
                src="https://i.ibb.co.com/DPBVVFxw/772521594-1714467227351436-1245435330287886749-n.jpg"
                alt="Office chair, Heaven Furniture Mart"
                fill
                priority
                className="rounded-sm object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
            />

            {/* Index label  */}
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap text-[9px] text-ivory/80 sm:bottom-6 sm:text-xs">
                <span className="text-brass">01</span>
                <span className="tracking-wide">
                    MADE FOR THE WAY YOU LIVE.
                </span>
            </div>

            {/* Vertical location tag */}
            <div className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 [writing-mode:vertical-rl] text-[9px] tracking-[0.2em] text-ivory/70 md:block">
                CHATTOGRAM · EST. 2020
            </div>
        </div>
    );
};

export default RightHero;


