import styled from "styled-components";
import style from "../../assets/global-style";

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${style["theme-color"]};
  > span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
  }
  .iconfont {
    font-size: 25px;
  }
`;

const Nav = styled.div`
  height: 44px;
  display: flex;
  justify-content: space-between;
  background: ${style["theme-color"]};

  a {
    flex: 1;
    padding: 2px 0;
    font-size: 14px;
    color: #e4e4e4;

    span {
      padding: 3px 0;
      border-bottom: 2px solid;
      border-bottom-color: transparent;
      color: #f1f1f1;
    }

    &.selected {
      span {
        font-weight: 700;
        border-bottom-color: #f1f1f1;
      }
    }
  }
`;

const NavItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Top, Nav, NavItem };
