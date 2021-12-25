import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRankList } from "./store/actionCreator";
import Scroll from "../../components/scroll";
import { Container } from "./style";
import RankList from "./RankList";

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
  return (
    <Container>
      <Scroll>
        <RankList
          title={<h1 className="title">官方榜</h1>}
          list={officialRankList}
        />
        <RankList
          title={<h1 className="title">全球榜</h1>}
          isGlobalRank
          list={globalRankList}
        />
      </Scroll>
    </Container>
  );
};

export default Rank;
