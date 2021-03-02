import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TextBox from './TextBox';
import UserList from './UserList';

const ContentHeading = ({ children, onAddDeveloper }) => {
    const [showAddDeveloperModal, setShowAddDeveloperModal] = useState(false);
    const [developersData, setDevelopersData] = useState([]);
    const [searchDevProfile, setSearchDevProfile] = useState('');

    const onAddDeveloperInfo = () => {
        // history.push('/developer-info');
        setShowAddDeveloperModal(!showAddDeveloperModal);
        onAddDeveloper();
    }

    useEffect(() => {
        if (!searchDevProfile)
            getDevelopers('/api/v1/developers');
    }, [onAddDeveloper, searchDevProfile]);

    const onSearchDevProfile = () => {
        const res = getDevelopers(`/api/v1/developers/search/${searchDevProfile}`);
        setDevelopersData(res.data);
    }

    const getDevelopers = async (url) => {
        const res = await axios.get(url);
        setDevelopersData(res.data);
    }

    return (
        <>
            {developersData && (<div className='px-5 lg:px-13'>
                <div className='my-5 lg:my-13 text-2xl lg:text-5.5xl text-center text-header'>
                    {children}
                </div>
                <hr className='text-tertiary' />
                <TextBox value={searchDevProfile} setSearchDevProfile={setSearchDevProfile} onSearch={onSearchDevProfile} />
                <UserList developersList={developersData} />
                <hr className='text-tertiary mb-7.5 lg:mb-13' />
                <div className='flex items-center justify-center text-sm lg:text-4xl mb-2.5 lg:mb-13 text-header'>
                    {developersData?.length === 0 ? `No developers added yet` : `Could not find what you were looking for?`}
                </div>
                <div className='flex items-center justify-center'>
                    <button className='w-45 lg:w-auto h-7.5 lg:h-20 lg:px-10 text-sm lg:text-4xl text-white rounded-2xl bg-secondary mb-7.5 lg:mb-13 focus:outline-none' onClick={onAddDeveloperInfo}>
                        Add developer info
                </button>
                </div>
            </div>)}
        </>
    )
}

export default ContentHeading;