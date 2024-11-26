// src/components/HeroSection.js
import React from 'react';
import { ReactTyped } from 'react-typed'; // Mengimpor ReactTyped
// import videoSrc from '../assets/videos/Village Video 2.mp4';

const videoSrc = "/public/assets/videos/Village Video 2.mp4"

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center">
      {/* Video Background */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoSrc} 
        autoPlay 
        loop 
        muted
      />

      {/* Konten di atas video */}
      <div className="relative z-20 text-white">
        {/* Teks dengan animasi typing */}
        <h1 className="text-5xl font-bold mb-5">
          <ReactTyped
            strings={['Aplikasi Pintar Desa']}
            typeSpeed={40}
            backSpeed={65}
            loop
          />
        </h1>
        <p className="text-xl">Pemberdayaan & Edukasi Digital untuk Desa dengan Integrasi AI</p>
        <button className="mt-6 bg-blue-600 px-4 py-2 rounded hover:bg-blue-800 transition">Mulai Sekarang</button>
      </div>
    </section>
  );
};

export default HeroSection;
