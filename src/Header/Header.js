import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='flex gap-4 text-3xl md:justify-center '>
                <Link to='/'>HOME</Link>
                <Link to='Reviews'>REVIEWS</Link>
                <Link to='Dashboard'>DASHBOARD</Link>
                <Link to='Blogs'>BLOGS</Link>
                <Link to='About'>ABOUT</Link>
            </div>
        </div>
    );
};

export default Header;