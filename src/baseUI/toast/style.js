import styled from "styled-components";
import style from "../../assets/global-style";

const ToastWrapper = styled.div`
  display: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;

  &.drop-enter {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  &.drop-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity transform 0.3s;
  }
  &.drop-exit {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  &.drop-exit-active {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
    transition: opacity transform 0.3s;
  }

  .text {
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size: ${style["font-size-l"]};
  }
`;

export { ToastWrapper };
