import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';



function Filters() {
  const filtersContainerRef = useRef<HTMLDivElement>(null); // Specify the type of the ref
  const [, setScrollLeft] = useState(0);
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
    <Row className='filters justify-content-between'>
      <Col lg='4' md='12' className='d-flex gap-2 mb-4 left-filters-container'>
        <Link to='/explore' className='post-link'>
          <Button className='d-flex align-items-center gap-2'>
            <i className="fa fa-asterisk"></i>
            <span>New</span>
          </Button>
        </Link>
        <Link to='/explore' className='post-link'>
          <Button className='d-flex align-items-center gap-2'>
            <i className="fa-solid fa-star"></i>
            <span>Featured</span>
          </Button>
        </Link>
        <Link to='/explore' className='post-link'>
          <Button className='d-flex align-items-center gap-2'>
            <i className="fa-solid fa-fire"></i>
            <span>Trendy</span>
          </Button>
        </Link>
        <Link to='/explore' className='post-link'>
          <Button className='d-flex align-items-center gap-2'>
            <i className="fa fa-asterisk"></i>
            <span>Upcoming</span>
          </Button>
        </Link>
      </Col>
      <Col lg='7' md='12' className='right-filters-container'>
        <div className='scroll-container' ref={filtersContainerRef}>
          <Col className='d-flex gap-2 rigt-filters text-end'>
            <Link to='/explore' className='post-link'>
              <Button className='d-flex align-items-center gap-2'>
                <span>All</span>
              </Button>
            </Link>
            <Link to='/explore' className='post-link'>
              <Button className='d-flex align-items-center gap-2'>
                <span>Startup</span>
              </Button>
            </Link>
            <Link to='/explore' className='post-link'>
              <Button className='d-flex align-items-center gap-2'>
                <span>Gaming</span>
              </Button>
            </Link>
            <Link to='/explore' className='post-link'>
              <Button className='d-flex align-items-center gap-2'>
                <span>Infrastructure</span>
              </Button>
            </Link>
            <Link to='/explore' className='post-link'>
              <Button className='d-flex align-items-center gap-2'>
                <span>Startup</span>
              </Button>
            </Link>
            <Link to='/explore' className='post-link'>
              <Button className='d-flex align-items-center gap-2'>
                <span>Gaming</span>
              </Button>
            </Link>
            <Link to='/explore' className='post-link'>
              <Button className='d-flex align-items-center gap-2'>
                <span>Infrastructure</span>
              </Button>
            </Link>
            <Link to='/explore' className='post-link'>
              <Button className='d-flex align-items-center gap-2'>
                <span>Startup</span>
              </Button>
            </Link>
            <Link to='/explore' className='post-link'>
              <Button className='d-flex align-items-center gap-2'>
                <span>Gaming</span>
              </Button>
            </Link>
            <Link to='/explore' className='post-link'>
              <Button className='d-flex align-items-center gap-2'>
                <span>Infrastructure</span>
              </Button>
            </Link>
            <Link to='/explore' className='post-link'>
              <Button className='d-flex align-items-center gap-2'>
                <span>Education</span>
              </Button>
            </Link>
            <Link to='/explore' className='post-link'>
              <Button className='d-flex align-items-center gap-2'>
                <span>Art</span>
              </Button>
            </Link>
            <Link to='/explore' className='post-link'>
              <Button className='d-flex align-items-center gap-2'>
                <span>NFT</span>
              </Button>
            </Link>
            <Link to='/explore' className='post-link'>
              <Button className='d-flex align-items-center gap-2'>
                <span>DAO</span>
              </Button>
            </Link>
            <Button className='scroll-button left-scroll-button' onClick={handleScrollLeft}>
              ←
            </Button>
            <Button className='scroll-button right-scroll-button' onClick={handleScrollRight}>
              →
            </Button>
          </Col>
        </div>
      </Col>
    </Row>
  )
}

export default Filters