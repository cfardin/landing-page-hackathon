import Image from "next/image";

// components/Quote.tsx
const Quote = () => {
    return (
        <section className="relative overflow-hidden bg-[#EDE7DA] px-6 py-32 text-center">
            {/* Background image */}

            <span className="font-serif text-6xl italic text-[#A98753]">
                &ldquo;
            </span>
            <p className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-[1.3] text-[#16221F] sm:text-5xl">
                Furniture is more than just function; it is a reflection of
                lifestyle, taste, and comfort.
            </p>
            <br />
            <br />
            <span className="font-serif text-6xl italic text-[#A98753]">
                &ldquo;
            </span>
            <div className="mt-10 flex flex-col gap-1 text-xs tracking-[0.15em]">
                <span className="text-[#2B1C13]">ABUL KALAM BHUIYAN</span>
                <span className="text-[#A98753]">
                    MANAGING DIRECTOR, HEAVEN FURNITURE MART
                </span>
            </div>
        </section>
    );
};

export default Quote;
