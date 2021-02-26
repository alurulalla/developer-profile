import React from 'react';
import { useHistory } from 'react-router-dom';

import TextBox from './TextBox';
import UserList from './UserList';

const ContentHeading = ({ children }) => {
    const history = useHistory();

    const onAddDeveloperInfo = () => {
        history.push('/developer-info');
    }

    return (
        <div className='mx-5 lg:mx-13'>
            <div className='my-5 lg:my-13 text-2xl lg:text-5.5xl text-center text-header'>
                {children}
            </div>
            <hr className='text-tertiary' />
            <TextBox />
            <UserList />
            <hr className='text-tertiary mb-7.5 lg:mb-13' />
            <div className='flex items-center justify-center text-sm lg:text-4xl mb-2.5 lg:mb-13 text-header'>
                Could not find what you were looking for?
            </div>
            <div className='flex items-center justify-center'>
                <button className='w-45 lg:w-auto h-7.5 lg:h-20 lg:px-10 text-sm lg:text-4xl text-white rounded-2xl bg-secondary mb-7.5 lg:mb-13 focus:outline-none' onClick={onAddDeveloperInfo}>
                    Add developer info
                </button>
            </div>
        </div>
    )
}

export default ContentHeading;