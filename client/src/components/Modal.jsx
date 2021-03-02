import React, { useState } from 'react';
import axios from 'axios';

import GithubIcon from '../images/github.png';
import LinkedInIcon from '../images/linkedin.png';
import CodechefIcon from '../images/codechef.png';
import HackerRankIcon from '../images/hackerrank.png';
import TwitteIcon from '../images/twitter.png';
import MediumIcon from '../images/medium.png';
import ProfileInput from './ProfileInput';


const Modal = ({ modalClose }) => {
    const [github, setGithub] = useState('');
    const [linkedIn, setLinkedIn] = useState('');
    const [codeChef, setCodeChef] = useState('');
    const [hackerRank, setHackerRank] = useState('');
    const [twitter, setTwitter] = useState('');
    const [medium, setMedium] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const onSubmitHandler = async () => {
        if (github) {
            const data = {
                github_id: github,
                linkedin_id: linkedIn,
                codechef_id: codeChef,
                hackerrank_id: hackerRank,
                twitter_id: twitter,
                medium_id: medium,
                email
            }
            try {
                await axios.post('/api/v1/developers', data, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setError('');
                modalClose();
            } catch (error) {
                console.log(error);
            }
        } else {
            setError('Github id is required');
        }
    }

    return (
        <div className='absolute inset-0 z-10 items-center justify-center overflow-auto text-black bg-transparent lg:p-56 lg:flex font-body'>
            <div className='h-full m-10 text-2xl bg-white shadow-2xl lg:h-auto lg:m-0 lg:w-350 lg:mt-192 xl:mt-97'>
                <div className='p-5 lg:p-13 text-base lg:text-3.5xl'>
                    Add developer profile
                </div>
                <div className='border border-b-1 text-tertiary mx-5 mb-7.5 lg:mx-7.5 lg:mb-13' />
                <div className='m-5 lg:m-7.5'>
                    <div className='flex flex-col px-5 text-sm lg:text-2xl lg:px-13'>
                        <ProfileInput value={github} setValue={setGithub} label='Github'
                            isRequrired={true} image={GithubIcon} error={error} />
                        <ProfileInput value={linkedIn} setValue={setLinkedIn}
                            label='Linkedin' isRequrired={false} image={LinkedInIcon} />
                        <ProfileInput value={codeChef} setValue={setCodeChef}
                            label='Codechef' isRequrired={false} image={CodechefIcon} />
                        <ProfileInput value={hackerRank} setValue={setHackerRank}
                            label='Hackerrank' isRequrired={false} image={HackerRankIcon} />
                        <ProfileInput value={twitter} setValue={setTwitter}
                            label='Twitter' isRequrired={false} image={TwitteIcon} />
                        <ProfileInput value={medium} setValue={setMedium}
                            label='Medium' isRequrired={false} image={MediumIcon} />
                        <ProfileInput value={email} setValue={setEmail} label='Email' isRequrired={false} isEmailIcon={true} />
                    </div>
                </div>
                <div className='border border-b-1 text-tertiary mx-7.5 my-5 lg:my-13' />
                <div className='flex items-center justify-end m-5 text-sm lg:text-2xl lg:m-13'>
                    <button className='w-44 mx-13 focus:outline-none' onClick={modalClose}>Cancel</button>
                    <button className='w-32 h-6 text-white rounded-lg bg-secondary lg:w-44 lg:h-13 focus:outline-none' onClick={onSubmitHandler}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;