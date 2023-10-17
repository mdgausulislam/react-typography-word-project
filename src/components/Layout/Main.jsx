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
    const [selectedStyle, setSelectedStyle] = useState('normal'); // Add this state
    const [selectedDecoration, setSelectedDecoration] = useState('normal'); // Add this state
    const [selectedLineHeight, setSelectedLineHeight] = useState(1);
    const [selectedLetterSpacing, setSelectedLetterSpacing] = useState(0); // Initialize letter spacing state


    const handleLetterSpacingChange = (letterSpacing) => {
        setSelectedLetterSpacing(letterSpacing);
    };

    const handleLineHeightChange = (lineHeight) => {
        setSelectedLineHeight(lineHeight);
    };

    const handleDecorationChange = (decoration) => {
        setSelectedDecoration(decoration);
    };

    const handleStyleChange = (style) => {
        setSelectedStyle(style);
    };

    const handleTransformChange = (transform) => {
        setSelectedTransform(transform);
    };

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
                    onTransformChange={handleTransformChange}
                    onStyleChange={handleStyleChange}
                    onDecorationChange={handleDecorationChange}
                    onLineHeightChange={handleLineHeightChange} // Add this
                    onLetterSpacingChange={handleLetterSpacingChange} 
                    selectedFontFamily={selectedFontFamily}
                    screenSize={screenSize}
                    textSize={textSize}
                    selectedWeight={selectedWeight}
                    selectedTransform={selectedTransform}
                    selectedStyle={selectedStyle}
                    selectedDecoration={selectedDecoration} // Pass the selectedDecoration state
                    selectedLineHeight={selectedLineHeight} // Add this
                    selectedLetterSpacing={selectedLetterSpacing}
                />
                <Outlet />
            </div>
            <div className={`text ${selectedFontFamily}`}
                style={{
                    fontSize: `${screenSize}px`,
                    fontWeight: selectedWeight,
                    fontStyle: selectedStyle === 'italic' ? 'italic' : 'normal',
                    textDecoration: selectedDecoration === 'underline' ? 'underline' : 'none',
                    textTransform: selectedTransform,
                    lineHeight: selectedLineHeight, // Set the line-height here
                    letterSpacing: `${selectedLetterSpacing}px` // Set the letter spacing here
                }}>
                <h1 style={{
                    fontSize: `${textSize}px`,
                    fontWeight: selectedWeight,
                    textTransform: selectedTransform === 'upperCase' ? 'uppercase' : selectedTransform === 'lowerCase' ? 'lowercase' : 'none',
                    letterSpacing: `${selectedLetterSpacing}px` // Set the letter spacing here
                }}>
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