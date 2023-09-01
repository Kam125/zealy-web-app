import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardLink, Row, Col } from 'reactstrap';


interface Link {
    label: string;
    url: string;
}

interface PrimaryCardProps {
    title: string;
    text: string;
    imageUrl?: string;
    links?: Link[];
}

const PrimaryCard: React.FC<PrimaryCardProps> = ({ title, text, imageUrl, links }) => {
    return (
        <div className='primary-card'>
            <Card>
                <CardBody>
                    <Row className='align-items-center mb-4'>
                        <Col xs='auto'>
                            {imageUrl && (
                                <img src={imageUrl} alt="" />
                            )}
                        </Col>
                        <Col>
                            <CardTitle tag="h3">{title}</CardTitle>
                        </Col>
                    </Row>
                    <CardText>{text}</CardText>
                    {links && links.length > 0 && (
                        <div>
                            <Row className='links-row align-items-center'>
                                {links?.map((link, index) => (
                                    <Col key={index} xs='auto'>
                                        <CardLink href={link.url}>
                                            <i className="fa fa-asterisk"></i>
                                            {link.label}
                                        </CardLink>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    )}
                </CardBody>
            </Card>
        </div>
    );
};

export default PrimaryCard;
