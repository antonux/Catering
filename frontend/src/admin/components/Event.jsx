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
  isToday
} from 'date-fns';

const Event = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = startOfToday();
  const firstDayCurrentMonth = startOfMonth(today);
  const lastDayCurrentMonth = endOfMonth(today);
  
  // Get all days including the ones from previous/next month to fill the calendar
  const eachDayOfMonth = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(lastDayCurrentMonth)
  });

  // Helper function to combine class names
  const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <div className="grid bg-white w-full h-screen grid-cols-12">
      <div className="col-span-4 h-screen bg-slate-200 p-4">
        <h2 className="text-xl font-semi-bold mb-4">Events</h2>
        <button className="bg-gradient-to-t from-amber-400 to-orange-600 p-2 rounded-lg hover:bg-black text-white">
          Add Event
        </button>
      </div>

      {/* Main Calendar Area */}
      <div className="col-span-8 h-screen">
        <div className="bg-white h-full">
          {/* Calendar Header */}
          <div className="flex justify-between items-center p-4 border-b-2">
            <h1 className="text-2xl font-semibold">{format(today, 'MMMM yyyy')}</h1>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                Prev
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                Next
              </button>
            </div>
          </div>

          {/* Days of Week Header */}
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

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 h-[calc(100%-117px)]">
            {eachDayOfMonth.map((day, dayIdx) => (
              <div
                key={day.toString()}
                className={cn(
                  'relative py-2',
                  dayIdx > 6 && 'border-t border-gray-200'
                )}
              >
                <button
                  type="button"
                  className={cn(
                    'mx-auto flex h-8 w-8 items-center justify-center rounded-full',
                    isToday(day) && 'bg-blue-500 text-white hover:bg-blue-600',
                    !isToday(day) && 'hover:bg-gray-100',
                    !isSameMonth(day, today) && 'text-gray-400'
                  )}
                >
                  <time dateTime={format(day, 'yyyy-MM-dd')}>
                    {format(day, 'd')}
                  </time>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;