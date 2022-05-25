import React, { useEffect, useState } from "react";

/**
 * Animated Carousel
 * @param {
 * children: carousel slides,
 * show: ,
 * infiniteLoop
 * } params
 * @returns <Carousel>
 */
function Carousel({ children, show, infiniteLoop }) {
  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0);
  const [length, setLength] = useState(children.length);

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && children.length > show
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const [touchPosition, setTouchPosition] = useState(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
    setIsRepeating(infiniteLoop && children.length > show);
  }, [children, infiniteLoop, show]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, show, length]);

  const handleNext = () => {
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const handlePrev = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      handleNext();
    }

    if (diff < -5) {
      handlePrev();
    }

    setTouchPosition(null);
  };

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(length);
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false);
        setCurrentIndex(show);
      }
    }
  };

  const renderExtraPrev = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[length - 1 - index]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[index]);
    }
    return output;
  };

  return (
    <div className="carousel-wrapper">
      {(isRepeating || currentIndex > 0) && (
        <button onClick={handlePrev} className="left-arrow">
          <i class="bi bi-arrow-left-short"></i>
        </button>
      )}
      <div
        className="carousel-content-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div
          className={`carousel-content show-${show}`}
          style={{
            transform: `translateX(-${currentIndex * (100 / show)}%)`,
            transition: !transitionEnabled ? "none" : undefined,
          }}
          onTransitionEnd={() => handleTransitionEnd()}
        >
          {length > show && isRepeating && renderExtraPrev()}
          {children}
          {length > show && isRepeating && renderExtraNext()}
        </div>
      </div>

      {(isRepeating || currentIndex < length - show) && (
        <button onClick={handleNext} className="right-arrow">
          <i class="bi bi-arrow-right-short"></i>
        </button>
      )}
    </div>
  );
}

export default Carousel;
