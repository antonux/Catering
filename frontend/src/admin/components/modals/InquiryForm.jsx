import React from 'react'
import { X } from 'lucide-react';

const InquiryForm = (onClose) => {
    
    const InquiryForm = (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
            <div 
                className="bg-white rounded-lg p-6 shadow-lg w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto"
            >
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>
                <form action="">
                    
                </form>
            </div>
        </div>
    );
  return InquiryForm
}

export default InquiryForm