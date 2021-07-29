import React from 'react';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
    </div>
  );
}
