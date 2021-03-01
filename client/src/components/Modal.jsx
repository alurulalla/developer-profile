import React from 'react';

import GithubIcon from '../images/github.png';
import LinkedInIcon from '../images/linkedin.png';
import CodechefIcon from '../images/codechef.png';
import HackerRankIcon from '../images/hackerrank.png';
import TwitteIcon from '../images/twitter.png';
import MediumIcon from '../images/medium.png';
import ProfileInput from './ProfileInput';

const Modal = ({ modalClose }) => {
    return (
        // <div className={classNames('overflow-auto bg-transparent  absolute inset-0 z-10 flex items-start justify-center')}>
        //     <div className='m-4 bg-white shadow-2xl sm:m-8'>
        //         <div className='flex items-center justify-between p-2 text-xl border-b'>
        //             <h6 className="text-xl font-bold">Simple modal dialog</h6>
        //             <button type="button">✖</button>
        //         </div>
        //     </div>
        // </div>
        <div className='absolute inset-0 z-10 items-center justify-center overflow-auto text-black bg-transparent lg:p-56 lg:flex font-body'>
            <div className='m-10 text-2xl bg-white shadow-2xl h-120 lg:h-auto lg:m-0 lg:w-350 lg:mt-192 xl:mt-97'>
                <div className='p-5 lg:p-13 text-base lg:text-3.5xl'>
                    Add developer profile
                </div>
                <div className='border border-b-1 text-tertiary mx-5 mb-7.5 lg:mx-7.5 lg:mb-13' />
                <div className='m-5 lg:m-7.5'>
                    <div className='flex flex-col px-5 text-sm lg:text-2xl lg:px-13'>
                        <ProfileInput label='Github' isRequrired={true} image={GithubIcon} />
                        <ProfileInput label='Linkedin' isRequrired={false} image={LinkedInIcon} />
                        <ProfileInput label='Codechef' isRequrired={false} image={CodechefIcon} />
                        <ProfileInput label='Hackerrank' isRequrired={false} image={HackerRankIcon} />
                        <ProfileInput label='Twitter' isRequrired={false} image={TwitteIcon} />
                        <ProfileInput label='Medium' isRequrired={false} image={MediumIcon} />
                    </div>
                </div>
                <div className='border border-b-1 text-tertiary mx-7.5 my-5 lg:my-13' />
                <div className='flex items-center justify-end m-5 text-sm lg:text-2xl lg:m-13'>
                    <button className='w-44 mx-13 focus:outline-none' onClick={modalClose}>Cancel</button>
                    <button className='w-32 h-6 text-white rounded-lg bg-secondary lg:w-44 lg:h-13 focus:outline-none'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;