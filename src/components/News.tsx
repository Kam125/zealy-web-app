import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';


const News = () => {
  return (
    <div className='news mt-5'>
      <Row>
        <Col md="6">
          <Card className='left-card'>
            <Link to="/welcome/quests">
              <CardBody>
                <CardTitle tag="h3">Exciting news! <br></br> Zealy's community is launching</CardTitle>
                <CardText>Join us to be part of movement</CardText>
                <Link to="/welcome/quests">Learn More →</Link>
              </CardBody>
            </Link>
          </Card>
        </Col>
        <Col md="6">
          <Card className='right-card'>
            <Link to="/welcome">
              <CardBody>
                <CardTitle tag="h3">New name, <br></br> same awesome product</CardTitle>
                <CardText>Join us to be part of movement</CardText>
                <Link to="/welcome">Learn More →</Link>
              </CardBody>
            </Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default News;
