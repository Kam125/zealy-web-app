import React from 'react';
import { Row, Col } from 'reactstrap';
import QuestBoardSection from './QuestBoardSection';

interface QuestsProps {
  imgSrc: string;
  title: string;
  description: string;
  socialIcons: React.ReactNode;
  questButtons: React.ReactNode;
  headers: string[];
  cardArrays: {
    title: string;
    description: string;
    xpButtonText: string;
    intervalButtonText: string;
  }[][];
}

function Quests(props: QuestsProps) {
  const {
    imgSrc,
    title,
    description,
    socialIcons,
    questButtons,
    headers,
    cardArrays,
  } = props;

  return (
    <div className="quests text-start">
      <Row>
        <Col xs="auto">
          <img src={imgSrc} alt="" className="logo" />
        </Col>
        <Col>
          <h2>{title}</h2>
          <p>{description}</p>
          {socialIcons}
        </Col>
      </Row>
      {questButtons}
      <QuestBoardSection headers={headers} cardArrays={cardArrays} />
    </div>
  );
}

export default Quests;
