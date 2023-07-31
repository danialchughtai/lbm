import React, { useState } from 'react';
import Check from './Check';
import google from "../images/b62b8fc38f32381f37b0.svg";
import s from "../images/unnamed.png";
import bn from "../images/unnamed.jpeg";
import Popup from './Popup';
import { Link } from 'react-router-dom';
import TableComp from './TableComp';




const Table = () => {

    const [allCheckboxesChecked, setAllCheckboxesChecked] = useState(false);

    const handleHeaderCheckboxClick = () => {
        setAllCheckboxesChecked((prevValue) => !prevValue);
    };

    return (
        <div>
            <div className='flex flex-row gap-3 ml-6'>
                <div class="flex items-center">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                    <label for="default-checkbox" class="ml-2 text-sm  text-gray-500 ">With Keywords</label>
                </div>
                <div class="flex items-center">
                    <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  " />
                    <label for="checked-checkbox" class="ml-2 text-sm  text-gray-500 ">Disabled in LocalBrandManager</label>
                </div>

            </div>


            <div class="relative overflow-x-auto mt-[20px] pl-3 pr-3">
                <TableComp />
                <div className='mt-6 mb-2'>
                    <Link to="/AddLocation">
                        <button className='bg-[#377dff] text-white flex justify-start p-3'> Add new location</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Table