import React, { useState } from "react";
import { format, isToday } from "date-fns";
import {
  Clock,
  Plus,
  ChevronDown,
  ChevronUp,
  Dot,
  MapPin,
  Edit3,
} from "lucide-react";

const Scheduled_Events = ({ selectedEvents = [], events, upcoming }) => {
  const [isTodayExpanded, setIsTodayExpanded] = useState(false);
  const [isUpcomingExpanded, setIsUpcomingExpanded] = useState(false);

  const toggleTodaySection = () => {
    setIsTodayExpanded(!isTodayExpanded);
  };

  const toggleUpcomingSection = () => {
    setIsUpcomingExpanded(!isUpcomingExpanded);
  };

  return (
    <div className="flex flex-col h-full w-full overflow-y-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 flex-shrink-0">
        <h2 className="text-xl font-semibold text-gray-800">Events</h2>
        <button className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg hover:from-blue-500 hover:to-blue-700 focus:ring-2 focus:ring-blue-300 transition-all">
          <Plus size={20} className="text-white" />
          Create
        </button>
      </div>

      {/* Today's Events Section */}
      <div className="border-b border-gray-200 flex-shrink-0">
        <div
          onClick={toggleTodaySection}
          className="px-4 py-3 bg-blue-50 flex items-center justify-between cursor-pointer hover:bg-blue-100 transition-colors"
        >
          <div>
            <h3 className="flex items-center text-sm font-medium text-black/75 space-x-2">
              <span className="pr-4 border-r-2 border-black/40">Today</span>
              <span className="flex items-center">
                <span>{format(new Date(), "MMM. d")}</span>
              </span>
            </h3>
          </div>
          <div className="flex items-center">
            <Dot
              size={30}
              className={`${
                events.length > 0
                  ? "text-green-600 animate-pulse"
                  : "text-gray-300"
              }`}
            />
            <p className="ml-1 text-sm">{events.length}</p>
            {isTodayExpanded ? (
              <ChevronUp className="text-blue-800 ml-2" size={20} />
            ) : (
              <ChevronDown className="text-blue-800 ml-2" size={20} />
            )}
          </div>
        </div>

        {isTodayExpanded && (
          <div className="flex-1 overflow-y-auto space-y-4 p-4">
            {events.length > 0 ? (
              events.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300 ease-in-out flex items-center justify-between px-4 py-3"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-sm text-orange-600 font-medium">
                        {format(new Date(event.date), "EEE")}
                      </p>
                      <p className="text-2xl font-bold text-orange-600">
                        {format(new Date(event.date), "d")}
                      </p>
                    </div>
                    <div className="w-px h-10 bg-gray-300"></div>
                    {/* Event Info */}
                    <div>
                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <Clock className="w-4 h-4 mr-1 text-gray-400" />
                        {format(new Date(event.date), "HH:mm")}

                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                        {event.venue || "N/A"}
                      </div>
                    </div>
                  </div>

                  <button className="text-gray-500 hover:text-blue-600 transition-all duration-200">
                    <Edit3 className="w-5 h-5" />
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-8">
                No events scheduled for today
              </div>
            )}
          </div>
        )}
      </div>

      {/* Upcoming Events Section */}
      <div className="bg-gray-50 border-t border-gray-200 flex-shrink-0">
        <div
          onClick={toggleUpcomingSection}
          className="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <div>
            <h3 className="flex items-center text-sm font-medium text-black/75 space-x-2">
              <span>Upcoming</span>
            </h3>
          </div>
          <div className="flex items-center">
            <Dot
              size={30}
              className={`${
                upcoming.length > 0
                  ? "text-orange-600 animate-pulse"
                  : "text-gray-300"
              }`}
            />
            <p className="ml-1 text-sm">{upcoming.length}</p>
            {isUpcomingExpanded ? (
              <ChevronUp className="text-blue-800 ml-2" size={20} />
            ) : (
              <ChevronDown className="text-blue-800 ml-2" size={20} />
            )}
          </div>
        </div>

        {isUpcomingExpanded && (
          <div className="p-4 flex-1 overflow-y-auto space-y-4">
            {upcoming.length > 0 ? (
              upcoming.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300 ease-in-out flex items-center justify-between px-4 py-3"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-sm text-orange-600 font-medium">
                        {format(new Date(event.date), "EEE")}
                      </p>
                      <p className="text-2xl font-bold text-orange-600">
                        {format(new Date(event.date), "d")}
                      </p>
                    </div>
                    <div className="w-px h-10 bg-gray-300"></div>
                    {/* Event Info */}
                    <div>
                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <Clock className="w-4 h-4 mr-1 text-gray-400" />
                        {format(new Date(event.date), "HH:mm")}

                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                        {event.venue || "N/A"}
                      </div>
                    </div>
                  </div>

                  <button className="text-gray-500 hover:text-blue-600 transition-all duration-200">
                    <Edit3 className="w-5 h-5" />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-8">
                No upcoming events
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Scheduled_Events;
