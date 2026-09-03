"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { images } from "../data";

const INITIAL_COUNT = 4;

const Gallery = () => {


  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const visible = expanded ? images : images.slice(0, INITIAL_COUNT);

  useEffect(() => {
  const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
}, []);

  return (
    <section id="gallery" className="px-6 py-24 sm:px-16">
      <h2 className="mb-10 text-center font-serif text-4xl font-bold text-green-900">From our showroom</h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {visible.map((src, i) => (
          <button
            key={i}
            onClick={() => setSelected(src)}
            className="relative aspect-square overflow-hidden rounded-xl"
          >
            <Image
              src={src}
              alt={`Showroom piece ${i + 1}`}
              fill
              className="object-cover transition hover:scale-105"
            />
          </button>
        ))}
      </div>

      {images.length > INITIAL_COUNT && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="rounded-sm border border-green-900 px-6 py-3 text-sm font-bold tracking-widest text-green-900 hover:bg-green-900 hover:text-white"
          >
            {expanded ? "SHOW LESS" : "SHOW MORE"}
          </button>
        </div>
      )}

      {/* Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute right-6 top-6 text-3xl text-white hover:text-green-400"
            aria-label="Close"
          >
            ×
          </button>
          <div className="relative h-[80vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <Image src={selected} alt="Showroom piece" fill className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;