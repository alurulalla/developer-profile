import React from 'react';

const ProfileInput = ({ image, label, isRequrired }) => {
    return (
        <>
            <div className='flex items-center justify-start'>
                <img src={image} className='w-3 h-3 lg:w-7.5 lg:h-7.5 mr-2' alt='github' />
                <div>{label}{isRequrired && <span>*</span>}</div>
            </div>
            <div>
                <input className='w-full h-auto p-2 my-1 border rounded-lg md:w-56 lg:my-5 lg:w-120 lg:h-13 border-tertiary focus:outline-none' type='text' />
            </div>
        </>
    )
}

export default ProfileInput;