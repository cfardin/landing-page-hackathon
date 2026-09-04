import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

export default function Hero() {
    return (
        <section id="hero" className=" container mx-auto grid grid-cols-1 items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 md:gap-12 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-10 lg:py-16 xl:px-12 mb-40">
            {/* Left */}
            <LeftHero />

            {/* Right */}
            <RightHero />
        </section>
    );
}