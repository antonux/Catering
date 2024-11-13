import React, { useEffect, useState } from "react";

const InquiryForm = () => {

  const [isDisabled, setIsDisabled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleDateUnsetClick = () => {
    const dateInput = document.getElementById('date');
    dateInput.disabled = !dateInput.disabled;
    setIsDisabled((prev) => !prev);
  };

  const getInputClass = (isDisabled) => {
    return `w-full h-11 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#a8602d] ${isDisabled ? "text-gray-400 bg-gray-100" : "bg-[#ebecee] placeholder-[#797575]"}`;
  };
  const images = [
    "/assets/customer/images/menuMango.jpg",
    "/assets/customer/images/menuCaldereta.jpg",
    "/assets/customer/images/menuHumba.jpg"
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Auto-scroll every 3 seconds
    const interval = setInterval(() => {
      handleNextImage();
    }, 3000); // 3 seconds for auto-scroll

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-start gap-16 justify-center p-6 rounded-lg mt-10 mb-[10rem]">
      {/* Form Section */}
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

      <div className="flex flex-col">
        {/* Right Panel */}
        <div className="w-[35rem] mt-10  md:ml-6 text-center md:text-left">
          <h1 className="w-full text-4xl lg:text-5xl font-sail font-normal text-[#222222]">
            <span className="text-[#a57c00]">R</span>equest a Catering Service
          </h1>
          <p className="mt-2 text-[#000000] tracking-wide text-lg font-light text-justify">
            Our catering service provides a diverse range of delicious options for
            any event, from corporate gatherings to weddings. We pride ourselves
            on using only the freshest, highest-quality ingredients to craft
            impressive dishes. Our experienced team tailors the service to meet
            your specific needs and preferences.
          </p>
        </div>
        {/* Slideshow */}
        <div className="w-[35rem] mt-10 ml-6">
      <div className="relative items-center">
        <img
          src={images[currentImageIndex]}
          alt="Slideshow Image"
          className="w-full h-[20rem] object-cover rounded-lg transition-all duration-500 ease-in-out"
        />
        <div className="absolute top-1/2 translate-y-[-1.4rem] left-0 right-0 flex justify-between px-4">
          <button
            onClick={handlePrevImage}
            className="bg-black text-white p-2 rounded-full hover:bg-gray-700 transition"
          >
            &lt;
          </button>
          <button
            onClick={handleNextImage}
            className="bg-black text-white p-2 rounded-full hover:bg-gray-700 transition"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>

      </div>
    </div>
  );
};

export default InquiryForm;