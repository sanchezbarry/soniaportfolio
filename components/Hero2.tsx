
import React from 'react';

export function Hero() {
  return (
    <section className="w-full max-w-7xl px-6 lg:px-20 py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Hi, I&apos;m Sonia</span>
            <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-tighter text-[#181611] dark:text-white">
              Cultivating Nature&apos;s <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#d98a0d]">Liquid Gold</span>
            </h1>
            <p className="text-lg lg:text-xl font-medium leading-relaxed text-[#555] dark:text-[#a09a8c] mt-4 max-w-md">
              I&apos;m a third-generation apiarist dedicated to sustainable beekeeping. My journey began in my grandfather&apos;s garden, learning the delicate rhythm of the hive.
            </p>
            <p className="text-base font-normal leading-relaxed text-[#555] dark:text-[#a09a8c] max-w-lg">
              Today, I share that passion through education, workshops, and small-batch artisanal honey produced right here in the valley.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center justify-center rounded-xl h-12 px-8 bg-primary text-[#181611] text-sm font-bold tracking-wide hover:brightness-110 transition-all shadow-lg shadow-primary/20">
              View My Story
            </button>
            <button className="flex items-center justify-center rounded-xl h-12 px-8 bg-transparent border border-[#e6e2db] dark:border-[#3a352a] text-[#181611] dark:text-[#f4f3f0] text-sm font-bold tracking-wide hover:bg-[#e6e2db] dark:hover:bg-[#3a352a] transition-all">
              Watch Video
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2 w-full relative group">
          <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] rotate-3 group-hover:rotate-1 transition-transform duration-500 blur-xl"></div>
          <div className="relative w-full aspect-[4/5] lg:aspect-square bg-center bg-cover rounded-[2rem] shadow-2xl overflow-hidden group" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlw3EgehLhNgiS40m4V2F6nJTRcp9DXG0K6c9iM188VTj4hbQNpOrTDcEPBQraTjJn02KXYHJqF922fgMb7pOshgMLB2-4f5zmXbcuS-nv8gWSDgnhl2qFg1qomuaTzovH80z4E_Ikne1Dntu1SxukAHbLcANMDrBFQlqg-xQ3KAJ1Jfc9FTh_zQU69KA-yNfnst6Qp_iAp0v_cNtR_9bn-yvBI-CHvrt1lW5gNTTIG7fTlSKidZ_ub7Fsj12OskwSv3clB2ldDfs")` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <p className="font-bold text-lg">Sonia Alicia</p>
              <p className="text-sm opacity-80">Your Neighbour Beekeeper & Educator</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
