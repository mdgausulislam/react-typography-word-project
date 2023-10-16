import React from 'react';
import './Typography.css'

const Typography = ({ isOpen, onClose }) => {

    if (!isOpen) {
        return null;
      }
    
    return (
        <div className="popup-container" onClick={onClose}>
        <div className="popup">
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>Popup Content</h3>
            <p>Here is the content of your popup.</p>
          </div>
        </div>
      </div>
    );
};

export default Typography;