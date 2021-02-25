import React from 'react';

const ContentHeading = ({ children }) => {
    return (
        <div className='mx-5 lg:mx-13'>
            <div className='my-5 lg:my-13 text-2xl lg:text-5.5xl text-center text-header'>
                {children}
            </div>
            <hr className='text-tertiary' />
        </div>
    )
}

export default ContentHeading;