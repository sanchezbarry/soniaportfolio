
import React from 'react';

const galleryItems = [
  {
    title: 'Spring Awakening',
    period: 'March - May',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5kUAAd6mpb_ovQMWMYkyDWY06aMMyWzIqlewm0roZPB7sMhlrcr2Vecdfh5ZQygkz-_fhj2LmDIpGmLEVJ5nOUBqwea3WUft46WILjGngT64v9PF-TICUqRMoc6-yM-T66t7rpzyioq4_OXTo-hKHCr6FEz9XCtbS75wUXdopi5O_EaRBCsLKE7EB4HtKcwRtqHKAnNOZAadtK21zDpNO4Ky3H99y4q4OUEHEFaxcsrTU5PrHOgFXQ5l2uxueLgeIaR-Lxw6XjT8',
    offset: false
  },
  {
    title: 'Summer Flow',
    period: 'June - August',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBymG8SnoMajvQGldnaNmXrbuTZRAkmGzA3l9ABegv8ef5zVLevcvoq6W7qu2zkK91e0XLRUmqTHMisCx34RheeGF-MWEJUtYyGxFLhpuca4sY51ra2AYTH8MFlfEXgLsRxY9NEbCEY0moVrFhV1CePqH5_zzUKgL87d0Rhag_hhQWc8EZ3JLLdA09G3FInVzURLuCe8kRbPkLqskCaj8EjUPGwQBQ3Kz7H-Qlq7hoqHG7P2B6B44R6lIBOLjqOlop3-fJJavwxeL4',
    offset: true
  },
  {
    title: 'Autumn Harvest',
    period: 'September - November',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEFDsJBY1kuyJSlgvXi4u7ZECuxY1vEvYbOcdSeZEExC45kL9ZTiyOPyMTfuhjLaa-oP2ii1yY_q81GGp6kw5ItVy0C2yrpH4HgdWMXFaAWC92XcDZmgjAKvQttSiaF0cCTwny3rM65P1A2ncergmeYjwms2QYYVuuJ8gD820UtC3X2vo_PbPOuxVkT9e_dJ9qO2ohj5V7L_y1Ln4OfZ-Ya75QciP3YxMXYcXuArR8_H7_6TPeVj-_9FEESaUOObdVYh-WD9tql1g',
    offset: false
  },
  {
    title: 'Winter Cluster',
    period: 'December - February',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCftbXGfepBxqrQlF2X_-wpSN60OP5j6uIRtZCY4BvqZTgVAimJVzmW2X7NZ8PC_5AfdD8cQv7ofyniJNwneSuaW-MfCVptFNADJIX95UHcb2FagyHd3wDmFtDlQMtBGS8U8f0Dahw_QE9QXhLJ_JX8oEeU2pqhaR0nyzbQYFdPA0k-u49tTc8HgEBYKE1U014SiJ9FLLGsKzz9jT_v82ZTpENFBdUQuMvhvwe-xjXhbR_OsmqFrPjCdNb0Zt7D2m7RoGOtsyjUEDA',
    offset: true
  }
];

export function Gallery() {
  return (
    <section className="w-full px-6 lg:px-20 py-12 lg:pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-lg">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Gallery</span>
            <h2 className="text-4xl font-black tracking-tight mt-3">The Apiary Through the Seasons</h2>
          </div>
          <div className="flex gap-2">
            <button className="size-10 rounded-full border border-[#e6e2db] dark:border-[#3a352a] flex items-center justify-center hover:bg-[#e6e2db] dark:hover:bg-[#3a352a] transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="size-10 rounded-full bg-primary text-[#181611] flex items-center justify-center hover:brightness-110 transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto">
          {galleryItems.map((item, idx) => (
            <div key={idx} className={`group relative aspect-[3/4] md:aspect-auto md:h-[400px] overflow-hidden rounded-xl bg-gray-200 ${item.offset ? 'lg:translate-y-12' : ''}`}>
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url('${item.img}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-bold text-lg">{item.title}</p>
                <p className="text-white/80 text-sm">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
