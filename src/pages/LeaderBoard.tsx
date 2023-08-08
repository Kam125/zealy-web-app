import React, { useState } from 'react';
import { Row, Col, Button } from "reactstrap";
import WelcomeSideBar from '../components/WelcomeSideBar'
import WelcomeNavbar from '../components/WelcomeNavbar';

function LeaderBoard() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const data = [
    {
      id: 1,
      logo: 'https://crew3-production.s3.eu-west-3.amazonaws.com/public/135729d4-935e-43a6-9604-48bd7c3727a4-logo.png',
      username: 'ItsMeSensei_',
      quests: '89 quests',
      xp: '3380 xp'
    },
    {
      id: 2,
      logo: 'https://crew3-production.s3.eu-west-3.amazonaws.com/public/135729d4-935e-43a6-9604-48bd7c3727a4-logo.png',
      username: 'ItsMeSensei_',
      quests: '89 quests',
      xp: '3380 xp'
    },
    {
      id: 3,
      logo: 'https://crew3-production.s3.eu-west-3.amazonaws.com/public/135729d4-935e-43a6-9604-48bd7c3727a4-logo.png',
      username: 'ItsMeSensei_',
      quests: '89 quests',
      xp: '3380 xp'
    },
    {
      id: 4,
      logo: 'https://crew3-production.s3.eu-west-3.amazonaws.com/public/135729d4-935e-43a6-9604-48bd7c3727a4-logo.png',
      username: 'ItsMeSensei_',
      quests: '89 quests',
      xp: '3380 xp'
    },
    {
      id: 5,
      logo: 'https://crew3-production.s3.eu-west-3.amazonaws.com/public/135729d4-935e-43a6-9604-48bd7c3727a4-logo.png',
      username: 'ItsMeSensei_',
      quests: '89 quests',
      xp: '3380 xp'
    },
    {
      id: 6,
      logo: 'https://crew3-production.s3.eu-west-3.amazonaws.com/public/135729d4-935e-43a6-9604-48bd7c3727a4-logo.png',
      username: 'ItsMeSensei_',
      quests: '89 quests',
      xp: '3380 xp'
    },
    {
      id: 7,
      logo: 'https://crew3-production.s3.eu-west-3.amazonaws.com/public/135729d4-935e-43a6-9604-48bd7c3727a4-logo.png',
      username: 'ItsMeSensei_',
      quests: '89 quests',
      xp: '3380 xp'
    },
    {
      id: 8,
      logo: 'https://crew3-production.s3.eu-west-3.amazonaws.com/public/135729d4-935e-43a6-9604-48bd7c3727a4-logo.png',
      username: 'ItsMeSensei_',
      quests: '89 quests',
      xp: '3380 xp'
    },
    {
      id: 9,
      logo: 'https://crew3-production.s3.eu-west-3.amazonaws.com/public/135729d4-935e-43a6-9604-48bd7c3727a4-logo.png',
      username: 'ItsMeSensei_',
      quests: '89 quests',
      xp: '3380 xp'
    },
    {
      id: 10,
      logo: 'https://crew3-production.s3.eu-west-3.amazonaws.com/public/135729d4-935e-43a6-9604-48bd7c3727a4-logo.png',
      username: 'ItsMeSensei_',
      quests: '89 quests',
      xp: '3380 xp'
    },
    {
      id: 11,
      logo: 'https://crew3-production.s3.eu-west-3.amazonaws.com/public/135729d4-935e-43a6-9604-48bd7c3727a4-logo.png',
      username: 'ItsMeSensei_',
      quests: '89 quests',
      xp: '3380 xp'
    },
    {
      id: 12,
      logo: 'https://crew3-production.s3.eu-west-3.amazonaws.com/public/135729d4-935e-43a6-9604-48bd7c3727a4-logo.png',
      username: 'ItsMeSensei_',
      quests: '89 quests',
      xp: '3380 xp'
    },

  ];

  return (
    <>
      <div className='welcome-top-navbar'>
        <Button onClick={toggleSidebar}><i className="fa-solid fa-chart-simple fa-rotate-90"></i></Button>
        <img src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/5d67cdf1-9abe-4d1b-afba-ce9bf016493f-profile.png' alt='' />
        <span>Welcome to Zealy</span>
      </div>
      <Row className='leaderboard text-start w-100 m-0'>
        <div className={`sidebar ${sidebarVisible ? '' : 'hidden'}`}>
          <Col xs='auto'>
            <WelcomeSideBar />
          </Col>
          <Col xs='auto'>
            <WelcomeNavbar />
          </Col>
        </div>
        <Col>
          <div className='leaderboard-content'>
            <h1>Leaderboard</h1>
            <div className='leaderboard-table'>
              {data.map((item) => (
                <Row
                  key={item.id}
                  className='justify-content-between align-items-center table-row'
                >
                  <Col xs='auto'>
                    <Row className='align-items-center'>
                      <Col xs='auto'>
                        <span>{item.id}</span>
                      </Col>
                      <Col xs='auto'>
                        <img src={item.logo} alt='' />
                      </Col>
                      <Col xs='auto'>
                        <p className='m-0'>{item.username}</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs='auto'>
                    <Row className='align-items-center'>
                      <Col xs='auto'>
                        <p className='m-0'>{item.quests}</p>
                      </Col>
                      <Col xs='auto'>
                        <span>{item.xp}</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default LeaderBoard