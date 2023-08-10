import React from 'react';
import backgroundImage from './lead.png';

function Leaderboard() {
    return (
        <div className="full-image-container">
            <img
                src={backgroundImage}
                alt="Full Background"
                className="full-image"
                style={{ width: '80%' }} // Use correct syntax for inline style
            />
        </div>
    );
}

export default Leaderboard;
