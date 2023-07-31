import React from 'react'

const Check = ({ checked }) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => { }}
                className="form-checkbox h-5 w-5 text-[#377dff] cursor-pointer mr-2"
            />
        </div>
    );
};

export default Check