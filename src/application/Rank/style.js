import styled from "styled-components";
import style from "../../assets/global-style";

const Container = styled.div`
  position: fixed;
  top: 90px;
  bottom: 0;
  left: 0;
  right: 0;

  .title {
    padding-top: 15px;
    margin: 10px 5px;
    font-weight: 500;
    font-size: ${style["font-size-m"]};
    color: ${style["font-color-desc"]};
  }
`;

const List = styled.ul`
  padding: 0 5px;
  margin-top: 10px;
  display: ${(props) => (props.isGlobalRank ? "flex" : "block")};
  flex-flow: row wrap;
  justify-content: space-between;
  background: ${style["background-color"]};
  &::after {
    content: "";
    display: block;
    width: 32vw;
  }
`;

const ListItem = styled.li`
  display: ${(props) => (props.tracks.length ? "flex" : "block")};
  padding: 3px 0;
  border-bottom: 1px solid ${style["border-color"]};

  .img_wrapper {
    width: ${(props) => (props.tracks.length ? "27vw" : "32vw")};
    height: ${(props) => (props.tracks.length ? "27vw" : "32vw")};
    border-radius: 3px;
    position: relative;

    .decorate {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0, 0%, 100%, 0), hsla(0, 0%, 43%, 0.4));
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }

    .update_frequency {
      position: absolute;
      left: 7px;
      bottom: 7px;
      font-size: ${style["font-size-ss"]};
      color: ${style["font-color-light"]};
    }
  }
`;

const SongList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  > li {
    font-size: ${style["font-size-s"]};
    color: gray;
  }
`;

export { Container, List, ListItem, SongList };
