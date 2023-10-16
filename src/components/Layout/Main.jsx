import React, { useState } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

import './Main.css';

const Main = () => {
    const [selectedFontFamily, setSelectedFontFamily] = useState('serif');
    const [screenSize, setScreenSize] = useState(100);
    const [textSize, setTextSize] = useState(16);
    const [selectedWeight, setSelectedWeight] = useState('normal');

    const handleScreenSizeChange = (size) => {
        setScreenSize(size);
    };

    const handleFontFamilyChange = (fontFamily) => {
        setSelectedFontFamily(fontFamily);
    };

    const handleTextSizeChange = (size) => {
        setTextSize(size);
    };

    const handleWeightChange = (weight) => {
        setSelectedWeight(weight);
    };


    return (
        <div className='grid grid-cols-2 gap-96 mx-8 mt-8'>
            <div>
                <Header
                    onFontFamilyChange={handleFontFamilyChange}
                    onScreenSizeChange={handleScreenSizeChange}
                    onTextSizeChange={handleTextSizeChange}
                    onWeightChange={handleWeightChange}
                    selectedFontFamily={selectedFontFamily}
                    screenSize={screenSize}
                    textSize={textSize}
                    selectedWeight={selectedWeight}
                />
                <Outlet />
            </div>
            <div className={`text ${selectedFontFamily}`} style={{ fontSize: `${screenSize} px`, fontWeight: selectedWeight }}>
                <h1 style={{ fontSize: `${textSize}px`, fontWeight: selectedWeight }}>Hemonto</h1>
            </div>
        </div>
    );
};

export default Main;