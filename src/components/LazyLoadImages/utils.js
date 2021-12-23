const isIntersectionObserverAvailable =
  "IntersectionObserver" in window && "IntersectionObserverEntry" in window;

function throttle(fn, t) {
  let isFirstTime = true;
  return (...args) => {
    if (isFirstTime) {
      setTimeout(() => {
        fn.apply(this, args);
        isFirstTime = true;
      }, t);
      isFirstTime = false;
    }
  };
}
export { isIntersectionObserverAvailable, throttle };
