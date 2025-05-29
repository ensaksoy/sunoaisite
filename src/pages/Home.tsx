import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedSongs from '../components/FeaturedSongs';
import SongGenerator from '../components/SongGenerator';
import Features from '../components/Features';
import Footer from '../components/Footer';
import MusicPlayer from '../components/MusicPlayer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <MusicPlayer />
      </div>
      
      <Header />
      <main>
        <Hero />
        <FeaturedSongs />
        <SongGenerator />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Home;