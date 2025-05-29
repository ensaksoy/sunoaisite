import React from 'react';
import { Sparkles, Mic, Wand2, Clock, Music, Share2 } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6 text-white" />,
      title: "AI-Powered Creation",
      description: "Create professional-quality music in seconds with our state-of-the-art AI technology."
    },
    {
      icon: <Mic className="h-6 w-6 text-white" />,
      title: "Voice to Song",
      description: "Record a melody or hum a tune, and watch our AI transform it into a full composition."
    },
    {
      icon: <Wand2 className="h-6 w-6 text-white" />,
      title: "Style Customization",
      description: "Choose from various genres and customize the mood, tempo, and instruments of your creation."
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Instant Results",
      description: "No waiting. Generate complete songs in seconds, not hours or days."
    },
    {
      icon: <Music className="h-6 w-6 text-white" />,
      title: "Professional Quality",
      description: "Studio-quality output that sounds like it was created by professional musicians."
    },
    {
      icon: <Share2 className="h-6 w-6 text-white" />,
      title: "Easy Sharing",
      description: "Share your creations instantly on social media or download for offline use."
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-purple-900/20 to-black/50 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Our AI-powered platform gives you all the tools you need to create amazing music,
            regardless of your experience level.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;