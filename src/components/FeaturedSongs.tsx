import React, { useState } from 'react';
import SongCard, { Song } from './SongCard';

const FeaturedSongs: React.FC = () => {
  const [playingSongId, setPlayingSongId] = useState<string | null>(null);
  
  const featuredSongs: Song[] = [
    {
      id: '1',
      title: 'Midnight Dreams',
      description: 'A dreamy electronic track with ambient vibes',
      imageUrl: 'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '3:42'
    },
    {
      id: '2',
      title: 'Urban Sunset',
      description: 'Lo-fi hip hop beats with jazzy elements',
      imageUrl: 'https://images.pexels.com/photos/333525/pexels-photo-333525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '2:55'
    },
    {
      id: '3',
      title: 'Crystal Clear',
      description: 'Upbeat pop track with catchy melodies',
      imageUrl: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '3:21'
    },
    {
      id: '4',
      title: 'Neon Lights',
      description: 'Synthwave vibes with 80s retro influence',
      imageUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '4:10'
    },
    {
      id: '5',
      title: 'Morning Rays',
      description: 'Peaceful acoustic guitar with nature sounds',
      imageUrl: 'https://images.pexels.com/photos/1774389/pexels-photo-1774389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '3:05'
    },
    {
      id: '6',
      title: 'Digital Dreams',
      description: 'Progressive electronic track with ambient elements',
      imageUrl: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '4:30'
    },
  ];

  const handlePlaySong = (id: string) => {
    if (playingSongId === id) {
      setPlayingSongId(null); // pause if already playing
    } else {
      setPlayingSongId(id); // play if not playing
    }
  };

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Songs
            </h2>
            <p className="text-white/80 max-w-2xl">
              Listen to incredible AI-generated songs created by our community.
            </p>
          </div>
          <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors mt-4 md:mt-0">
            View all songs →
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSongs.map((song) => (
            <SongCard 
              key={song.id} 
              song={song} 
              onPlay={handlePlaySong}
              isPlaying={playingSongId === song.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSongs;