import styled from "styled-components";
import style from "../../assets/global-style";

const ProgressBarWrapper = styled.div`
  height: 30px;

  .bar-inner {
    position: relative;
    top: 13px;
    height: 4px;
    background: rgba(0, 0, 0, 0.3);

    .progress {
      position: absolute;
      height: 100%;
      background: ${style["theme-color"]};
    }

    .progress-button-wrapper {
      position: absolute;
      left: -15px;
      top: -13px;
      width: 30px;
      height: 30px;
    }

    .progress-button {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-sizing: border-box;
      width: 16px;
      height: 16px;
      border: 3px solid ${style["border-color"]};
      border-radius: 50%;
      margin: auto;
      background: ${style["theme-color"]};
    }
  }
`;

export { ProgressBarWrapper };
