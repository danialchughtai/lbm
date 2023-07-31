import React from 'react'
import ReactSelect from '../components/ReactSelect'

const Search = () => {


    const states = [
        { value: 'chocolUpdated By Googleate', label: 'chocolUpdated By Googleate' },
        { value: 'Pending Edits', label: 'Pending Edits' },
        { value: 'Pending Review', label: 'Pending Review' },
        { value: 'Published', label: 'Published' },
        { value: 'Suspended', label: 'Suspended' },
        { value: 'Dublicate', label: 'Dublicate' },
        { value: 'Disconnected', label: 'Disconnected' },
        { value: 'Verified', label: 'Verified' },
        { value: 'On Verification', label: 'On Verification' },
        { value: 'Deletable', label: 'Deletable' },
        { value: 'Updatable', label: 'Updatable' },
        { value: 'Posting not allowed', label: 'Posting not allowed' },
        { value: 'Service list allowed', label: 'Service list allowed' },
        { value: 'Health Data', label: 'Health Data' },
        { value: 'Food menus allowed', label: 'Food menus allowed' },
        { value: 'Lodging Data', label: 'Lodging Data' }
    ];
    const tags = [
        { value: 'Without Any Tag', label: 'Without Any Tag' },
    ];
    const folders = [
        { value: 'List is empty.', label: 'List is empty' },
    ];
    const accounts = [
        { value: 'gmbmmcgarage.com', label: 'gmbmmcgarage.com' },
        { value: 'google@seoadslab.com', label: 'google@seoadslab.com' },
    ];

    return (
        <div className='grid grid-cols-5 gap-3 mt-7 p-4'>
            <div>
                <label for="default-search" class="mb-2 text-sm font-medium flex flex-initial text-[#77838f] ">States</label>
                <ReactSelect options={states} />
            </div>
            <div>
                <label for="default-search" class="mb-2 text-sm font-medium flex flex-initial text-[#77838f] ">Tags</label>
                <ReactSelect options={tags} />
            </div>
            <div>
                <label for="default-search" class="mb-2 text-sm font-medium flex flex-initial text-[#77838f] ">Folders</label>
                <ReactSelect options={folders} />
            </div>
            <div>
                <label for="default-search" class="mb-2 text-sm font-medium flex flex-initial text-[#77838f] ">Accounts</label>
                <ReactSelect options={accounts} />
            </div>
            <div>
                <form>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 ">&nbsp;</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-blue-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block min-w-[160px] min-h-[40px]  pl-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500 " placeholder="Name, Address, Place ID" required />

                    </div>
                </form>

            </div>
        </div>
    )
}

export default Search