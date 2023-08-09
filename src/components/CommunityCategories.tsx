import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Row, Button, Card, CardBody, CardTitle, Col } from 'reactstrap';

function CommunityCategories() {
    const filtersContainerRef = useRef<HTMLDivElement>(null);
    const handleScrollLeft = () => {
        if (filtersContainerRef.current) {
            smoothScrollTo(filtersContainerRef.current, filtersContainerRef.current.scrollLeft - 300);
        }
    };

    const handleScrollRight = () => {
        if (filtersContainerRef.current) {
            smoothScrollTo(filtersContainerRef.current, filtersContainerRef.current.scrollLeft + 300);
        }
    };

    const smoothScrollTo = (element: HTMLElement, to: number) => {
        const start = element.scrollLeft;
        const change = to - start;
        const duration = 850;
        let currentTime = 0;

        const animateScroll = () => {
            currentTime += 16;

            const easeInOutQuad = (t: number) => {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            };

            const scrollPosition = easeInOutQuad(currentTime / duration) * change + start;

            element.scrollLeft = scrollPosition;

            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
        };

        animateScroll();
    };

    return (
        <div className='text-start new-communities community-categories'>
            <Row className='justify-content-betweeen align-items-center mb-5'>
                <h6>Browse by community categories</h6>
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
                        <Link to='/explore' className='post-link'>
                            <CardBody>
                                <CardTitle tag="h3">All</CardTitle>
                            </CardBody>
                        </Link>
                    </Card>
                    <Card className='left-card text-center' style={{ backgroundImage: 'url(https://zealy.io/_next/static/media/hotpink.98e189fa.webp)' }}>
                        <Link to='/explore' className='post-link'>
                            <CardBody>
                                <CardTitle tag="h3">Startup</CardTitle>
                            </CardBody>
                        </Link>
                    </Card>
                    <Card className='left-card text-center' style={{ backgroundImage: 'url(https://zealy.io/_next/static/media/yellow.bb09033a.webp)' }}>
                    <Link to='/explore' className='post-link'>
                        <CardBody>
                            <CardTitle tag="h3">Gaming</CardTitle>
                        </CardBody>
                        </Link>
                    </Card>
                    <Card className='left-card text-center' style={{ backgroundImage: 'url(https://zealy.io/_next/static/media/cyan.f9d6a004.webp)' }}>
                    <Link to='/explore' className='post-link'>
                        <CardBody>
                            <CardTitle tag="h3">Infrastructure</CardTitle>
                        </CardBody>
                        </Link>
                    </Card>
                    <Card className='left-card text-center' style={{ backgroundImage: 'url(https://zealy.io/_next/static/media/hotpink.98e189fa.webp)' }}>
                    <Link to='/explore' className='post-link'>
                        <CardBody>
                            <CardTitle tag="h3">DeFi</CardTitle>
                        </CardBody>
                        </Link>
                    </Card>
                    <Card className='left-card text-center' style={{ backgroundImage: 'url(https://zealy.io/_next/static/media/hotpink.98e189fa.webp)' }}>
                    <Link to='/explore' className='post-link'>
                        <CardBody>
                            <CardTitle tag="h3">Metaverse</CardTitle>
                        </CardBody>
                        </Link>
                    </Card>
                    <Card className='left-card text-center' style={{ backgroundImage: 'url(https://zealy.io/_next/static/media/hotpink.98e189fa.webp)' }}>
                    <Link to='/explore' className='post-link'>
                        <CardBody>
                            <CardTitle tag="h3">Collection</CardTitle>
                        </CardBody>
                        </Link>
                    </Card>
                </Row>
            </div>
        </div>
    )
}

export default CommunityCategories