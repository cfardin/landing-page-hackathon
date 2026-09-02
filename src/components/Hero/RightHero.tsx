import Image from "next/image";
import React from "react";

const RightHero = () => {
    return (
        <div className="relative h-[80vh] min-h-105 w-full overflow-hidden">
            {/* Watermark */}
            <span className="absolute left-6 top-6 font-serif text-xl text-ivory">
                HEAVEN{" "}
                <span className="block text-xs tracking-[0.2em]">
                    FURNITURE MART
                </span>
            </span>

            {/* Category tags */}
            {/* <div className="absolute left-6 top-1/3 flex flex-col gap-1 text-2xl font-serif tracking-wide text-ivory sm:text-3xl">
          <span className="bg-ink/90 px-4 py-2 w-fit">OFFICE</span>
          <span className="bg-ink/60 px-4 py-2 w-fit">CHAIR</span>
        </div> */}

            {/* Copy + CTA */}
            <div className="absolute bottom-24 left-6 max-w-[200px] text-sm text-ivory">
                Let&apos;s make your office look refined.
            </div>

            <Image
                src="https://i.ibb.co.com/DPBVVFxw/772521594-1714467227351436-1245435330287886749-n.jpg"
                alt="Office chair, Heaven Furniture Mart"
                fill
                className="object-cover rounded-sm"
            />

            {/* Index label */}
            <div className="absolute bottom-6 left-1/2 flex items-center gap-2 text-xs text-ivory/80">
                <span className="text-brass">01</span>
                <span className="tracking-wide">
                    MADE FOR THE WAY YOU LIVE.
                </span>
            </div>

            {/* Vertical location tag */}
            <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] text-xs tracking-[0.2em] text-ivory/70 sm:block">
                CHATTOGRAM · EST. 2020
            </div>
        </div>
    );
};

export default RightHero;
