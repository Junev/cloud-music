import { useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { CSSTransition } from "react-transition-group";
import Header from "../../baseUI/header";
import Scroll from "../../components/scroll";
import AlbumTopDescription from "./AlbumTopDescription";
import AlbumMenu from "./AlbumMenu";
import style from "../../assets/global-style";
import { SongList } from "../SongsList/style";
import { Container } from "./style";
import { getAlbumList } from "./store/actionCreator";
import SongsList from "../SongsList";

export const HEADER_HEIGHT = 45;

const Album = () => {
  const currentAlbum = useSelector((store) =>
    store.getIn(["album", "currentAlbum"])
  )?.toJS();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const ref = useRef();
  const [showStatus, setShowStatus] = useState(false);

  const [title, setTitle] = useState("返回");
  const [isMarquee, setIsMarquee] = useState(false);

  useEffect(() => {
    setShowStatus(true);
  }, []);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAlbumList(id));
  }, [dispatch, id]);

  const headerRef = useRef();
  const handleScroll = useCallback(
    (pos) => {
      let minScrollY = -HEADER_HEIGHT;
      let percent = Math.abs(pos.y / minScrollY);
      let headerElement = headerRef.current;

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
    },
    [currentAlbum.name]
  );

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
            <SongsList
              songs={currentAlbum.tracks}
              subscribedCount={currentAlbum.subscribedCount}
            />
          </SongList>
        </Scroll>
      </Container>
    </CSSTransition>
  );
};

export default Album;
