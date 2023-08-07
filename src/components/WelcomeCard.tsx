import React from 'react'
import { Button } from 'reactstrap'

function WelcomeCard() {
    return (
        <div className='welcome-card'>
            <h4>Contributor? Visit Planet Zealy 🪐</h4>
            <p>The Planet Zealy Questboard Adventure begins when players receive a mysterious message from a long-lost ancient 
                civilization on Planet Zealy. This civilization holds the key to an extraordinary power 
                source that could change the fate of the entire galaxy.
                Players must embark on this crucial mission to save their own planet from a looming energy crisis and uncover the 
                secrets of the ancient Zealy civilization.
                Are you in?
            </p>
            <div className='card-footer d-flex justify-content-between mt-5'>
                <Button id='xp-btn'>10 XP</Button>
                <Button id='interval-btn'>Daily</Button>
            </div>
        </div>
    )
}

export default WelcomeCard