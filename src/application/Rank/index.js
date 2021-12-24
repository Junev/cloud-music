import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRankList } from "./store/actionCreator";

const Rank = () => {
  const officialRankList = useSelector((store) =>
    store.getIn(["rank", "officialList"])
  ).toJS();

  const globalRankList = useSelector((store) =>
    store.getIn(["rank", "globalList"])
  ).toJS();

  const loading = useSelector((store) => store.getIn(["rank", "loading"]));

  const dispatch = useDispatch();
  const getRank = useCallback(() => {
    dispatch(getRankList());
  }, [dispatch]);

  useEffect(() => {
    getRank();
  }, [getRank]);
  return null;
};

export default Rank;
