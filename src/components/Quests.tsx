import React from 'react'
import { Row, Col, Button } from "reactstrap";
import WelcomeCard from './WelcomeCard';

function Quests() {
    return (
        <div className='quests text-start'>
            <Row>
                <Col xs='auto'>
                    <img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/5d67cdf1-9abe-4d1b-afba-ce9bf016493f-profile.png' alt='' className='logo'/>
                </Col>
                <Col>
                    <h2>Welcome To Zealy</h2>
                    <p>You're at the right place. Choose your path forward ✨</p>
                    <i className="fa-solid fa-link me-5"></i>
                    <i className="fa-brands fa-discord"></i>
                </Col>
            </Row>
            <Button><i className="fa-solid fa-hands-clapping me-2"></i>Find your Zeal</Button>
            <Button><i className="fa-solid fa-fire me-2"></i>Preapare for Lift-off</Button>
            <h5 id='find-zeal-heading'>#👋 Find your Zeal</h5>
            <Row className='find-your-zeal gap-3'>
                    <WelcomeCard />
                    <WelcomeCard />
                    <WelcomeCard />
            </Row>
            <h5 id='lift-off-heading'>#🔥 Prepare for Lift-off</h5>
            <Row className='lift-off gap-3'>
                    <WelcomeCard />
                    <WelcomeCard />
                    <WelcomeCard />
                    <WelcomeCard />
                    <WelcomeCard />
                    <WelcomeCard />
                    <WelcomeCard />
                    <WelcomeCard />
                    <WelcomeCard />
            </Row>
        </div>
    )
}

export default Quests