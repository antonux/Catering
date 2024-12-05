import React from 'react';
import { X, Send, XCircle } from 'lucide-react';

const InquiryForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-60 flex justify-center items-center z-50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <X size={24} strokeWidth={1.5} />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Submit Inquiry
          </h2>

          <form className="grid grid-cols-2 gap-4">
            {[
              { id: 'date', label: 'Date', type: 'text', placeholder: 'dd/mm/yyyy' },
              { id: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
              { id: 'company', label: 'Client/Company Name', type: 'text', placeholder: 'Your organization' },
              { id: 'people', label: 'Number of People', type: 'number', placeholder: '0' },
              { id: 'mobile', label: 'Mobile Number', type: 'tel', placeholder: '+1 (234) 567-8900' },
              { id: 'event', label: 'Event', type: 'text', placeholder: 'Event name' },
              { id: 'venue', label: 'Venue', type: 'text', placeholder: 'Event location' }
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block mb-1 text-sm font-medium text-gray-700">
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  placeholder={placeholder}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                />
              </div>
            ))}
            
            <div className="col-span-2">
              <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your detailed inquiry..."
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
              ></textarea>
            </div>
          </form>
          
          <div className='flex justify-end space-x-4 mt-4'>
            <button 
              className="flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
            >
              <Send size={16} className="mr-2 group-hover:animate-pulse" />
              Create Inquiry
            </button>
            <button 
              onClick={onClose}
              className="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              <XCircle size={16} className="mr-2 text-gray-500 group-hover:text-gray-700" />
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;