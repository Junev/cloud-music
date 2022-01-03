import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import { CSSTransition } from "react-transition-group";
import Header from "../../baseUI/header";
import Scroll from "../../components/scroll";
import AlbumTopDescription from "./AlbumTopDescription";
import AlbumMenu from "./AlbumMenu";
import { Container, SongList } from "./style";
import AlbumListOperation from "./AlbumListOperation";
import AlbumSongList from "./AlbumSongList";
import { useCallback } from "react";
import style from "../../assets/global-style";

export const HEADER_HEIGHT = 45;

export const currentAlbum = {
  creator: {
    avatarUrl:
      "http://p1.music.126.net/O9zV6jeawR43pfiK2JaVSw==/109951164232128905.jpg",
    nickname: "浪里推舟",
  },
  coverImgUrl:
    "http://p2.music.126.net/ecpXnH13-0QWpWQmqlR0gw==/109951164354856816.jpg",
  subscribedCount: 2010711,
  name: "听完就睡，耳机是天黑以后柔软的梦境",
  tracks: [
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热",
      },
    },
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热",
      },
    },
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热",
      },
    },
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热",
      },
    },
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热",
      },
    },
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热",
      },
    },
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热",
      },
    },
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热",
      },
    },
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热",
      },
    },
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热",
      },
    },
  ],
};

const Album = () => {
  const navigate = useNavigate();

  const ref = useRef();
  const [showStatus, setShowStatus] = useState(false);

  const [title, setTitle] = useState("返回");
  const [isMarquee, setIsMarquee] = useState(false);

  useEffect(() => {
    setShowStatus(true);
  }, []);

  const headerRef = useRef();
  const handleScroll = useCallback((pos) => {
    let minScrollY = -HEADER_HEIGHT;
    let percent = Math.abs(pos.y / minScrollY);
    let headerElement = headerRef.current;

    console.log(pos.y);
    if (pos.y < minScrollY) {
      headerElement.style.cssText = `background-color: ${
        style["theme-color"]
      };opacity: ${Math.min(1, (percent - 1) / 2)}`;
      setTitle(currentAlbum.name);
      setIsMarquee(true);
    } else {
      headerElement.style.cssText = `background-color: initial; opacity: 1`;
      setTitle("歌单");
      setIsMarquee(false);
    }
  }, []);

  return (
    <CSSTransition
      nodeRef={ref}
      in={showStatus}
      timeout={300}
      classNames="fly"
      unmountOnExited
      onExited={() => navigate("../")}
    >
      <Container ref={ref}>
        <Header
          ref={headerRef}
          title={title}
          isMarquee={isMarquee}
          handleClick={() => setShowStatus(false)}
        />
        <Scroll bounceTop={false} onScroll={handleScroll}>
          <AlbumTopDescription />
          <AlbumMenu />
          <SongList>
            <AlbumListOperation />
            <AlbumSongList />
          </SongList>
        </Scroll>
      </Container>
    </CSSTransition>
  );
};

export default Album;
