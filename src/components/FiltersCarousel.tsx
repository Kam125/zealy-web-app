import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { Button, Col } from 'reactstrap'; // Assuming you have imported Button and Col from 'reactstrap'

interface CarouselItemData {
  id: number;
}

const items: CarouselItemData[] = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

interface FiltersCarouselProps {
  // Add any props if required
}

const FiltersCarousel: React.FC<FiltersCarouselProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  // Function to generate buttons dynamically for each slide
  const generateButtonsForSlide = (slideIndex: number) => {
    const startIndex = slideIndex * 4; // Assuming you want 4 buttons per slide
    const endIndex = Math.min(startIndex + 4, items.length);

    return items.slice(startIndex, endIndex).map((item) => (
      <Button key={item.id} className="d-flex align-items-center gap-2">
        <span>{`Button ${item.id}`}</span>
      </Button>
    ));
  };

  const slides = items.map((_, index) => (
    <CarouselItem
      className="custom-tag"
      tag="div"
      key={index}
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
    >
      <Col className="d-flex gap-2 rigt-filters">
        {generateButtonsForSlide(index)}
      </Col>
    </CarouselItem>
  ));

  return (
    <div>
      <style>
        {`.custom-tag {
             width: 100%;
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default FiltersCarousel;
