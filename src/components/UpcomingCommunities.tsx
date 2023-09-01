import React, { useEffect, useRef } from "react";
import PrimaryCard from "./PrimaryCard";
import { Row, Button, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCommunities } from "../redux/slices/communitySlice";

function UpcomingCommunities() {
  const filtersContainerRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { data } = useSelector((state: any) => state.community);

  const handleScrollLeft = () => {
    if (filtersContainerRef.current) {
      smoothScrollTo(
        filtersContainerRef.current,
        filtersContainerRef.current.scrollLeft - 800
      );
    }
  };

  const handleScrollRight = () => {
    if (filtersContainerRef.current) {
      smoothScrollTo(
        filtersContainerRef.current,
        filtersContainerRef.current.scrollLeft + 800
      );
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

      const scrollPosition =
        easeInOutQuad(currentTime / duration) * change + start;

      element.scrollLeft = scrollPosition;

      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    animateScroll();
  };

  useEffect(() => {
    dispatch<any>(getAllCommunities());
  }, [dispatch]);

  const logos = data?.map((item: { logo: any; }) => {
    const logoData = item.logo;
    const uint8Array = new Uint8Array(logoData?.data);
    const blob = new Blob([uint8Array], { type: 'image/jpeg' });
    const imgSrc = URL.createObjectURL(blob);
    return imgSrc;
  });

  return (
    <div className="text-start new-communities">
      <Row className="justify-content-betweeen align-items-center mb-5">
        <h6>Upcoming communities</h6>
        <Col className="text-end">
          <Button
            className="scroll-button left-scroll-button me-2"
            onClick={handleScrollLeft}
          >
            ←
          </Button>
          <Button
            className="scroll-button right-scroll-button"
            onClick={handleScrollRight}
          >
            →
          </Button>
        </Col>
      </Row>

      <div className="cards-row-container" ref={filtersContainerRef}>
        <Row className="cards-row ps-4">
          {data?.map((item: any, index: any) => (
            <Col xs="auto" className="p-0 ">
              <Link to="/welcome/quests" className="post-link">
                <PrimaryCard
                  key={index}
                  title={item.name}
                  text={item.description}
                  imageUrl={logos[index]}
                  links={[
                    { label: "", url: "https://example.com/link1" },
                    { label: "29", url: "https://example.com/link2" },
                    { label: "185", url: "https://example.com/link3" },
                  ]}
                />
              </Link>
            </Col>
          ))}
          {/* <Col xs="auto" className="p-0">
            <Link to="/welcome/quests" className="post-link">
              <PrimaryCard
                title="Aura  Network"
                text="Aura Network is a scalable, agile and effortless Layer-1 blockchain with a comprehensive ecosystem built to accelerate global NFTs adoption."
                imageUrl="https://crew3-production.s3.eu-west-3.amazonaws.com/public/fb558985-ec9c-4951-a7f4-49c7cb69b29c-profile.png"
                links={[
                  { label: "", url: "https://example.com/link1" },
                  { label: "29", url: "https://example.com/link2" },
                  { label: "185", url: "https://example.com/link3" },
                ]}
              />
            </Link>
          </Col> */}
        </Row>
      </div>
    </div>
  );
}

export default UpcomingCommunities;
