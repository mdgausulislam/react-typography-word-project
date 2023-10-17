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
    onTransformChange,
    onStyleChange, // Added onStyleChange prop
    onDecorationChange, // Add onDecorationChange prop
    onLineHeightChange, // Define onLineHeightChange prop
    onLetterSpacingChange, // Added onLetterSpacingChange prop
    selectedFontFamily,
    screenSize,
    textSize,
    selectedWeight,
    selectedTransform,
    selectedStyle,
    selectedDecoration, // Add selectedDecoration prop
    selectedLineHeight,
    selectedLetterSpacing, // Added selectedLetterSpacing prop
    
}) => {


    const [isPopupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };



    return (
        <div className='flex items-center justify-between gap-36'>
            <h2 className={`text-2xl`}>
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
                onTransformChange={onTransformChange}
                onStyleChange={onStyleChange}
                onDecorationChange={onDecorationChange} // Pass the onDecorationChange prop
                onLineHeightChange={onLineHeightChange} // Pass the onLineHeightChange prop
                onLetterSpacingChange={onLetterSpacingChange} 
                screenSize={screenSize}
                selectedWeight={selectedWeight}
                selectedTransform={selectedTransform}
                selectedStyle={selectedStyle}
                selectedDecoration={selectedDecoration} // Pass the selectedDecoration prop
                selectedLineHeight={selectedLineHeight} // Pass the selectedLineHeight prop
                selectedLetterSpacing={selectedLetterSpacing} 
            />
        </div>
    );
};

export default Header;