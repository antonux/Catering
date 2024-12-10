import SignatureCanvas from 'react-signature-canvas'
import { useRef, useState } from 'react';
import html2canvas from "html2canvas";

const ConfirmationCOA = () => {
  const sigCanvasRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false)

  const clearCanvas = () => {
    sigCanvasRef.current.clear();
  };

  const undoLastStroke = () => {
    const data = sigCanvasRef.current.toData();
    if (data.length > 0) {
      sigCanvasRef.current.fromData(data.slice(0, -1));
    }
  };

  const downloadAsImage = () => {
    const divElement = document.getElementById("captureDiv");
    if (divElement) {
      setIsDownloading(true)
      setTimeout(() => {
        html2canvas(divElement, { useCORS: true }) // Captures the div as canvas
          .then((canvas) => {
            const dataUrl = canvas.toDataURL("image/jpeg", 1.0); // Convert to image
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = "captured-div.jpeg"; // File name
            link.click(); // Trigger download
            setTimeout(() => {
              setIsDownloading(false); // Reset after 4 seconds
            }, 3000);
          })
          .catch((err) => {
            console.error("Error capturing div:", err);
          });
      }, 1000);
      console.error("Div not found!");
    }
  };

  return (
    <div>
      <div id='captureDiv' className="font-roboto flex flex-col px-24 pb-5 pt-14 w-[60rem] bg-white">
        <h1 className="font-roboto text-5xl font-bold text-[#222222] tracking-wide text-center mb-16">Contract of Agreement</h1>

        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-2">FOOD</h2>
          <p>
            If the client wishes to bring in food not prepared by VIRTUCIO CATERERS, they are
            automatically relieved from all liabilities due to food poisoning and spoilage. Any delay
            on the stated serving time or bringing home left-over food relieves the caterer from all
            liabilities if food poisoning or any problem should arise.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-2">SERVICE HOURS</h2>
          <p>
            Catering service hours are limited to a maximum of 4 hours. After which, a fee of P100.00
            per staff will be charged for every succeeding hour. This amount is payable at the end of
            the event.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-2">SERVICES</h2>
          <p>
            Services include the customary utensil requirements and setup, uniformed catering staff,
            buffet tables, skirting, buffet centerpiece, guest tables with tablecloth, table
            centerpieces, one round of soft drinks, and free cube ice intended for purified water.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-2">BREAKAGES OR LOSSES</h2>
          <p>
            The customer is responsible for the safety and security of all guests and their personal
            property. Any breakage or losses caused by the guests will be billed separately after the
            event.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-2">VENUE</h2>
          <p>
            VIRTUCIO CATERERS will serve on the ground within 30 meters from the drop-off point.
            Additional charges of P350.00 apply for every 50 persons for events held on the second
            floor or higher. The customer is responsible for securing all necessary permits, gate
            passes, authorizations, and clearances for the caterer to set up effectively.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-2">ACCIDENTS</h2>
          <p>
            In cases of unforeseen circumstances beyond the caterer’s control, such as accidents,
            fires, earthquakes, typhoons, strikes, vehicular accidents, or extraordinary traffic, the
            caterer is not held liable for any consequences that may affect the event.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-2">EQUIPMENTS</h2>
          <p>
            After the service, all equipment will be returned for inventory purposes. Leaving any
            items with the client for return the next day is not allowed.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-2">DOCUMENTATION</h2>
          <p>
            The management is allowed to take photos of the setup during the event for documentation
            purposes.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-bold mb-2">Terms and Conditions</h2>
          <ul className="list-disc list-inside">
            <li>
              This contract is effective upon giving a 50% down payment. Non-payment before the
              event/occasion reserves the right for VIRTUCIO CATERERS to cancel all services.
            </li>
            <li>Additional charge of 20% for wedding events.</li>
            <li>A cancellation fee of 25% applies if canceled 1 week before the event.</li>
            <li>A cancellation fee of 10% applies upon confirmation.</li> <li>
              For unexpected power interruptions, an additional charge of P2,500 is required as a
              generation fee for a maximum usage of 4 hours (only at the Kasadya venue).
            </li>
          </ul>
        </div>

        <div className="2bottomboxes flex justify-between">
          <div className="admin flex items-center gap-3 mb-5">
            <h1 className=''>At your Services,</h1>
            <div className='flex flex-col items-center'>
              <img className="size-[6rem] object-cover" src="/assets/customer/images/adminsign.png" alt="" />
              <div className="h-[1px] w-[13rem] bg-[#343d3f]"></div>
              <h1>Marie Joy C. Virtucio</h1>
              <h1>Marketing and Operations Manager</h1>
            </div>

          </div>
          <div className="signat flex flex-col items-center">
            <h1 className='text-center text-base font-medium mb-2 block'>I/We Accept:</h1>
            <SignatureCanvas penColor='black' ref={sigCanvasRef}
              canvasProps={{ width: 325, height: 150, className: 'sigCanvas bg-[#f8f9fd] rounded-lg border-[1px] border-[#343d3f]' }} />
            <input type="text" placeholder='Enter your full name' className='leading-8 mt-1 z-50 border-b-[1px] border-[#343d3f] focus:outline-none text-center w-2/3' />
            <p className='text-center z-0'>Signature over printed name</p>
            <div className="mt-2 space-x-2 flex">
              <button
                onClick={clearCanvas}
                className={`button-class px-6 py-[3px] bg-red-500 text-white rounded hover:bg-red-600 ${isDownloading ? "hidden" : "block"}`}
              >
                Clear
              </button>
              <button
                onClick={undoLastStroke}
                className={`button-class px-6 py-[3px] bg-blue-500 text-white rounded hover:bg-blue-600 ${isDownloading ? "hidden" : "block"}`}
              >
                Undo
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="font-roboto flex flex-col px-24 pt-14 w-[60rem] gap-6">
        <div className="box border p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Note:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>For check payment, please pay to <strong>VIRTUCIO CATERING SERVICES., INC.</strong></li>
          </ul>
          <h3 className="text-lg font-medium mt-6 mb-4">BANK DETAILS:</h3>
          <div className="flex gap-10">
            <div className='flex flex-col'>
              <span className="font-medium">Bank:</span>
              <span className="font-medium">Account Name:</span>
              <span className="font-medium">Account Number:</span>
            </div>
            <div className='flex flex-col'>
              <span className="col-span-2">UNION BANK</span>
              <span className="col-span-2">VIRTUCIO CATERING SERVICES., INC.</span>
              <span className="col-span-2">00-066-002096-8</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <h1 className='text-center italic font-medium'>Upload Contract of Agreement for verification</h1>
          <div className='flex justify-between w-full px-3 pt-6 mb-10'>
            <div>
              <button onClick={downloadAsImage}>Download Contract</button>
            </div>
            <div>
              <button>Upload Contract</button>
            </div>
          </div>
          <button className='bg-green-500 mt-10 text-white font-normal py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
            Submit Form
          </button>

        </div>
      </div>
      {/* end of div */}
    </div>
  );
};

export default ConfirmationCOA;
