import { Link } from 'react-router-dom';

const boxes = () => {

  return (
    <div className="flex justify-center gap-14 mb-32">

      <div className="font-roboto flex flex-col rounded-b-lg items-center pt-16 w-[22rem] h-[28rem] border-[#f8b021] border-t-[10px] rounded-t-lg bg-white shadow-lg transition-transform transform hover:scale-105">
        <div className="flex flex-col items-start px-16 w-full h-36">
          <h1 className="text-[1.5rem] font-roboto font-bold text-[#30313d]">Catering Requests</h1>
          <p className="text-base mt-4 leading-7 text-[#969bb1] font-normal">Planning an event? Our team offers delicious catering options and seamless service to make your occasion special.</p>
        </div>
        <div className="w-full px-11">
          <Link
            to={"/request"}
          >
            <button className="mt-32 text-base w-full py-[0.65rem] bg-[#f8b021] text-[#f2f1ed] font-light hover:border-[#c7b391] rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
              Visit request page
            </button>
          </Link>
        </div>
      </div>

      <div className="font-roboto flex flex-col rounded-b-lg items-center pt-16 w-[22rem] h-[28rem] border-[#34a853] border-t-[10px] rounded-t-lg bg-white shadow-lg transition-transform transform hover:scale-105">
        <div className="flex flex-col items-start px-16 w-full h-36">
          <h1 className="text-[1.5rem] font-roboto font-bold text-[#30313d]">Find Us on the Map</h1>
          <p className="text-base mt-4 leading-7 text-[#969bb1] font-normal">Looking for the perfect catering service? Visit us to explore our menu and discover how we can make your event unforgettable.</p>
        </div>
        <div className="w-full px-11">
          <a href="https://maps.app.goo.gl/WSWcMvXJz4HdDX4f7" target="_blank" rel="noopener noreferrer">
            <button className="mt-32 text-base w-full py-[0.65rem] bg-[#34a853] text-[#f2f1ed] font-light hover:border-[#c7b391] rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
              View location
            </button>
          </a>
        </div>
      </div>

      <div className="font-roboto flex flex-col rounded-b-lg items-center pt-16 w-[22rem] h-[28rem] border-[#0866ff] border-t-[10px] rounded-t-lg bg-white shadow-lg transition-transform transform hover:scale-105">
        <div className="flex flex-col items-start px-16 w-full h-36">
          <h1 className="text-[1.5rem] font-roboto font-bold text-[#30313d]">Connect with Us</h1>
          <p className="text-base mt-4 leading-7 text-[#969bb1] font-normal">Looking for catering inspiration? Explore our photos, menu, and reviews to see how we can make your event special.</p>
        </div>
        <div className="w-full px-11">
          <a href="https://www.facebook.com/thevirtuciocaterers" target="_blank" rel="noopener noreferrer">
            <button className="mt-32 text-base w-full py-[0.65rem] bg-[#0866ff] text-[#f2f1ed] font-light hover:border-[#c7b391] rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
              Visit facebook page
            </button>
          </a>
        </div>
      </div>

    </div>

  )
}

export default boxes;