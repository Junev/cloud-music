import styled from "styled-components";
import style from "../../assets/global-style";

const CircleWrapper = styled.div`
  position: relative;
  svg {
    vertical-align: middle;
  }
  circle {
    stroke-width: 8px;
    transform-origin: center;
    &.progress-background {
      transform: scale(0.9);
      stroke: ${style["theme-color-shadow"]};
    }
    &.progress-bar {
      transform: scale(0.9) rotate(-90deg);
      stroke: ${style["theme-color"]};
    }
  }
`;

export { CircleWrapper };
