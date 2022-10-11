import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="flex items-center py-4 px-6 border-solid border-b border-gray-200">
            <div>
                <img src="/img/Logo.png"
                     alt=""
                     className="h-10 w-10"
                />
            </div>
            <Link to={'/'} className='ml-4 text-2xl'>
                GitHub
            </Link>
            <Link to={'/user/pandochka-y'} className='ml-4 text-2xl'>
                Profile
            </Link>
        </header>
    );
};

export default Header;