import React, { useState } from "react";
import Birthday from "../assets/images/Birthday.png";
import Wedding from "../assets/images/Wedding.png";
import Halloween from "../assets/images/Halloween.png";
import Christmas from "../assets/images/Christmas.png";
import Scheduled_Events from "../components/Scheduled_Events";
import Calendar from "../components/Calendar";
import { isToday, parseISO } from "date-fns";

const schedEvents = [
  {
    name: "Josef Huelende Virtucio",
    email: "virtucio123@gmail.com",
    event: "Wedding Event",
    date: "2024-12-08T17:30:00", // ISO Format
    status: "Pending",
  },
  {
    name: "Marc Antoine Remigoso",
    email: "antoine@gmail.com",
    event: "Wedding Event",
    date: "2024-12-09T17:30:00",
    status: "On Hold",
  },
  {
    name: "Marc Antoine Remigoso",
    email: "antoine@gmail.com",
    event: "Birthday Event",
    date: "2024-12-19T17:30:00",
    status: "Confirmed",
  },
  {
    name: "Marc Antoine Remigoso",
    email: "antoine@gmail.com",
    event: "Birthday Event",
    date: "2024-12-10T17:30:00",
    status: "Confirmed",
  },
  {
    name: "Marc Antoine Remigoso",
    email: "antoine@gmail.com",
    event: "Birthday Event",
    date: "2024-12-10T17:30:00",
    status: "Confirmed",
  },
];

const todayEvents = schedEvents.filter(event => isToday(parseISO(event.date)))
const upcomingEvents = schedEvents.filter(event => !isToday(parseISO(event.date)))

const AdminEvent = () => {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const handleDayClick = (events) => {
    setSelectedEvents(events);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-white font-inter">
      {/* Header */}
      {/* <div className="relative h-14 flex items-center justify-start pl-5"> */}
        {/* <h1 className="text-black text-2xl font-bold tracking-tight z-10 relative ">
          Calendar of Events
        </h1> */}
        {/* <img
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src={Christmas}
          alt="Christmas Background"
        /> */}
      {/* </div> */}

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Calendar */}
        <div className="flex-1">
          <div className="bg-white h-full shadow-lg">
            <Calendar schedEvents={schedEvents} onDayClick={handleDayClick} />
          </div>
        </div>

        <div className="h-full w-80 bg-white/80 backdrop-blur-sm overflow-y-auto  border-r border-gray-200 shadow-lg">
          <div className="flex justify-between items-center border-gray-200">
          </div>
          <Scheduled_Events selectedEvents={selectedEvents} events={todayEvents} upcoming = {upcomingEvents} />
        </div>
      </div>
    </div>
  );
};

export default AdminEvent;
