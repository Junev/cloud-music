import { CircleWrapper } from "./styles";

const ProgressCircle = ({ radius, percent, children }) => {
  // 整个背景的周长
  const dashArray = Math.PI * 100;
  // 非高亮部分
  const dashOffset = (1 - percent) * dashArray;

  return (
    <CircleWrapper>
      <svg
        width={radius}
        height={radius}
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="progress-background"
          r="50"
          cx="50"
          cy="50"
          fill="transparent"
        />
        <circle
          className="progress-bar"
          r="50"
          cx="50"
          cy="50"
          fill="transparent"
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
        />
      </svg>
      {children}
    </CircleWrapper>
  );
};

export default ProgressCircle;
