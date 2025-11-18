import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Unsplash images focused on giving, sharing, community and love
const heroImages = [
  'https://images.unsplash.com/photo-1517638851339-4ae6f3b2f0a2?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1499415479124-43c32433a620?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1520975911011-3f7f2d6b7562?auto=format&fit=crop&w=1600&q=80',
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative text-white py-20 lg:py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(6,8,15,0.45), rgba(6,8,15,0.45)), url(${heroImages[index]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-label="Hero - community giving and sharing"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 font-serif">Welcome to CRCMM Foundation</h1>
          <p className="text-xl lg:text-2xl mb-6 font-light">Sharing resources, empowering communities, restoring hope.</p>
          <p className="text-lg mb-8 opacity-90 text-gray-100">
            We partner with local communities to provide education, healthcare, livelihoods and emergency
            relief. Join us in building brighter, more resilient futures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Involved
            </Link>
            <Link
              to="/ministries"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Learn About Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* small pager */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;