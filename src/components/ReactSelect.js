import React from 'react'
import Select from 'react-select'

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        textAlign: 'left',
    }),
    control: (provided) => ({
        ...provided,
        textAlign: 'left',
    }),
    indicatorContainer: (provided) => ({
        ...provided,
        justifyContent: 'flex-start',
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: '#377dff', // Change this color to your desired arrow color
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none', // Remove the separator line
    }),
};


function ReactSelect(props) {
    return (
        <>
            <Select options={props.options} styles={customStyles} />
        </>
    )
}

export default ReactSelect