import React from 'react';
import { ThemeSwitch } from './ThemeSwitch';
import { twMerge } from 'tailwind-merge';

export function Nav() {
  return (
    <nav className="flex justify-around items-center py-5">
      <h3
        className={twMerge(
          'p-2',
          'text-text font-bold text-xl',
          'transition-colors duration-200',
          'hover:text-accent hover:cursor-pointer'
        )}
      >
        twlite
      </h3>
      <ThemeSwitch />
    </nav>
  );
}
