import React, { useState } from "react";
import { IoMdContact } from "react-icons/io";

const CustomerInformationModal = ({ customer, onClose }) => {
  if (!customer) return null;

  const [openSection, setOpenSection] = useState(null); // Track which section is open

  const toggleViewInformation = () => {
    // If "View Information" is clicked, open it and close the other
    setOpenSection(openSection === "view" ? null : "view");
  };

  const toggleSchedule = () => {
    // If "Change Schedule" is clicked, open it and close the other
    setOpenSection(openSection === "schedule" ? null : "schedule");
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
      <div
        className="bg-white rounded-lg p-6 shadow-lg w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        {/* Modal Header Section */}
        <section className="grid grid-cols-6 gap-4 mb-6">
          {/* Customer Info */}
          <div className="col-span-3 flex items-center">
            <IoMdContact className="text-slate-900 mr-4" size={70} />
            <div>
              <h2 className="text-2xl font-bold">{customer.name}</h2>
              <p className="text-gray-600">{customer.email}</p>
              <p className="text-gray-600">Event: {customer.event}</p>
              <p className="text-gray-600">Date of Event: {customer.dateOfEvent}</p>
            </div>
          </div>
          {/* Status Update */}
          <div className="col-span-2">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Status</label>
              <select
                name="clientStatus"
                id="status"
                value={customer.status}
                className="border border-gray-300 rounded-md p-2 w-full"
              >
                <option value="Pending">Pending Approval</option>
                <option value="On Hold">On Hold</option>
                <option value="Confirmed">Confirmed</option>
              </select>
            </div>
          </div>
          <div className="col-span-1 flex-col">
            <label className="block text-gray-700 font-semibold mb-2">Update Changes</label>
            <button className="border border-gray-300 rounded-md p-2 w-full">
              Update
            </button>
          </div>
        </section>
        <hr className="border-gray-300 my-2" />

        <section className="mb-6 mt-20">
          {/* View Informations Toggle */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={toggleViewInformation}
          >
            <span className="text-gray-700 font-medium">View Informations</span>
            <div
              className={`transform transition-transform duration-300 ${
                openSection === "view" ? "rotate-180" : "rotate-90"
              } text-gray-700`}
            >
              &#9662;
            </div>
          </div>
          <hr className="border-gray-300 my-2" />

          {/* Collapsible Content */}
          <div
            className={`overflow-y-auto transition-all duration-500 mb-2 border-b-4 ${
              openSection === "view" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
            style={{
              maxHeight: openSection === "view" ? "24rem" : "0",
            }}
          >
            <div className="mt-4">
              <p className="text-gray-600">Details about the information...</p>
                
            </div>
          </div>

          {/* Change Schedule Toggle */}
          <div
            className="flex justify-between items-center cursor-pointer "
            onClick={toggleSchedule}
          >
            <span className="text-gray-700 font-medium">Change Schedule</span>
            <div
              className={`transform transition-transform duration-300 ${
                openSection === "schedule" ? "rotate-180" : "rotate-90"
              } text-gray-700`}
            >
              &#9662;
            </div>
          </div>
          <hr className="border-gray-300 my-2" />

          {/* Collapsible Content */}
          <div
            className={`overflow-y-auto transition-all duration-500 mb-2 border-b-4 ${
              openSection === "schedule" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
            style={{
              maxHeight: openSection === "schedule" ? "24rem" : "0",
            }}
          >
            <div className="mt-4">
              <p className="text-gray-600">Details about the information...</p>
              {[...Array(10)].map((_, index) => (
                <p key={index} className="text-gray-600">Additional data {index + 1}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Modal Footer Section */}
        <section className="flex justify-end mt-6">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
            onClick={onClose}
          >
            Close
          </button>
        </section>
      </div>
    </div>
  );
};

export default CustomerInformationModal;
