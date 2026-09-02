import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

// components/Hero.tsx
export default function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-10 px-6 py-16 sm:grid-cols-[0.9fr_1.1fr] sm:gap-6 sm:px-16 sm:py-24 container mx-auto">
      {/* Left */}
      <LeftHero></LeftHero>
      {/* Right — image */}
      <RightHero></RightHero>
    </section>
  );
}