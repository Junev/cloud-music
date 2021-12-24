import { useCallback, useEffect, useState } from "react";
import HorizonItem from "../../baseUI/horizon-item";
import { alphaTypes, categoryTypes } from "../../api/singerCategory";
import Scroll from "../../components/scroll";
import { ListContainer, List, ListItem, NavContainer } from "./style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getHotSingerList,
  changePageCount,
  changeEnterLoading,
  changePullUpLoading,
  changePullDownLoading,
  getSingerList,
  loadMoreHotSingerList,
  loadMoreSingerList,
} from "./store/actionCreator";
import { LazyLoadImages } from "../../components/LazyLoadImages";

const random = (low, high) => low + (high - low) * Math.random();

const Singer = (props) => {
  const singersList = useSelector((store) =>
    store.getIn(["singer", "singerList"])
  ).toJS();

  const enterLoading = useSelector((store) =>
    store.getIn(["singer", "enterLoading"])
  );
  const pullUplLoading = useSelector((store) =>
    store.getIn(["singer", "pullUploading"])
  );
  const pullDownLoading = useSelector((store) =>
    store.getIn(["singer", "pullDownLoading"])
  );

  const dispatch = useDispatch();

  const getHotSinger = useCallback(
    () => dispatch(getHotSingerList()),
    [dispatch]
  );

  const selectTag = useCallback(
    (category, alphabet) => {
      dispatch(changePageCount(0));
      dispatch(changeEnterLoading(true));
      dispatch(getSingerList(category, alphabet));
    },
    [dispatch]
  );

  const pullUpRefresh = useCallback(
    (category, alphabet, hot, count) => {
      dispatch(changePullUpLoading(true));
      dispatch(changePageCount(count + 1));
      if (hot) {
        dispatch(loadMoreHotSingerList({}));
      } else {
        dispatch(loadMoreSingerList({ category, alphabet }));
      }
    },
    [dispatch]
  );

  const pullDownRefresh = useCallback(
    (category, alphabet) => {
      dispatch(changePullDownLoading(true));
      dispatch(changePageCount(0));
      if (!category && !alphabet) {
        dispatch(getHotSingerList());
      } else {
        dispatch(getSingerList(category, alphabet));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    getHotSinger();
  }, [getHotSinger]);

  const [category, setCategory] = useState("");
  const [alphabet, setAlphabet] = useState("");

  const updateCategory = useCallback(
    (val) => {
      setCategory(val);
      selectTag(val, alphabet);
    },
    [alphabet, selectTag]
  );

  const updateAlphabet = useCallback(
    (val) => {
      setAlphabet(val);
      selectTag(category, val);
    },
    [category, selectTag]
  );

  const singerListItems = singersList.map((c, i) => (
    <ListItem key={c.accountId || i}>
      <div className="img_wrap">
        <img
          className="lazyload"
          src=""
          data-src={c.picUrl}
          alt={c.name}
          width="50"
          height="50"
        />
      </div>
      <span className="name">{c.name}</span>
    </ListItem>
  ));

  return (
    <NavContainer>
      <HorizonItem
        title="分类（默认热门）："
        list={categoryTypes}
        value={category}
        onClick={updateCategory}
      />
      <HorizonItem
        title="首字母："
        list={alphaTypes}
        value={alphabet}
        onClick={updateAlphabet}
      />
      <ListContainer>
        <Scroll>
          <LazyLoadImages files={singersList}>
            <List>{singerListItems}</List>
          </LazyLoadImages>
        </Scroll>
      </ListContainer>
    </NavContainer>
  );
};

export default Singer;
