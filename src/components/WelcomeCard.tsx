import React from 'react';
import { Button } from 'reactstrap';

interface WelcomeCardProps {
    title: string;
    description: string;
    xpButtonText: string;
    intervalButtonText: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ title, description, xpButtonText, intervalButtonText }) => {
    return (
        <div className='welcome-card'>
            <h4>{title}</h4>
            <p>{description}</p>
            <div className='card-footer d-flex justify-content-between mt-5'>
                <Button id='xp-btn'>{xpButtonText}</Button>
                <Button id='interval-btn'>{intervalButtonText}</Button>
            </div>
        </div>
    );
}

export default WelcomeCard;
