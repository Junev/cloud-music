import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import HorizonItem from "../../baseUI/horizon-item";
import { alphaTypes, categoryTypes } from "../../api/singerCategory";
import { ListContainer, NavContainer } from "./style";
import {
  getHotSingerList,
  changePageCount,
  changeEnterLoading,
  getSingerList,
} from "./store/actionCreator";
import SingerList from "./SingerListContainer";
import Loading from "../../baseUI/loading";

// const random = (low, high) => low + (high - low) * Math.random();

const Singer = (props) => {
  const enterLoading = useSelector((store) =>
    store.getIn(["singers", "enterLoading"])
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
        <SingerList category={category} alphabet={alphabet} />
        <Loading loading={enterLoading} />
      </ListContainer>
    </NavContainer>
  );
};

export default Singer;
