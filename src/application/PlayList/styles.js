import styled from "styled-components";
import style from "../../assets/global-style";

const PlayListWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${style["background-color-shadow"]};

  &.list-fade-enter {
    opacity: 0;

    .list-wrapper {
      transform: translate3d(0, 100%, 0);
    }
  }

  &.list-fade-enter-active {
    opacity: 1;
    transition: opacity 0.3s;

    .list-wrapper {
      transform: translate3d(0, 0, 0);
      transition: transform 0.3s;
    }
  }

  &.list-fade-exit {
    opacity: 1;

    .list-wrapper {
      transform: translate3d(0, 0, 0);
    }
  }

  &.list-fade-exit-active {
    opacity: 0;
    transition: opacity 0.3s;

    .list-wrapper {
      transform: translate3d(0, 100%, 0);
      transition: transform 0.3s;
    }
  }

  .list-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    border-radius: 10px 10px 0 0;
    background-color: ${style["highlight-background-color"]};
    transform: translate3d(0, 0, 0);
  }

  .list-close {
    text-align: center;
    line-height: 50px;
    background: ${style["background-color"]};
    font-size: ${style["font-size-l"]};
    color: ${style["font-color-desc"]};
  }
`;

const ScrollWrapper = styled.div`
  height: 400px;
  overflow: hidden;
`;

const ListHeader = styled.div`
  position: relative;
  padding: 20px 30px 10px 30px;

  .title {
    display: flex;
    align-items: center;
  }

  .play-mode {
    flex: 1;
    .text {
      flex: 1;
      font-size: ${style["font-size-m"]};
      color: ${style["font-color-desc"]};
    }
  }

  .iconfont {
    margin-right: 10px;
    font-size: ${style["font-size-l"]};
    color: ${style["theme-color"]};
  }

  .clear {
    ${style.extendClick()}
    font-size: ${style["font-size-l"]}
  }
`;
const ListContent = styled.div`
  .item {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 30px 0 20px;
    overflow: hidden;
  }

  .current {
    flex: 0 0 20px;
    width: 20px;
    font-size: ${style["font-size-s"]};
    color: ${style["theme-color"]};
  }

  .text {
    flex: 1;
    ${style.noWrap()};
    font-size: ${style["font-size-m"]};
  }

  .like {
    ${style.extendClick()}
    margin-right: 15px;
    font-size: ${style["font-size-m"]};
    color: ${style["theme-color"]};
  }
  .delete {
    ${style.extendClick()}
    font-size: ${style["font-size-m"]};
    color: ${style["theme-color"]};
  }
`;

export { PlayListWrapper, ScrollWrapper, ListHeader, ListContent };
