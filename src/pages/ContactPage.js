import React from 'react';

const ContactPage = () => {
  return (
    <div>
      <header className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-gray-600 mt-4">We'd love to hear from you — reach out with any questions or prayer requests.</p>
        </div>
      </header>
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <form className="bg-white p-8 rounded-lg shadow">
            <label className="block mb-4">
              <span className="text-gray-700">Name</span>
              <input className="mt-1 block w-full rounded border-gray-300" type="text" name="name" />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Email</span>
              <input className="mt-1 block w-full rounded border-gray-300" type="email" name="email" />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Message</span>
              <textarea className="mt-1 block w-full rounded border-gray-300" name="message" rows="5"></textarea>
            </label>
            <button type="submit" className="bg-primary text-white px-6 py-2 rounded font-semibold">Send Message</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
