
import RequestForm from '../components/requestForm'
import RequestTextPhoto from '../components/requestTextPhoto'

const Request = () => {


  return (
    <div className="flex items-start gap-16 justify-center p-6 rounded-lg mt-10 mb-[10rem]">
      {/* Form Section (Left) */}
      <RequestForm />
      {/* Form Section */}

      {/* Right Panel */}
      <RequestTextPhoto />
      {/* Right Panel */}
    </div>
  );
};

export default Request;