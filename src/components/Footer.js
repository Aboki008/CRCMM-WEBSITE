import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">CRCMM Foundation</h3>
                <p className="text-teal-200 text-sm">Empowering communities through giving & service</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              We partner with communities to deliver education, health, livelihoods and emergency relief.
              Join us in creating lasting change.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <span aria-hidden>📘</span>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <span aria-hidden>📷</span>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="YouTube">
                <span aria-hidden>▶️</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/ministries" className="text-gray-300 hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/contact?donate=true" className="text-teal-300 hover:text-white transition-colors font-semibold">Donate</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📍 Suite 4, Community Center, City</li>
              <li>📞 <a href="tel:+2348033059716" className="hover:underline">+234 803 305 9716</a></li>
              <li>✉️ <a href="mailto:info@crcmm.org" className="hover:underline">info@crcmm.org</a></li>
              <li>
                <a href="https://wa.me/2348033059716" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-300 hover:text-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 .07 5.3.07 12c0 2.11.55 4.18 1.59 6.02L0 24l6.2-1.6A11.95 11.95 0 0012 24c6.63 0 11.93-5.3 11.93-12 0-3.2-1.25-6.19-3.41-8.52zM12 21.6c-1.52 0-3.02-.4-4.32-1.15l-.31-.18-3.68.95.98-3.58-.2-.36A9.48 9.48 0 012.4 12c0-5.25 4.27-9.52 9.52-9.52S21.44 6.75 21.44 12 17.25 21.6 12 21.6z" />
                    <path d="M17.2 14.1c-.3-.15-1.76-.86-2.03-.96-.27-.1-.48-.15-.69.15s-.79.96-.98 1.16c-.18.19-.36.22-.66.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.12.3-.33.45-.5.15-.17.2-.28.3-.47.1-.19.05-.36-.02-.51-.07-.15-.69-1.66-.95-2.28-.25-.6-.51-.52-.69-.53l-.59-.01c-.2 0-.51.07-.78.35-.27.28-1.03 1.01-1.03 2.46s1.06 2.86 1.2 3.06c.14.19 2.07 3.17 5.02 4.44 2.02.93 2.95 1 3.2.94.25-.06.79-.32.9-.63.12-.31.12-.58.08-.63-.03-.06-.3-.1-.61-.24z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} CRCMM Foundation. All rights reserved. | Empowering communities through giving & service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;