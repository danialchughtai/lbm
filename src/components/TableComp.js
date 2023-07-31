import React, { useState } from 'react'
import Check from './Check';
import google from "../images/b62b8fc38f32381f37b0.svg";
import s from "../images/unnamed.png";
import bn from "../images/unnamed.jpeg";
import Popup from './Popup';

function TableComp() {

    const [allCheckboxesChecked, setAllCheckboxesChecked] = useState(false);

    const handleHeaderCheckboxClick = () => {
        setAllCheckboxesChecked((prevValue) => !prevValue);
    };
    return (
        <table class="w-full text-sm text-left text-gray-500 border border-gray-300">
            <thead class="text-sm text-gray-500 bg-white">
                <tr className='border border-gray-300'>
                    <th scope="col" class="px-6 py-3 border border-gray-300 w-[445px]">
                        <label className='inline-flex items-center'>
                            <input
                                type='checkbox'
                                className='form-checkbox h-5 w-5 text-[#377dff] cursor-pointer'
                                checked={allCheckboxesChecked}
                                onChange={handleHeaderCheckboxClick}
                            />
                            <span className='ml-2'>Locations</span>
                        </label>
                    </th>
                    <th scope="col" class="px-6 py-3 border border-gray-300">
                        Address
                    </th>
                    <th scope="col" class="px-6 py-3 border border-gray-300">
                        Keywords
                    </th>
                    <th scope="col" class="px-6 py-3 border border-gray-300">
                        Accounts
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#377dff] flex flex-row whitespace-nowrap ">
                        <Check checked={allCheckboxesChecked} />
                        <div className='flex flex-col'>
                            Expert Duct Cleaning
                            <p className='text-gray-600 font-normal'>12077682987353485559</p>
                        </div>
                    </th>
                    <td class="px-6 py-4">
                        118 County Line Rd, Huntingdon Valley, PA 19006, USA
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={s} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#377dff]  flex flex-row whitespace-nowrap ">
                        <Check checked={allCheckboxesChecked} />  Experts Garage Doors
                    </th>
                    <td class="px-6 py-4">
                        Service Area Business
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#377dff]  flex flex-row whitespace-nowrap ">

                        <Check checked={allCheckboxesChecked} />
                        Experts Garage Door Cherry Hill
                    </th>
                    <td class="px-6 py-4">
                        Service Area Business
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#377dff]  flex flex-row whitespace-nowrap ">
                        <Check checked={allCheckboxesChecked} />
                        Experts Garage Doors Monroe
                    </th>
                    <td class="px-6 py-4">
                        Service Area Business
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#377dff]  flex flex-row whitespace-nowrap ">

                        <Check checked={allCheckboxesChecked} />
                        Experts Garage Doors Plainfield
                    </th>
                    <td class="px-6 py-4">
                        Service Area Business
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#377dff]  flex flex-row whitespace-nowrap ">
                        <Check checked={allCheckboxesChecked} />
                        Experts Garage Doors Springfield
                    </th>
                    <td class="px-6 py-4">
                        Service Area Business
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#377dff]  flex flex-row whitespace-nowrap ">

                        <Check checked={allCheckboxesChecked} />
                        Experts Garage Doors
                    </th>
                    <td class="px-6 py-4">
                        Service Area Business
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#377dff]  flex flex-row whitespace-nowrap ">
                        <Check checked={allCheckboxesChecked} />

                        Experts Garage Doors
                    </th>
                    <td class="px-6 py-4">
                        Service Area Business
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#377dff  flex flex-row whitespace-nowrap ">

                        <Check checked={allCheckboxesChecked} />
                        QAF Garage Door
                    </th>
                    <td class="px-6 py-4">
                        42 N Cove Rd #1c, Merchantville, NJ 08109, USA
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#377dff]  flex flex-row whitespace-nowrap ">

                        <Check checked={allCheckboxesChecked} />
                        Beta gates
                    </th>
                    <td class="px-6 py-4">
                        Service Area Business
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#377dff]  flex flex-row whitespace-nowrap ">
                        <Check checked={allCheckboxesChecked} />

                        Experts Garage Doors
                    </th>
                    <td class="px-6 py-4">
                        Service Area Business
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#377dff]  flex flex-row whitespace-nowrap ">
                        <Check checked={allCheckboxesChecked} />
                        <div className='flex flex-col'>
                            Experts Duct Cleaning Philadelphia
                            <p className='text-gray-600 font-normal'>18078273571257214199</p>
                        </div>
                    </th>
                    <td class="px-6 py-4">
                        Service Area Business
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={s} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#377dff]  flex flex-row whitespace-nowrap ">

                        <Check checked={allCheckboxesChecked} />
                        <div className='flex flex-col'>
                            Experts Duct Cleaning South NJ
                            <p className='text-gray-600 font-normal'>12376341045774169241</p>
                        </div>
                    </th>
                    <td class="px-6 py-4">
                        1235 N Black Horse Pike, Blackwood, NJ 08012, USA
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={s} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#377dff]  flex flex-row whitespace-nowrap ">
                        <Check checked={allCheckboxesChecked} />
                        <div className='flex flex-col'>
                            Experts Garage Doors
                            <div className='flex flex-start justify-items-start flex-wrap'>
                                <p className='text-gray-600 border border-[#377dff] rounded-xl px-1 text-center text-xs font-[300] mb-1 ml-1'>Garage Door Repair Philadelphia</p>
                                <p className='text-gray-600 border border-[#377dff] rounded-xl px-1 text-center text-xs font-[300] mb-1 ml-1'>Garage Door Repair Near Me</p>
                                <p className='text-gray-600 border border-[#377dff] rounded-xl px-1 text-center text-xs font-[300] mb-1 ml-1'>Garage Door repair company</p>
                                <p className='text-gray-600 border border-[#377dff] rounded-xl px-1 text-center text-xs font-[300] mb-1 ml-1'>garage door repair lancaster</p>
                            </div>
                        </div>
                    </th>
                    <td class="px-6 py-4">
                        1427 N Carlisle St, Philadelphia, PA 19121, USA
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#77838f]  flex flex-row whitespace-nowrap ">

                        <Check checked={allCheckboxesChecked} />
                        Ras Garage Door
                    </th>
                    <td class="px-6 py-4">
                        7902 110th Ave SE, Renton, WA 98056, USA
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row grayscale">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#77838f]  flex flex-row whitespace-nowrap ">

                        <Check checked={allCheckboxesChecked} />
                        <div className='flex flex-col'>
                            Experts Garage Doors South NJ
                            <p className='text-gray-700 font-normal'>12376341045774169241</p>
                        </div>
                    </th>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row grayscale">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#77838f]  flex flex-row whitespace-nowrap ">


                        <Check checked={allCheckboxesChecked} />
                        Experts Garage Doors Norristown
                    </th>
                    <td class="px-6 py-4">
                        Service Area Business
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row grayscale">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#77838f]  flex flex-row whitespace-nowrap ">

                        <Check checked={allCheckboxesChecked} />
                        EAP garage door
                    </th>
                    <td class="px-6 py-4">
                        Service Area Business
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row grayscale">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#77838f]  flex flex-row whitespace-nowrap ">

                        <Check checked={allCheckboxesChecked} />

                        Garage Door Philadelphia
                    </th>
                    <td class="px-6 py-4">
                        Service Area Business
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row grayscale">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#77838f]  flex flex-row whitespace-nowrap ">


                        <Check checked={allCheckboxesChecked} />
                        Experts Garage Doors
                    </th>
                    <td class="px-6 py-4">
                        Service Area Business
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row grayscale">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#77838f]  flex flex-row whitespace-nowrap ">
                        <Check checked={allCheckboxesChecked} />


                        Scorpion Garage Door
                    </th>
                    <td class="px-6 py-4">
                        Service Area Business
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row grayscale">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#77838f]  flex flex-row whitespace-nowrap ">


                        <Check checked={allCheckboxesChecked} />

                        Experts Garage Doors Pittsburgh
                    </th>
                    <td class="px-6 py-4">
                        Service Area Business
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row grayscale">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
                <tr class="bg-white border-b divide-x">
                    <th scope="row" class="px-6 py-4 font-medium text-[#77838f]  flex flex-row whitespace-nowrap ">


                        <Check checked={allCheckboxesChecked} />

                        HAMLET GARAGE DOORS
                    </th>
                    <td class="px-6 py-4">
                        Service Area Business
                    </td>
                    <td class="px-6 py-4">

                    </td>
                    <td class="px-6 py-4 flex flex-row grayscale">
                        <img className='rounded-[50%] w-[24px] h-[24px] mr-[8px]' src={google} alt="" />
                        <img className='rounded-[50%] w-[24px] h-[24px]' src={bn} alt="" />
                        < Popup />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableComp