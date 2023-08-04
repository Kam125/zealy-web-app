import React, { useState, useRef } from 'react';
import PrimaryCard from './PrimaryCard'
import { Row, Button, Col } from "reactstrap";

function TrendyCommunities() {
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
        <div className='text-start new-communities'>
            <Row className='justify-content-betweeen align-items-center mb-5'>
                <h6>Trendy communities</h6>
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
                    <PrimaryCard
                        title="Aura  Network"
                        text="Aura Network is a scalable, agile and effortless Layer-1 blockchain with a comprehensive ecosystem built to accelerate global NFTs adoption."
                        imageUrl="https://crew3-production.s3.eu-west-3.amazonaws.com/public/3b1a6cc2-8ec3-40a1-92f9-4e3d4e520fce-profile.png"
                        links={[
                            { label: '', url: 'https://example.com/link1' },
                            { label: '29', url: 'https://example.com/link2' },
                            { label: '185', url: 'https://example.com/link3' },
                        ]}
                    />
                    <PrimaryCard
                        title="Aura  Network"
                        text="Aura Network is a scalable, agile and effortless Layer-1 blockchain with a comprehensive ecosystem built to accelerate global NFTs adoption."
                        imageUrl="https://crew3-production.s3.eu-west-3.amazonaws.com/public/3b1a6cc2-8ec3-40a1-92f9-4e3d4e520fce-profile.png"
                        links={[
                            { label: '', url: 'https://example.com/link1' },
                            { label: '29', url: 'https://example.com/link2' },
                            { label: '185', url: 'https://example.com/link3' },
                        ]}
                    />
                    <PrimaryCard
                        title="Aura  Network"
                        text="Aura Network is a scalable, agile and effortless Layer-1 blockchain with a comprehensive ecosystem built to accelerate global NFTs adoption."
                        imageUrl="https://crew3-production.s3.eu-west-3.amazonaws.com/public/3b1a6cc2-8ec3-40a1-92f9-4e3d4e520fce-profile.png"
                        links={[
                            { label: '', url: 'https://example.com/link1' },
                            { label: '29', url: 'https://example.com/link2' },
                            { label: '185', url: 'https://example.com/link3' },
                        ]}
                    />
                    <PrimaryCard
                        title="Aura  Network"
                        text="Aura Network is a scalable, agile and effortless Layer-1 blockchain with a comprehensive ecosystem built to accelerate global NFTs adoption."
                        imageUrl="https://crew3-production.s3.eu-west-3.amazonaws.com/public/3b1a6cc2-8ec3-40a1-92f9-4e3d4e520fce-profile.png"
                        links={[
                            { label: '', url: 'https://example.com/link1' },
                            { label: '29', url: 'https://example.com/link2' },
                            { label: '185', url: 'https://example.com/link3' },
                        ]}
                    />
                    <PrimaryCard
                        title="Aura  Network"
                        text="Aura Network is a scalable, agile and effortless Layer-1 blockchain with a comprehensive ecosystem built to accelerate global NFTs adoption."
                        imageUrl="https://crew3-production.s3.eu-west-3.amazonaws.com/public/3b1a6cc2-8ec3-40a1-92f9-4e3d4e520fce-profile.png"
                        links={[
                            { label: '', url: 'https://example.com/link1' },
                            { label: '29', url: 'https://example.com/link2' },
                            { label: '185', url: 'https://example.com/link3' },
                        ]}
                    />
                    <PrimaryCard
                        title="Aura  Network"
                        text="Aura Network is a scalable, agile and effortless Layer-1 blockchain with a comprehensive ecosystem built to accelerate global NFTs adoption."
                        imageUrl="https://crew3-production.s3.eu-west-3.amazonaws.com/public/3b1a6cc2-8ec3-40a1-92f9-4e3d4e520fce-profile.png"
                        links={[
                            { label: '', url: 'https://example.com/link1' },
                            { label: '29', url: 'https://example.com/link2' },
                            { label: '185', url: 'https://example.com/link3' },
                        ]}
                    />
                    
                    

                </Row>
            </div>
        </div>
    )
}

export default TrendyCommunities