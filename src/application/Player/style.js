import styled, { keyframes } from "styled-components";
import style from "../../assets/global-style";

const rotate = keyframes`
0% {
	transform: rotate(0);
}
100% {
	transform: rotate(360deg);
}
`;

const MiniPlayerContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 60px;
  background: ${style["highlight-background-color"]};

  &.mini-enter {
    transform: translate3d(0, 100%, 0);
  }

  &.mini-enter-active {
    transform: translate3d(0, 0, 0);
    transition: all 0.4s;
  }
  &.mini-exit-active {
    transform: translate3d(0, 100%, 0);
    transition: all 0.4s;
  }

  .icon {
    flex: 0 0 40px;
    width: 40px;
    height: 40px;
    padding: 0 10px 0 20px;
    .imgWrapper {
      width: 100%;
      height: 100%;

      img {
        border-radius: 50%;
      }
      .play {
        animation: ${rotate} 10s infinite;
      }
      .pause {
        animation-play-state: paused;
      }
    }
  }

  .text {
    flex: 1;
    line-height: 20px;
    overflow: hidden;
    .name {
      margin-bottom: 2px;
      font-size: ${style["font-size-m"]};
      color: ${style["font-color-desc"]};
      ${style.noWrap()}
    }
    .desc {
      font-size: ${style["font-size-s"]};
      color: ${style["font-color-desc-v2"]};
      ${style.noWrap()}
    }
  }

  .control {
    padding: 0 10px;
    .iconfont,
    .icon-playlist {
      font-size: 30px;
      color: ${style["theme-color"]};
    }
    .icon-mini {
      font-size: 16px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 16px;
      height: 16px;
      margin: auto;
    }
    .icon-play {
      left: 9px;
    }
  }
`;

const NormalPlayerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${style["background-color"]};

  &.normal-enter {
    .top {
      transform: translate3d(0, -100px, 0);
    }
    .bottom {
      transform: translate3d(0, 100px, 0);
    }
  }

  &.normal-enter-active {
    .top,
    .bottom {
      transform: translate3d(0, 0, 0);
      transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
    }
  }

  &.normal-exit {
    opacity: 1;

    .top,
    .bottom {
      transform: translate3d(0, 0, 0);
    }
  }

  &.normal-exit-active {
    opacity: 0;
    transition: opacity 0.4s;

    .top {
      transform: translate3d(0, -100px, 0);
      transition: transform 0.4s ease-in;
    }
    .bottom {
      transform: translate3d(0, 100px, 0);
      transition: transform 0.4s ease-in;
    }
  }

  .background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
    filter: blur(20px);
  }
  .layer {
    background: ${style["font-color-desc"]};
    opacity: 0.3;
    filter: none;
  }
`;

const Top = styled.div`
  position: relative;
  margin-bottom: 25px;
  .back {
    position: absolute;
    top: 0;
    left: 6px;
    z-index: 50;
    .iconfont {
      display: block;
      padding: 9px;
      font-size: 24px;
      color: ${style["font-color-desc"]};
      font-weight: bold;
      transform: rotate(90deg);
    }
  }
  .title {
    width: 70%;
    margin: 0 auto;
    line-height: 40px;
    text-align: center;
    font-size: ${style["font-size-l"]};
    color: ${style["font-color-desc"]};
    ${style.noWrap()};
  }
  .subtitle {
    line-height: 20px;
    text-align: center;
    font-size: ${style["font-size-m"]};
    color: ${style["font-color-desc-v2"]};
    ${style.noWrap()};
  }
`;

const Middle = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 170px;
  white-space: nowrap;
  font-size: 0;
  overflow: hidden;
`;

const CDWrapper = styled.div`
  position: absolute;
  margin: auto;
  top: 10%;
  left: 0;
  right: 0;
  width: 80%;
  box-sizing: border-box;
  height: 80vw;

  .cd {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    .image {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid rgba(255, 255, 255, 0.1);
    }
    .play {
      animation: ${rotate} 20s linear infinite;
    }
    .pause {
      animation-play-state: paused;
    }
  }
  .playing_lyric {
    margin-top: 20px;
    font-size: 14px;
    line-height: 20px;
    white-space: normal;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100%;
`;

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0px auto;
  padding: 10px 0;
  .time {
    color: ${style["font-color-desc"]};
    font-size: ${style["font-size-s"]};
    flex: 0 0 30px;
    line-height: 30px;
    width: 30px;
  }
  .time-l {
    text-align: left;
  }
  .time-r {
    text-align: right;
  }

  .progress-bar-wrapper {
    flex: 1;
  }
`;

const Operators = styled.div`
  display: flex;
  align-items: center;
  .icon {
    font-weight: 300;
    flex: 1;
    color: ${style["font-color-desc"]};
    &.disable {
      color: ${style["theme-color-shadow"]};
    }
    i {
      font-weight: 300;
      font-size: 30px;
    }
  }
  .i-left {
    text-align: right;
  }
  .i-center {
    padding: 0 20px;
    text-align: center;
    i {
      font-size: 40px;
    }
  }
  .i-right {
    text-align: left;
  }
  .icon-favorite {
    color: ${style["theme-color"]};
  }
`;

export {
  MiniPlayerContainer,
  NormalPlayerContainer,
  Top,
  Middle,
  CDWrapper,
  Bottom,
  ProgressWrapper,
  Operators,
};
