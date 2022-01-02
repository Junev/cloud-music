import styled from "styled-components";
import style from "../../assets/global-style";

const HeaderContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  padding: 5px 10px;
  padding-top: 0;
  width: 100%;
  height: 40px;
  z-index: 100;
  display: flex;
  line-height: 40px;
  color: ${style["font-color-light"]};
  cursor: pointer;

  .back {
    width: 20px;
    margin-right: 5px;
    font-size: 20px;
  }

  > h1 {
    font-size: ${style["font-size-l"]};
    font-weight: 700;
  }
`;

export { HeaderContainer };
