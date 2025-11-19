import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Unsplash images focused on giving, sharing, community and love
const heroImages = [
  '/images/faith.jpeg',
  '/images/love4.jpg',
  '/images/love.jpeg',
  '/images/love3.jpg',
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative text-white py-20 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(6,8,15,0.55), rgba(6,8,15,0.7)), url(${heroImages[index]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-label="Hero - community giving and sharing"
    >
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroGlow {
          0% { box-shadow: 0 0 0 rgba(255,255,255,0.0); }
          100% { box-shadow: 0 15px 45px rgba(0,0,0,0.45); }
        }
        @keyframes heroSoftFloat {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        .hero-content-animate {
          animation: heroFadeIn 1s ease-out forwards;
        }
        .hero-cta-animate {
          animation: heroGlow 1.4s ease-out forwards;
        }
        .hero-badge-animate {
          animation: heroSoftFloat 5s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center hero-content-animate">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-white/10 border border-white/20 text-sm hero-badge-animate">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            <span className="tracking-wide uppercase text-xs lg:text-[0.7rem]">Faith in action Giving, sharing, hope</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-4 font-serif">Welcome to CRCMM Foundation</h1>
          <p className="text-xl lg:text-2xl mb-6 font-light">Sharing resources, empowering communities, restoring hope.</p>
          <p className="text-lg mb-8 opacity-90 text-gray-100">
            We partner with local communities to provide education, healthcare, livelihoods and emergency
            relief. Join us in building brighter, more resilient futures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-cta-animate">
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