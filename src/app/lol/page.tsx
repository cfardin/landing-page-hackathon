"use client";

import { useState } from "react";

const img = (i: number) => IMAGES[i];

const IMAGES = [
  "https://i.ibb.co.com/ZR3XM0Xb/733975432-1670206521777507-4916894844802872540-n.jpg",
  "https://i.ibb.co.com/DHcp0ZZH/734008893-1670206525110840-4556845434530645596-n.jpg",
  "https://i.ibb.co.com/h1KJZpdW/736449064-1670206528444173-4375750925473556720-n.jpg",
  "https://i.ibb.co.com/KpSPZXhj/736420675-1670206595110833-5351120681345196574-n.jpg",
  "https://i.ibb.co.com/FLsp7ZzG/736989787-1672336724897820-6637246498013831067-n.jpg",
  "https://i.ibb.co.com/prfpRgt9/737046509-1672336761564483-389144073028099862-n.jpg",
  "https://i.ibb.co.com/hRd19r3R/736675191-1672336771564482-1918114807941403944-n.jpg",
  "https://i.ibb.co.com/B5mzTBys/737191325-1672336838231142-2215111771442126262-n.jpg",
  "https://i.ibb.co.com/GvtNSmzz/736601104-1672336861564473-7570338895148197172-n.jpg",
  "https://i.ibb.co.com/N6PXmHvv/747604772-1684144490383710-8069181014316575055-n.jpg",
  "https://i.ibb.co.com/Dfmj6kyL/751349978-1688125409985618-7348280562578590906-n.jpg",
  "https://i.ibb.co.com/tTnTsrjr/758501475-1695949819203177-8539249593337200471-n.jpg",
  "https://i.ibb.co.com/hbxmNPj/761596606-1700154842116008-2266593655759211928-n.jpg",
  "https://i.ibb.co.com/vvgXhhjt/768432878-1709553134509512-2759590473845537362-n.jpg",
  "https://i.ibb.co.com/bgJnMBp5/768371614-1710462144418611-5698540196193769070-n.jpg",
  "https://i.ibb.co.com/gLfTC7w3/768205284-1711404377657721-1644144981235924073-n.jpg",
  "https://i.ibb.co.com/DPBVVFxw/772521594-1714467227351436-1245435330287886749-n.jpg",
  "https://i.ibb.co.com/Q38hGy1m/773074508-1716547623810063-5708541284272618229-n.jpg",
  "https://i.ibb.co.com/VWSRDS54/775777922-1719636230167869-56427641527955046-n.jpg",
  "https://i.ibb.co.com/qYPQSvzj/781162830-1725721782892647-3495497836840174995-n.jpg",
  "https://i.ibb.co.com/1fjDMnKY/784251271-1726752032789622-4156846528064326637-n.jpg",
  "https://i.ibb.co.com/gMM2NLqy/789032972-1731039082360917-6016848336243028580-n.jpg",
  "https://i.ibb.co.com/jPkdCjTj/790590893-1732958505502308-4138406260112642404-n.jpg",
  "https://i.ibb.co.com/XkyZ1thF/761504076-1702070998591059-1878849163198993217-n.jpg",
];

const WHATSAPP = "https://wa.me/8801960481983";

const TRUST = [
  "Free design consultation",
  "Fully bespoke, built to your space",
  "Premium wood & materials",
  "Delivery & installation included",
  "Easy payment options",
  "Chattogram showroom",
];

const COLLECTIONS = [
  { name: "Living Room", desc: "Sofas, coffee tables, consoles", img: 2 },
  { name: "Bedroom", desc: "Beds, wardrobes, dressing tables", img: 3 },
  { name: "Dining", desc: "Dining tables, chairs, cabinets", img: 4 },
  { name: "Bespoke", desc: "Built to your own measurements", img: 5 },
];

const MILESTONES = [
  { year: "2020", text: "Founded by Abul Kalam Bhuiyan" },
  { year: "2021", text: "Opened the Agrabad showroom" },
  { year: "2024", text: "Exhibited at the International Furniture Fair" },
  { year: "2025", text: "Joined the Chamber of Commerce" },
  { year: "2026", text: "Nationwide BFIOA recognition" },
];

