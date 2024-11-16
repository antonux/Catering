import { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import CustomerInformationModal from "./modals/CustomerInformationModal";

export default function Inquiry() {
    const information = [
        {
            name: "Marc Antoine Remigoso",
            email: "antoine@gmail.com",
            event: "Birthday Event",
            dateOfEvent: "10/12/2024",
            status: "Pending",
        },
        {
            name: "Marc Antoine Remigoso",
            email: "antoine@gmail.com",
            event: "Birthday Event",
            dateOfEvent: "10/12/2024",
            status: "On Hold",
        },
        {
            name: "Marc Antoine Remigoso",
            email: "antoine@gmail.com",
            event: "Birthday Event",
            dateOfEvent: "10/12/2024",
            status: "Confirmed",
        },
    ];

    const [viewCustomer, setViewCustomer] = useState(null);

    const [selectedEvent, setSelectedEvent] = useState("All Events");
    const [selectedStatus, setSelectedStatus] = useState("All Requests");

    const filteredInformation = information.filter((item) => {
        const eventMatch = selectedEvent === "All Events" || item.event === selectedEvent;
        const statusMatch = selectedStatus === "All Requests" || item.status === selectedStatus;
        return eventMatch && statusMatch;
    });

    return (
        <div className="flex flex-1 m-2 bg-white p-4 w-96 h-[712px]">
            <div className="relative w-full m-4">
                {/* Header */}
                <div className="flex justify-between items-center gap-x-4 mb-10">
                    <h1 className="font-sans font-bold text-4xl text-gray-800">Inquiry</h1>
                    <button
                        className="w-auto h-10 bg-slate-800 flex items-center justify-center 
                                    space-x-2 text-white font-sans font-normal text-md ml-2 p-2 
                                    rounded-lg hover:bg-slate-500"
                    >
                        <FaPlus size={20} />
                        <span>Create Form</span>
                    </button>

                </div>

                {/* Filters */}
                <div className="flex justify-between w-full m-4">
                    <div className="flex space-x-4 items-center">
                        {/* Search */}
                        <div className="flex items-center border border-b-gray-600 rounded-lg p-2 bg-white shadow-sm w-64">
                            <FaSearch />
                            <input
                                type="text"
                                placeholder="Search"
                                className="ml-2 bg-transparent focus:outline-none text-gray-600 w-full"
                            />
                        </div>

                        {/* Event Filter */}
                        <div className="relative inline-flex items-center">
                            <select
                                value={selectedEvent}
                                onChange={(e) => setSelectedEvent(e.target.value)}
                                className="border border-gray-300 rounded-md font-sans text-gray-600 h-10 pl-3 pr-8 appearance-none bg-white"
                            >
                                <option value="All Events">All Events ({information.length})</option>
                                <option value="Birthday Event">Birthday Event</option>
                                <option value="Wedding Event">Wedding Event</option>
                            </select>
                            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-600">▼</span>
                        </div>

                        {/* Status Filter */}
                        <div className="relative inline-flex items-center">
                            <select
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value)}
                                className="border border-gray-300 rounded-md font-sans text-gray-600 h-10 pl-3 pr-8 appearance-none bg-white"
                            >
                                <option value="All Requests">All Requests ({information.length})</option>
                                <option value="Pending">Pending</option>
                                <option value="On Hold">On Hold</option>
                                <option value="Confirmed">Confirmed</option>
                            </select>
                            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-600">▼</span>
                        </div>
                    </div>
                </div>

                {/* Inquiry List */}
                <div className="flex">
                    <ul className="overflow-y-auto w-full h-[490px] mt-7 z-0">
                        {filteredInformation.map((item, index) => (
                            <li
                                key={index}
                                className="border-2 shadow-lg py-2 pl-4 m-3 rounded-lg hover:bg-gray-100"
                                onClick={() => console.log("Clicked:", item)}
                            >
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-3">
                                        <IoMdContact className="text-slate-900" size={70} />
                                        <div className="text-start">
                                            <button className="font-sans font-bold">{item.event}</button>
                                            <p className="text-sm text-gray-600">{item.name}</p>
                                            <div className="inline-flex">
                                                <p className="text-sm text-gray-500">{item.dateOfEvent}</p>
                                                <button
                                                    className={`px-4 rounded-lg text-sm ${
                                                        item.status === "Pending"
                                                            ? "text-red-400 hover:text-red-600"
                                                            : item.status === "On Hold"
                                                            ? "text-yellow-500 hover:text-yellow-700"
                                                            : "text-green-400 hover:text-green-600"
                                                    } hover:underline`}
                                                >
                                                    {item.status || "No Status"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inline-flex">
                                        <button className="text-sky-600 mr-4 hover:underline hover:text-sky-800">
                                            Message
                                        </button>
                                        <button className="flex items-center justify-center h-8 bg-slate-800 text-white
                                                         px-8 rounded-md mr-10 hover:bg-bg_ten hover:text-black"
                                                onClick={() => setViewCustomer(item)}>
                                            View
                                        </button>   
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            

            {/* View Modal informations*/}
            {
                viewCustomer && 
                <CustomerInformationModal customer={viewCustomer} onClose={() => setViewCustomer(null)}/> 
            }
            
        </div>


        
    );
}
