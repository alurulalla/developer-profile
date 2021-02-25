import React from 'react';

import { ReactComponent as UserIcon } from '../images/user.svg';
import { ReactComponent as ArrowIcon } from '../images/arrow.svg';

const UserList = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row lg:flex-wrap lg:items-center justify-between mb-7 mx-12 lg:mb-0 mt-2.5 lg:mt-0 lg:my-25 lg:mx-49'>
                <div className='flex items-center justify-items-center lg:mb-25'>
                    <UserIcon className='mr-1.5 bg-white fill-current h-13 w-13 lg:w-25 lg:h-25 text-secondary lg:mr-13' />
                    <p className='text-xl lg:text-4xl text-linkText'>alurulalla_krish</p>
                    <ArrowIcon className='w-3 h-3 ml-1 fill-current lg:ml-5 text-linkArrow' />

                </div>
                <div className='flex items-center justify-items-center lg:mb-25'>
                    <UserIcon className='mr-1.5 bg-white fill-current h-13 w-13 lg:w-25 lg:h-25 text-secondary lg:mr-13' />
                    <p className='text-xl lg:text-4xl text-linkText'>gc_nit</p>
                    <ArrowIcon className='w-3 h-3 ml-1 fill-current lg:ml-5 text-linkArrow' />
                </div>
                <div className='flex items-center justify-items-center lg:mb-25'>
                    <UserIcon className='mr-1.5 bg-white fill-current h-13 w-13 lg:w-25 lg:h-25 text-secondary lg:mr-13' />
                    <p className='text-xl lg:text-4xl text-linkText'>alurulalla_krish</p>
                    <ArrowIcon className='w-3 h-3 ml-1 fill-current lg:ml-5 text-linkArrow' />

                </div>
                <div className='flex items-center justify-items-center lg:mb-25'>
                    <UserIcon className='mr-1.5 bg-white fill-current h-13 w-13 lg:w-25 lg:h-25 text-secondary lg:mr-13' />
                    <p className='text-xl lg:text-4xl text-linkText'>gc_nit</p>
                    <ArrowIcon className='w-3 h-3 ml-1 fill-current lg:ml-5 text-linkArrow' />
                </div>
            </div>
        </div>
    )
}

export default UserList;