const GALLERY = IMAGES.slice(6, 23);

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      {/* Nav */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-brown/10 bg-ivory/90 px-6 py-4 backdrop-blur sm:px-10">
        <span className="font-serif text-lg italic">Heaven Furniture Mart</span>
        <nav className="hidden gap-8 text-sm sm:flex">
          <a href="#collections" className="hover:text-brass">Collections</a>
          <a href="#bespoke" className="hover:text-brass">Bespoke</a>
          <a href="#about" className="hover:text-brass">About</a>
          <a href={WHATSAPP} className="border border-brown/20 px-4 py-2 hover:border-brass hover:text-brass">
            Book a Consultation
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="sm:hidden" aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M2 6h18M2 11h18M2 16h18" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </header>
      {open && (
        <div className="flex flex-col gap-4 border-b border-brown/10 bg-ivory px-6 py-6 text-sm sm:hidden">
          <a href="#collections" onClick={() => setOpen(false)}>Collections</a>
          <a href="#bespoke" onClick={() => setOpen(false)}>Bespoke</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href={WHATSAPP} className="text-brass">Book a Consultation</a>
        </div>
      )}

      {/* Hero */}
      <section className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-20 sm:px-16 sm:py-0">
          <span className="text-sm tracking-wide text-brass">Est. 2020, Chattogram</span>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] sm:text-5xl">
            Every piece begins <em className="font-serif italic">with your space.</em>
          </h1>
          <p className="mt-6 max-w-sm text-brown/70">
            Bespoke furniture and interior styling, designed and built by hand — not pulled off a shelf.
          </p>
          <a href={WHATSAPP} className="mt-8 w-fit bg-ink px-8 py-3 text-ivory transition hover:bg-brown">
            Book a Consultation
          </a>
        </div>
        <div className="h-[50vh] sm:h-screen">
          <img src={img(0)} alt="Heaven Furniture Mart craftsmanship" className="h-full w-full object-cover" />
        </div>
      </section>

      {/* Trust strip */}
      <section className="overflow-x-auto border-y border-brown/10 bg-ink">
        <div className="flex w-max gap-10 px-6 py-4 text-sm text-ivory/80 sm:justify-center sm:w-full sm:px-0">
          {TRUST.map((t, i) => (
            <span key={t} className="flex items-center gap-10 whitespace-nowrap">
              {t}
              {i < TRUST.length - 1 && <span className="text-brass">/</span>}
            </span>
          ))}
        </div>
      </section>

      {/* Brand intro */}
      <section id="about" className="grid grid-cols-1 gap-10 px-6 py-24 sm:grid-cols-[1.2fr_0.8fr] sm:gap-16 sm:px-16">
        <p className="max-w-md font-serif text-2xl leading-relaxed sm:text-3xl">
          Heaven Furniture Mart designs and builds furniture around how you actually live. Since 2020, our
          in-house craftsmen have shaped sofas, beds, and dining sets for homes across Chattogram, using
          premium wood finished entirely by hand.
        </p>
        <img src={img(1)} alt="Furniture craftsmanship detail" className="h-64 w-full object-cover sm:h-full" />
      </section>

      {/* Collections */}
      <section id="collections" className="px-6 pb-24 sm:px-16">
        <h2 className="mb-10 font-serif text-3xl">Collections</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          {COLLECTIONS.map((c, i) => (
            <div key={c.name} className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}>
              <div className={`relative overflow-hidden ${i === 0 ? "h-72 sm:h-full" : "h-56"}`}>
                <img src={img(c.img)} alt={c.name} className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4">
                  <p className="font-serif text-lg text-ivory">{c.name}</p>
                  <p className="text-xs text-ivory/70">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bespoke highlight */}
      <section id="bespoke" className="relative">
        <img src={img(4 + 1)} alt="Bespoke furniture in progress" className="h-[70vh] w-full object-cover" />
        <div className="absolute bottom-10 left-6 max-w-sm bg-ivory px-8 py-8 sm:left-16">
          <h2 className="font-serif text-3xl">Built once. Built for you.</h2>
          <p className="mt-4 text-brown/70">
            Most furniture is made first and sold second. Ours starts with a conversation about your space
            and your materials — then our craftsmen build to those exact measurements.
          </p>
          <a href={WHATSAPP} className="mt-6 inline-block border border-brown/20 px-6 py-2 text-sm hover:border-brass hover:text-brass">
            Book a Consultation
          </a>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-24 sm:px-16">
        <h2 className="mb-10 font-serif text-3xl">From our showroom</h2>
        <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-4">
          {GALLERY.map((src, i) => (
            <img key={i} src={src} alt="Showroom and furniture piece" className="h-72 w-56 flex-none object-cover" />
          ))}
        </div>
        <style jsx global>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { scrollbar-width: none; }
        `}</style>
      </section>

      {/* Social proof */}
      <section className="bg-ink px-6 py-24 text-center text-ivory sm:px-16">
        <span className="font-serif text-6xl italic text-brass">&ldquo;</span>
        <p className="mx-auto max-w-xl font-serif text-2xl leading-relaxed sm:text-3xl">
          Furniture is more than just function; it is a reflection of lifestyle, taste, and comfort.
        </p>
        <p className="mt-6 text-sm text-brass">Abul Kalam Bhuiyan — Managing Director</p>
      </section>

      {/* Milestones */}
      <section className="px-6 py-24 sm:px-16">
        <h2 className="mb-10 font-serif text-3xl">Milestones</h2>
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-0 sm:divide-x sm:divide-brown/10">
          {MILESTONES.map((m) => (
            <div key={m.year} className="sm:flex-1 sm:px-6 first:sm:pl-0">
              <p className="font-serif text-xl text-brass">{m.year}</p>
              <p className="mt-1 text-sm text-brown/70">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ink px-6 py-24 text-center text-ivory sm:px-16">
        <h2 className="font-serif text-3xl sm:text-4xl">Ready to build something for your home?</h2>
        <a href={WHATSAPP} className="mt-8 inline-block bg-brass px-10 py-4 text-ink hover:bg-tan">
          Book a Consultation
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-brown/10 px-6 py-10 text-center text-sm text-brown/60 sm:px-16">
        <p>Agrabad Access Road, Chattogram, Bangladesh</p>
        <p className="mt-1">+880 1960-481983 · heavenfurnituremart@gmail.com</p>
        <div className="mt-3 flex justify-center gap-4">
          <a href="https://www.facebook.com/HeavenFurnitureMart">Facebook</a>
          <a href="https://www.instagram.com/heaven_furniture_ltd">Instagram</a>
          <a href="https://www.youtube.com/@HeavenFurnitureMart">YouTube</a>
        </div>
      </footer>
    </main>
  );
}