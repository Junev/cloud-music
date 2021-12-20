import { useCallback, useEffect, useMemo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Slider from "../../components/slider";
import RecommendList from "../../components/recommendList";
import { ScrollWrap } from "./style";
import Scroll from "../../components/scroll";
import { actionCreator } from "./store";
import banner from "../../assets/109951164331219056.jpeg";

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

  useEffect(() => {
    getBannerDataDispatch();
  }, [getBannerDataDispatch]);
  useEffect(() => {
    getRecommendDataDispatch();
  }, [getRecommendDataDispatch]);

  return (
    <ScrollWrap>
      <Scroll className="list">
        <div>
          <Slider />
          <RecommendList />
        </div>
      </Scroll>
    </ScrollWrap>
  );
};

export default Recommend;
