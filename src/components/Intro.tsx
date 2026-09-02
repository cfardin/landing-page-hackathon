import Image from "next/image";

// components/Intro.tsx
const Intro = () => {
    return (
        <section className="relative overflow-hidden bg-[#EDE7DA] px-6 py-24 sm:px-16 sm:py-32">
            {/* Background image */}
            <Image
                src="https://i.ibb.co.com/VWSRDS54/775777922-1719636230167869-56427641527955046-n.jpg"
                alt=""
                fill
                sizes="100vw"
                className="pointer-events-none absolute inset-0 z-0 object-cover opacity-[0.20]"
            />
            <div className="container mx-auto">
                <div className="flex items-center gap-3 text-xs tracking-[0.15em]">
                    <span className="font-serif italic text-[#2B1C13]">01</span>
                    <span className="text-[#A98753]">THE HEAVEN APPROACH</span>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-[1.4fr_1fr] sm:gap-16">
                    <h2 className="font-serif text-5xl leading-[1.1] text-[#16221F] sm:text-6xl">
                        A room should hold
                        <br />
                        <em className="italic text-[#2B1C13]">your</em> story.
                    </h2>

                    <div className="flex flex-col gap-5 self-end pb-1 text-[#2B1C13]/80">
                        <p className="text-xl">
                            At Heaven Furniture Mart, we believe the best
                            furniture is not simply placed in a room. It belongs
                            there.
                        </p>
                        <p className="text-xl">
                            From first sketch to final installation, we create
                            considered pieces around your space, your rhythm,
                            and your taste — right here in Chattogram.
                        </p>
                        <a
                            href="#bespoke"
                            className="mt-2 w-fit border-b border-[#A98753] pb-1 text-xs tracking-[0.1em] text-[#A98753] hover:text-[#16221F] hover:border-[#16221F]"
                        >
                            DISCOVER OUR PROCESS ↗
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
