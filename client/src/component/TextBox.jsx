import React from 'react';

import { ReactComponent as SearchIcon } from '../images/search.svg'

const TextBox = () => {
    return (
        <>
            <div className='h-16 lg:h-20 mt-5 mx-10 mb-7 lg:my-13 lg:mx-72 bg-tertiary rounded-full lg:rounded-2xl p-2.5 flex justify-evenly justify-items-end items-center'>
                <input type="text" placeholder='Search for username' className='w-full mr-1.5 lg:mr-5 
                text-sm md:text-lg lg:text-2xl rounded-full lg:rounded-2xl h-12 lg:h-16 p-2.5 focus:outline-none' />
                <SearchIcon className='w-10 h-10 lg:w-13 lg:h-13' />
            </div>
        </>
    )
}

export default TextBox;