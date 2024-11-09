import { useState } from "react";
import { HiChatAlt2 } from "react-icons/hi";
import { IoIosCreate, IoMdContact, IoIosEye, IoMdCheckbox } from "react-icons/io";
import { BsCalendarDateFill } from "react-icons/bs";

export default function Inquiry() {
    const information = {
        personInquired1: {
            name: "Marc Antoine Remigoso",
            email: "antoine@gmail.com",
            event: "Birthday Event",
            dateOfEvent: "10/12/2024"
        },
        personInquired2: {
            name: "John Doe",
            email: "john@gmail.com",
            event: "Anniversary",
            dateOfEvent: "11/15/2024"
        },
        personInquired3: {
            name: "Jane Smith",
            email: "jane@gmail.com",
            event: "Wedding",
            dateOfEvent: "12/20/2024"
        },
        personInquired4: {
            name: "Jane Smith",
            email: "jane@gmail.com",
            event: "Wedding",
            dateOfEvent: "12/20/2024"
        },
        personInquired5: {
            name: "Jane Smith",
            email: "jane@gmail.com",
            event: "Wedding",
            dateOfEvent: "12/20/2024"
        },
        personInquired6: {
            name: "Jane Smith",
            email: "jane@gmail.com",
            event: "Wedding",
            dateOfEvent: "12/20/2024"
        },
        personInquired7: {
            name: "Jane Smith",
            email: "jane@gmail.com",
            event: "Wedding",
            dateOfEvent: "12/20/2024"
        },
        personInquired8: {
            name: "Jane Smith",
            email: "jane@gmail.com",
            event: "Wedding",
            dateOfEvent: "12/20/2024"
        },
        personInquired9: {
            name: "Jane Smith",
            email: "jane@gmail.com",
            event: "Wedding",
            dateOfEvent: "12/20/2024"
        },
        personInquired10: {
            name: "Jane Smith",
            email: "jane@gmail.com",
            event: "Wedding",
            dateOfEvent: "12/20/2024"
        }
    };

    const [optionSelected, setOptionSelected] = useState("");

    const handleSelectChange = (e) => {
        setOptionSelected(e.target.value);
    };

    const Inquiry = (
        <div className="flex flex-1 rounded-md ring-1 ring-slate-300 m-2 p-4 w-96 h-[712px]">
            <div className="relative w-full m-4">
                <div className="flex justify-between items-center gap-x-4 mb-10">
                    <div className="flex items-center">
                        <HiChatAlt2 size={40} className="text-sky-500"/>
                        <h1 className="font-sans font-semibold text-2xl ml-2">Inquiry</h1>
                    </div>

                    <div className="flex items-center">
                        <IoIosCreate size={30} style={{ color: 'green' }} />
                        <p className="font-sans font-normal text-md ml-2">Inquiry form</p>
                    </div>
                </div>
                <hr />
                <div className="flex justify-between w-full m-4">
                    <div className="flex justify-start space-x-4">
                        <p className="font-sans text-gray-600">All({Object.keys(information).length})</p>
                        <select
                            value={optionSelected}
                            onChange={handleSelectChange}
                            className="border rounded-md font-sans text-gray-600 h-7"
                        >
                            <option value="" disabled>Sort by</option>
                            <option value="Event Date">Event Date</option>
                            <option value="Date Inquired">Date Inquired</option>
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-4 py-2 border rounded-md text-lg h-7 w-30
                                        focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className="flex">
                    <ul className="overflow-y-auto w-full h-[490px] mt-7 z-0 ">
                        {Object.entries(information).map(([key, item]) => (
                            <li key={key} className="border-b py-2 pl-4 hover:bg-amber-50" onClick={console.log('clicked')}>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-3">
                                        <IoMdContact className="text-amber-300" size={50} />
                                        <div>
                                            <button className="text-blue-500 font-semibold">{item.name}</button>
                                            <p className="text-sm text-gray-600">{item.event} - {item.dateOfEvent}</p>
                                            <p className="text-sm text-gray-500">{item.email}</p>
                                        </div>
                                    </div>
                                    <span className="text-gray-400 text-sm mr-10">
                                        <div className="flex space-x-4">
                                        <IoIosEye size={30} style={{color: 'blue'}}/>
                                        <IoMdCheckbox size={30} style={{color: 'green'}}/>
                                        </div>
                                    </span>
                                </div>
                            </li>
                                          
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

    const EventSidebar = (
        <div className="flex flex-row">
            <div className="flex flex-col w-60 h-screen ml-[1px] ring-1 bg-bg_thirty  items-center justify-center">
                <div className="relative text-white">
                    <p className="py-2 border-b ">Calendar</p>
                    <p className="">One Week Ahead</p>
                    <p className="">One Month Ahead</p>
                    <p className="">One Year Ahead</p>
                </div>
                <div>

                </div>
            </div>

            <div className="flex flex-row w-96 m-2 ring-1 ring-slate-500 ring-opacity-5 shadow-md rounded-md">

            </div>
        </div>
    );
    return EventSidebar;
}
