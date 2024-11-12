import React from 'react';

const InquiryForm = () => {

  const [isDisabled, setIsDisabled] = React.useState(false);

  const handleDateUnsetClick = () => {
    const dateInput = document.getElementById('date');
    dateInput.disabled = !dateInput.disabled;
    setIsDisabled((prev) => !prev);
  };

  const getInputClass = (isDisabled) => {
    return `w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDisabled ? "text-gray-400 bg-gray-100" : ""
      }`;
  };

  return (
    <div className="flex items-center justify-center p-6 bg-blue-300 rounded-lg shadow-md mt-10 mb-[10rem]">
      {/* Form Section */}
      <form
        id="r-form"
        className="w-[35rem] bg-white p-14 rounded-lg shadow-md space-y-4"
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
              className={getInputClass(isDisabled)}
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
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>


        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>

      {/* Right Panel */}
      <div className="md:w-1/3 w-full mt-6 md:mt-0 md:ml-6 text-center md:text-left">
        <h1 className="text-2xl font-bold text-gray-800">
          Request a Catering Service
        </h1>
        <p className="mt-2 text-gray-600">
          Our catering service provides a diverse range of delicious options for
          any event, from corporate gatherings to weddings. We pride ourselves
          on using only the freshest, highest-quality ingredients to craft
          impressive dishes. Our experienced team tailors the service to meet
          your specific needs and preferences.
        </p>
      </div>
    </div>
  );
};

export default InquiryForm;
