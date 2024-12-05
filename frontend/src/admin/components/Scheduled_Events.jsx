import React from "react";
import { format } from "date-fns";
import Birthday from "../assets/images/Birthday.png";

const Scheduled_Events = ({ selectedEvents = [] }) => {
  return (
    <>
      {selectedEvents.length > 0 ? (
        selectedEvents.map((event) => (
          <div
            key={event.date} 
            className="bg-white border border-gray-100 mb-6 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-xl hover:-translate-y-2"
          >
            <div className="relative w-full h-40 mb-4 overflow-hidden">
              <img
                src={event.image || Birthday}  
                alt={event.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="px-4 pb-4">
              <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{event.description}</p>
              <time
                dateTime={event.date}
                className="block text-sm text-gray-400 mt-2"
              >
                {format(new Date(event.date), "MMM d, yyyy")}
              </time>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center mt-10">
          No scheduled events for the selected date.
        </p>
      )}
    </>
  );
};

export default Scheduled_Events;