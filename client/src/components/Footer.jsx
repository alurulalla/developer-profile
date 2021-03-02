import React from 'react';

import { ReactComponent as HeartSVG } from '../images/love.svg';

const Footer = () => {
    return (
        <footer className='bottom-0 flex items-center justify-center w-full text-xl text-center text-white lg:static text-xxs lg:text-2xl bg-primary h-13 lg:h-25'>
            Made with
            <HeartSVG className='w-2 h-2 mx-1 text-red-500 fill-current lg:w-auto lg:h-auto' />
              by Murali
        </footer>
    )
}

export default Footer;