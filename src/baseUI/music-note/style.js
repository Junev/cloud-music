import styled from "styled-components";
import style from "../../assets/global-style";

const Container = styled.div`
  .icon_wrapper {
    position: fixed;
    z-index: 1000;
    display: inline-block;
    margin-top: -10px;
    margin-left: -10px;
    color: ${style["theme-color"]};
    font-size: 14px;
    transform: translate3d(0, 0, 0);
  }
  > div {
    transform: translate3d(0, 0, 0);
  }
`;

export { Container };
