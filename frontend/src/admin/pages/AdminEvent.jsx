import React, { useState } from "react";
import Birthday from "../assets/images/Birthday.png";
import Wedding from "../assets/images/Wedding.png";
import Halloween from "../assets/images/Halloween.png";
import Christmas from "../assets/images/Christmas.png";

import Scheduled_Events from "../components/Scheduled_Events";
import Calendar from "../components/Calendar";

const schedEvents = [
  {
    date: "2024-11-27",
    title: "Team Meeting",
    description: "Discuss project updates",
    image: Wedding, 
  },
  {
    date: "2024-11-28",
    title: "Client Presentation",
    description: "Showcase the final project",
    image: Halloween,
  },
  {
    date: "2024-11-29",
    title: "Deadline for Proposal",
    description: "Submit the proposal before the end of the day",
    image: Christmas,
  },
];

const AdminEvent = () => {
  const [selectedEvents, setSelectedEvents] = useState([]);

  const handleDayClick = (events) => {
    setSelectedEvents(events);
  };

  return (
    <div className="grid bg-gray-100 w-full h-screen grid-cols-12 grid-rows-12 font-inter">
      <div className="col-span-12 bg-gradient-to-r from-blue-600 to-indigo-700 p-4 row-span-2 flex items-center relative overflow-hidden shadow-md">
        <h1 className="text-white text-3xl font-bold tracking-tight z-10">
          Calendar of Events
        </h1>
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
          src={Christmas}
          alt="Christmas Background"
        />
      </div>

      <div className="col-span-4 h-full bg-white/80 backdrop-blur-sm p-6 row-span-10 overflow-y-auto border-r border-gray-200 shadow-lg">
        <div className="flex justify-between items-center pb-5 border-b border-gray-200 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Scheduled Events
          </h2>
        </div>
        <Scheduled_Events selectedEvents={selectedEvents} />
      </div>

      <div className="col-span-8 h-full row-span-10">
        <div className="bg-white h-full shadow-lg">
          <Calendar
            schedEvents={schedEvents}
            onDayClick={handleDayClick}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminEvent;