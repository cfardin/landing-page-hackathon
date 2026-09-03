"use client";
import Image from "next/image";
import { motion } from "motion/react";

const MILESTONES = [
    { year: "2020", text: "Founded by Abul Kalam Bhuiyan" },
    { year: "2021", text: "Opened the Agrabad showroom" },
    {
        year: "2024–25",
        text: "Exhibited at the Int'l Furniture Fair, Chattogram",
    },
    { year: "2025", text: "Joined the Chamber of Commerce" },
    { year: "2026", text: "Received nationwide BFIOA recognition" },
];

const Milestones = () => {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#EDE7DA] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-12"
        >
            {/* Background image */}
            <Image
                src="https://i.ibb.co.com/prfpRgt9/737046509-1672336761564483-389144073028099862-n.jpg"
                alt=""
                fill
                sizes="100vw"
                className="pointer-events-none absolute inset-0 z-0 object-cover opacity-[0.20]"
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto">
                {/* Section label */}
                <div className="flex items-center gap-3 text-[10px] tracking-[0.15em] text-[#A98753] sm:text-xs">
                    <span className="h-px w-6 bg-[#A98753]" />
                    <span>OUR JOURNEY</span>
                </div>

                {/* Heading */}
                <h2 className="mt-5 max-w-xl font-bold font-serif text-3xl leading-[1.15] text-[#16221F] sm:mt-6 sm:text-4xl md:text-5xl">
                    A few milestones along the way.
                </h2>

                {/* Milestones */}
                <div className="mt-10 grid grid-cols-1 gap-y-8 sm:mt-14 sm:grid-cols-2 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
                    {MILESTONES.map((milestone) => (
                        <motion.div
                            key={milestone.year}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onHoverStart={() => console.log("hover started!")}
                            className="relative pt-6"
                        >
                            {/* Dot */}
                            <span className="absolute left-0 top-0 h-2 w-2 rounded-full bg-[#A98753]" />

                            {/* Line */}
                            <span className="absolute left-2 top-0.75 h-px w-[calc(100%-8px)] bg-[#2B1C13]/15" />

                            <p className="font-mono text-xl text-[#2B1C13]/60">
                                {milestone.year}
                            </p>

                            <p className="mt-2 max-w-xs font-medium text-xl leading-6 text-[#2B1C13]/80">
                                {milestone.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Milestones;
