import React from 'react';

const LeftHero = () => {
    return (
              <div>
        <span className="text-xs tracking-[0.15em] text-brass">DESIGNED. CRAFTED. CUSTOMIZED.</span>
        <h1 className="mt-6 font-serif text-5xl leading-[1.05] sm:text-6xl">
          Furniture,
          <br />
          <em className="italic text-brown">crafted</em> around
          <br />
          you.
        </h1>
        <p className="mt-6 max-w-xs text-brown/70">
          Bespoke furniture and interior styling for homes that feel unmistakably yours.
        </p>
{/*         
          href="https://wa.me/8801960481983"
          className="mt-8 inline-flex w-fit items-center gap-2 bg-ink px-6 py-3 text-xs tracking-[0.1em] text-ivory hover:bg-brown"
         */}
          START YOUR PROJECT
          <span aria-hidden>↗</span>
      
      </div>
    );
};

export default LeftHero;