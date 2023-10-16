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
    screenSize,
    selectedWeight,
}) => {
    const [selectedFontFamily, setSelectedFontFamily] = useState('serif');
    const [selectedScreenSize, setSelectedScreenSize] = useState(100);
    const [textSize, setTextSize] = useState(16);

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
                            onChange={(e) => onWeightChange(e.target.value)} // Use onWeightChange
                        >
                            <option value="normal">Normal</option>
                            <option value="bold">Bold</option>
                            <option value="semibold">Semi Bold</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                        <label htmlFor="fontWeight" className="block text-xs  text-gray-900 dark:text-white">
                            Transform
                        </label>
                        <select
                            id="fontWeight"
                            className="bg-gray-50 border border-gray-300 text-gray-900 block w-40 h-5 text-xs"
                        >
                            <option value="default">Default</option>
                            <option value="upperCase">Upper Case</option>
                            <option value="lowerCase">Lower Case</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                        <label htmlFor="fontWeight" className="block text-xs  text-gray-900 dark:text-white">
                            Style
                        </label>
                        <select
                            id="fontWeight"
                            className="bg-gray-50 border border-gray-300 text-gray-900 block w-40 h-5 text-xs"
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
                        >
                            <option value="none">None</option>
                            <option value="underline">Underline</option>
                            <option value="line-through">Line-Through</option>
                        </select>
                    </div>
                    <div className='flex items-center justify-between mt-1'>
                        <label htmlFor="screenSize" className="block  text-xs  text-gray-900 dark-text-white">
                            Line Height <span><FontAwesomeIcon icon={faDisplay} /></span>
                        </label>
                        <select
                            id="screenSize"
                            className="text-gray-900 text-xs rounded-lg block w-15 h-4"
                        >
                            <option value="100">100</option>
                            <option value="150">150</option>
                            <option value="200">200</option>
                            <option value="250">250</option>
                        </select>
                    </div>

                    <div className='flex items-center justify-between mt-1'>
                        <input className='h-1'
                            type="range"
                            id="textSize"
                            min="1"
                            max="30"
                            step="1"
                        />
                        <input className=' h-5 text-xs w-12 border-2 rounded-lg' type="text"/>
                    </div>
                    <div className='flex items-center justify-between mt-1'>
                        <label htmlFor="screenSize" className="block  text-xs  text-gray-900 dark-text-white">
                            Letter Spacing <span><FontAwesomeIcon icon={faDisplay} /></span>
                        </label>
                        <select
                            id="screenSize"
                            className="text-gray-900 text-xs rounded-lg block w-15 h-4"
                        >
                            <option value="100">100</option>
                            <option value="150">150</option>
                            <option value="200">200</option>
                            <option value="250">250</option>
                        </select>
                    </div>

                    <div className='flex items-center justify-between mt-1'>
                        <input className='h-1 text-xs'
                            type="range"
                            id="textSize"
                            min="1"
                            max="20"
                            step="1"
                        />
                        <input className=' h-5 text-xs w-12 border-2 rounded-lg' type="text" />
                    </div>
                    <div className='flex items-center justify-between mt-1'>
                        <label htmlFor="screenSize" className="block  text-xs  text-gray-900 dark-text-white">
                            Word Spacing <span><FontAwesomeIcon icon={faDisplay} /></span>
                        </label>
                        <select
                            id="screenSize"
                            className="text-gray-900 text-xs rounded-lg block w-15 h-4"
                        >
                            <option value="100">100</option>
                            <option value="150">150</option>
                            <option value="200">200</option>
                            <option value="250">250</option>
                        </select>
                    </div>

                    <div className='flex items-center justify-between mt-1'>
                        <input className='h-1'
                            type="range"
                            id="textSize"
                            min="1"
                            max="30"
                            step="1"
                        />
                        <input className=' h-5 text-xs w-12 border-2 rounded-lg' type="text" />
                    </div>


                </div>
            </div>
        </div >
    );
};

export default Typography;