// components/Gallery.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

import { images } from "../data"


const INITIAL_COUNT = 3;

const Gallery = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? images : images.slice(0, INITIAL_COUNT);

  return (
    <section id="gallery" className="px-6 py-24 sm:px-16">
      <h2 className="mb-10 font-serif text-4xl font-bold text-center text-green-900">From our showroom</h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {visible.map((src, i) => (
          <div key={i} className="relative aspect-square overflow-hidden">
            <Image
              src={src}
              alt={`Showroom piece ${i + 1}`}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {images.length > INITIAL_COUNT && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className=" rounded-sm border border-green-900 px-6 py-3 text-sm font-bold tracking-widest text-green-900 hover:bg-green-900 hover:text-white"
          >
            {expanded ? "SHOW LESS" : "SHOW MORE"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;