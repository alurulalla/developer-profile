import React from 'react';

const ProfileIcon = ({ id, image, link }) => {
    return (
        <>
            <a href={link} target='_blank' rel='noreferrer'>
                <img src={image} alt={id} className='w-5 h-5 lg:w-7.5 lg:h-7.5 mr-7.5 lg:mr-3.5 cursor-pointer' />
            </a>
        </>
    )
}

export default ProfileIcon;