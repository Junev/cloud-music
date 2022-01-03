import React, { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LazyLoadImages } from "../../components/LazyLoadImages";
import {
  changePageCount,
  changePullUpLoading,
  changePullDownLoading,
  getHotSingerList,
  getSingerList,
  loadMoreHotSingerList,
  loadMoreSingerList,
} from "./store/actionCreator";
import { ListContainer, List, ListItem } from "./style";
import Scroll from "../../components/scroll";
import Loading from "../../baseUI/loading";

const SingerList = ({ category, alphabet, loading }) => {
  const singersListIm = useSelector((store) =>
    store.getIn(["singers", "singerList"])
  );

  const singersList = useMemo(() => singersListIm.toJS(), [singersListIm]);

  const pullUpLoading = useSelector((store) =>
    store.getIn(["singers", "pullUploading"])
  );
  const pullDownLoading = useSelector((store) =>
    store.getIn(["singers", "pullDownLoading"])
  );
  const pageCount = useSelector((store) =>
    store.getIn(["singers", "pageCount"])
  );

  const dispatch = useDispatch();

  const pullUpRefresh = useCallback(
    (category, alphabet, hot, count) => {
      dispatch(changePullUpLoading(true));
      dispatch(changePageCount(count + 1));
      if (hot) {
        dispatch(loadMoreHotSingerList());
      } else {
        dispatch(loadMoreSingerList(category, alphabet));
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

  const handlePullDown = useCallback(() => {
    pullDownRefresh(category, alphabet);
  }, [pullDownRefresh, category, alphabet]);

  const handlePullUp = useCallback(() => {
    pullUpRefresh(category, alphabet, category === "", pageCount);
  }, [pullUpRefresh, category, alphabet, pageCount]);

  const singerListItems = useMemo(
    () =>
      singersList.map((c, i) => (
        <ListItem key={c.accountId}>
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
      )),
    [singersList]
  );

  return (
    <Scroll
      pullDownLoading={pullDownLoading}
      pullDown={handlePullDown}
      pullUpLoading={pullUpLoading}
      pullUp={handlePullUp}
    >
      <LazyLoadImages files={singersList}>
        <List>{singerListItems}</List>
      </LazyLoadImages>
    </Scroll>
  );
};

export default React.memo(SingerList);
