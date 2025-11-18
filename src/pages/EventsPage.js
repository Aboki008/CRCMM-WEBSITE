import React from 'react';
import Events from '../components/Events';

const EventsPage = () => {
  return (
    <div>
      <header className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Events</h1>
          <p className="text-gray-600 mt-4">Stay updated with our upcoming events and gatherings.</p>
        </div>
      </header>
      <main>
        <Events />
      </main>
    </div>
  );
};

export default EventsPage;
