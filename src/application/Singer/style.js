import styled from "styled-components";
import style from "../../assets/global-style";

const SingerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;

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
    transform: rotateZ(0) translate3d(0, 0, 0);
  }
  &.fly-exit-active {
    transition: transform 0.3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  padding-top: 75%;
  transform-origin: top;
  background-image: url(${(props) => props.backgroundUrl});
  background-size: cover;
  z-index: 50;

  .filter {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(7, 17, 27, 0.3);
  }
`;

const CollectButton = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 50;
  width: 120px;
  height: 40px;
  border-radius: 20px;
  margin: auto;
  margin-top: -55px;
  text-align: center;
  color: ${style["font-color-light"]};
  line-height: 40px;
  background: ${style["theme-color"]};
  .iconfont {
    display: inline-block;
    margin-right: 10px;
    font-size: 12px;
    /* vertical-align: 1px; */
  }
  .text {
    display: inline-block;
    font-size: 14px;
    letter-spacing: 5px;
  }
`;

const BgLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  background: white;
  z-index: 50;
`;

const SongListWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  > div {
    /* position: absolute;
    left: 0;
    right: 0; */
  }
`;

export { SingerContainer, ImgWrapper, CollectButton, BgLayer, SongListWrapper };
