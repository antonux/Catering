import React, { useState } from "react";
import { IoMdContact } from "react-icons/io";
import { ChevronDown, X, FileText, Info } from "lucide-react";
import { format } from "date-fns";

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
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium border ${
          statusStyles[status] || ""
        }`}
      >
        {status}
      </span>
    );
  };

  const CollapsibleSection = ({
    title,
    icon: Icon,
    isOpen,
    onToggle,
    children,
  }) => (
    <div className="mb-4 border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          <Icon className="text-gray-500" size={20} />
          <span className="font-medium text-gray-700">{title}</span>
        </div>
        <ChevronDown
          className={`transform transition-transform duration-300 ease-in-out text-gray-500 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[1000px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="p-4 bg-gray-50 rounded-lg">{children}</div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden grid grid-cols-12 grid-rows-12 relative transition-all duration-300 ease-in-out">
        {/* Header */}
        <div className="col-span-12 row-span-3 p-6 border-b border-gray-100 w-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold text-lg">
                  {customer.client?.[0].toUpperCase() || "?"}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {customer.eventType}
                </h2>
                <p className="text-gray-700 mt-1">{customer.client}</p>
                <p className="text-gray-500 text-sm">{customer.email}</p>
                <div className="mt-2">
                  <StatusBadge status={customer.status} />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Date of Event</p>
                <p className="text-gray-700">
                  {customer.eventDate
                    ? format(
                        new Date(
                          customer.eventDate.split("/").reverse().join("-")
                        ),
                        "MMMM dd, yyyy"
                      )
                    : "To be determined"}
                </p>
              </div>
              <div className="flex flex-col space-y-1 ">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Update Status
                  </label>
                  <select
                    value={customer.status}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  >
                    <option value="Pending">Pending Approval</option>
                    <option value="On Hold">On Hold</option>
                    <option value="Confirmed">Confirmed</option>
                  </select>
                </div>
                <div>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-full transition-colors duration-300 z-50"
        >
          <X
            size={20}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
          />
        </button>

        {/* Content */}
        <div className="col-span-12 row-span-9 overflow-y-auto p-6">
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
            title="Contract"
            icon={FileText}
            isOpen={openSection === "contract"}
            onToggle={() => toggleSection("contract")}
          >
            <div className="space-y-4 text-gray-600">
              <p>Details about the information...</p>
            </div>
          </CollapsibleSection>
        </div>
      </div>
    </div>
  );
};

export default CustomerInformationModal;
