import React, { useState, useRef } from 'react';
import { Button, Row, Col } from 'reactstrap';


function Filters() {
  const filtersContainerRef = useRef<HTMLDivElement>(null); // Specify the type of the ref
  const [scrollLeft, setScrollLeft] = useState(0);
  console.log(scrollLeft);

  const handleScrollLeft = () => {
    if (filtersContainerRef.current) {
      filtersContainerRef.current.scrollLeft -= 100; // You can adjust the scroll amount here
      setScrollLeft(filtersContainerRef.current.scrollLeft);
    }
  };

  const handleScrollRight = () => {
    if (filtersContainerRef.current) {
      filtersContainerRef.current.scrollLeft += 100; // You can adjust the scroll amount here
      setScrollLeft(filtersContainerRef.current.scrollLeft);
    }
  };

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
        <div className='scroll-container' ref={filtersContainerRef}>
      <Col className='d-flex gap-2 rigt-filters'>
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
      <Button className='scroll-button left-scroll-button' onClick={handleScrollLeft}>
          Left
        </Button>
        <Button className='scroll-button right-scroll-button' onClick={handleScrollRight}>
          Right
        </Button> 
      </Col> 
      </div>
      </Col> 
     
    </Row>
  )
}

export default Filters