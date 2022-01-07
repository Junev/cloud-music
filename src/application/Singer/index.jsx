import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { CSSTransition } from "react-transition-group";
import {
  BgLayer,
  CollectButton,
  ImgWrapper,
  SingerContainer,
  SongListWrapper,
} from "./style";
import Header from "../../baseUI/header";
import { artist } from "./mock";
import Scroll from "../../components/scroll";
import SongsList from "../SongsList";

const Singer = () => {
  const navigate = useNavigate();

  const ref = useRef();
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    setShowStatus(true);
  }, []);

  const [imgWrapperHeight, setImgWrapperHeight] = useState();
  const songListWrapperRef = useRef();

  const scrollRef = useRef();

  useEffect(() => {
    if (songListWrapperRef.current) {
      songListWrapperRef.current.style.cssText = `top: ${imgWrapperHeight}px;`;
      scrollRef.current?.refresh();
    }
  }, [imgWrapperHeight]);

  return (
    <CSSTransition
      nodeRef={ref}
      in={showStatus}
      timeout={300}
      classNames="fly"
      unmountOnExit
      onExit={() => navigate("../")}
    >
      <SingerContainer ref={ref}>
        <Header title="头部"></Header>
        <ImgWrapper
          ref={(node) => {
            if (node) {
              setImgWrapperHeight(node.offsetHeight);
            }
          }}
          backgroundUrl={artist.picUrl}
        >
          <div className="filter" />
        </ImgWrapper>
        <CollectButton>
          <i className="iconfont icon-tianjia" />
          <span className="text">收藏</span>
        </CollectButton>
        {/* <BgLayer /> */}
        <SongListWrapper ref={songListWrapperRef}>
          <Scroll ref={scrollRef}>
            <SongsList songs={artist.hotSongs} showDescribe={false} />
          </Scroll>
        </SongListWrapper>
      </SingerContainer>
    </CSSTransition>
  );
};

export default Singer;
