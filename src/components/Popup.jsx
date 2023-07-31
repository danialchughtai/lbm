import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs';
import Toggle from './Toggle';




const Popup = () => {

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup((prevShowPopup) => !prevShowPopup);
    };

    return (
        <div className="relative inline-block">
            <button
                className="dots-button bg-[#ffffff] border border-gray-300 rounded-sm cursor-pointer p-1 w-6 h-6 ml-1"
                onClick={togglePopup}
            >
                < BsThreeDots />
            </button>
            {showPopup && (
                <div className="popup absolute top-[30px] left-auto right-0 border border-solid bg-[#ffffff] text-gray-400 py-2 px-4 rounded shadow-md w-[232px]">
                    <div className='mt-2 mb-2'>
                        <h1 className='text-black flex justify-between'>Enable Location <Toggle /> </h1>
                        <p>Disabled locations are not synchronized and not kept up to date. For the disabled location, you cannot schedule posts and view insights.</p>
                    </div>
                    <div className='bg-gray-300 w-full h-[1px] mb-14'></div>
                    <button>Edit data</button>
                </div>
            )}
        </div>
    )
}

export default Popup