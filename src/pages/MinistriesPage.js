import React from 'react';
import Ministries from '../components/Ministries';

const MinistriesPage = () => {
  return (
    <div>
      <header className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Ministries</h1>
          <p className="text-gray-600 mt-4">Find a ministry where you can belong and serve.</p>
        </div>
      </header>
      <main>
        <Ministries />
      </main>
    </div>
  );
};

export default MinistriesPage;
