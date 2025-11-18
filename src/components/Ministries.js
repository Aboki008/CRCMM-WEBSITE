import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DonationsModal from './DonationsModal';

const programs = [
  {
    id: 'education',
    title: 'Education & Scholarships',
    desc: 'Supporting children and adults with access to learning, scholarships, and literacy programs.',
    emoji: '🎓',
  },
  {
    id: 'livelihoods',
    title: 'Livelihoods & Skills',
    desc: 'Vocational training and micro-enterprise support to increase household incomes.',
    emoji: '🛠️',
  },
  {
    id: 'health',
    title: 'Health & Wellbeing',
    desc: 'Community health camps, maternal care, and mental health awareness initiatives.',
    emoji: '❤️',
  },
  {
    id: 'relief',
    title: 'Emergency Relief',
    desc: 'Rapid response and relief distribution when disasters strike.',
    emoji: '🚑',
  },
  {
    id: 'advocacy',
    title: 'Advocacy & Rights',
    desc: 'Empowering communities to know their rights and access services.',
    emoji: '📣',
  },
  {
    id: 'volunteer',
    title: 'Volunteer Programs',
    desc: 'Meaningful volunteer opportunities for individuals and corporate partners.',
    emoji: '🤝',
  },
];

// Unsplash placeholder images (replace with your own assets later)
const sampleImages = [
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1584467735874-0f9b0c5b5a5c?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1400&q=80',
];

