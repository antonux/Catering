import React from 'react'

const CustomerInformationModal = ({customer, onClose}) => {

  if(!customer) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">{customer.name}</h2>
                <p>Email: {customer.email}</p>
                <p>Event: {customer.event}</p>
                <p>Date of Event: {customer.dateOfEvent}</p>
                <p>Status: {customer.status}</p>
                <button
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
  )
}

export default CustomerInformationModal