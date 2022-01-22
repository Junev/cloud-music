import React, { useImperativeHandle, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ToastWrapper } from "./style";

const Toast = ({ children }, ref) => {
  const nodeRef = useRef();

  const [show, setShow] = useState(false);
  const timer = useRef();

  useImperativeHandle(ref, () => ({
    show() {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    },
  }));

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={show}
      classNames="drop"
      timeout={300}
      unmountOnExit
    >
      <ToastWrapper ref={nodeRef}>
        <div className="text">{children}</div>
      </ToastWrapper>
    </CSSTransition>
  );
};

export default React.forwardRef(Toast);
