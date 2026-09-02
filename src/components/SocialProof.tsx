// components/SocialProof.tsx
import Image from "next/image";

const SocialProof = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2">
      {/* Showroom photo */}
      <div className="relative h-[45vh] sm:h-auto">
        <Image
          src="/showroom.jpg"
          alt="Heaven Furniture Mart showroom"
          fill
          className="object-cover"
        />
      </div>

      {/* Quote + trust line */}
      <div className="flex flex-col justify-center bg-[#EDE7DA] px-6 py-16 sm:px-16 sm:py-0">
        <span className="font-serif text-5xl italic text-[#A98753]">&ldquo;</span>

        <p className="mt-2 max-w-md font-serif text-2xl leading-[1.4] text-[#16221F] sm:text-3xl">
          Furniture is more than just function; it is a reflection of lifestyle, taste, and comfort.
        </p>

        <div className="mt-6 flex flex-col gap-1 text-xs tracking-[0.15em]">
          <span className="text-[#2B1C13]">ABUL KALAM BHUIYAN</span>
          <span className="text-[#A98753]">MANAGING DIRECTOR, HEAVEN FURNITURE MART</span>
        </div>

        <p className="mt-10 text-sm text-[#2B1C13]/60">
          Trusted by hundreds of happy homeowners across Chattogram.
        </p>
      </div>
    </section>
  );
};

export default SocialProof;