import styled from "styled-components";
import style from "../../assets/global-style";

const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  white-space: nowrap;

  > span:first-of-type {
    display: inline-block;
    flex: 0 0 auto;
    padding: 5px 0;
    margin-right: 5px;
    color: grey;
    font-size: ${style["font-size-m"]};
    vertical-align: middle;
  }
`;

const ListItem = styled.span`
  flex: 0 0 auto;
  display: inline-block;
  font-size: ${style["font-size-m"]};
  padding: 5px 8px;
  border: 1px solid;
  border-color: transparent;
  border-radius: 10px;
  cursor: pointer;

  &.selected {
    color: ${style["theme-color"]};
    border-color: ${style["theme-color"]};
    opacity: 0.8;
  }
`;
export { List, ListItem };
