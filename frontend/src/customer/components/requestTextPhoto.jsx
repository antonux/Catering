import React, { useEffect, useState } from "react";

const requestTextPhoto = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

      <div className="flex flex-col">
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

  )
}

export default requestTextPhoto