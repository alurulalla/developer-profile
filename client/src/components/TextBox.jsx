import React from 'react';

import { ReactComponent as SearchIcon } from '../images/search.svg'

const TextBox = ({ value, setSearchDevProfile, onSearch }) => {
    return (
        <div className='flex items-center justify-center mt-5 mb-0 lg:mt-13'>
            <div className='w-66 lg:w-192 h-7.5 lg:h-20 mx-10  lg:mx-72 bg-tertiary rounded-full lg:rounded-2xl p-2.5 flex justify-evenly justify-items-end items-center'>
                <input type="text" placeholder='Search for username' className='w-168 mr-1.5 lg:mr-5 
                text-xs lg:text-2xl rounded-full lg:rounded-2xl h-5 lg:h-16 p-2.5 focus:outline-none' value={value} onChange={e => setSearchDevProfile(e.target.value)} />
                <SearchIcon className='w-10 h-10 cursor-pointer lg:w-13 lg:h-13' onClick={onSearch} />
            </div>
        </div>
    )
}

export default TextBox;