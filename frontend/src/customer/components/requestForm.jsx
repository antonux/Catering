import React, { useState } from "react";

const RequestForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState({
    eventDate: "",
    email: "",
    client: "",
    numberOfPeople: "",
    mobileNumber: "",
    eventType: "",
    eventAddress: "",
    optionalMessage: "",
    status: "pending",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch('http://localhost:4000/api/info', {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      })

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      console.log("Submission successful:", json);
      setFormData({
        eventDate: "",
        email: "",
        client: "",
        numberOfPeople: "",
        mobileNumber: "",
        eventType: "",
        eventAddress: "",
        optionalMessage: "",
        status: "pending",
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  const getInputClass = (isDisabled) => {
    return `w-full h-11 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#d4af37] ${isDisabled ? "text-gray-400 bg-gray-100" : "bg-[#ebecee] placeholder-[#797575]"}`;
  };

  const handleDateUnsetClick = () => {
    const dateInput = document.getElementById('date');
    dateInput.disabled = !dateInput.disabled;
    setIsDisabled((prev) => !prev);
  };

  return (
    <form
      id="r-form"
      onSubmit={handleSubmit}
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
            value={formData.email}
            onChange={handleInputChange}
            className={getInputClass()}
            required
          />
        </div>
        <div>
          <label
            htmlFor="client"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Client/Company Name
          </label>
          <input
            id="client"
            type="text"
            placeholder="Your Client/Company Name"
            value={formData.client}
            onChange={handleInputChange}
            className={getInputClass()}
            required
          />
        </div>
        <div>
          <label
            htmlFor="numberOfPeople"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Number of People
          </label>
          <input
            id="numberOfPeople"
            type="number"
            placeholder="Your number of people"
            value={formData.numberOfPeople}
            onChange={handleInputChange}
            className={getInputClass()}
            required
          />
        </div>
        <div>
          <label
            htmlFor="mobileNumber"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mobile Number
          </label>
          <input
            id="mobileNumber"
            type="tel"
            placeholder="Your mobile number"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            className={getInputClass()}
            required
          />
        </div>
        <div>
          <label
            htmlFor="eventType"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Type of Event
          </label>
          <input
            id="eventType"
            type="text"
            placeholder="The type of event"
            value={formData.eventType}
            onChange={handleInputChange}
            className={getInputClass()}
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="eventAddress"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Event Address
        </label>
        <input
          id="eventAddress"
          type="text"
          placeholder="Your event address"
          value={formData.eventAddress}
          onChange={handleInputChange}
          className={getInputClass()}
          required
        />
      </div>

      <div>
        <label
          htmlFor="optionalMessage"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Optional Message
        </label>
        <textarea
          id="optionalMessage"
          rows="3"
          placeholder="Give a message"
          value={formData.optionalMessage}
          onChange={handleInputChange}
          className={`${getInputClass()} h-24`}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-[#383635] text-white p-2 h-11 rounded hover:bg-[#4d4d4d] transition"
      >
        Submit
      </button>
    </form>
  );
};

export default RequestForm;
