import React, { useState } from 'react';
import { Sparkles, RefreshCw, Save } from 'lucide-react';

interface GeneratedSong {
  id: string;
  audio_url: string;
  source_audio_url: string;
  stream_audio_url: string;
  source_stream_audio_url: string;
  image_url: string;
  source_image_url: string;
  prompt: string;
  model_name: string;
  title: string;
  tags: string;
  createTime: string;
  duration: number;
}

interface ApiResponse {
  code: number;
  msg: string;
  data: {
    callbackType: string;
    task_id: string;
    data: GeneratedSong[];
  };
}

const SongGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('pop');
  const [result, setResult] = useState<GeneratedSong[] | null>(null);
  const [title, setTitle] = useState('');
  const [negativeTags, setNegativeTags] = useState('');

  const musicStyles = [
    { id: 'pop', name: 'Pop' },
    { id: 'rock', name: 'Rock' },
    { id: 'electronic', name: 'Electronic' },
    { id: 'hiphop', name: 'Hip Hop' },
    { id: 'jazz', name: 'Jazz' },
    { id: 'classical', name: 'Classical' },
  ];

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    setResult(null);

    try {
      const response = await fetch('https://apibox.erweima.ai/api/v1/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer 0310b30f3fad9a49767c02a1b23ebb44'
        },
        body: JSON.stringify({
          prompt: prompt,
          style: selectedStyle,
          title: title || 'Untitled Song',
          customMode: true,
          instrumental: true,
          model: 'V3_5',
          negativeTags: negativeTags,
          callBackUrl: 'https://api.example.com/callback'
        })
      });

      const data: ApiResponse = await response.json();
      
      if (data.code === 200) {
        setResult(data.data.data);
      } else {
        console.error('Error generating song:', data.msg);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleExtend = async (audioId: string) => {
    if (!prompt) return;
    setIsGenerating(true);

    try {
      const response = await fetch('https://apibox.erweima.ai/api/v1/generate/extend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer 0310b30f3fad9a49767c02a1b23ebb44'
        },
        body: JSON.stringify({
          defaultParamFlag: true,
          audioId: audioId,
          prompt: prompt,
          style: selectedStyle,
          title: title || 'Extended Song',
          continueAt: 0,
          model: 'V3_5',
          negativeTags: negativeTags,
          callBackUrl: 'https://api.example.com/callback'
        })
      });

      const data: ApiResponse = await response.json();
      
      if (data.code === 200) {
        setResult(data.data.data);
      } else {
        console.error('Error extending song:', data.msg);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Create Your Music
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Describe the song you want to create and our AI will generate it for you in seconds.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <div className="mb-6">
            <label htmlFor="title" className="block text-white mb-2 font-medium">
              Song Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter song title..."
              className="w-full bg-black/60 border border-white/20 rounded-lg p-4 text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="prompt" className="block text-white mb-2 font-medium">
              Describe your song
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="E.g., An upbeat pop song about summer adventures with a catchy chorus and tropical vibes..."
              className="w-full bg-black/60 border border-white/20 rounded-lg p-4 text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-colors resize-none h-32"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="negativeTags" className="block text-white mb-2 font-medium">
              Negative Tags (comma separated)
            </label>
            <input
              id="negativeTags"
              type="text"
              value={negativeTags}
              onChange={(e) => setNegativeTags(e.target.value)}
              placeholder="E.g., Heavy Metal, Upbeat Drums"
              className="w-full bg-black/60 border border-white/20 rounded-lg p-4 text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white mb-2 font-medium">
              Music Style
            </label>
            <div className="flex flex-wrap gap-2">
              {musicStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style.id)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedStyle === style.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  } transition-colors`}
                >
                  {style.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGenerate}
              disabled={!prompt || isGenerating}
              className={`${
                !prompt || isGenerating ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
              } bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full text-white font-medium transition-all shadow-lg hover:shadow-purple-500/20 flex items-center justify-center`}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="mr-2 h-5 w-5 animate-spin" /> Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" /> Generate Music
                </>
              )}
            </button>
          </div>

          {result && (
            <div className="mt-8">
              <h3 className="text-white text-xl font-semibold mb-4">Generated Songs</h3>
              <div className="grid grid-cols-1 gap-4">
                {result.map((song) => (
                  <div key={song.id} className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center space-x-4">
                      <img src={song.image_url} alt={song.title} className="w-16 h-16 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{song.title}</h4>
                        <p className="text-white/70 text-sm">{song.tags}</p>
                        <p className="text-white/50 text-xs">Duration: {Math.floor(song.duration)}s</p>
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={song.audio_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/70 hover:text-white transition-colors"
                        >
                          <Save className="h-5 w-5" />
                        </a>
                        <button
                          onClick={() => handleExtend(song.id)}
                          className="text-white/70 hover:text-white transition-colors"
                        >
                          <RefreshCw className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SongGenerator;