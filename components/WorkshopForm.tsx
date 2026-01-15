
// import React, { useState } from 'react';

export const WorkshopForm: React.FC = () => {
  // const [guests, setGuests] = useState(1);

  return (
    <section className="w-full max-w-7xl px-6 lg:px-20 py-32">
      <div className="bg-white dark:bg-[#2a2418] rounded-[2rem] shadow-xl overflow-hidden border border-[#e6e2db] dark:border-[#3a352a]">
        <div className="flex flex-col lg:flex-row">
          {/* Content Side */}
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-[#FDFBF8] dark:bg-[#221c10] relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[300px] text-primary">hive</span>
            </div>
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Work With Me</span>
            <h2 className="text-3xl lg:text-5xl font-black leading-tight mb-6">Apiary, Bee Education, and more.</h2>
            <p className="text-[#555] dark:text-[#a09a8c] mb-8 leading-relaxed">
              Drop me message here, or any at my email to work with me.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Beekeeping',
                'Workshops',
                'Honey-Making'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2 p-10 lg:p-16 bg-white dark:bg-[#2a2418]">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#555] dark:text-[#a09a8c]">Full Name</label>
                  <input className="w-full h-12 rounded-lg border border-[#e6e2db] dark:border-[#3a352a] bg-background-light dark:bg-[#1a160d] px-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Jane Doe" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#555] dark:text-[#a09a8c]">Email</label>
                  <input className="w-full h-12 rounded-lg border border-[#e6e2db] dark:border-[#3a352a] bg-background-light dark:bg-[#1a160d] px-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="jane@example.com" type="email" />
                </div>
              </div>
              
              {/* <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#555] dark:text-[#a09a8c]">Select Date</label>
                <div className="relative">
                  <select className="w-full h-12 rounded-lg border border-[#e6e2db] dark:border-[#3a352a] bg-background-light dark:bg-[#1a160d] px-4 appearance-none outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer">
                    <option>Saturday, Oct 14th - 10:00 AM</option>
                    <option>Sunday, Oct 15th - 10:00 AM</option>
                    <option>Saturday, Oct 21st - 10:00 AM</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#555]">expand_more</span>
                </div>
              </div> */}

{/* 
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#555] dark:text-[#a09a8c]">Number of Guests</label>
                <div className="flex items-center gap-4 bg-background-light dark:bg-[#1a160d] border border-[#e6e2db] dark:border-[#3a352a] rounded-lg p-2 w-fit">
                  <button 
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="size-8 flex items-center justify-center hover:bg-white dark:hover:bg-[#2a2418] rounded transition-colors text-lg font-bold" 
                    type="button"
                  >-</button>
                  <span className="w-8 text-center font-bold">{guests}</span>
                  <button 
                    onClick={() => setGuests(guests + 1)}
                    className="size-8 flex items-center justify-center hover:bg-white dark:hover:bg-[#2a2418] rounded transition-colors text-lg font-bold" 
                    type="button"
                  >+</button>
                </div>
              </div> */}

              <button className="mt-4 h-14 rounded-xl bg-primary text-[#181611] font-bold text-lg tracking-wide hover:brightness-110 hover:shadow-lg hover:shadow-primary/20 transition-all" type="button">
                Send
              </button>
              {/* <p className="text-xs text-center text-[#555] dark:text-[#a09a8c]">
                Limited spots available. Secure yours today.
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
