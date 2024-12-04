import React, { useRef } from "react";

const confirmationForm = () => {
  const inputRef = useRef(null);
  const startRef = useRef(null);
  const endRef = useRef(null);
  const serveRef = useRef(null);

  const openDatePicker = (ref) => {
    if (ref.current) {
      ref.current.showPicker(); // Programmatically opens the native datepicker
    }
  };

  const getInputClass = (isDisabled) => {
    return `w-full h-11 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#d4af37] ${isDisabled ? "text-gray-400 bg-gray-100" : "bg-[#ebecee] placeholder-[#797575]"}`;
  };

  return (
    <>
      <form
        id="r-form"
        className="w-full p-10 space-y-4"
      >
        <div className="flex flex-col gap-3 mb-14">
          <h1 className="font-roboto text-5xl font-bold text-[#222222] tracking-wide">Event Details</h1>
          <p className="italic">*Please fill out accurately and correctly.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-8">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Event Date
            </label>
            <input
              ref={inputRef}
              id="date"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className={`${getInputClass()}`}
              onClick={() => openDatePicker(inputRef)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="event-type"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Type of Event
            </label>
            <input
              id="event-type"
              type="text"
              placeholder="The type of event"
              className={`${getInputClass()}`}
              required
            />
          </div>
          <div>
            <label
              htmlFor="client-name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Client/Company Name
            </label>
            <input
              id="client-name"
              type="text"
              placeholder="Your Client/Company Name"
              className={`${getInputClass()}`}
              required
            />
          </div>
          <div>
            <label
              htmlFor="client-address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Client/Company Address
            </label>
            <input
              id="client-address"
              type="text"
              placeholder="Your Client/Company Address"
              className={`${getInputClass()}`}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email address"
              className={`${getInputClass()} bg-[#ebecee] placeholder-[#797575]`}
              required
            />
          </div>
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile Number
            </label>
            <input
              id="mobile"
              type="number"
              placeholder="Your mobile number"
              className={`${getInputClass()}`}
              required
            />
          </div>
          <div>
            <label
              htmlFor="theme"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Color Motif/Theme
            </label>
            <input
              id="theme"
              type="text"
              placeholder="Your color motif/theme"
              className={`${getInputClass()}`}
              required
            />
          </div>
          <div>
            <label
              htmlFor="people"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Guaranteed # of guest
            </label>
            <input
              id="people"
              type="number"
              placeholder="Guaranteed # of guest"
              className={`${getInputClass()}`}
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="event-address"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Venue of function
          </label>
          <input
            id="event-address"
            type="text"
            placeholder="Your venue of function"
            className={`${getInputClass()}`}
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-x-6">
          <div>
            <label
              htmlFor="event-start"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Event Start
            </label>
            <input
              ref={startRef}
              id="event-start"
              type="time"
              placeholder=""
              className={`${getInputClass()}`}
              onClick={() => openDatePicker(startRef)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="event-end"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Event End
            </label>
            <input
              ref={endRef}
              id="event-end"
              type="time"
              placeholder=""
              className={`${getInputClass()}`}
              onClick={() => openDatePicker(endRef)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="event-serve"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Food Serving Time
            </label>
            <input
              ref={serveRef}
              id="event-serve"
              type="time"
              placeholder=""
              className={`${getInputClass()}`}
              onClick={() => openDatePicker(serveRef)}
              required
            />
          </div>
        </div>

        {/* Optional Message */}

        {/* Submit Button */}
        {/* <button
          type="submit"
          className="w-full bg-[#383635] text-white p-2 h-11 rounded hover:bg-[#4d4d4d] transition"
        >
          Submit
        </button> */}
      </form>
    </>
  )
}

export default confirmationForm;