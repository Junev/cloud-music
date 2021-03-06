import { useState, useCallback, useRef, useLayoutEffect } from "react";
import { ProgressBarWrapper } from "./style";

const ProgressBar = ({ percent, onProgressChange }) => {
  const [touch, setTouch] = useState({});
  const progressBarPositionRef = useRef();
  const progressRef = useRef();
  const progressButtonRef = useRef();

  const setProgress = useCallback(
    (offset) => {
      onProgressChange(offset / progressBarPositionRef.current.width);
    },
    [onProgressChange]
  );

  useLayoutEffect(() => {
    const width = percent * progressBarPositionRef.current.width;
    progressRef.current.style.cssText = `width: ${width}px;`;
    progressButtonRef.current.style.cssText = `transform: translate3d(${width}px, 0, 0);`;
  }, [percent]);

  const handleTouchStart = useCallback((e) => {
    const startTouch = {
      initiated: true,
      startX: e.touches[0].pageX,
      left: progressRef.current.clientWidth,
    };
    setTouch(startTouch);
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      if (!touch.initiated) {
        return;
      }
      const deltaX = e.touches[0].pageX - touch.startX;
      const offsetWidth = Math.min(
        Math.max(0, touch.left + deltaX),
        progressBarPositionRef.current.width
      );
      setProgress(offsetWidth);
    },
    [setProgress, touch.initiated, touch.left, touch.startX]
  );

  const handleTouchEnd = useCallback(
    (e) => {
      const touchEnd = { ...touch, initiated: false };
      setTouch(touchEnd);
    },
    [touch]
  );

  const handleClick = useCallback(
    (e) => {
      const progress = Math.min(
        Math.max(0, e.pageX - progressBarPositionRef.current.left),
        progressBarPositionRef.current.width
      );
      setProgress(progress);
    },
    [setProgress]
  );

  return (
    <ProgressBarWrapper>
      <div
        className="bar-inner"
        ref={(node) => {
          if (node) {
            progressBarPositionRef.current = {
              left: node.offsetLeft,
              width: node.clientWidth,
            };
          }
        }}
        onClick={handleClick}
      >
        <div className="progress" ref={progressRef} />
        <div
          className="progress-button-wrapper"
          ref={progressButtonRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="progress-button" />
        </div>
      </div>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
