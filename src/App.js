import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import MinistriesPage from './pages/MinistriesPage';
import EventsPage from './pages/EventsPage';
import './App.css';

const WhatsAppRedirect = () => {
  const whatsappNumber = '2348033059716';

  useEffect(() => {
    window.location.href = `https://wa.me/${whatsappNumber}`;
  }, []);

  return null;
};

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ministries" element={<MinistriesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<WhatsAppRedirect />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;