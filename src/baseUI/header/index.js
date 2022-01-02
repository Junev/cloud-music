import { HeaderContainer } from "./style";

const Header = (props) => {
  const { handleClick, title } = props;
  return (
    <HeaderContainer onClick={handleClick}>
      <i className="iconfont icon-fanhui back" />
      <h1>{title}</h1>
    </HeaderContainer>
  );
};

export default Header;
