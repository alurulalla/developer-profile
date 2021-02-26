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
            <div className='h-101 bg-sub'>
                <div className='flex py-20 px-9'>
                    <UserIcon className='fill-current w-83 h-83 text-secondary' />
                    <div className='flex flex-col mt-12 text-left'>
                        <div className='text-5xl text-header'>
                            Aluru Murali Krishna
                        </div>
                        <div className='mt-7.5 text-2xl'>
                            <p>Working</p>
                            <p>Previous Working</p>
                        </div>
                        <div className='mt-7.5 flex justify-start items-center'>
                            <img src={GitHubImage} alt="github" className='w-7.5 h-7.5 mr-3.5' />
                            <img src={HackerRankImage} alt="hackerrank" className='w-7.5 h-7.5 mr-3.5' />
                            <img src={CodeChefImage} alt="codechef" className='w-7.5 h-7.5 mr-3.5' />
                            <img src={LinkedInImage} alt="linkedin" className='w-7.5 h-7.5 mr-3.5' />
                            <img src={MediumImage} alt="medium" className='w-7.5 h-7.5 mr-3.5' />
                            <img src={HackerRankImage} alt="hackerrank" className='w-7.5 h-7.5 mr-3.5' />
                            <img src={TwitterImage} alt="twitter" className='w-7.5 h-7.5 mr-3.5' />
                            <EmailIcon className='w-7.5 h-7.5 mr-3.5 text-header fill-current' />
                        </div>
                        <div className='flex justify-start items-center text-base mt-7.5 text-header'>
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
            <div className='mx-5'>
                <div className='flex items-center justify-center text-header text-5.5xl p-13'>
                    Github repositories
                </div>
                <hr className='text-tertiary' />
                <div className='py-7.5'>
                    <Link to='/' className='flex items-center justify-start text-4xl text-linkColor'>
                        code_template
                        <span><ArrowIcon className='w-3 h-3 ml-1 fill-current lg:w-5 lg:h-5 lg:ml-5 text-linkArrow' /></span>
                    </Link>

                </div>
                <hr className='text-tertiary' />
            </div>
            <Footer />
        </div>
    )
}

export default DeveloperInfoPage;