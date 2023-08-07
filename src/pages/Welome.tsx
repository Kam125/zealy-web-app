import React from 'react'
import { Row, Col } from "reactstrap";
import WelcomeSideBar from '../components/WelcomeSideBar'
import WelcomeNavbar from '../components/WelcomeNavbar';
import Quests from '../components/Quests';

function WelomeZelly() {
    return (
        <>
            <Row className='welcome'>
                <div>
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

export default WelomeZelly