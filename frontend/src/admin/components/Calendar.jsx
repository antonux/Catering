import React, { useState } from "react";
import {
  format,
  startOfToday,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isToday,
  isEqual,
  add,
  sub,
} from "date-fns";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  CalendarDays,
  CalendarRange,
  Clock,
  Dot,
} from "lucide-react";

const CalendarSchedule = ({ schedEvents, onDayClick }) => {
  const [currentMonth, setCurrentMonth] = useState(startOfToday());
  const [selectedDay, setSelectedDay] = useState(startOfToday());
  const [selectedView, setSelectedView] = useState("monthly");

  const firstDayCurrentMonth = startOfMonth(currentMonth);
  const lastDayCurrentMonth = endOfMonth(currentMonth);

  const eachDayOfMonth = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(lastDayCurrentMonth),
  });

  const prevMonth = () => {
    const firstDayPrevMonth = sub(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(firstDayPrevMonth);
    setSelectedDay(firstDayPrevMonth);
  };

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(firstDayNextMonth);
    setSelectedDay(firstDayNextMonth);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    const eventsForDay = schedEvents.filter((event) => {
      const eventDate = new Date(
        event.date.includes("T") ? event.date.split("T")[0] : event.date
      );
      return format(eventDate, "yyyy-MM-dd") === format(day, "yyyy-MM-dd");
    });
    onDayClick(eventsForDay);
  };

  const handleViewChange = (e) => {
    setSelectedView(e.target.value);
    console.log("Selected view:", e.target.value);
  };

  const hasEventsOnDay = (day) => {
    return schedEvents.some((event) => {
      const eventDate = new Date(
        event.date.includes("T") ? event.date.split("T")[0] : event.date
      );
      return format(eventDate, "yyyy-MM-dd") === format(day, "yyyy-MM-dd");
    });
  };

  // View icons mapping
  const ViewIcons = {
    daily: CalendarDays,
    weekly: CalendarRange,
    monthly: Calendar,
    schedule: Clock,
  };

  const SelectedViewIcon = ViewIcons[selectedView];

  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden">
      {/* Month Navigation */}
      <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="flex items-center">
          <button
            onClick={prevMonth}
            className="hover:bg-white/20 rounded-full p-1 transition-colors group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextMonth}
            className="hover:bg-white/20 rounded-full p-1 transition-colors group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          <h2 className="text-2xl font-semibold tracking-wide">
            {format(firstDayCurrentMonth, "MMMM yyyy")}
          </h2>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <select
              value={selectedView}
              onChange={handleViewChange}
              className="appearance-none bg-transparent border border-white/30 text-white px-4 py-2 rounded-md pr-8 focus:outline-none focus:ring-2 focus:ring-white/50 font-medium"
            >
              <option value="daily" className="text-gray-800">
                Day
              </option>
              <option value="weekly" className="text-gray-800">
                Week
              </option>
              <option value="monthly" className="text-gray-800">
                Month
              </option>
              <option value="schedule" className="text-gray-800">
                Schedule
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <SelectedViewIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-500 py-3 bg-blue-50 border-b">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="uppercase">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 flex-1 gap-1 p-2">
        {eachDayOfMonth.map((day) => (
          <button
            key={day.toISOString()}
            onClick={() => handleDayClick(day)}
            className={`
              relative flex flex-col justify-between
              h-24 w-full rounded-lg
              text-sm font-medium
              transition-all duration-200 ease-in-out overflow-hidden
              ${
                isToday(day)
                  ? "bg-blue-100 text-blue-600 font-bold"
                  : !isSameMonth(day, currentMonth)
                  ? "text-gray-300"
                  : "text-gray-700 hover:bg-blue-50"
              }
              ${isEqual(day, selectedDay) ? "ring-2 ring-blue-500" : ""}
              focus:outline-none
            `}
          >
            <span className="self-center font-semibold">
              {format(day, "d")}
            </span>

            {/* Render events only for the current day */}
            {hasEventsOnDay(day) && (
              <div className="absolute bottom-1 left-0 right-0 flex flex-col items-start w-full px-1 space-y-0.5">
                {schedEvents
                  .filter((event) => {
                    const eventDate = new Date(
                      event.date.includes("T")
                        ? event.date.split("T")[0]
                        : event.date
                    );
                    return (
                      format(eventDate, "yyyy-MM-dd") ===
                      format(day, "yyyy-MM-dd")
                    );
                  })
                  .slice(0, 3) // Limit to 3 events
                  .map((event, index) => (
                    <div
                      key={index}
                      className={`
            w-full flex items-center px-1 py-0.5 text-left 
            text-[10px] truncate rounded-sm hover:scale-105 hover:shadow-md
            ${
              event.event.toLowerCase().includes("wedding")
                ? "bg-blue-500 text-white"
                : event.event.toLowerCase().includes("birthday")
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-800"
            }
          `}
                    >
                      <Dot
                        className="w-2 h-2 flex-shrink-0 text-green-600 mr-1"
                        size={8}
                      />
                      <span className="truncate">{event.event}</span>
                    </div>
                  ))}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalendarSchedule;
