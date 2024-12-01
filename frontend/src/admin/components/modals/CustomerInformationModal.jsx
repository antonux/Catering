import React, { useState } from "react";
import { IoMdContact } from "react-icons/io";
import { ChevronDown, X, Calendar, Info, Clock } from "lucide-react";

const CustomerInformationModal = ({ customer, onClose }) => {
  if (!customer) return null;

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const StatusBadge = ({ status }) => {
    const statusStyles = {
      Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
      "On Hold": "bg-red-100 text-red-800 border-red-200",
      Confirmed: "bg-green-100 text-green-800 border-green-200",
    };

    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${statusStyles[status] || ''}`}>
        {status}
      </span>
    );
  };

  const CollapsibleSection = ({ title, icon: Icon, isOpen, onToggle, children }) => (
    <div className="mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          <Icon className="text-gray-500" size={20} />
          <span className="font-medium text-gray-700">{title}</span>
        </div>
        <ChevronDown
          className={`transform transition-transform duration-200 text-gray-500 ${
            isOpen ? 'rotate-180' : ''
          }`}
          size={20}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 bg-gray-50 rounded-lg mt-2">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-4">
              <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
                <IoMdContact className="text-gray-600" size={40} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{customer.event}</h2>
                <p className="text-gray-500 mt-1">{customer.name}</p>
                <div className="mt-2">
                  <StatusBadge status={customer.status} />
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-gray-700">{customer.email}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Date of Event</p>
              <p className="text-gray-700">{customer.dateOfEvent}</p>
            </div>
          </div>
        </div>

        {/* Status Update Section */}
        <div className="p-6 bg-gray-50 border-b border-gray-100">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Update Status
              </label>
              <select
                value={customer.status}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
              >
                <option value="Pending">Pending Approval</option>
                <option value="On Hold">On Hold</option>
                <option value="Confirmed">Confirmed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                &nbsp;
              </label>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Update
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <CollapsibleSection
            title="View Details"
            icon={Info}
            isOpen={openSection === "view"}
            onToggle={() => toggleSection("view")}
          >
            <div className="space-y-4 text-gray-600">
              <p>Details about the information...</p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Change Schedule"
            icon={Calendar}
            isOpen={openSection === "schedule"}
            onToggle={() => toggleSection("schedule")}
          >
            <div className="space-y-4 text-gray-600">
              <p>Details about the information...</p>
              {[...Array(10)].map((_, index) => (
                <p key={index}>Additional data {index + 1}</p>
              ))}
            </div>
          </CollapsibleSection>
        </div>
      </div>
    </div>
  );
};

export default CustomerInformationModal;