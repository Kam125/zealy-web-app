import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText, CardLink } from 'reactstrap';


const News = () => {
  return (
    <div className='news mt-5'>
      <Row>
        <Col md="6">
          <Card className='left-card'>
            <CardBody>
              <CardTitle tag="h3">Exciting news! <br></br> Zealy's community is launching</CardTitle>
              <CardText>Join us to be part of movement</CardText>
              <CardLink href="#">Learn More →</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card className='right-card'>
            <CardBody>
            <CardTitle tag="h3">New name, <br></br> same awesome product</CardTitle>
              <CardText>Join us to be part of movement</CardText>
              <CardLink href="#">Learn More →</CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default News;
