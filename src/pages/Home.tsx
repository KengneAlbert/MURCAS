import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Features } from '../components/sections/Features';
import { FAQ } from '../components/sections/FAQ';
import { News } from '../components/sections/News';
import { Contact } from '../components/sections/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <FAQ />
      <News />
      <Contact />
    </>
  );
}