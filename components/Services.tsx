
import React from 'react';

const steps = [
  {
    icon: 'egg',
    title: 'Education Workshops',
    days: 'Day 1-3',
    description: 'The queen lays a single egg in a honeycomb cell. It looks like a tiny grain of rice standing upright.'
  },
  {
    icon: 'pest_control',
    title: 'Apiary Management',
    days: 'Day 4-9',
    description: 'Worker bees feed the hatched larva royal jelly. It grows rapidly, shedding its skin multiple times.'
  },
  {
    icon: 'hexagon',
    title: 'Honey Cultivating',
    days: 'Day 10-20',
    description: 'The cell is capped with wax. Inside, the larva spins a cocoon and begins transforming into an adult bee.'
  },
  {
    icon: 'emoji_nature',
    title: 'Other Work',
    days: 'Day 21+',
    description: 'A fully formed bee chews through the wax cap, ready to join the colony as a cleaner, nurse, or forager.'
  }
];

export const Services: React.FC = () => {
  return (
    <section className="w-full max-w-7xl px-6 lg:px-20 py-24">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3">What I Offer</span>
        {/* <h2 className="text-4xl font-black tracking-tight mb-4">The Life of a Bee</h2> */}
        <p className="text-lg text-[#555] dark:text-[#a09a8c] max-w-2xl">
          Discover the fascinating metamorphosis of the honeybee within the hive, how to cultivate honey, and more.
        </p>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="group relative flex flex-col bg-white dark:bg-[#2a2418] p-6 rounded-2xl border border-[#e6e2db] dark:border-[#3a352a] hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm">
            {idx > 0 && (
              <div className="hidden lg:block absolute top-12 -left-3 w-6 h-[1px] bg-[#e6e2db] dark:bg-[#3a352a]"></div>
            )}
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-[#181611] transition-colors">
              <span className="material-symbols-outlined">{step.icon}</span>
            </div>
            <h4 className="text-xl font-bold mb-2">{step.title}</h4>
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">{step.days}</p>
            <p className="text-sm text-[#555] dark:text-[#a09a8c] leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
