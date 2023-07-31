import React from 'react'
import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";


const Navbar = () => {
    const [showSubNavbar, setShowSubNavbar] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);


    const handleSubNavbarToggle = () => {
        setShowSubNavbar(!showSubNavbar);
    };

    const handleShowDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <nav className="bg-white p-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between">
                    <div className="text-[#77838f] font-bold text-xl">LBM</div>
                    <div className="hidden md:flex gap-6 space-x-4">
                        <a href="#" className="text-[#77838f] text-xl hover:text-gray-900">Locations</a>
                        <button
                            className="text-[#77838f] text-xl flex items-center flex-row hover:text-gray-900"
                            onClick={handleSubNavbarToggle}
                        >
                            Bulk Posting < MdKeyboardArrowDown />
                        </button>
                        <a href="#" className="text-[#77838f] text-xl hover:text-gray-900">Reports</a>
                        <a href="#" className="text-[#77838f] text-xl hover:text-gray-900">Gallery</a>
                        <a href="#" className="text-[#77838f] text-xl hover:text-gray-900">GeoBooster</a>
                        <a href="#" className="text-[#77838f] text-xl hover:text-gray-900">Audits</a>

                    </div>
                    <div>
                        <button onClick={handleShowDropdown} className='text-[#77838f] hover:text-gray-900 flex items-center'>Info@seoadslab.com < MdKeyboardArrowDown /></button>
                    </div>
                </div>
            </div>
            <div className='bg-gray-900 w-full h-[1px] mt-4'></div>
            {showSubNavbar && (
                <div className="bg-[#ffffff] p-4">
                    <div className="flex flex-col">
                        <a href="#" className="text-[#77838f] hover:text-gray-900">Multilocation Media</a>
                        <a href="#" className="text-[#77838f] hover:text-gray-900">Multilocation Post</a>
                        <a href="#" className="text-[#77838f] hover:text-gray-900">CSV Bulk Upload</a>
                    </div>
                </div>
            )}

            {showDropdown && (
                <div className="bg-[#ffffff] p-4">
                    <div className="flex flex-col ">
                        <a href="#" className="text-[#77838f] hover:bg-gray-200 hover:text-gray-900">5,600 Keyword Credits<br />51,968 GeoGrid Credits</a>
                        <a href="#" className="text-[#77838f] hover:bg-gray-200 hover:text-gray-900">info@seoadslab.com</a>
                        <a href="#" className="text-[#77838f] hover:bg-gray-200 hover:text-gray-900">Organization</a>
                        <a href="#" className="text-[#77838f] hover:bg-gray-200 hover:text-gray-900">Google Accounts</a>
                        <a href="#" className="text-[#77838f] hover:bg-gray-200 hover:text-gray-900">Billing</a>
                        <a href="#" className="text-[#77838f] hover:bg-gray-200 hover:text-gray-900">Exif Templates</a>
                        <a href="#" className="text-[#77838f] hover:bg-gray-200 hover:text-gray-900">Help</a>
                        <a href="#" className="text-[#77838f] hover:bg-gray-200 hover:text-gray-900">Log Out</a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar