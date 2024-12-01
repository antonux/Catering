import ConfirmationForm from '../components/confirmationForm'
import ConfirmationMenu from '../components/confirmationMenu'

const InquiryForm = () => {

  return (

    <div className="flex gap-16 justify-center p-6 rounded-lg mt-10 mb-[10rem]">

      <div className="w-[60rem] flex flex-col items-center bg-white p-14 rounded-lg shadow-lg space-y-4">

        {/* Event Details Section */}
        <ConfirmationForm />
        {/* Event Details Section */}

        {/* Confirmation Menu Section */}
        <ConfirmationMenu />
        {/* Confirmation Menu Section */}

      </div>

    </div>

  );
};

export default InquiryForm;