import React from 'react';
import { Card, CardBody, CardTitle, CardLink, Row, Col } from 'reactstrap';

interface Link {
    label: string;
    url: string;
}

interface PrimaryCardSmallProps {
    title: string;
    imageUrl?: string;
    links?: Link[];
}

const PrimaryCardSmall: React.FC<PrimaryCardSmallProps> = ({ title, imageUrl, links }) => {
    return (
        <div className='primary-card-small primary-card'>
            <Card>
                <CardBody>
                    <Row className='align-items-center'>
                        <Col xs='auto'>
                            {imageUrl && (
                                <img src={imageUrl} alt="" />
                            )}
                        </Col>
                        <Col>
                            <CardTitle tag="h5">{title}</CardTitle>
                        </Col>
                        <Col sm='7'>
                            {links && links.length > 0 && (
                                <div className='links-row d-flex justify-content-between'>
                                    {links.map((link, index) => (
                                            
                                                <CardLink key={index} href={link.url}>
                                                    <i className="fa fa-asterisk"></i>
                                                    {link.label}
                                                </CardLink>
                                           
                                    ))}
                                </div>
                            )}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
};

export default PrimaryCardSmall;
