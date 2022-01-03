import React from "react";
import Marquee from "../../components/Marquee";
import { HeaderContainer } from "./style";

const Header = (props, ref) => {
  const { handleClick, title, isMarquee } = props;
  return (
    <HeaderContainer ref={ref} onClick={handleClick}>
      <i className="iconfont icon-fanhui back" />
      {isMarquee ? (
        <Marquee>
          <h1>{title}</h1>
        </Marquee>
      ) : (
        <h1>{title}</h1>
      )}
    </HeaderContainer>
  );
};

export default React.forwardRef(Header);
