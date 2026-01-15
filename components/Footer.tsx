
import React from 'react';
import 'material-icons/iconfont/material-icons.css';


export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[#e6e2db] dark:border-[#3a352a] bg-white dark:bg-[#1a160d] py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">hive</span>
          <span className="font-bold text-lg">Artisanal Nectar</span>
        </div>
        <div className="flex gap-8 text-sm font-medium text-[#555] dark:text-[#a09a8c]">
          <a className="hover:text-primary transition-colors" href="#">Shop</a>
          <a className="hover:text-primary transition-colors" href="#">Journal</a>
          <a className="hover:text-primary transition-colors" href="#">Press</a>
          <a className="hover:text-primary transition-colors" href="#">Contact</a>
        </div>
        <p className="text-sm text-[#888] dark:text-[#666]">© 2025 Sonia Alicia. All rights reserved.</p>
      </div>
    </footer>
  );
};
