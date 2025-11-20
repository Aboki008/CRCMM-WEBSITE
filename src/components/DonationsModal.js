import React, { useState } from 'react';

const DonationsModal = ({ isOpen, onClose, whatsappNumber = '2348033059716' }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden />
      <div className="relative bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h3 className="text-xl font-semibold mb-3">Support our work</h3>
        <p className="text-sm text-gray-600 mb-4">Use the details below to make a direct transfer. Thank you for your generosity.</p>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">Account name</div>
              <div className="font-medium">CRCCM Foundation</div>
            </div>
            <button onClick={() => copy('CRCCM Foundation')} className="text-primary text-sm">Copy</button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">Account number</div>
              <div className="font-medium">1234567890</div>
            </div>
            <button onClick={() => copy('1234567890')} className="text-primary text-sm">Copy</button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">Bank</div>
              <div className="font-medium">Example Bank</div>
            </div>
            <button onClick={() => copy('Example Bank')} className="text-primary text-sm">Copy</button>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-md border">Close</button>
          <a href={`https://wa.me/${whatsappNumber}?text=I%20would%20like%20to%20donate`} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-primary text-white">Message us</a>
        </div>

        {copied && <div className="mt-3 text-sm text-green-600">Copied to clipboard</div>}
      </div>
    </div>
  );
};

export default DonationsModal;
