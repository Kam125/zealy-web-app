import React from 'react';
import { Row, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import CardBG from '../assets/images/shape-future-bg.png'
import { Link } from 'react-router-dom';



function ShapeFuture() {


    return (
        <div className='news mt-5 shape-future'>
      <Row>
          <Card style={{ backgroundImage: `url(${CardBG})` }}>
            <CardBody>
            <CardTitle tag="h3">Dare to shape the <br></br> future with us.</CardTitle>
              <CardText>Whether you are a contributor or a <br></br> community manager, you will find <br></br> what you are looking for.</CardText>
              <Link to='/welcome/quests'>Join our community</Link>
            </CardBody>
          </Card>
      </Row>
    </div>
    )
}

export default ShapeFuture