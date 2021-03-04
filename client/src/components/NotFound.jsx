import React from 'react';

import { ReactComponent as NotfoundIcon } from '../images/not_found.svg';

const NotFound = () => {
    return (
        <div className='flex items-center justify-center h-screen p-13'>
            <NotfoundIcon />
        </div>
    )
}

export default NotFound;