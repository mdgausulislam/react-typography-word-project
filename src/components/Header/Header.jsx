// Header.js
import React, { useState } from 'react';
import { GlobeAltIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';
import Typography from '../Typograpy/Typography';

const Header = ({
    onFontFamilyChange,
    onScreenSizeChange,
    onTextSizeChange,
    onWeightChange,
    selectedFontFamily,
    screenSize,
    textSize,
    selectedWeight,
    selectedTransform, // Add selectedTransform prop
}) =>{
    const [isPopupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };



    return (
        <div className='flex items-center justify-between gap-36'>
           <h2 className={`text-2xl ${selectedTransform === 'upperCase' ? 'uppercase' : ''}`}>
                Typography
            </h2>
            <div className='flex icon-image'>
                <ActiveLink to="/" className='flex items-center justify-center'>
                    <GlobeAltIcon className="w-6 h-6" />
                </ActiveLink>
                <ActiveLink to="/typography" className='flex items-center justify-center'>
                    <PencilSquareIcon
                        onClick={togglePopup}
                        className={`w-6 h-6 ${isPopupOpen ? 'active' : ''}`}
                    />
                </ActiveLink>
            </div>
            <Typography
                isOpen={isPopupOpen}
                onFontFamilyChange={onFontFamilyChange}
                onScreenSizeChange={onScreenSizeChange}
                onTextSizeChange={onTextSizeChange}
                onWeightChange={onWeightChange}
                screenSize={screenSize}
                selectedWeight={selectedWeight}
                selectedTransform={selectedTransform} // Pass selectedTransform to Typography
            />

        </div>
    );
};

export default Header;