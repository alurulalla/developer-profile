import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div className='flex items-center justify-between w-full p-6 text-sm text-white lg:text-2xl h-13 lg:h-25 bg-primary'>
                <Link to='/'>The Developer Profile</Link>
                <Link to='/'>All Developers</Link>
            </div>
        </>
    )
}

export default NavBar;