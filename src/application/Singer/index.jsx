import HorizonItem from "../../baseUI/horizon-item";
import { alphaTypes, categoryTypes } from "../../api/singerCategory";
import { NavContainer } from "./style";
import { useState } from "react";

const Singer = (props) => {
  const [category, setCategory] = useState();
  const [alphabet, setAlphabet] = useState();

  return (
    <NavContainer>
      <HorizonItem
        title="分类（默认热门）："
        list={categoryTypes}
        value={category}
        onClick={setCategory}
      />
      <HorizonItem
        title="首字母："
        list={alphaTypes}
        value={alphabet}
        onClick={setAlphabet}
      />
    </NavContainer>
  );
};
export default Singer;
