import React, { useState } from 'react';
import { GlobeAltIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import Typography from '../Typograpy/Typography';

const Header = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen); // Toggle the state
    };
    return (
        <div className='flex items-center justify-between gap-36'>
            <h2 className='text-2xl '>Typography</h2>
            <div className='flex icon-image'>
                <ActiveLink to="/" className='flex items-center justify-center'><GlobeAltIcon className=" w-6 h-6" /></ActiveLink>
                <ActiveLink to="/typography" className='flex items-center justify-center'>
                    <PencilSquareIcon
                        onClick={togglePopup}
                        className={`w-6 h-6 ${isPopupOpen ? 'active' : ''}`}
                    />
                </ActiveLink>
            </div>
            <Typography isOpen={isPopupOpen} onClose={togglePopup} />
        </div>
    );
};

export default Header;