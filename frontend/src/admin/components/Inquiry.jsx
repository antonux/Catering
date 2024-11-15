import { useState } from "react";
import { HiChatAlt2 } from "react-icons/hi";
import { IoIosCreate, IoMdContact } from "react-icons/io";
import { FaPlus, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import InquiryForm from "./InquiryForm";

export default function Inquiry() {
    const information = [
        {
            name: "Marc Antoine Remigoso",
            email: "antoine@gmail.com",
            event: "Birthday Event",
            dateOfEvent: "10/12/2024",
            status: "Pending"
        },
        {
            name: "Marc Antoine Remigoso",
            email: "antoine@gmail.com",
            event: "Birthday Event",
            dateOfEvent: "10/12/2024",
            status: "Pending"
        },
        {
            name: "Marc Antoine Remigoso",
            email: "antoine@gmail.com",
            event: "Birthday Event",
            dateOfEvent: "10/12/2024",
            status: ""
        },
        {
            name: "Marc Antoine Remigoso",
            email: "antoine@gmail.com",
            event: "Birthday Event",
            dateOfEvent: "10/12/2024",
            status: ""
        },
        {
            name: "Marc Antoine Remigoso",
            email: "antoine@gmail.com",
            event: "Birthday Event",
            dateOfEvent: "10/12/2024",
            status: "Pending"
        },
        {
            name: "Marc Antoine Remigoso",
            email: "antoine@gmail.com",
            event: "Birthday Event",
            dateOfEvent: "10/12/2024",
            status: "Pending"
        },
        {
            name: "Marc Antoine Remigoso",
            email: "antoine@gmail.com",
            event: "Birthday Event",
            dateOfEvent: "10/12/2024",
            status: "Pending"
        },
        {
            name: "Marc Antoine Remigoso",
            email: "antoine@gmail.com",
            event: "Birthday Event",
            dateOfEvent: "10/12/2024",
            status: "Pending"
        },
        {
            name: "Marc Antoine Remigoso",
            email: "antoine@gmail.com",
            event: "Birthday Event",
            dateOfEvent: "10/12/2024",
            status: "Pending"
        },
        {
            name: "Marc Antoine Remigoso",
            email: "antoine@gmail.com",
            event: "Birthday Event",
            dateOfEvent: "10/12/2024",
            status: "On Hold"
        },
        {
            name: "Marc Antoine Remigoso",
            email: "antoine@gmail.com",
            event: "Birthday Event",
            dateOfEvent: "10/12/2024",
            status: "Confirmed"
        }
    ];
    

    const [optionSelected, setOptionSelected] = useState("All Requests");

    const handleSelectChange = (e) => {
        setOptionSelected(e.target.value)
    };

    const filteredInformation = information.filter(item => {
        return optionSelected === "All Requests" || item.status === optionSelected
    });

    const Inquiry = (
        <div className="flex flex-1 rounded-md ring-1 ring-slate-300 m-2 p-4 w-96 h-[712px]">
            <div className="relative w-full m-4">
                <div className="flex justify-between items-center gap-x-4 mb-10">
                    <div className="flex items-center space-x-2">
                        <h1 className="font-sans font-bold text-4xl text-gray-800">Inquiry</h1>
                    </div>
                    <div className="flex items-center">                     
                        <button className="w-auto h-10 bg-slate-800 flex items-center justify-center space-x-2 text-white font-sans font-normal text-md ml-2 p-2 rounded-lg
                                        hover:bg-slate-500"
                                >
                            <FaPlus size={20} />
                            <span>Create Form</span>
                        </button>
                    </div>
                </div>
                <div className="flex justify-between w-full m-4">
                    <div className="flex justify-start space-x-4 items-center">
                        <div className="flex items-center border border-b-gray-600 rounded-lg p-2 bg-white shadow-sm w-64">
                            <FaSearch/>
                            <input
                                type="text"
                                placeholder="Search"
                                className="ml-2 bg-transparent focus:outline-none text-gray-600 w-full"
                            />
                        </div>
                        <div className="relative inline-flex items-center">
                            <select
                            value={optionSelected}
                            onChange={handleSelectChange}
                            className="border border-gray-300 rounded-md font-sans text-gray-600 h-10 pl-3 pr-8 appearance-none bg-white"
                            >
                                <option value="All Events">
                                    All Events ({Object.keys(information).length})
                                </option>
                                <option value="Birthday Event">Birthday Event</option>
                                <option value="Wedding Event">Wedding Event</option>
                            </select>
                            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-600">
                            ▼
                            </span>
                        </div>

                        {/* Status */}
                        <div className="relative inline-flex items-center">
                            <select
                            value={optionSelected}
                            onClick={handleSelectChange}
                            className="border border-gray-300 rounded-md font-sans text-gray-600 h-10 pl-3 pr-8 appearance-none bg-white"
                            >
                             <option value="All Requests">
                                    All Requests ({Object.keys(information).length})
                                </option>
                            <option value="Pending">Pending</option>
                            <option value="On Hold">On Hold</option>
                            <option value="Confirmed">Confirmed</option>
                            </select>
                            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-600">
                            ▼
                            </span>
                        </div>
                    </div>
                </div>
                
                <div className="flex">
                    <ul className="overflow-y-auto w-full h-[490px] mt-7 z-0 ">
                        {filteredInformation.map(([item, index]) => (
                            <li key={index} className="border-2 shadow-lg py-2 pl-4 m-3 rounded-lg hover:bg-gray-100" onClick={console.log('clicked')}>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-3">
                                        <IoMdContact className="text-slate-900" size={70} />
                                        <div className="text-start justify-center">
                                            <button className="font-san font-bold">{item.event}</button>
                                            <p className="text-sm text-gray-600">{item.name}</p>
                                            <div className="inline-flex">
                                                <p className="text-sm text-gray-500">{item.dateOfEvent}</p>
                                                <button className="text-red-400 px-4 rounded-lg text-sm
                                                                    hover:text-red-600 hover:underline">Pending</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inline-flex">
                                        <button className="text-bg_thirty mr-4
                                                            hover:underline hover:text-sky-800">
                                            Message
                                            </button>
                                        <button className="flex items-center justify-center h-8 bg-slate-800 text-white px-8 rounded-md mr-10
                                                            hover:bg-bg_ten b-2 border-b-gray-800 hover:text-black">
                                            View
                                        </button>
                                    </div>
                                </div>
                            </li>
                                          
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

    return Inquiry;

}
