import banner from "../../assets/109951164331219056.jpeg";
import Slider from "../../components/slider";
import RecommendList from "../../components/recommendList";
import { ScrollWrap } from "./style";
import Scroll from "../../components/scroll";

const Recommend = () => {
  const bannerList = new Array(4).fill(0).map((item) => ({ imageUrl: banner }));
  const recommendList = new Array(10).fill(0).map((item) => ({
    picUrl: banner,
    playCount: 17171122,
    name: "朴树、许巍、李健、郑钧、老狼、赵雷",
  }));
  return (
    <ScrollWrap>
      <Scroll className="list">
        <div>
          <Slider bannerList={bannerList} />
          <RecommendList recommendList={recommendList} />
        </div>
      </Scroll>
    </ScrollWrap>
  );
};

export default Recommend;
