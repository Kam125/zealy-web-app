import React from 'react'
import { Button, Row, Col } from 'reactstrap';
import FiltersCarousel from './FiltersCarousel';

function Filters() {
  return (
    <Row className='filters'>
      <Col lg='4' md='12' className='d-flex gap-2 mb-4'>
      <Button className='d-flex align-items-center gap-2'>
      <i className="fa fa-asterisk"></i>
        <span>New</span>
      </Button>
      <Button className='d-flex align-items-center gap-2'>
      <i className="fa-solid fa-fire"></i>
        <span>New</span>
      </Button>
      <Button className='d-flex align-items-center gap-2'>
      <i className="fa fa-asterisk"></i>
        <span>Trendy</span>
      </Button>
      <Button className='d-flex align-items-center gap-2'>
      <i className="fa fa-asterisk"></i>
        <span>New</span>
      </Button>
      </Col> 
      <Col className='right-filters-container'>
        <FiltersCarousel />
      {/* <Col className='d-flex gap-2 rigt-filters'>
      <Button className='d-flex align-items-center gap-2'>     
        <span>All</span>
      </Button>
      <Button className='d-flex align-items-center gap-2'>
        <span>Startup</span>
      </Button>
      <Button className='d-flex align-items-center gap-2'>
        <span>Gaming</span>
      </Button>
      <Button className='d-flex align-items-center gap-2'>
        <span>Infrastructure</span>
      </Button>
      <Button className='d-flex align-items-center gap-2'>
        <span>Startup</span>
      </Button>
      <Button className='d-flex align-items-center gap-2'>
        <span>Gaming</span>
      </Button>
      <Button className='d-flex align-items-center gap-2'>
        <span>Infrastructure</span>
      </Button>
      <Button className='d-flex align-items-center gap-2'>
        <span>Startup</span>
      </Button>
      <Button className='d-flex align-items-center gap-2'>
        <span>Gaming</span>
      </Button>
      <Button className='d-flex align-items-center gap-2'>
        <span>Infrastructure</span>
      </Button>
      </Col>   */}
      </Col> 
     
    </Row>
  )
}

export default Filters