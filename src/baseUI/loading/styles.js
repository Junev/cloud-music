import styled, { keyframes } from "styled-components";
import style from "../../assets/global-style";

const loading = keyframes`
	0%, 100% {
	transform: scale(0)
}
	50% {
	transform: scale(1)
}
`;
const LoadingWrapper = styled.div`
  > div {
    position: fixed;
    z-index: 1000;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: auto;
    background-color: ${style["theme-color"]};
    opacity: 0.6;
    animation: ${loading} 1.4s infinite ease-in;
  }
  > div:nth-child(2) {
    animation-delay: -0.7s;
  }
`;

export { LoadingWrapper };
