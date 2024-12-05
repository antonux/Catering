import { useState } from "react";
import {
  Search,
  Plus,
  MessageSquare,
  Eye,
  User,
  ArrowDownUp,
  ArrowUpDown,
} from "lucide-react";
import CustomerInformationModal from "./modals/CustomerInformationModal";
import InquiryForm from './modals/InquiryForm';
import { isToday, isThisWeek, isThisMonth, isThisYear } from "date-fns";

export default function Inquiry() {
  const information = [
    {
      name: "Josef Huelende Virtucio",
      email: "virtucio123@gmail.com",
      event: " Event",
      dateOfEvent: "05/12/2024",
      status: "Pending",
    },
    {
      name: "Marc Antoine Remigoso",
      email: "antoine@gmail.com",
      event: "Wedding Event",
      dateOfEvent: "10/12/2024",
      status: "On Hold",
    },
    {
      name: "Marc Antoine Remigoso",
      email: "antoine@gmail.com",
      event: "Birthday Event",
      dateOfEvent: "10/12/2024",
      status: "Confirmed",
    },
    {
      name: "Marc Antoine Remigoso",
      email: "antoine@gmail.com",
      event: "Birthday Event",
      dateOfEvent: "10/12/2024",
      status: "Confirmed",
    },
    {
      name: "Marc Antoine Remigoso",
      email: "antoine@gmail.com",
      event: "Birthday Event",
      dateOfEvent: "10/12/2024",
      status: "Confirmed",
    },
  ];

  const [viewCustomer, setViewCustomer] = useState(null);
  const [viewForm, setViewForm] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState("All Events");
  const [selectedStatus, setSelectedStatus] = useState("All Requests");
  const [dateFilter, setDateFilter] = useState("all");
  const [filterSearch, setFilterSearch] = useState("");
  const [nameSortOrder, setNameSortOrder] = useState("asc");

  const filteredInformation = information
    .filter((item) => {
      const eventDate = new Date(
        item.dateOfEvent.split("/").reverse().join("-")
      );

      const eventMatch =
        selectedEvent === "All Events" || item.event === selectedEvent;

      const statusMatch =
        selectedStatus === "All Requests" || item.status === selectedStatus;

      const dateMatch =
        dateFilter === "all" ||
        (dateFilter === "today" && isToday(eventDate)) ||
        (dateFilter === "thisWeek" && isThisWeek(eventDate)) ||
        (dateFilter === "thisMonth" && isThisMonth(eventDate)) ||
        (dateFilter === "thisYear" && isThisYear(item.dateOfEvent));

      const searchQuery = filterSearch.toLowerCase();
      const searchMatch =
        item.name.toLowerCase().includes(searchQuery) ||
        item.email.toLowerCase().includes(searchQuery);

      return eventMatch && statusMatch && dateMatch && searchMatch;
    })
    .sort((a, b) => {
      if (nameSortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-red-50 text-red-600 ring-red-600/10 ring-1";
      case "On Hold":
        return "bg-yellow-50 text-yellow-600 ring-yellow-600/10 ring-1";
      case "Confirmed":
        return "bg-green-50 text-green-600 ring-green-600/10 ring-1";
      default:
        return "bg-gray-50 text-gray-600 ring-gray-600/10 ring-1";
    }
  };

  return (
    <div className="flex flex-1 bg-white shadow-sm">
      <div className="w-full p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Inquiry Dashboard
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage your event inquiries and requests
            </p>
          </div>
          <button
            onClick={() => setViewForm(true)}
            className="inline-flex items-center gap-x-2 bg-blue-600 px-4 py-2.5 rounded-lg text-white 
                        hover:bg-blue-500 transition-colors shadow-sm"
          >
            <Plus className="h-4 w-4" />
            <span className="text-sm font-medium">New Inquiry</span>
          </button>
        </div>

        {/* Filters Section */}
        <div className="grid grid-cols-12 gap-4 mb-6">
          <div className="col-span-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                value={filterSearch}
                className="block w-full pl-10 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg 
                                placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                placeholder="Search inquiries..."
                onChange={(e) => setFilterSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="col-span-2">
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="block w-full py-2.5 px-3 text-sm border border-gray-200 rounded-lg 
                focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
            >
              <option value="all">All</option>
              <option value="today">Today</option>
              <option value="thisWeek">This Week</option>
              <option value="thisMonth">This Month</option>
              <option value="thisYear">This Year</option>
            </select>
          </div>
          <div className="col-span-2">
            <select
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.target.value)}
              className="block w-full py-2.5 px-3 text-sm border border-gray-200 rounded-lg 
                            focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
            >
              <option value="All Events">
                All Events ({information.length})
              </option>
              <option value="Birthday Event">Birthday Event</option>
              <option value="Wedding Event">Wedding Event</option>
              <option value="Corporate Event">Corporate Event</option>
            </select>
          </div>
          <div className="col-span-2">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="block w-full py-2.5 px-3 text-sm border border-gray-200 rounded-lg 
                            focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
            >
              <option value="All Requests">
                All Requests ({information.length})
              </option>
              <option value="Pending">Pending</option>
              <option value="On Hold">On Hold</option>
              <option value="Confirmed">Confirmed</option>
            </select>
          </div>
        </div>

        {/* Inquiry List */}
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <ul className="divide-y divide-gray-200">
            {filteredInformation.map((item, index) => (
              <li key={index} className="hover:bg-gray-50 transition-colors">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-lg">
                        {item.name?.[0].toUpperCase() || '?'}
                      </span>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-x-2 mt-1">
                          <span className="text-sm text-gray-500">
                            {item.event}
                          </span>
                          <span className="text-gray-300">•</span>
                          <span className="text-sm text-gray-500">
                            {item.dateOfEvent}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${getStatusStyle(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                      <div className="flex items-center gap-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-500 rounded-lg hover:bg-gray-100">
                          <MessageSquare className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => setViewCustomer(item)}
                          className="p-2 text-gray-400 hover:text-gray-500 rounded-lg hover:bg-gray-100"
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Name Sorting Section */}
        <div className="mt-4 flex justify-end items-center">
          <div className="flex items-center gap-x-2">
            <label htmlFor="name-sort" className="text-sm text-gray-600">
              Sort by Name:
            </label>
            <select
              id="name-sort"
              value={nameSortOrder}
              onChange={(e) => setNameSortOrder(e.target.value)}
              className="block py-2 px-3 text-sm border border-gray-200 rounded-lg 
                focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
            {nameSortOrder === "asc" ? (
              <ArrowUpDown className="h-5 w-5 text-gray-500" />
            ) : (
              <ArrowDownUp className="h-5 w-5 text-gray-500" />
            )}
          </div>
        </div>

        {/* Modals */}
        {viewForm && (
          <InquiryForm
            onClose={() => setViewForm(false)}
            onSubmit={(data) => console.log(data)}
          />
        )}

        {viewCustomer && (
          <CustomerInformationModal
            customer={viewCustomer}
            onClose={() => setViewCustomer(null)}
          />
        )}
      </div>
    </div>
  );
}
