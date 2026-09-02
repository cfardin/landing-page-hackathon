"use client";

import Image from "next/image";

const WHATSAPP = "https://wa.me/8801960481983";

const FEATURES = [
    "Free design consultation",
    "Premium materials, skilled craftsmanship",
    "Delivery & installation included",
    "Easy payment options",
];

const Bespoke = () => {
    return (
        <section
            id="bespoke"
            className="grid w-full grid-cols-1 lg:grid-cols-2 lg:min-h-[calc(100svh-72px)]"
        >
            {/* Image */}
            <div className="relative h-[420px] w-full sm:h-[500px] md:h-[560px] lg:h-full lg:min-h-[650px]">
                <Image
                    src="https://i.ibb.co.com/vvgXhhjt/768432878-1709553134509512-2759590473845537362-n.jpg"
                    alt="storage"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                />

                {/* Image label */}
                <span className="absolute bottom-5 right-5 text-xs text-white/90 sm:bottom-7 sm:right-7 sm:text-sm">
                    Director Desk
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center bg-green-950 px-6 py-14 text-[#F6F1E7] sm:px-10 sm:py-16 md:px-14 lg:min-h-[650px] lg:px-12 xl:px-16 2xl:px-20">
                <div className="w-full max-w-xl">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-3 text-[10px] tracking-[0.15em] sm:text-xs">
                        <span className="font-serif italic text-[#A98753]">
                            03
                        </span>

                        <span className="text-[#A98753]">
                            THE BESPOKE DIFFERENCE
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-5xl md:text-6xl xl:text-7xl">
                        Nothing off
                        <br />
                        <em className="italic text-[#A98753]">
                            the shelf.
                        </em>
                    </h2>

                    {/* Description */}
                    <p className="mt-6 max-w-md text-sm leading-6 text-[#F6F1E7]/70 sm:text-[15px] sm:leading-7">
                        Your home has its own proportions, light, and
                        character. We listen first, then design and build
                        pieces that make the most of them.
                    </p>

                    {/* Features */}
                    <ul className="mt-8 flex w-full max-w-xl flex-col">
                        {FEATURES.map((feature) => (
                            <li
                                key={feature}
                                className="flex items-center gap-3 border-t border-[#F6F1E7]/15 py-3.5 text-xs sm:py-4 sm:text-sm"
                            >
                                <span className="shrink-0 text-[#A98753]">
                                    ✓
                                </span>

                                <span>{feature}</span>
                            </li>
                        ))}

                        <li className="border-t border-[#F6F1E7]/15" />
                    </ul>

                    {/* CTA */}
                    <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex w-fit items-center gap-3 bg-[#F6F1E7] px-5 py-3 text-[10px] tracking-[0.12em] text-[#16221F] transition-colors duration-200 hover:bg-[#A98753] sm:px-6 sm:py-3.5 sm:text-xs"
                    >
                        TALK TO A DESIGNER
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Bespoke;