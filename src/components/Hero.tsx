import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/30 to-black z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.15),transparent_50%)]"></div>
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Create Amazing Music <br /> with AI
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Turn your ideas into beautiful songs in seconds. No musical experience required.
          Just describe what you want, and our AI will do the rest.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full text-white font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-purple-500/20 flex items-center">
            <Play className="mr-2 h-5 w-5" /> Create Your First Song
          </button>
          <button className="text-white border border-white/30 backdrop-blur-sm bg-white/10 px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all flex items-center">
            Explore Library <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;