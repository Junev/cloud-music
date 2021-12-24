import styled from "styled-components";
import style from "../../assets/global-style";

const NavContainer = styled.div`
  position: fixed;
  box-sizing: border-box;
  top: 95px;
  width: 100%;
  padding: 5px;
  overflow: hidden;
`;

const ListContainer = styled.div`
  position: fixed;
  top: 160px;
  left: 0;
  bottom: 0;
  right: 0;
`;

const List = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: auto;
  overflow: hidden;

  .title {
    margin: 10px 0 10px 10px;
    color: ${style["font-color-desc"]};
    font-size: ${style["font-size-m"]};
  }
`;

const ListItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  padding: 5px 0;
  margin: 0 5px;
  align-items: center;
  border-bottom: 1px solid ${style["border-color"]};

  .img_wrap {
    margin-right: 20px;
    img {
      border-radius: 3px;
    }
  }

  .name {
    font-size: ${style["font-size-m"]};
    color: ${style["font-color-desc"]};
    font-weight: 500;
  }
`;

export { NavContainer, ListContainer, List, ListItem };
