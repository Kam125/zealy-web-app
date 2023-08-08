import React, { useState } from 'react';
import { Row, Col, Button } from "reactstrap";
import WelcomeSideBar from '../components/WelcomeSideBar';
import WelcomeNavbar from '../components/WelcomeNavbar';
import Quests from '../components/Quests';

const headers = ['👋 Find your Zeal', '🔥 Prepare for Lift-off', '🔥 Prepare for Lift-off'];

const cardArrays = [
    [
        {
            title: 'Contributor? Visit Planet Zealy 🪐',
            description:
                'The Planet Zealy Questboard Adventure begins when players receive a mysterious message...',
            xpButtonText: '10 XP',
            intervalButtonText: 'Daily',
        },
        {
            title: 'Contributor? Visit Planet Zealy 🪐',
            description:
                'The Planet Zealy Questboard Adventure begins when players receive a mysterious message...',
            xpButtonText: '10 XP',
            intervalButtonText: 'Daily',
        },
        {
            title: 'Contributor? Visit Planet Zealy 🪐',
            description:
                'The Planet Zealy Questboard Adventure begins when players receive a mysterious message...',
            xpButtonText: '10 XP',
            intervalButtonText: 'Daily',
        },

    ],
    [
        {
            title: 'Contributor? Visit Planet Zealy 🪐',
            description:
                'The Planet Zealy Questboard Adventure begins when players receive a mysterious message...',
            xpButtonText: '10 XP',
            intervalButtonText: 'Daily',
        },
        {
            title: 'Contributor? Visit Planet Zealy 🪐',
            description:
                'The Planet Zealy Questboard Adventure begins when players receive a mysterious message...',
            xpButtonText: '10 XP',
            intervalButtonText: 'Daily',
        },
        {
            title: 'Contributor? Visit Planet Zealy 🪐',
            description:
                'The Planet Zealy Questboard Adventure begins when players receive a mysterious message...',
            xpButtonText: '10 XP',
            intervalButtonText: 'Daily',
        },
        {
            title: 'Contributor? Visit Planet Zealy 🪐',
            description:
                'The Planet Zealy Questboard Adventure begins when players receive a mysterious message...',
            xpButtonText: '10 XP',
            intervalButtonText: 'Daily',
        },
        {
            title: 'Contributor? Visit Planet Zealy 🪐',
            description:
                'The Planet Zealy Questboard Adventure begins when players receive a mysterious message...',
            xpButtonText: '10 XP',
            intervalButtonText: 'Daily',
        },
        {
            title: 'Contributor? Visit Planet Zealy 🪐',
            description:
                'The Planet Zealy Questboard Adventure begins when players receive a mysterious message...',
            xpButtonText: '10 XP',
            intervalButtonText: 'Daily',
        },
        {
            title: 'Contributor? Visit Planet Zealy 🪐',
            description:
                'The Planet Zealy Questboard Adventure begins when players receive a mysterious message...',
            xpButtonText: '10 XP',
            intervalButtonText: 'Daily',
        },
        {
            title: 'Contributor? Visit Planet Zealy 🪐',
            description:
                'The Planet Zealy Questboard Adventure begins when players receive a mysterious message...',
            xpButtonText: '10 XP',
            intervalButtonText: 'Daily',
        },
        {
            title: 'Contributor? Visit Planet Zealy 🪐',
            description:
                'The Planet Zealy Questboard Adventure begins when players receive a mysterious message...',
            xpButtonText: '10 XP',
            intervalButtonText: 'Daily',
        },
        {
            title: 'Contributor? Visit Planet Zealy 🪐',
            description:
                'The Planet Zealy Questboard Adventure begins when players receive a mysterious message...',
            xpButtonText: '10 XP',
            intervalButtonText: 'Daily',
        },
        {
            title: 'Contributor? Visit Planet Zealy 🪐',
            description:
                'The Planet Zealy Questboard Adventure begins when players receive a mysterious message...',
            xpButtonText: '10 XP',
            intervalButtonText: 'Daily',
        },
    ],
    [
        {
            title: 'Contributor? Visit Planet Zealy 🪐',
            description:
                'The Planet Zealy Questboard Adventure begins when players receive a mysterious message...',
            xpButtonText: '10 XP',
            intervalButtonText: 'Daily',
        },
        {
            title: 'Contributor? Visit Planet Zealy 🪐',
            description:
                'The Planet Zealy Questboard Adventure begins when players receive a mysterious message...',
            xpButtonText: '10 XP',
            intervalButtonText: 'Daily',
        },
        {
            title: 'Contributor? Visit Planet Zealy 🪐',
            description:
                'The Planet Zealy Questboard Adventure begins when players receive a mysterious message...',
            xpButtonText: '10 XP',
            intervalButtonText: 'Daily',
        },

    ],
];

function WelcomeQuests() {
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);
    const [activeButtons, setActiveButtons] = useState<string[]>([]);

    const socialIcons = [
        <i key="link-icon" className="fa-solid fa-link me-5"></i>,
        <i key="discord-icon" className="fa-brands fa-discord"></i>
    ];

    const toggleButton = (button: string): void => {
        if (activeButtons.includes(button)) {
            setActiveButtons(activeButtons.filter((btn) => btn !== button));
        } else {
            setActiveButtons([...activeButtons, button]);
        }
    };

    const questButtons: JSX.Element[] = headers.map((header, index) => (
        <Button
            key={`quest-button-${index}`}
            onClick={() => toggleButton(`button-${index}`)}
            className={activeButtons.includes(`button-${index}`) ? 'active' : ''}
        >
            {header}
        </Button>
    ));

    const toggleSidebar = (): void => {
        setSidebarVisible(!sidebarVisible);
    };

    const activeHeaders: string[] = activeButtons.map((button) => headers[parseInt(button.split('-')[1])]);
    const activeCardArrays: any[][] = activeButtons.map((button) => cardArrays[parseInt(button.split('-')[1])]);

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
                    <Quests
                        imgSrc="https://crew3-production.s3.eu-west-3.amazonaws.com/public/5d67cdf1-9abe-4d1b-afba-ce9bf016493f-profile.png"
                        title="Welcome To Zealy"
                        description="You're at the right place. Choose your path forward ✨"
                        socialIcons={socialIcons}
                        questButtons={questButtons}
                        headers={activeHeaders.length > 0 ? activeHeaders : headers}
                        cardArrays={activeCardArrays.length > 0 ? activeCardArrays : cardArrays}
                    />
                </Col>
            </Row>
        </>
    )
}

export default WelcomeQuests;
