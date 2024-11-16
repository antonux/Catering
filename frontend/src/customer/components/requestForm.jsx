import React, { useState } from "react";

const requestForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleDateUnsetClick = () => {
    const dateInput = document.getElementById('date');
    dateInput.disabled = !dateInput.disabled;
    setIsDisabled((prev) => !prev);
  };

  const getInputClass = (isDisabled) => {
    return `w-full h-11 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#d4af37] ${isDisabled ? "text-gray-400 bg-gray-100" : "bg-[#ebecee] placeholder-[#797575]"}`;
  };

  return (
      <form
        id="r-form"
        className="w-[35rem] bg-white p-14 rounded-lg shadow-lg space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Event Date
              </label>
              <div className="flex items-center gap-1 mb-1">
                <input
                  type="checkbox"
                  id="date-unset"
                  name="date"
                  value="date"
                  onClick={handleDateUnsetClick}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <label
                  htmlFor="date-unset"
                  className="text-sm font-medium text-gray-700"
                >
                  To be determined
                </label>
              </div>
            </div>
            <input
              id="date"
              type="date"
              min="2024-01-01"
              className={`${getInputClass(isDisabled)}`}
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
              htmlFor="people"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Number of People
            </label>
            <input
              id="people"
              type="number"
              placeholder="Your number of people"
              className={`${getInputClass()}`}
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
        </div>
        <div>
          <label
            htmlFor="event-address"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Event Address
          </label>
          <input
            id="event-address"
            type="text"
            placeholder="Your event address"
            className={`${getInputClass()}`}
            required
          />
        </div>

        {/* Optional Message */}
        <div>
          <label
            htmlFor="optional-message-request"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Optional Message
          </label>
          <textarea
            id="optional-message-request"
            rows="3"
            placeholder="Give a message"
            className={`${getInputClass()} placeholder-[#797575] h-24`}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#383635] text-white p-2 h-11 rounded hover:bg-[#4d4d4d] transition"
        >
          Submit
        </button>
      </form>
  )
}

export default requestForm;