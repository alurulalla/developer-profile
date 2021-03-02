import React, { Fragment, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
import { ReactComponent as ArrowIcon } from '../images/arrow.svg';
import Footer from '../components/Footer';
import ProfileIcon from '../components/ProfileIcon';

const DeveloperInfoPage = () => {
    const [developerProfile, setDeveloperProfile] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const getDeveloperProfile = async () => {
            const data = await axios.get(`/api/v1/developers/${id}`);
            setDeveloperProfile(data.data);
        }
        getDeveloperProfile();
    }, [id]);


    return (
        <div className='font-body'>
            <NavBar />
            {developerProfile && (
                <>
                    <div className='h-full lg:h-101 bg-sub'>
                        <div className='flex flex-col items-center justify-center px-8 py-10 lg:justify-start lg:flex-row lg:py-20 lg:px-9'>
                            {developerProfile.avatar_url ? <img src={developerProfile.avatar_url} alt='developer_image' className='mr-5 rounded-full fill-current w-25 h-25 lg:w-83 lg:h-83 text-secondary' /> : <UserIcon className='fill-current w-25 h-25 lg:w-83 lg:h-83 text-secondary' />}
                            <div className='flex flex-col mt-2.5 lg:mt-12 text-center lg:text-left'>
                                <div className='text-xl lg:text-5xl text-header'>
                                    {developerProfile.name ?? developerProfile.id}
                                </div>
                                <div className={classNames('text-base lg:text-2xl', {
                                    'lg:mt-7.5': (developerProfile.company !== null && developerProfile.bio !== null),
                                    'mt-2': (developerProfile.company !== null && developerProfile.bio !== null),
                                })}>
                                    {developerProfile.company && <p>{developerProfile.company}</p>}
                                    {developerProfile.bio && <p>{developerProfile.bio}</p>}
                                </div>
                                <div className='mt-5 mx-2 lg:mx-0 lg:mt-7.5 flex justify-center items-center lg:justify-start'>
                                    {developerProfile.github_id && (
                                        <ProfileIcon id={developerProfile.github_id} image={GitHubImage} link={`https://github.com/${developerProfile.github_id}`} />
                                    )}
                                    {developerProfile.hackerrank_id && (
                                        <ProfileIcon id={developerProfile.hackerrank_id} image={HackerRankImage} link={`https://www.hackerrank.com/${developerProfile.hackerrank_id}`} />
                                    )}
                                    {developerProfile.codechef_id && (
                                        <ProfileIcon id={developerProfile.codechef_id} image={CodeChefImage} link={`https://www.codechef.com/users/${developerProfile.codechef_id}`} />
                                    )}
                                    {developerProfile.linkedin_id && (
                                        <ProfileIcon id={developerProfile.linkedin_id} image={LinkedInImage} link={`https://in.linkedin.com/in/${developerProfile.github_id}`} />
                                    )}
                                    {developerProfile.medium_id && (
                                        <ProfileIcon id={developerProfile.medium_id} image={MediumImage} link={`https://medium.com/@${developerProfile.medium_id}`} />
                                    )}
                                    {developerProfile.twitter_id && (
                                        <ProfileIcon id={developerProfile.twitter_id} image={TwitterImage} link={`https://twitter.com/${developerProfile.twitter_id}`} />
                                    )}
                                    {developerProfile.email && (
                                        <a href={`mailto:${developerProfile.email}`}>
                                            <EmailIcon className='w-5 h-5 lg:w-7.5 lg:h-7.5 mr-7.5 lg:mr-3.5 text-header fill-current' />
                                        </a>
                                    )}
                                </div>
                                <div className={classNames('flex justify-center lg:justify-start items-center text-xs lg:text-base  text-header', {
                                    'lg:mt-7.5': developerProfile.location !== null ||
                                        developerProfile.company !== null ||
                                        developerProfile.blog !== '',
                                    'mt-5': developerProfile.location !== null ||
                                        developerProfile.company !== null ||
                                        developerProfile.blog !== ''
                                })}>
                                    {developerProfile.location && <div className='flex items-center justify-center mr-3'>
                                        <LocationIcon className='w-4 h-4' />
                                        <span className='pl-3'>{developerProfile.location}</span>
                                    </div>}
                                    {developerProfile.company && <div className='flex items-center justify-center mr-3'>
                                        <OfficeIcon className='w-4 h-4' />
                                        <span className='pl-3'>{developerProfile.company}</span>
                                    </div>}
                                    {developerProfile.blog && <div className='flex items-center justify-center mr-3'>
                                        <LinkIcon className='w-4 h-4' />
                                        <span className='pl-3'>{developerProfile.blog}</span>
                                    </div>}
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
                            {developerProfile.repos.length > 0 && (
                                developerProfile.repos.map(repo => (
                                    <Fragment key={repo.name}>
                                        <div className='py-2.5 px-4 lg:py-7.5 lg:px-24.5 flex flex-col'>
                                            <a rel='noreferrer' target='_blank' href={repo.html_url} className='flex items-center justify-start text-xl lg:text-4xl text-linkColor'>
                                                {repo.name}
                                                <span><ArrowIcon className='w-3 h-3 ml-1 fill-current lg:w-5 lg:h-5 lg:ml-5 text-linkArrow' /></span>
                                                <span className='pl-5 text-xs lg:text-2xl text-timeAgo'>Updated on {dayjs(repo.updated_at).format('DD MMM YYYY')}</span>
                                            </a>
                                            <div className='text-sm lg:text-3.5xl text-header'>
                                                {repo.description}
                                            </div>
                                        </div>
                                        <div className='mx-5 border border-b-1 text-tertiary' />
                                    </Fragment>
                                ))
                            )}
                        </>
                    </div>
                </>
            )}
            <Footer />
        </div>
    )
}

export default DeveloperInfoPage;