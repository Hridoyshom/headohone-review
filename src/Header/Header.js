import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './../Custom link/CustomLink';

const Header = () => {
    return (
        <div>
            <div className='flex gap-4 text-3xl md:justify-center '>
                <CustomLink to='/'>HOME</CustomLink>
                <CustomLink to='Reviews'>REVIEWS</CustomLink>
                <CustomLink to='Dashboard'>DASHBOARD</CustomLink>
                <CustomLink to='Blogs'>BLOGS</CustomLink>
                <CustomLink to='About'>ABOUT</CustomLink>
            </div>
        </div>
    );
};

export default Header;