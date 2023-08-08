import React, { useState } from 'react';
import { Row, Col, Button } from "reactstrap";
import WelcomeSideBar from '../components/WelcomeSideBar';
import WelcomeNavbar from '../components/WelcomeNavbar';
import Quests from '../components/Quests';

function WelcomeQuests() {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <>
            <div className='welcome-top-navbar'>
                <Button onClick={toggleSidebar}><i className="fa-solid fa-chart-simple fa-rotate-90"></i></Button>
                <img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/5d67cdf1-9abe-4d1b-afba-ce9bf016493f-profile.png' alt='' />
                <span>Welcome to Zealy</span>
            </div>
            <Row className='welcome m-0'>
                <div className={`sidebar ${sidebarVisible ? '' : 'hidden'}`}>
                    <Col xs='auto'>
                        <WelcomeSideBar />
                    </Col>
                    <Col xs='auto'>
                        <WelcomeNavbar />
                    </Col>
                </div>
                <Col>
                    <Quests />
                </Col>
            </Row>
        </>
    )
}

export default WelcomeQuests;
