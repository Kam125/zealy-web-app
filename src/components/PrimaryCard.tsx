import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Row,
  Col,
  Button,
} from "reactstrap";

interface Link {
  label: string;
  url: string;
}

interface PrimaryCardProps {
  title: string;
  text: string;
  imageUrl?: string;
  links?: Link[];
  onClick?: any;
}

const PrimaryCard: React.FC<PrimaryCardProps> = ({
  title,
  text,
  imageUrl,
  links,
  onClick,
}) => {
  return (
    <div className="primary-card">
      <Card>
        <CardBody>
          <Row className="align-items-center mb-4">
            <Col xs="auto">{imageUrl && <img src={imageUrl} alt="" />}</Col>
            <Col>
              <CardTitle tag="h3">{title}</CardTitle>
            </Col>
          </Row>
          <CardText>{text}</CardText>
          {links && links.length > 0 && (
            <div>
              <Row className="links-row align-items-center">
                {links?.map((link, index) => (
                  <Col key={index} xs="auto">
                    {index === 0 ? ( // Check if it's the first link
                      <Button onClick={onClick}>
                        {" "}
                        {/* Call the onClick prop when the button is clicked */}
                        <i className="fa fa-asterisk"></i>
                        {link.label}
                      </Button>
                    ) : (
                      <CardLink href={link.url}>
                        <i className="fa fa-asterisk"></i>
                        {link.label}
                      </CardLink>
                    )}
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
