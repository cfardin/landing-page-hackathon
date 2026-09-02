import React from "react";

const LeftHero = () => {
    return (
        <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.15em] text-brass sm:text-xs">
                DESIGNED. CRAFTED. CUSTOMIZED.
            </span>

            <h1 className="mt-4 max-w-xl font-serif font-bold text-4xl leading-[1.05] sm:mt-5 sm:text-5xl md:text-6xl lg:mt-6 xl:text-7xl">
                Furniture,
                <br />
                <em className="text-green-900 italic text-brown">crafted</em> around
                <br />
                you.
            </h1>

            <p className="mt-5 max-w-md text-xl leading-6 sm:mt-6 sm:text-base">
                Bespoke furniture and interior styling for homes that feel
                unmistakably yours.
            </p>

            <a
                href="https://wa.me/8801960481983"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 bg-ink px-5 py-3 text-[10px] tracking-[0.12em] text-ivory transition-colors duration-200 hover:bg-brown sm:mt-8 sm:px-6 sm:py-3 sm:text-xs"
            >
                START YOUR PROJECT
                <span aria-hidden="true">↗</span>
            </a>
        </div>
    );
};

export default LeftHero;