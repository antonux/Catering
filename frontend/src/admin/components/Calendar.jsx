import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

const Calendar = ({ schedEvents, onDayClick }) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [currentMonth, setCurrentMonth] = useState(startOfToday());
  const [selectedDay, setSelectedDay] = useState(startOfToday());

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
    const eventsForDay = schedEvents.filter(
      (event) =>
        format(new Date(event.date), "yyyy-MM-dd") === format(day, "yyyy-MM-dd")
    );
    onDayClick(eventsForDay);
  };

  const hasEventsOnDay = (day) => {
    return schedEvents.some(
      (event) =>
        format(new Date(event.date), "yyyy-MM-dd") === format(day, "yyyy-MM-dd")
    );
  };

  const cn = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 border-b-2 bg-gray-50">
        <h1 className="text-2xl font-semibold text-gray-800">
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </h1>
        <div className="flex space-x-2">
          <button
            className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            onClick={prevMonth}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            onClick={nextMonth}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 bg-gray-100 border-b">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className="text-center font-semibold text-gray-600 p-2"
          >
            {day.slice(0, 3)}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 h-[calc(100%-110px)]">
        {eachDayOfMonth.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={cn(
              "relative py-2 flex flex-col items-center border-b border-r last:border-r-0",
              dayIdx > 6
            )}
          >
            <button
              type="button"
              onClick={() => handleDayClick(day)}
              className={cn(
                "relative flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300",
                isToday(day) && "bg-blue-600 text-white scale-110",
                !isToday(day) && "hover:bg-gray-200",
                !isSameMonth(day, currentMonth) && "text-gray-400",
                isEqual(day, selectedDay) && "bg-blue-600 text-white"
              )}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </button>
            {hasEventsOnDay(day) && (
              <span className="absolute top-10 h-2 w-2 rounded-full bg-green-500"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
