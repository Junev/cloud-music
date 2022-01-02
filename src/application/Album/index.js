import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import { CSSTransition } from "react-transition-group";
import Header from "../../baseUI/header";
import Scroll from "../../components/scroll";
import { Container, TopDescription } from "./style";

const currentAlbum = {
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

  useEffect(() => {
    setShowStatus(true);
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
        <Header title="返回" handleClick={() => setShowStatus(false)} />
        <Scroll bounceTop={false}>
          <TopDescription
            background={currentAlbum.coverImgUrl}
          ></TopDescription>
        </Scroll>
      </Container>
    </CSSTransition>
  );
};

export default Album;
