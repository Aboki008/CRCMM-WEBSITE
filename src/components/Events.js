import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  const upcoming = [
    { id: 1, title: 'Sunday Service', date: 'Sundays 10:00 AM' },
    { id: 2, title: 'Community Outreach', date: 'Next Saturday' },
    { id: 3, title: 'Youth Night', date: 'Friday 7:00 PM' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {upcoming.map((e) => (
              <li key={e.id} className="p-4 bg-white rounded-lg shadow-sm flex justify-between items-center">
                <div className="text-left">
                  <div className="font-semibold text-lg">{e.title}</div>
                  <div className="text-sm text-gray-600">{e.date}</div>
                </div>
                <Link to="/events" className="text-primary font-semibold">
                  Details
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Events;
