import React, { useState, useRef } from 'react';

import { Row, Button, Card, CardBody, CardTitle, Col } from 'reactstrap';


function CommunityCategories() {
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
        <div className='text-start new-communities community-categories'>
            <Row className='justify-content-betweeen align-items-center mb-5'>
                <h6>Upcoming communities</h6>
                <Col className='text-end'>
                <Button className='scroll-button left-scroll-button me-2' onClick={handleScrollLeft}>
                    ←
                </Button>
                <Button className='scroll-button right-scroll-button' onClick={handleScrollRight}>
                    →
                </Button>
            </Col>
            </Row>

            <div className='cards-row-container' ref={filtersContainerRef}>
                <Row className='cards-row'>
                    <Card className='left-card text-center ms-4' style={{ backgroundImage: 'url(https://zealy.io/_next/static/media/blue.31ec5b2c.webp)' }}>
                        <CardBody>
                            <CardTitle tag="h3">All</CardTitle>
                        </CardBody>
                    </Card>

                    <Card className='left-card text-center' style={{backgroundImage: 'url(https://zealy.io/_next/static/media/hotpink.98e189fa.webp)' }}>
                        <CardBody>
                            <CardTitle tag="h3">Startup</CardTitle>
                        </CardBody>
                    </Card>
                    <Card className='left-card text-center' style={{backgroundImage: 'url(https://zealy.io/_next/static/media/yellow.bb09033a.webp)' }}>
                        <CardBody>
                            <CardTitle tag="h3">Gaming</CardTitle>
                        </CardBody>
                    </Card>
                    <Card className='left-card text-center' style={{backgroundImage: 'url(https://zealy.io/_next/static/media/cyan.f9d6a004.webp)' }}>
                        <CardBody>
                            <CardTitle tag="h3">Infrastructure</CardTitle>
                        </CardBody>
                    </Card>
                    <Card className='left-card text-center' style={{backgroundImage: 'url(https://zealy.io/_next/static/media/hotpink.98e189fa.webp)' }}>
                        <CardBody>
                            <CardTitle tag="h3">DeFi</CardTitle>
                        </CardBody>
                    </Card>
                    <Card className='left-card text-center' style={{backgroundImage: 'url(https://zealy.io/_next/static/media/hotpink.98e189fa.webp)' }}>
                        <CardBody>
                            <CardTitle tag="h3">Metaverse</CardTitle>
                        </CardBody>
                    </Card>
                    <Card className='left-card text-center' style={{backgroundImage: 'url(https://zealy.io/_next/static/media/hotpink.98e189fa.webp)' }}>
                        <CardBody>
                            <CardTitle tag="h3">Collection</CardTitle>
                        </CardBody>
                    </Card>



                </Row>
            </div>
        </div>
    )
}

export default CommunityCategories