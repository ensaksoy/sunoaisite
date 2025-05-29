import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from 'lucide-react';

interface MusicPlayerProps {
  song?: {
    title: string;
    artist: string;
    coverUrl: string;
  };
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ 
  song = {
    title: "Cosmic Dreams",
    artist: "AI Harmony",
    coverUrl: "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  } 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);
  const [volume, setVolume] = useState(80);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 w-full max-w-md border border-white/10">
      <div className="flex items-center space-x-4">
        <img 
          src={song.coverUrl} 
          alt={`${song.title} by ${song.artist}`} 
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="text-white font-semibold truncate">{song.title}</h3>
          <p className="text-white/70 text-sm truncate">{song.artist}</p>
        </div>
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className={`p-2 rounded-full ${isFavorite ? 'text-pink-500' : 'text-white/70 hover:text-white'}`}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'fill-pink-500' : ''}`} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="bg-white/20 h-1 rounded-full w-full overflow-hidden">
          <div 
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-white/60 mt-1">
          <span>1:24</span>
          <span>4:36</span>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex justify-between items-center">
        <button className="text-white/70 hover:text-white transition-colors">
          <SkipBack className="h-5 w-5" />
        </button>
        <button 
          className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full text-white hover:opacity-90 transition-opacity"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </button>
        <button className="text-white/70 hover:text-white transition-colors">
          <SkipForward className="h-5 w-5" />
        </button>
      </div>

      {/* Volume Control */}
      <div className="mt-4 flex items-center space-x-2">
        <Volume2 className="h-4 w-4 text-white/70" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(parseInt(e.target.value))}
          className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-purple-500"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;