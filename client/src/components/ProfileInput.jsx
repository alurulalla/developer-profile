import React from 'react';
import classNames from 'classnames';

import { ReactComponent as EmailIcon } from '../images/email.svg';

const ProfileInput = ({ image, label, isRequrired, value, setValue, error, isEmailIcon }) => {
    return (
        <>
            <div className='flex items-center justify-start'>
                {!isEmailIcon ? (
                    <>
                        <img src={image} className='w-3 h-3 lg:w-7.5 lg:h-7.5 mr-2' alt={label} />
                        <div>{label}{isRequrired && <span>*</span>}</div>
                    </>) :
                    (<>
                        <EmailIcon className='w-3 h-3 lg:w-7.5 lg:h-7.5 mr-2' />
                        <div>{label}{isRequrired && <span>*</span>}</div>
                    </>
                    )}
            </div>
            <div>
                <input className={classNames('w-full h-auto p-2 my-1 border rounded-lg md:w-56 lg:my-5 lg:w-120 lg:h-13 focus:outline-none', {
                    'border': (error !== undefined || (error === 'Github id not found')) ? true : false,
                    'border-red-500': ((error !== undefined && error !== '') || (error === 'Github id not found')) ? true : false,
                    'border-tertiary': (value !== '' && (error !== 'Github id not found')) ? true : false
                })} type='text' value={value} onChange={(e) => setValue(e.target.value)} />
                <div className='text-red-500'>
                    {error}
                </div>
            </div>
        </>
    )
}

export default ProfileInput;