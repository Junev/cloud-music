import styled from "styled-components";
import style from "../../assets/global-style";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: ${style["background-color"]};
  transform-origin: right bottom;

  &.fly-enter,
  &.fly-appear {
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }

  &.fly-enter-active,
  &.fly-appear-active {
    transition: transform 0.3s;
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }

  &.fly-exit {
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }

  &.fly-exit-active {
    transition: transform 0.3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`;

const TopDescription = styled.div`
  position: relative;
  box-sizing: border-box;
  background-size: 100%;
  width: 100%;
  height: 275px;
  padding: 5px 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: url(${(props) => props.background});
    background-position: 0 0;
    background-size: 100%;
    filter: blur(20px);

    .filter {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(7, 17, 27, 0.2);
    }
  }

  .img_wrapper {
    width: 120px;
    height: 120px;
    position: relative;

    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient
        (hsla (0, 0%, 43%, 0.4), hsla (0, 0%, 100%, 0));
    }

    .play_count {
      position: absolute;
      right: 2px;
      top: 2px;
      font-size: ${style["font-size-s"]};
      line-height: 15px;
      color: ${style["font-color-light"]};
      .icon-headset {
        vertical-align: top;
      }
    }
    img {
      width: 120px;
      height: 120px;
      border-radius: 3px;
    }
  }

  .desc_wrapper {
    height: 120px;
    padding: 0 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .title {
      max-height: 70px;
      font-size: ${style["font-size-l"]};
      color: ${style["font-color-light"]};
      font-weight: 700;
      line-height: 1.5;
    }

    .person {
      display: flex;
      .avatar {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        img {
          width: 100%;
          margin-right: 5px;
        }
      }

      .name {
        font-size: ${style["font-size-m"]};
        line-height: 20px;
        color: ${style["font-color-desc-v2"]};
      }
    }
  }
`;

const Menu = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 20px 30px;
  padding-top: 0;
  margin-top: -75px;
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    line-height: 20px;
    text-align: center;
    font-size: ${style["font-size-s"]};
    font-weight: 500;
    color: ${style["font-color-light"]};
    z-index: 1000;
    .iconfont {
      font-size: 20px;
    }
  }
`;

const SongList = styled.div`
  border-radius: 10px;
  opacity: 0.98;
  ${(props) =>
    props.showBackground
      ? `background: ${style["highlight-background-color"]}`
      : ""}
  .operation {
    box-sizing: border-box;
    padding: 10px 0;
    margin-left: 10px;
    position: relative;
    justify-content: space-between;
    border-bottom: 1px solid ${style["border-color"]};
    .play_all {
      display: inline-block;
      line-height: 24px;
      color: ${style["font-color-desc"]};
      .iconfont {
        font-size: 24px;
        margin-right: 10px;
        vertical-align: top;
      }
      .sum {
        font-size: ${style["font-size-s"]};
        color: ${style["font-color-desc-v2"]};
      }
      > span {
        vertical-align: top;
      }
    }
    .add_list,
    .isCollected {
      display: flex;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 130px;
      line-height: 34px;
      background: ${style["theme-color"]};
      color: ${style["font-color-light"]};
      font-size: 0;
      border-radius: 3px;
      vertical-align: top;
      .iconfont {
        vertical-align: top;
        font-size: 10px;
        margin: 0 5px 0 10px;
      }
      span {
        font-size: 14px;
        line-height: 34px;
      }
    }
    .isCollected {
      display: flex;
      background: ${style["background-color"]};
      color: ${style["font-color-desc"]};
    }
  }
`;
const SongItem = styled.ul`
  > li {
    display: flex;
    height: 60px;
    align-items: center;
    .index {
      flex-basis: 60px;
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
    }
    .info {
      box-sizing: border-box;
      flex: 1;
      display: flex;
      height: 100%;
      padding: 5px 0;
      flex-direction: column;
      justify-content: space-around;
      border-bottom: 1px solid ${style["border-color"]};
      ${style.noWrap()}
      >span {
        ${style.noWrap()}
      }
      > span:first-child {
        color: ${style["font-color-desc"]};
      }
      > span:last-child {
        font-size: ${style["font-size-s"]};
        color: #bba8a8;
      }
    }
  }
`;

export { Container, TopDescription, Menu, SongList, SongItem };
