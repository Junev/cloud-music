import React, { useEffect, useRef, useState, useImperativeHandle } from "react";
import BScroll from "better-scroll";
import { ScrollContainer } from "./style";

const Scroll = (props, ref) => {
  const {
    direction = "vertical",
    click = true,
    refresh = true,
    onScroll = null,
    pullUpLoading = false,
    pullDownLoading = false,
    pullUp = null,
    pullDown = null,
    bounceTop = true,
    bounceBottom = true,
  } = props;

  const [bScroll, setBScroll] = useState(null);

  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0);
      }
    },
    getScroll() {
      return bScroll;
    },
  }));

  const scrollContainerRef = useRef();

  useEffect(() => {
    const scrollInstance = new BScroll(scrollContainerRef.current, {
      scrollX: direction === "horizontal",
      scrollY: direction === "vertical",
      probeType: 3,
      click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom,
      },
    });

    setBScroll(scrollInstance);
  }, [direction, click, bounceTop, bounceBottom]);

  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  useEffect(() => {
    if (onScroll && bScroll) {
      bScroll.on("scroll", (e) => {
        onScroll(e);
      });
    }
    return bScroll?.off("scroll");
  }, [bScroll, onScroll]);

  useEffect(() => {
    if (pullUp && bScroll) {
      bScroll.on("scrollEnd", (e) => {
        if (bScroll.y <= bScroll.maxScrollY + 100) {
          pullUp(e);
        }
      });
    }
    return () => {
      bScroll?.off("scrollEnd");
    };
  }, [pullUp, bScroll]);

  useEffect(() => {
    if (pullDown && bScroll) {
      bScroll.on("touchEnd", (e) => {
        if (e.y > 50) {
          pullDown(e);
        }
      });
    }
    return bScroll?.off("touchEnd");
  });

  return <ScrollContainer {...props} ref={scrollContainerRef} />;
};

export default React.forwardRef(Scroll);
