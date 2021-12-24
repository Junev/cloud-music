import React, { useEffect, useRef } from "react";
// import { throttle } from "lodash";
import { isIntersectionObserverAvailable, throttle } from "./utils";

type Props = {
  files?: unknown[];
  classNames?: string;
  style?: React.CSSProperties;
};

const LazyLoadImages: React.FC<Props> = (props) => {
  const { classNames, style, files, children } = props;

  const ref = useRef<HTMLDivElement>(null);

  const intersectionIO = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (isIntersectionObserverAvailable) {
      if (files && files?.length > 0) {
        const imgNodes = ref.current?.querySelectorAll(".lazyload");

        const newIntersectionIO = new IntersectionObserver(
          (entries, io) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                const target = entry.target as HTMLElement;
                const imgSrc = target.dataset.src;
                if (imgSrc) {
                  target.setAttribute("src", imgSrc);
                  target.removeAttribute("data-src");
                }
                io.unobserve(target);
              }
            }
          },
          { rootMargin: "50px 0px 50px 0px" }
        );
        imgNodes?.forEach((img) => {
          newIntersectionIO.observe(img);
        });
        intersectionIO.current = newIntersectionIO;
      }
    }

    return () => {
      intersectionIO.current?.disconnect();
    };
  }, [files]);

  useEffect(() => {
    const imgNodes = ref.current?.querySelectorAll(".lazyload");
    const lazyImages = Array.prototype.slice.call(imgNodes) as HTMLElement[];

    const lazyLoad = () => {
      for (let i = 0; i < lazyImages.length; i++) {
        const image = lazyImages[i];
        const { top, bottom } = image.getBoundingClientRect();
        if (top < window.innerHeight && bottom > 0) {
          const imgSrc = image.dataset.src;
          if (imgSrc) {
            image.setAttribute("src", imgSrc);
            image.removeAttribute("data-src");
            lazyImages.splice(i, 1);
          }
        }
      }
    };
    const throttledLazyLoad = throttle(lazyLoad, 200);
    if (!isIntersectionObserverAvailable) {
      if (files && files.length > 0) {
        document.addEventListener("scroll", throttledLazyLoad);
      }
    }

    return () => {
      document.removeEventListener("scroll", throttledLazyLoad);
    };
  }, [files]);

  return (
    <div className={classNames} style={style} ref={ref}>
      {children}
    </div>
  );
};

export { LazyLoadImages };
