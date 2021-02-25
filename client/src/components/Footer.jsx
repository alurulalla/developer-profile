import React from 'react';

import { ReactComponent as HeartSVG } from '../images/love.svg';

const Footer = () => {
    return (
        <footer className='flex items-center justify-center w-full text-xl text-center text-white lg:text-3xl bg-primary h-25'>
            Made with
            <HeartSVG className='mx-1 text-red-500 fill-current' />
              by Murali
        </footer>
    )
}

export default Footer;