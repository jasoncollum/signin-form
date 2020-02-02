import React, { useState } from 'react';

import ReactCardFlip from 'react-card-flip';

import SignInForm from '../../components/signin-form/signin-form.component';
import SignUpForm from '../../components/signup-form/signup-form.component';

import './card-flip.styles.css';

const CardFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className='card-flip-container'>
            <ReactCardFlip
                isFlipped={isFlipped}
                flipDirection='horizontal'
                flipSpeedFrontToBack='1'
                flipSpeedBackToFront='1'
            >
                <SignInForm handleClick={handleClick} />
                <SignUpForm handleClick={handleClick} />
            </ReactCardFlip>
        </div>
    )
}

export default CardFlip;