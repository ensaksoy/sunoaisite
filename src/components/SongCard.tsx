import React, { useState } from 'react';
import { Play, Pause, Download, Share2 } from 'lucide-react';

export interface Song {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
}

interface SongCardProps {
  song: Song;
  onPlay: (id: string) => void;
  isPlaying: boolean;
}

const SongCard: React.FC<SongCardProps> = ({ song, onPlay, isPlaying }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:translate-y-[-5px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={song.imageUrl} 
          alt={song.title} 
          className="w-full aspect-square object-cover transition-transform duration-700 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <button 
          className={`absolute inset-0 flex items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity bg-black/40`}
          onClick={() => onPlay(song.id)}
        >
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
            {isPlaying ? (
              <Pause className="h-8 w-8 text-white" />
            ) : (
              <Play className="h-8 w-8 text-white" />
            )}
          </div>
        </button>
        <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-white/90 text-xs px-2 py-1 rounded-full">
          {song.duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-1">{song.title}</h3>
        <p className="text-white/70 text-sm mb-3">{song.description}</p>
        <div className="flex justify-between">
          <button className="text-white/70 hover:text-white transition-colors">
            <Share2 className="h-5 w-5" />
          </button>
          <button className="text-white/70 hover:text-white transition-colors">
            <Download className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SongCard;