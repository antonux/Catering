import * as React from 'react';
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
  sub
} from 'date-fns';

const schedEvents = [
  {
    date: '2024-11-27',
    title: 'Team Meeting',
    description: 'Discuss project updates'
  },
  {
    date: '2024-11-27',
    title: 'Client Presentation',
    description: 'Showcase the final project'
  },
  {
    date: '2024-06-01',
    title: 'Deadline for Proposal',
    description: 'Submit the proposal before the end of the day'
  }
];

const Event = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [currentMonth, setCurrentMonth] = React.useState(startOfToday());
  const [selectedDay, setSelectedDay] = React.useState(startOfToday());
  const [selectedEvents, setSelectedEvents] = React.useState([]);

  const firstDayCurrentMonth = startOfMonth(currentMonth);
  const lastDayCurrentMonth = endOfMonth(currentMonth);

  // Get all days including the ones from previous/next month to fill the calendar
  const eachDayOfMonth = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(lastDayCurrentMonth)
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
    const eventsForDay = schedEvents.filter((event) => format(new Date(event.date), 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd'));
    setSelectedEvents(eventsForDay);
  };

  const hasEventsOnDay = (day) => {
    return schedEvents.some(
      (event) => format(new Date(event.date), 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd')
    );
  };

  const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <div className="grid bg-white w-full h-screen grid-cols-12 grid-rows-6">
      <div className="col-span-4 h-screen bg-gray-200 p-4 row-span-6">
        <h2 className="text-xl font-semibold mb-4">Scheduled Events</h2>
        {selectedEvents.length > 0 ? (
          selectedEvents.map((event, index) => (
            <div key={index} className="bg-white p-4 mb-4 rounded-md shadow-md">
              <h3 className="text-lg font-medium">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
              <time dateTime={event.date} className="text-gray-500">
                {format(new Date(event.date), 'MMM d, yyyy')}
              </time>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No scheduled events for the selected date.</p>
        )}
      </div>

      {/* Main Calendar Area */}
      <div className="col-span-8 h-screen">
        <div className="bg-white h-full">
          {/* Calendar Header */}
          <div className="flex justify-between items-center p-4 border-b-2">
            <h1 className="text-2xl font-semibold">
              {format(firstDayCurrentMonth, 'MMMM yyyy')}
            </h1>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400" onClick={prevMonth}>
                Prev
              </button>
              <button className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400" onClick={nextMonth}>
                Next
              </button>
            </div>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 bg-gray-200 border-b">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="text-center font-semibold text-gray-600 p-2">
                {day.slice(0, 3)}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 h-[calc(100%-117px)]">
            {eachDayOfMonth.map((day, dayIdx) => (
              <div
                key={day.toString()}
                className={cn(
                  'relative py-2 flex flex-col items-center',
                  dayIdx > 6 
                )}
              >
                <button
                  type="button"
                  onClick={() => handleDayClick(day)}
                  className={cn(
                    'relative flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300',
                    isToday(day) && 'bg-blue-500 text-white hover:bg-blue-600',
                    !isToday(day) && 'hover:bg-gray-300',
                    !isSameMonth(day, currentMonth) && 'text-gray-400',
                    isEqual(day, selectedDay) && 'bg-blue-500 text-white hover:bg-blue-600'
                  )}
                >
                  <time dateTime={format(day, 'yyyy-MM-dd')}>
                    {format(day, 'd')}
                  </time>
                </button>
                {/* Event Indicator */}
                {hasEventsOnDay(day) && (
                  <span className="absolute top-10 h-2 w-2 rounded-full bg-green-500"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;