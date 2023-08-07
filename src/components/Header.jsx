import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-teal-500 px-5 py-3 text-white flex justify-between'>
            <h3>Logo</h3>
            <ul className='flex'>
                <li className='px-3'>
                    <Link to={"/"}>
                        Home
                    </Link>
                </li>
                <li className='px-3'>
                    <Link to={"/about"}>
                        About
                    </Link>
                </li>
                <li className='px-3'>
                    <Link to={"/contact"}>
                        Contact
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;