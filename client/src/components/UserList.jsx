import React from 'react';

import { ReactComponent as UserIcon } from '../images/user.svg';
import { ReactComponent as ArrowIcon } from '../images/arrow.svg';
import { Link } from 'react-router-dom';

const UserList = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-x-2 lg:gap-x-25 mx-12 my-2.5  lg:mb-25 lg:mt-0 lg:mx-25'>
                <div className='flex items-center justify-start mt-5 lg:mt-25'>
                    <UserIcon className='flex flex-shrink-0 mr-1.5 bg-white fill-current h-5 w-5 lg:w-25 lg:h-25 text-secondary lg:mr-13' />
                    <Link to='/developer-info' className='flex items-center justify-center text-xs break-all lg:text-4xl text-linkText'>gc_nit
                    <span><ArrowIcon className='flex flex-shrink-0 w-3 h-3 ml-1 fill-current lg:w-5 lg:h-5 lg:ml-5 text-linkArrow' /></span>
                    </Link>
                </div>
                <div className='flex items-center justify-start mt-5 lg:mt-25'>
                    <UserIcon className='flex flex-shrink-0 mr-1.5 bg-white fill-current h-5 w-5 lg:w-25 lg:h-25 text-secondary lg:mr-13' />
                    <Link to='/developer-info' className='flex items-center justify-center text-xs break-all lg:text-4xl text-linkText'>gc_nit
                    <span><ArrowIcon className='flex flex-shrink-0 w-3 h-3 ml-1 fill-current lg:w-5 lg:h-5 lg:ml-5 text-linkArrow' /></span>
                    </Link>
                </div>
                <div className='flex items-center justify-start mt-5 lg:mt-25'>
                    <UserIcon className='flex flex-shrink-0 mr-1.5 bg-white fill-current h-5 w-5 lg:w-25 lg:h-25 text-secondary lg:mr-13' />
                    <Link to='/developer-info' className='flex items-center justify-center text-xs break-all lg:text-4xl text-linkText'>gc_nit
                    <span><ArrowIcon className='flex flex-shrink-0 w-3 h-3 ml-1 fill-current lg:w-5 lg:h-5 lg:ml-5 text-linkArrow' /></span>
                    </Link>
                </div>
                <div className='flex items-center justify-start mt-5 lg:mt-25'>
                    <UserIcon className='flex flex-shrink-0 mr-1.5 bg-white fill-current h-5 w-5 lg:w-25 lg:h-25 text-secondary lg:mr-13' />
                    <Link to='/developer-info' className='flex items-center justify-center text-xs break-all lg:text-4xl text-linkText'>gc_nit
                    <span><ArrowIcon className='flex flex-shrink-0 w-3 h-3 ml-1 fill-current lg:w-5 lg:h-5 lg:ml-5 text-linkArrow' /></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserList;