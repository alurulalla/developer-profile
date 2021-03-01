import React from 'react';
import NavBar from '../components/NavBar';

import GitHubImage from '../images/github.png';
import { ReactComponent as UserIcon } from '../images/user.svg';
import HackerRankImage from '../images/hackerrank.png';
import CodeChefImage from '../images/codechef.png';
import LinkedInImage from '../images/linkedin.png';
import MediumImage from '../images/medium.png';
import TwitterImage from '../images/twitter.png';
import { ReactComponent as EmailIcon } from '../images/email.svg';
import { ReactComponent as LocationIcon } from '../images/location.svg';
import { ReactComponent as LinkIcon } from '../images/link.svg';
import { ReactComponent as OfficeIcon } from '../images/office.svg';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from '../images/arrow.svg';
import Footer from '../components/Footer';

const DeveloperInfoPage = () => {
    return (
        <div className='font-body'>
            <NavBar />
            <div className='h-85 lg:h-101 bg-sub'>
                <div className='flex flex-col items-center justify-center px-8 py-10 lg:justify-start lg:flex-row lg:py-20 lg:px-9'>
                    <UserIcon className='fill-current w-25 h-25 lg:w-83 lg:h-83 text-secondary' />
                    <div className='flex flex-col mt-2.5 lg:mt-12 text-center lg:text-left'>
                        <div className='text-xl lg:text-5xl text-header'>
                            Aluru Murali Krishna
                        </div>
                        <div className='mt-2 lg:mt-7.5 text-base lg:text-2xl'>
                            <p>Working</p>
                            <p>Previous Working</p>
                        </div>
                        <div className='mt-5 mx-2 lg:mx-0 lg:mt-7.5 flex justify-start items-center'>
                            <img src={GitHubImage} alt="github" className='w-5 h-5 lg:w-7.5 lg:h-7.5 mr-7.5 lg:mr-3.5' />
                            <img src={HackerRankImage} alt="hackerrank" className='w-5 h-5 lg:w-7.5 lg:h-7.5 mr-7.5 lg:mr-3.5' />
                            <img src={CodeChefImage} alt="codechef" className='w-5 h-5 lg:w-7.5 lg:h-7.5 mr-7.5 lg:mr-3.5' />
                            <img src={LinkedInImage} alt="linkedin" className='w-5 h-5 lg:w-7.5 lg:h-7.5 mr-7.5 lg:mr-3.5' />
                            <img src={MediumImage} alt="medium" className='w-5 h-5 lg:w-7.5 lg:h-7.5 mr-7.5 lg:mr-3.5' />
                            <img src={HackerRankImage} alt="hackerrank" className='w-5 h-5 lg:w-7.5 lg:h-7.5 mr-7.5 lg:mr-3.5' />
                            <img src={TwitterImage} alt="twitter" className='w-5 h-5 lg:w-7.5 lg:h-7.5 mr-7.5 lg:mr-3.5' />
                            <EmailIcon className='w-5 h-5 lg:w-7.5 lg:h-7.5 mr-7.5 lg:mr-3.5 text-header fill-current' />
                        </div>
                        <div className='flex justify-start items-center text-xs lg:text-base mt-7.5 text-header'>
                            <div className='flex items-center justify-center mr-3'>
                                <LocationIcon className='w-4 h-4' />
                                <span className='pl-3'>Bangalore</span>
                            </div>
                            <div className='flex items-center justify-center mr-3'>
                                <OfficeIcon className='w-4 h-4' />
                                <span className='pl-3'>Workat.tech</span>
                            </div>
                            <div className='flex items-center justify-center mr-3'>
                                <LinkIcon className='w-4 h-4' />
                                <span className='pl-3'>https://workat.tech</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='m-5'>
                <div className='flex items-center justify-center text-header text-2xl lg:text-5.5xl lg:p-13 my-5'>
                    Github repositories
                </div>
                <div className='border border-b-1 text-tertiary' />
                <>
                    <div className='py-2.5 px-4 lg:py-7.5 lg:px-24.5'>
                        <Link to='/' className='flex items-center justify-start text-xl lg:text-4xl text-linkColor'>
                            code_template
                        <span><ArrowIcon className='w-3 h-3 ml-1 fill-current lg:w-5 lg:h-5 lg:ml-5 text-linkArrow' /></span>
                            <span className='pl-5 text-xs lg:text-2xl text-timeAgo'>Updated on 9 Jul 2020</span>
                        </Link>

                    </div>
                    <div className='mx-5 border border-b-1 text-tertiary' />
                    <div className='py-2.5 px-4 lg:py-7.5 lg:px-24.5 flex flex-col'>
                        <Link to='/' className='flex items-center justify-start text-xl lg:text-4xl text-linkColor'>
                            code_template
                        <span><ArrowIcon className='w-3 h-3 ml-1 fill-current lg:w-5 lg:h-5 lg:ml-5 text-linkArrow' /></span>
                            <span className='pl-5 text-xs lg:text-2xl text-timeAgo'>Updated on 9 Jul 2020</span>
                        </Link>
                        <div className='text-sm lg:text-3.5xl text-header'>
                            Get a Software Engineer Job - Ultimate Guide
                        </div>
                    </div>
                    <div className='mx-5 border border-b-1 text-tertiary' />
                </>
            </div>
            <Footer />
        </div>
    )
}

export default DeveloperInfoPage;