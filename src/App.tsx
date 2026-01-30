import React from 'react';
import { Header } from './components/blocks/Header';
import { Hero } from './components/blocks/Hero';
import { Clients } from './components/blocks/Clients';
import { Community } from './components/blocks/Community';
import { Unlock } from './components/blocks/Unlock';
import { Stats } from './components/blocks/Stats';
import { Calendar } from './components/blocks/Calendar';
import { Testimonial } from './components/blocks/Testimonial';
import { Updates } from './components/blocks/Updates';
import { CTA } from './components/blocks/CTA';
import { Footer } from './components/blocks/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Clients />
        <Community />
        <Unlock />
        <Stats />
        <Calendar />
        <Testimonial />
        <Updates />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;