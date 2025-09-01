import { Engine, Container, IOptions, RecursivePartial } from '@tsparticles/engine';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { Search } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Logo } from '@/components/Logo';
import { motion } from 'framer-motion';
import { Particles } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export function Home() {
  const [query, setQuery] = useState('');
  const [, setLocation] = useLocation();

const particlesInit = useCallback(async (engine: Engine) => {
  await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container) => {
  console.log(container);
}, []);

const particlesOptions: RecursivePartial<IOptions> = {
  fullScreen: { enable: false },
  particles: {
    number: { value: 50, density: { enable: true, valueArea: 800 } },
    color: { value: ['#4f46e5', '#ec4899', '#06b6d4'] }, // Vibrant colors for a modern AI feel
    shape: { type: 'circle' },
    opacity: { value: 0.6, random: { enable: true }, anim: { enable: true, speed: 1, minimumValue: 0.1 } },
    size: { value: 3, random: { enable: true }, anim: { enable: true, speed: 4, minimumValue: 0.3 } },
    links: { enable: true, distance: 150, color: '#a1a1aa', opacity: 0.3, width: 1 },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: { enable: true },
      straight: false,
      outModes: { default: 'out' },
      attract: { enable: true, rotate: { x: 600, y: 1200 } },
    },
  },
  interactivity: {
    detectOn: 'canvas',
    events: {
      onHover: { enable: true, mode: 'grab' },
      onClick: { enable: true, mode: 'push' },
      resize: { enable: true },
    },
    modes: {
      grab: { distance: 200, links: { opacity: 0.5 } },
      push: { quantity: 4 },
    },
  },
  retinaDetect: true,
  background: { color: { value: 'transparent' } },
};

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setLocation(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden">
      <Particles
        id="tsparticles"
        options={particlesOptions}
        className="absolute inset-0 z-0 pointer-events-none"
      />
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-3xl px-4 z-10"
      >
        <div className="flex flex-col items-center mb-12">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <Logo className="mb-8 w-32 h-32" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl lg:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-pink-500 to-cyan-500 dark:from-indigo-400 dark:via-pink-400 dark:to-cyan-400"
          >
            What do you want to know?
          </motion.h1>
        </div>
        
        <form onSubmit={handleSearch} className="w-full">
          <div className="relative group">
            <motion.input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything about AI, tech, or the universe..."
              className="w-full px-6 py-5 text-xl rounded-full border border-gray-300 
                         focus:border-indigo-500 focus:ring-4 focus:ring-indigo-300/50 outline-none 
                         transition-all duration-300 shadow-md 
                         group-hover:shadow-xl group-hover:border-gray-400
                         dark:bg-gray-800 dark:border-gray-600 dark:text-white
                         dark:focus:border-indigo-400 dark:focus:ring-indigo-400/50 dark:group-hover:border-gray-500
                         pr-16"
              style={{ fontFamily: 'Inter, sans-serif' }}
              autoFocus
              autoComplete="off"
              initial={{ width: '90%' }}
              whileFocus={{ width: '100%', transition: { duration: 0.4 } }}
            />
            <motion.button 
              type="submit"
              disabled={!query.trim()}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full
                         hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-all duration-300 
                         hover:scale-110 active:scale-95 disabled:opacity-50 disabled:hover:scale-100
                         disabled:hover:bg-transparent z-10 bg-background dark:bg-gray-800"
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.2 }}
            >
              <Search className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
            </motion.button>
          </div>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center text-base text-gray-600 dark:text-gray-300 space-y-2"
        >
          <div>Powered by Gemini 2.5</div>
          <div>
            Created by <a href="https://github.com/preetam-90" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-semibold">Preetam-90</a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
