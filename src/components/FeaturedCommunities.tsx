import React, { useRef } from 'react';
import PrimaryCard from './PrimaryCard'
import { Row, Button, Col } from "reactstrap";

function FeaturedCommunities() {
    const filtersContainerRef = useRef<HTMLDivElement>(null); // Specify the type of the ref


    const handleScrollLeft = () => {
        if (filtersContainerRef.current) {
            smoothScrollTo(filtersContainerRef.current, filtersContainerRef.current.scrollLeft - 400);
        }
    };
    
    const handleScrollRight = () => {
        if (filtersContainerRef.current) {
            smoothScrollTo(filtersContainerRef.current, filtersContainerRef.current.scrollLeft + 400);
        }
    };
    
    const smoothScrollTo = (element: HTMLElement, to: number) => {
        const start = element.scrollLeft;
        const change = to - start;
        const duration = 750;
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
        <div className='text-start new-communities'>
            <Row className='justify-content-betweeen align-items-center mb-5'>
                <h6>Featured communities</h6>
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
                        imageUrl="https://crew3-production.s3.eu-west-3.amazonaws.com/public/fb558985-ec9c-4951-a7f4-49c7cb69b29c-profile.png"
                        links={[
                            { label: '', url: 'https://example.com/link1' },
                            { label: '29', url: 'https://example.com/link2' },
                            { label: '185', url: 'https://example.com/link3' },
                        ]}
                    />
                    <PrimaryCard
                        title="Aura  Network"
                        text="Aura Network is a scalable, agile and effortless Layer-1 blockchain with a comprehensive ecosystem built to accelerate global NFTs adoption."
                        imageUrl="https://crew3-production.s3.eu-west-3.amazonaws.com/public/fb558985-ec9c-4951-a7f4-49c7cb69b29c-profile.png"
                        links={[
                            { label: '', url: 'https://example.com/link1' },
                            { label: '29', url: 'https://example.com/link2' },
                            { label: '185', url: 'https://example.com/link3' },
                        ]}
                    />
                    <PrimaryCard
                        title="Aura  Network"
                        text="Aura Network is a scalable, agile and effortless Layer-1 blockchain with a comprehensive ecosystem built to accelerate global NFTs adoption."
                        imageUrl="https://crew3-production.s3.eu-west-3.amazonaws.com/public/fb558985-ec9c-4951-a7f4-49c7cb69b29c-profile.png"
                        links={[
                            { label: '', url: 'https://example.com/link1' },
                            { label: '29', url: 'https://example.com/link2' },
                            { label: '185', url: 'https://example.com/link3' },
                        ]}
                    />
                    <PrimaryCard
                        title="Aura  Network"
                        text="Aura Network is a scalable, agile and effortless Layer-1 blockchain with a comprehensive ecosystem built to accelerate global NFTs adoption."
                        imageUrl="https://crew3-production.s3.eu-west-3.amazonaws.com/public/fb558985-ec9c-4951-a7f4-49c7cb69b29c-profile.png"
                        links={[
                            { label: '', url: 'https://example.com/link1' },
                            { label: '29', url: 'https://example.com/link2' },
                            { label: '185', url: 'https://example.com/link3' },
                        ]}
                    />
                    <PrimaryCard
                        title="Aura  Network"
                        text="Aura Network is a scalable, agile and effortless Layer-1 blockchain with a comprehensive ecosystem built to accelerate global NFTs adoption."
                        imageUrl="https://crew3-production.s3.eu-west-3.amazonaws.com/public/fb558985-ec9c-4951-a7f4-49c7cb69b29c-profile.png"
                        links={[
                            { label: '', url: 'https://example.com/link1' },
                            { label: '29', url: 'https://example.com/link2' },
                            { label: '185', url: 'https://example.com/link3' },
                        ]}
                    />
                    <PrimaryCard
                        title="Aura  Network"
                        text="Aura Network is a scalable, agile and effortless Layer-1 blockchain with a comprehensive ecosystem built to accelerate global NFTs adoption."
                        imageUrl="https://crew3-production.s3.eu-west-3.amazonaws.com/public/fb558985-ec9c-4951-a7f4-49c7cb69b29c-profile.png"
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

export default FeaturedCommunities