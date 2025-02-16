import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Features } from '../components/sections/Features';
import { Subsidiaries } from '../components/sections/Subsidiaries';
import { News } from '../components/sections/News';
import { FAQ } from '../components/sections/FAQ';
import { Contact } from '../components/sections/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Subsidiaries />
      <News />
      <FAQ />   
      <Contact />
    </>
  );
}