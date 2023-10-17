import React, { useState } from 'react';
import './Typography.css'
import { PlusSmallIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'


const Typography = ({
    isOpen,
    onClose,
    onFontFamilyChange,
    onScreenSizeChange,
    onTextSizeChange,
    onWeightChange,
    onTransformChange,
    onStyleChange,
    onDecorationChange, // Add onDecorationChange prop
    onLineHeightChange, // Add onLineHeightChange prop
    onLetterSpacingChange, // Added onLetterSpacingChange prop
    onWordSpacingChange,
    screenSize,
    selectedWeight,
    selectedTransform: propSelectedTransform,
    selectedStyle,
    selectedDecoration, // Add selectedDecoration prop
    selectedLineHeight, // Add selectedLineHeight prop
    selectedLetterSpacing, // Added selectedLetterSpacing prop
    selectedWordSpacing, // Add selectedWordSpacing prop
}) => {
    const [selectedFontFamily, setSelectedFontFamily] = useState('serif');
    const [selectedScreenSize, setSelectedScreenSize] = useState("100");
    const [textSize, setTextSize] = useState(16);
    const [selectedTransform, setSelectedTransform] = useState('default');
    const [lineHeight, setLineHeight] = useState(1);
    const [letterSpacing, setLetterSpacing] = useState(0); // Initialize letter spacing state


    // const [selectedStyle, setSelectedStyle] = useState('normal'); // Add this state

    const [wordSpacing, setWordSpacing] = useState(0);

    const handleWordSpacingChange = (event) => {
        const newWordSpacing = event.target.value;
        setWordSpacing(newWordSpacing);
        onWordSpacingChange(newWordSpacing);
    };



    const handleLetterSpacingChange = (event) => {
        const newLetterSpacing = event.target.value;
        setLetterSpacing(newLetterSpacing);
        onLetterSpacingChange(newLetterSpacing); // Call the parent's function to update it
    };



    const handleLineHeightChange = (event) => {
        const newLineHeight = event.target.value;
        setLineHeight(newLineHeight);
        // Call the parent's function to update line-height
        onLineHeightChange(newLineHeight);
    };

    const handleDecorationChange = (event) => {
        const newDecoration = event.target.value;
        onDecorationChange(newDecoration); // Call the parent's function to update it
    };


    const handleStyleChange = (event) => {
        const newStyle = event.target.value;
        onStyleChange(newStyle); // Call the parent's function to update it
    };


    const handleTransformChange = (event) => {
        const newTransform = event.target.value;
        const selectedTransform = newTransform || propSelectedTransform;
        setSelectedTransform(selectedTransform);
        onTransformChange(selectedTransform);
    };

    const handleTextSizeChange = (event) => {
        const newSize = event.target.value;
        setTextSize(newSize);
        onTextSizeChange(newSize);
    };

    const handleFontFamilyChange = (fontFamily) => {
        setSelectedFontFamily(fontFamily);
        onFontFamilyChange(fontFamily);
    };

    const handleScreenSizeChange = (event) => {
        const newSize = event.target.value;
        setSelectedScreenSize(newSize);
        onScreenSizeChange(newSize);
    };

    if (!isOpen) {
        return null;
    }
    return (
        <div className="popup-container" onClick={onClose}>
            <div className="popup">
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                    <div className='flex items-center justify-between gap-36'>
                        <h5 className='font-bold text-xs'>Typography</h5>
                        <div className='flex icon-image gap-'>
                            <XCircleIcon className=" w-5 h-5" />
                            <PlusSmallIcon className=" w-5 h-5" />
                            <hr />
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-3'>
                        <label htmlFor="fontFamily" className="block  text-xs text-gray-900 dark:text-white">Family</label>
                        <select
                            id="fontFamily"
                            className="bg-gray-50 border border-gray-300 text-gray-900 block w-40 h-5  text-xs"
                            value={selectedFontFamily}
                            onChange={(e) => handleFontFamilyChange(e.target.value)}
                        >
                            <option value="serif">Serif</option>
                            <option value="arial">Arial</option>
                            <option value="roboto">Roboto</option>
                        </select>
                    </div>

                    <div className='flex items-center justify-between mt-1'>
                        <label htmlFor="screenSize" className="block  text-xs  text-gray-900 dark-text-white">
                            Size <span><FontAwesomeIcon icon={faDisplay} /></span>
                        </label>
                        <select
                            id="screenSize"
                            className="text-gray-900 text-xs rounded-lg block w-15 h-4"
                            value={selectedScreenSize}
                            onChange={(e) => handleScreenSizeChange(e.target.value)}
                        >
                            <option className='text-xs' value="100">px</option>
                            <option className='text-xs' value="100">100</option>
                            <option className='text-xs' value="150">150</option>
                            <option className='text-xs' value="200">200</option>
                            <option className='text-xs' value="250">250</option>
                        </select>
                    </div>

                    <div className='flex items-center justify-between mt-1'>
                        <input className='h-1'
                            type="range"
                            id="textSize"
                            min="1"
                            max="30"
                            step="1"
                            value={textSize}
                            onChange={handleTextSizeChange}
                        />
                        <input className=' h-4 text-xs w-12 border-2 rounded-lg' type="text" value={textSize} readOnly />
                    </div>
                    <div className="flex items-center justify-between mt-1">
                        <label htmlFor="fontWeight" className="block text-xs  text-gray-900 dark:text-white">
                            Weight
                        </label>
                        <select
                            id="fontWeight"
                            className="bg-gray-50 border border-gray-300 text-gray-900 block w-40 h-5 text-xs"
                            value={selectedWeight}
                            onChange={(e) => onWeightChange(e.target.value)}
                        >
                            <option value="normal">Normal</option>
                            <option value="bold">Bold</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                        <label id="transform" className="block text-xs  text-gray-900 dark:text-white">
                            Transform
                        </label>
                        <select
                            id="transform"
                            className="bg-gray-50 border border-gray-300 text-gray-900 block w-40 h-5 text-xs"
                            value={selectedTransform}
                            onChange={handleTransformChange} //
                        >
                            <option value="default">Default</option>
                            <option value="upperCase">Upper Case</option>
                            <option value="lowerCase">Lower Case</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                        <label htmlFor="fontWeight" className="block text-xs text-gray-900 dark:text-white">
                            Style
                        </label>
                        <select
                            id="fontWeight"
                            className="bg-gray-50 border border-gray-300 text-gray-900 block w-40 h-5 text-xs"
                            value={selectedStyle} // Use the selectedStyle prop
                            onChange={handleStyleChange} // Call the local handler
                        >
                            <option value="normal">Normal</option>
                            <option value="italic">Italic</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                        <label htmlFor="fontWeight" className="block text-xs  text-gray-900 dark:text-white">
                            Decoration
                        </label>
                        <select
                            id="fontWeight"
                            className="bg-gray-50 border border-gray-300 text-gray-900 block w-40 h-5 text-xs"
                            value={selectedDecoration}
                            onChange={(e) => handleDecorationChange(e)}
                        >
                            <option value="none">None</option>
                            <option value="underline">Underline</option>
                        </select>
                    </div>
                    <div className='flex items-center justify-between mt-1'>
                        <label htmlFor="screenSize" className="block  text-xs  text-gray-900 dark-text-white">
                            Line <span><FontAwesomeIcon icon={faDisplay} /></span>
                        </label>
                        <select
                            id="screenSize"
                            className="text-gray-900 text-xs rounded-lg block w-15 h-4"
                        >
                            <option value="100">px</option>
                        </select>
                    </div>

                    <div className='flex items-center justify-between mt-1'>
                        <input className='h-1'
                            type="range"
                            id="lineHeight"
                            min="1"
                            max="3" // Adjust the range as per your needs
                            step="0.1" // Adjust the step as per your needs
                            value={lineHeight}
                            onChange={handleLineHeightChange} // Bind to line-height handler
                        />
                        <input className="h-5 text-xs w-12 border-2 rounded-lg text-center" type="text" value={lineHeight} readOnly />
                    </div>
                    <div className='flex items-center justify-between mt-1'>
                        <label htmlFor="screenSize" className="block  text-xs  text-gray-900 dark-text-white">
                            Letter <span><FontAwesomeIcon icon={faDisplay} /></span>
                        </label>
                        <select
                            id="screenSize"
                            className="text-gray-900 text-xs rounded-lg block w-15 h-4"
                        >
                            <option value="100">px</option>
                        </select>
                    </div>

                    <div className='flex items-center justify-between mt-1'>
                        <input className='h-1'
                            type="range"
                            id="letterSpacing"
                            min="0"
                            max="20" // Adjust the range as per your needs
                            step="1" // Adjust the step as per your needs
                            value={letterSpacing}
                            onChange={handleLetterSpacingChange} // Bind to letter-spacing handler
                        />
                        <input
                            className="h-5 text-xs w-12 border-2 rounded-lg text-center"
                            type="text"
                            value={letterSpacing}
                            readOnly
                        />
                    </div>
                    <div className='flex items-center justify-between mt-1'>
                        <label htmlFor="screenSize" className="block  text-xs  text-gray-900 dark-text-white">
                            Word <span><FontAwesomeIcon icon={faDisplay} /></span>
                        </label>
                        <select
                            id="screenSize"
                            className="text-gray-900 text-xs rounded-lg block w-15 h-4"
                        >
                            <option value="100">px</option>

                        </select>
                    </div>

                    <div className='flex items-center justify-between mt-1'>
                        <label htmlFor="screenSize" className="block  text-xs  text-gray-900 dark-text-white">
                            Word Spacing <span><FontAwesomeIcon icon={faDisplay} /></span>
                        </label>
                        <input
                            type="range"
                            id="wordSpacing"
                            min="0"
                            max="20"
                            step="1"
                            value={wordSpacing}
                            onChange={handleWordSpacingChange}
                        />
                        <input
                            className="h-5 text-xs w-12 border-2 rounded-lg text-center"
                            type="text"
                            value={wordSpacing}
                            readOnly
                        />
                    </div>


                </div>
            </div>
        </div >
    );
};

export default Typography;