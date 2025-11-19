import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-12 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">CRCMM Foundation</h3>
                <p className="text-secondary text-sm">Empowering communities through giving & service</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              We partner with communities to deliver education, health, livelihoods and emergency relief.
              Join us in creating lasting change.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors transform hover:-translate-y-1 hover:scale-110" aria-label="Facebook">
                <FaFacebookF className="w-5 h-5" aria-hidden />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors transform hover:-translate-y-1 hover:scale-110" aria-label="Instagram">
                <FaInstagram className="w-5 h-5" aria-hidden />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors transform hover:-translate-y-1 hover:scale-110" aria-label="YouTube">
                <FaYoutube className="w-5 h-5" aria-hidden />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-200 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/ministries" className="text-gray-200 hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/contact" className="text-gray-200 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/contact?donate=true" className="text-primary hover:text-white transition-colors font-semibold">Donate</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-200">
              <li>📍 Suite 4, Community Center, City</li>
              <li>📞 <a href="tel:+2348033059716" className="hover:text-white">+234 803 305 9716</a></li>
              <li>✉️ <a href="mailto:info@crcmm.org" className="hover:text-white">info@crcmm.org</a></li>
              <li>
                <a href="https://wa.me/2348033059716" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-white">
                  <FaWhatsapp className="w-4 h-4" aria-hidden />
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