import styled from "styled-components";

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  .show {
    display: block;
  }
  .hide {
    display: none;
  }
`;

const PullUpLoading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  width: 80px;
  height: 80px;
  margin: auto;
  z-index: 100;
`;

const PullDownLoading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 80px;
  height: 80px;
  margin: auto;
  z-index: 100;
`;
export { ScrollContainer, PullUpLoading, PullDownLoading };