const Ministries = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Lightbox states for the photo highlights
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const galleryImages = sampleImages.concat(sampleImages);

  const openLightbox = (i) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const prevLightbox = () => setLightboxIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const nextLightbox = () => setLightboxIndex((i) => (i + 1) % galleryImages.length);

  // keyboard navigation for lightbox
  useEffect(() => {
    const handler = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxOpen]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % sampleImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const openDonations = () => setIsModalOpen(true);
  const closeDonations = () => setIsModalOpen(false);

  const whatsappNumber = '2348033059716'; // wa.me expects country code without leading + or 0

  return (
    <section aria-labelledby="programs-heading" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 id="programs-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Our Programs & Initiatives
          </h2>
          <p className="text-gray-700 text-lg">
            We work alongside communities to create lasting, sustainable impact through education,
            livelihoods, healthcare, emergency relief and advocacy. Learn how we serve people and how
            you can partner with us.
          </p>
        </div>

        {/* Carousel / Slider */}
        <div className="relative mb-8">
          <div className="overflow-hidden rounded-lg">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
              {sampleImages.map((src, i) => (
                <div key={i} className="flex-shrink-0 w-full">
                  <img src={src} alt={`Slide ${i + 1}`} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-3 flex justify-center space-x-2">
            {sampleImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full ${i === current ? 'bg-primary' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Program cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {programs.map((p) => (
            <article
              key={p.id}
              className="group relative bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow"
              aria-labelledby={`${p.id}-title`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-semibold">
                  <span aria-hidden="true">{p.emoji}</span>
                </div>
                <div>
                  <h3 id={`${p.id}-title`} className="text-lg font-semibold text-gray-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  to="/ministries"
                  className="inline-block text-primary font-medium hover:underline"
                  aria-label={`Learn more about ${p.title}`}
                >
                  Learn more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Stats + CTA */}
        <div className="mt-4 bg-white rounded-xl p-6 shadow flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">12k+</div>
              <div className="text-sm text-gray-600">Beneficiaries served</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">85</div>
              <div className="text-sm text-gray-600">Active projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">450+</div>
              <div className="text-sm text-gray-600">Volunteers</div>
            </div>
          </div>

          <div className="flex-0">
            <div className="flex gap-3">
              <button onClick={openDonations} className="bg-primary text-white px-5 py-3 rounded-lg font-semibold shadow hover:opacity-95 transition">
                Donate
              </button>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-3 rounded-lg font-semibold hover:bg-primary/5 transition"
                aria-label="Chat on WhatsApp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 .07 5.3.07 12c0 2.11.55 4.18 1.59 6.02L0 24l6.2-1.6A11.95 11.95 0 0012 24c6.63 0 11.93-5.3 11.93-12 0-3.2-1.25-6.19-3.41-8.52zM12 21.6c-1.52 0-3.02-.4-4.32-1.15l-.31-.18-3.68.95.98-3.58-.2-.36A9.48 9.48 0 012.4 12c0-5.25 4.27-9.52 9.52-9.52S21.44 6.75 21.44 12 17.25 21.6 12 21.6z" />
                  <path d="M17.2 14.1c-.3-.15-1.76-.86-2.03-.96-.27-.1-.48-.15-.69.15s-.79.96-.98 1.16c-.18.19-.36.22-.66.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.12.3-.33.45-.5.15-.17.2-.28.3-.47.1-.19.05-.36-.02-.51-.07-.15-.69-1.66-.95-2.28-.25-.6-.51-.52-.69-.53l-.59-.01c-.2 0-.51.07-.78.35-.27.28-1.03 1.01-1.03 2.46s1.06 2.86 1.2 3.06c.14.19 2.07 3.17 5.02 4.44 2.02.93 2.95 1 3.2.94.25-.06.79-.32.9-.63.12-.31.12-.58.08-.63-.03-.06-.3-.1-.61-.24z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <DonationsModal isOpen={isModalOpen} onClose={closeDonations} whatsappNumber={whatsappNumber} />

        {/* Advanced Image gallery with hover effects and lightbox */}
        <div className="mt-10">
          <style>{`
            @keyframes slideUp {
              from { 
                opacity: 0;
                transform: translateY(20px);
              }
              to { 
                opacity: 1;
                transform: translateY(0);
              }
            }
            .gallery-item {
              animation: slideUp 0.6s ease-out forwards;
              opacity: 0;
            }
          `}</style>
          <h4 className="text-2xl font-bold mb-1 text-gray-900">Photo highlights</h4>
          <p className="text-gray-600 mb-6">Explore our community impact through images</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sampleImages.concat(sampleImages).map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => openLightbox(i)}
                className="gallery-item group relative h-36 bg-gray-100 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-md hover:shadow-lg transition-all duration-300"
                aria-label={`Open photo ${i + 1}`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute left-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-white text-sm bg-primary/90 px-3 py-1 rounded-full font-semibold">Expand</span>
                </div>
              </button>
            ))}
          </div>

          {/* Lightbox modal */}
          {lightboxOpen && (
            <div className="fixed inset-0 z-60 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/60" onClick={closeLightbox} aria-hidden />
              <div className="relative max-w-4xl w-full mx-4">
                <button
                  onClick={closeLightbox}
                  className="absolute right-2 top-2 z-10 p-2 bg-white/90 rounded-full shadow"
                  aria-label="Close image"
                >
                  ✕
                </button>
                <button
                  onClick={prevLightbox}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 rounded-full shadow"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={nextLightbox}
                  className="absolute right-12 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 rounded-full shadow"
                  aria-label="Next image"
                >
                  ›
                </button>

                <div className="bg-white rounded overflow-hidden">
                  <img src={galleryImages[lightboxIndex]} alt={`Large ${lightboxIndex + 1}`} className="w-full h-[70vh] object-contain bg-black" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating WhatsApp icon (always present) */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
        aria-label="Chat with us on WhatsApp"
      >
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 12.05A9 9 0 1 0 11.95 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 12.05c0 1.68-.36 3.28-1.02 4.72L22 22l-4.35-1.14A8.98 8.98 0 0 1 12 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.5 11.25c0 .96-.78 2.08-1.73 2.75-.42.32-.92.6-1.57.6-.6 0-1.09-.22-1.5-.5-.36-.25-.77-.66-1.06-.96-.5-.5-.85-1.04-.85-1.66 0-.6.32-1.16.82-1.61C10.9 8.4 12.2 8 13 8c.7 0 1.34.19 1.86.53.48.31.64.71.64 1.09z" fill="currentColor" />
        </svg>
      </a>
    </section>
  );
};

export default Ministries;
