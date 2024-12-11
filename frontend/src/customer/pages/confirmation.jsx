import ConfirmationForm from '../components/confirmationForm'
import ConfirmationMenu from '../components/confirmationMenu'
import ConfirmationCOA from '../components/confirmationCOA'

import React, { useState } from "react";

const InquiryForm = () => {
  const [formData, setFormData] = useState({});
  const [menuData, setMenuData] = useState({});
  const [coaData, setCoaData] = useState({});

  const GetFormData = (updatedData) => {
    setFormData(updatedData); 
  };

  const GetMenuData = (updatedData) => {
    setMenuData(updatedData); 
  };

  const GetCoaData = (updatedData) => {
    setCoaData(updatedData); 
  };

  return (

    <div className="flex gap-16 justify-center p-6 rounded-lg mt-10 mb-[10rem]">

      <form className="w-[60rem] flex flex-col items-center bg-white p-14 rounded-lg shadow-lg space-y-4">

        {/* Event Details Section */}
        <ConfirmationForm FormData={GetFormData} />
        {/* Event Details Section */}

        {/* Confirmation Menu Section */}
        <ConfirmationMenu MenuData={GetMenuData} />
        {/* Confirmation Menu Section */}

        {/* Confirmation Menu Section */}
        <ConfirmationCOA />
        {/* Confirmation Menu Section */}

        <button className='bg-green-500 mt-10 text-white font-normal py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
          Submit Form
        </button>
      </form>

    </div>

  );
};

export default InquiryForm;