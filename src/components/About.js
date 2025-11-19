import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
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
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About CRCMM Foundation
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
              CRCMM Foundation is a FAITH-BASED NON-GOVERNMENTAL ORGANIZATION committed to empowering individuals and families
              through sustainable development. We believe in the power of education, livelihoods, health,
              and collective action to transform lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-l-4 border-primary animate-slide-up" style={{ animationDelay: '0s' }}>
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Our Purpose</h3>
              <p className="text-gray-600 text-center">Empower communities through sustainable programs in education, health, and livelihoods.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-l-4 border-secondary animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Our Values</h3>
              <p className="text-gray-600 text-center">Integrity, transparency, inclusivity, and partnership guide everything we do.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-l-4 border-accent animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Our Approach</h3>
              <p className="text-gray-600 text-center">Community-led, data-driven solutions that create measurable, long-term impact.</p>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-semibold shadow hover:shadow-lg transition-all transform hover:scale-105"
            >
              Read Our Full Story
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
