import React, { useEffect, useState, useLayoutEffect } from "react";

/**
 * Animated Carousel
 * @param {
 * children: carousel slides,
 * show: ,
 * infiniteLoop
 * } params
 * @returns <Carousel>
 */
function Carousel({ children, breakpoints, infiniteLoop }) {
  const breakpointsArray = Object.keys(breakpoints);
  //get the next breakpoint of screen width
  function getGreaterPoint(goal) {
    let found = false;
    let i = 0;
    let valAnt = breakpointsArray[0];

    while (!found && i < breakpointsArray.length) {
      if (breakpointsArray[i] >= goal) {
        found = true;
      }
      valAnt = breakpointsArray[i];
      i++;
    }
    return valAnt;
  }
  //number of items visibles
  const [show, setShow] = useState(
    breakpoints[getGreaterPoint(window.innerWidth)]
  );
  //change number of items vivibles when screen width changes
  useLayoutEffect(() => {
    function updateSize() {
      setShow(breakpoints[getGreaterPoint(window.innerWidth)]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

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
  //handle move to next item
  const handleNext = () => {
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };
  //handle move to prev item
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
  //render more elements in left side
  const renderExtraPrev = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[length - 1 - index]);
    }
    output.reverse();
    return output;
  };
  //render more elements in right side
  const renderExtraNext = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[index]);
    }
    return output;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-wrapper">
      {(isRepeating || currentIndex > 0) && (
        <button onClick={handlePrev} className="left-arrow">
          <i className="bi bi-arrow-left-short"></i>
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
          <i className="bi bi-arrow-right-short"></i>
        </button>
      )}
    </div>
  );
}

export default Carousel;
