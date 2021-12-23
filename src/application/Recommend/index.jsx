import { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Slider from "../../components/slider";
import RecommendList from "../../components/recommendList";
import { ScrollWrap } from "./style";
import Scroll from "../../components/scroll";
import { actionCreator } from "./store";
import banner from "../../assets/109951164331219056.jpeg";
import Loading from "../../baseUI/loading";
import { useSelector } from "react-redux";

const Recommend = () => {
  // const bannerList = new Array(4).fill(0).map((item) => ({ imageUrl: banner }));
  // const recommendList = new Array(30).fill(0).map((item) => ({
  //   picUrl: banner,
  //   playCount: 17171122,
  //   name: "朴树、许巍、李健、郑钧、老狼、赵雷",
  // }));

  const dispatch = useDispatch();
  const getBannerDataDispatch = useCallback(() => {
    dispatch(actionCreator.getBannerList());
  }, [dispatch]);
  const getRecommendDataDispatch = useCallback(() => {
    dispatch(actionCreator.getRecommendList());
  }, [dispatch]);

  const scroll = useRef();

  useEffect(() => {
    getBannerDataDispatch();
  }, [getBannerDataDispatch]);
  useEffect(() => {
    getRecommendDataDispatch();
    scroll.current?.refresh();
  }, [getRecommendDataDispatch]);

  const loading = useSelector((store) =>
    store.getIn(["recommend", "enterLoading"])
  );

  return (
    <ScrollWrap>
      <Scroll className="list" ref={scroll}>
        <Slider />
        <RecommendList />
        {loading && <Loading />}
      </Scroll>
    </ScrollWrap>
  );
};

export default Recommend;
