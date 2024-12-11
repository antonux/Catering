import React, { useRef, useState } from "react";

const ConfirmationForm = ({FormData}) => {
  const inputRef = useRef(null);
  const startRef = useRef(null);
  const endRef = useRef(null);
  const serveRef = useRef(null);

  const [formData, setFormData] = useState({
    eventDate: "",
    eventType: "",
    clientName: "",
    clientAddress: "",
    email: "",
    mobile: "",
    theme: "",
    guests: "",
    venue: "",
    eventStart: "",
    eventEnd: "",
    foodServingTime: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target; // Use the 'id' as the key
    setFormData((prev) => ({ ...prev, [id]: value }));
    FormData(formData);
  };

  const openDatePicker = (ref) => {
    if (ref.current) {
      ref.current.showPicker(); // Programmatically opens the native datepicker
    }
  };

  const getInputClass = (isDisabled) => {
    return `w-full h-11 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#d4af37] ${isDisabled ? "text-gray-400 bg-gray-100" : "bg-[#ebecee] placeholder-[#797575]"}`;
  };

  return (
    <div id="r-form" className="w-full p-10 space-y-4">
      <div className="flex flex-col gap-3 mb-14">
        <h1 className="font-roboto text-5xl font-bold text-[#222222] tracking-wide">Event Details</h1>
        <p className="italic">*Please fill out accurately and correctly.</p>
        {/* <pre className="flex flex-wrap overflow-auto">{JSON.stringify(formData)}</pre> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-8">
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
            Event Date
          </label>
          <input
            ref={inputRef}
            id="eventDate"
            type="date"
            value={formData.eventDate}
            onChange={handleInputChange}
            min={new Date().toISOString().split("T")[0]}
            className={getInputClass(false)}
            onClick={() => openDatePicker(inputRef)}
            required
          />
        </div>
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
            Type of Event
          </label>
          <input
            id="eventType"
            type="text"
            value={formData.eventType}
            onChange={handleInputChange}
            placeholder="The type of event"
            className={getInputClass(false)}
            required
          />
        </div>
        <div>
          <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-1">
            Client/Company Name
          </label>
          <input
            id="clientName"
            type="text"
            value={formData.clientName}
            onChange={handleInputChange}
            placeholder="Your Client/Company Name"
            className={getInputClass(false)}
            required
          />
        </div>
        <div>
          <label htmlFor="clientAddress" className="block text-sm font-medium text-gray-700 mb-1">
            Client/Company Address
          </label>
          <input
            id="clientAddress"
            type="text"
            value={formData.clientAddress}
            onChange={handleInputChange}
            placeholder="Your Client/Company Address"
            className={getInputClass(false)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your email address"
            className={getInputClass(false)}
            required
          />
        </div>
        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number
          </label>
          <input
            id="mobile"
            type="number"
            value={formData.mobile}
            onChange={handleInputChange}
            placeholder="Your mobile number"
            className={getInputClass(false)}
            required
          />
        </div>
        <div>
          <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-1">
            Color Motif/Theme
          </label>
          <input
            id="theme"
            type="text"
            value={formData.theme}
            onChange={handleInputChange}
            placeholder="Your color motif/theme"
            className={getInputClass(false)}
            required
          />
        </div>
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
            Guaranteed # of Guests
          </label>
          <input
            id="guests"
            type="number"
            value={formData.guests}
            onChange={handleInputChange}
            placeholder="Guaranteed # of guests"
            className={getInputClass(false)}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="venue" className="block text-sm font-medium text-gray-700 mb-1">
          Venue of Function
        </label>
        <input
          id="venue"
          type="text"
          value={formData.venue}
          onChange={handleInputChange}
          placeholder="Your venue of function"
          className={getInputClass(false)}
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-x-6">
        <div>
          <label htmlFor="eventStart" className="block text-sm font-medium text-gray-700 mb-1">
            Event Start
          </label>
          <input
            ref={startRef}
            id="eventStart"
            type="time"
            value={formData.eventStart}
            onChange={handleInputChange}
            className={getInputClass(false)}
            onClick={() => openDatePicker(startRef)}
            required
          />
        </div>
        <div>
          <label htmlFor="eventEnd" className="block text-sm font-medium text-gray-700 mb-1">
            Event End
          </label>
          <input
            ref={endRef}
            id="eventEnd"
            type="time"
            value={formData.eventEnd}
            onChange={handleInputChange}
            className={getInputClass(false)}
            onClick={() => openDatePicker(endRef)}
            required
          />
        </div>
        <div>
          <label htmlFor="foodServingTime" className="block text-sm font-medium text-gray-700 mb-1">
            Food Serving Time
          </label>
          <input
            ref={serveRef}
            id="foodServingTime"
            type="time"
            value={formData.foodServingTime}
            onChange={handleInputChange}
            className={getInputClass(false)}
            onClick={() => openDatePicker(serveRef)}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationForm;
