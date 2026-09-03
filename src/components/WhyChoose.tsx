"use client"
import { motion } from "motion/react"

const REASONS = [
    {
        number: "01",
        title: "Bespoke by Design",
        text: "Furniture tailored around your space, proportions, and lifestyle.",
    },
    {
        number: "02",
        title: "Premium Materials",
        text: "Thoughtfully selected materials, finishes, and hardware for every piece.",
    },
    {
        number: "03",
        title: "Crafted to Last",
        text: "Skilled craftsmanship and careful attention to detail from start to finish.",
    },
    {
        number: "04",
        title: "Complete Service",
        text: "From consultation to delivery and installation, we handle the details.",
    },
];

const WhyChoose = () => {
    return (
        <section className="bg-[#F5F2EC] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-28 xl:px-20">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="max-w-2xl">
                    <div className="flex items-center gap-3 text-[10px] tracking-[0.18em] sm:text-xs">
                        <span className="text-[#A98753]">
                            WHY CHOOSE HEAVEN
                        </span>
                    </div>

                    <h2 className="mt-5 font-serif text-3xl leading-[1.08] text-[#16221F] sm:text-4xl md:text-5xl">
                        Thoughtfully made.
                        <br />
                        <em className="italic text-[#2B1C13]">
                            Made for you.
                        </em>
                    </h2>
                </div>

                {/* Reasons */}
                <div className="mt-10 grid grid-cols-1 border-t border-[#2B1C13]/10 sm:grid-cols-2 lg:grid-cols-4">
                    {REASONS.map((reason) => (
                        <motion.div

                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onHoverStart={() => console.log("hover started!")}
                            key={reason.number}
                            className="group border-b border-[#2B1C13]/10 py-7 sm:px-6 sm:first:pl-0 sm:nth-[2]:border-l sm:nth-[3]:border-l sm:nth-[4]:border-l lg:border-b-0 lg:border-l lg:first:border-l-0"
                        >
                            {/* Number */}
                            <span className="font-serif text-sm italic text-[#A98753]">
                                {reason.number}
                            </span>

                            {/* Title */}
                            <h3 className="mt-4 font-serif text-xl text-[#16221F] sm:text-2xl">
                                {reason.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-3 max-w-xs text-sm leading-6 text-[#2B1C13]/60">
                                {reason.text}
                            </p>

                            {/* Arrow */}
                            <span className="mt-5 block text-sm text-[#A98753] transition-transform duration-300 group-hover:translate-x-1">
                                ↗
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;