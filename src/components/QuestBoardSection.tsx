import React from 'react';
import { Row } from 'reactstrap';
import WelcomeCard from './WelcomeCard';

interface WelcomeCardData {
  title: string;
  description: string;
  xpButtonText: string;
  intervalButtonText: string;
}

interface QuestBoardSectionProps {
  headers: string[];
  cardArrays: WelcomeCardData[][];
}

function QuestBoardSection({ headers, cardArrays }: QuestBoardSectionProps) {

  return (
    <div className='questboard-section'>
      {headers.map((header, index) => (
        <div key={index}>
          <h5 id={`${header.replace(/\s/g, '-').toLowerCase()}-heading`}>#{header}</h5>
          <Row className={`${header.replace(/\s/g, '-').toLowerCase()} gap-3`}>
            {cardArrays[index].map((cardData, cardIndex) => (
              <WelcomeCard
                key={cardIndex}
                title={cardData.title}
                description={cardData.description}
                xpButtonText={cardData.xpButtonText}
                intervalButtonText={cardData.intervalButtonText}
              />
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
}

export default QuestBoardSection;
