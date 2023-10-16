import React, { useState } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

import './Main.css';

const Main = () => {
    const [selectedFontFamily, setSelectedFontFamily] = useState('serif');
    const [screenSize, setScreenSize] = useState(100);
    const [textSize, setTextSize] = useState(16);
    const [selectedWeight, setSelectedWeight] = useState('normal');
    const [selectedTransform, setSelectedTransform] = useState('default');

    const handleTransformChange = (transform) => {
        setSelectedTransform(transform);
    }

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
        <div className='grid grid-cols-2 gap-96 mx-8 mt-2'>
            <div>
                 <Header
                    onFontFamilyChange={handleFontFamilyChange}
                    onScreenSizeChange={handleScreenSizeChange}
                    onTextSizeChange={handleTextSizeChange}
                    onWeightChange={handleWeightChange}
                    onTransformChange={handleTransformChange} // Pass handleTransformChange
                    selectedFontFamily={selectedFontFamily}
                    screenSize={screenSize}
                    textSize={textSize}
                    selectedWeight={selectedWeight}
                    selectedTransform={selectedTransform} // Pass selectedTransform
                />
                <Outlet />
            </div>
            <div className={`text ${selectedFontFamily}`} style={{ fontSize: `${screenSize}px`, fontWeight: selectedWeight, textTransform: selectedTransform }}>
                <h1 style={{ fontSize: `${textSize}px`, fontWeight: selectedWeight }}>
                    I am Md Gousul Islam Hemonto.
                    I completed my BSc in CSE of Green University of Bangladesh.
                    I am a Front-end Developer. I skilled my Knowledge (HTML, CSS(Tailwind, Bootstrap),
                    Javascript, and ReactJS). I am learning skills in ExpressJS, NodeJs, and MongoDB.
                </h1>
            </div>
        </div>
    );
};

export default Main;