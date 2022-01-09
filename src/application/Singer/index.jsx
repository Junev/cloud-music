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
import { useCallback } from "react";
import { HEADER_HEIGHT } from "../Album";

const bgOffset = 5;

const Singer = () => {
  const navigate = useNavigate();

  const ref = useRef();
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    setShowStatus(true);
  }, []);

  const [imgWrapperHeight, setImgWrapperHeight] = useState(0);
  const songListWrapperRef = useRef();

  const imgWrapperRef = useRef();
  const collectButtonRef = useRef();
  const bgLayerRef = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    if (imgWrapperHeight) {
      bgLayerRef.current.style.cssText = `top: ${
        imgWrapperHeight - bgOffset
      }px;`;
      songListWrapperRef.current.style.cssText = `top: ${
        imgWrapperHeight - bgOffset
      }px;`;
      scrollRef.current?.refresh();
    }
  }, [imgWrapperHeight]);

  const handleScroll = useCallback(
    (pos) => {
      const imgWrapperDOM = imgWrapperRef.current;
      const collectButtonDOM = collectButtonRef.current;
      const bgLayerDOM = bgLayerRef.current;
      const minScrollHeight = -(imgWrapperHeight - bgOffset - HEADER_HEIGHT);
      const percent = Math.abs(pos.y / imgWrapperHeight);

      if (pos.y > 0) {
        imgWrapperDOM.style.cssText = `transform: scale(${1 + percent});`;
        collectButtonDOM.style.cssText = `transform: translate3d(0, ${Math.floor(
          pos.y
        )}px, 0);`;
        bgLayerDOM.style.cssText = `top: ${
          imgWrapperHeight - bgOffset + Math.abs(pos.y)
        }px`;
      } else if (pos.y >= minScrollHeight) {
        imgWrapperDOM.style.cssText = `padding-top: 75%; z-index: 1;`;
        collectButtonDOM.style.cssText = `transform: translate3d(0, ${Math.floor(
          pos.y
        )}px,0 ); opacity: ${1 - 2 * percent}`;
        bgLayerDOM.style.cssText = `top: ${
          imgWrapperHeight - bgOffset + Math.floor(pos.y)
        }px; z-index:1`;
      } else {
        imgWrapperDOM.style.cssText = `padding-top: ${HEADER_HEIGHT}px; z-index: 99;`;
        bgLayerDOM.style.cssText = `top: ${
          HEADER_HEIGHT - bgOffset
        }px; z-index: 1`;
      }
    },
    [imgWrapperHeight]
  );

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
        <Header title={artist.name}></Header>
        <ImgWrapper
          ref={(node) => {
            if (node) {
              setImgWrapperHeight(node.offsetHeight);
              imgWrapperRef.current = node;
            }
          }}
          backgroundUrl={artist.picUrl}
        >
          <div className="filter" />
        </ImgWrapper>
        <CollectButton ref={collectButtonRef}>
          <i className="iconfont icon-tianjia" />
          <span className="text">收藏</span>
        </CollectButton>
        <BgLayer ref={bgLayerRef} />
        <SongListWrapper ref={songListWrapperRef}>
          <Scroll ref={scrollRef} onScroll={handleScroll}>
            <SongsList songs={artist.hotSongs} showDescribe={false} />
          </Scroll>
        </SongListWrapper>
      </SingerContainer>
    </CSSTransition>
  );
};

export default Singer;
