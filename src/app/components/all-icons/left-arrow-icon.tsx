import React from "react";

interface LeftArrowProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
}

const LeftArrowIcon: React.FC<LeftArrowProps> = ({
  width = 6,
  height = 10,
  fill = "#C2C6CE",
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <path
        d="M10.86 14.3934L7.14003 10.6667C7.01586 10.5418 6.94617 10.3729 6.94617 10.1967C6.94617 10.0206 7.01586 9.85164 7.14003 9.72673L10.86 6.00007C10.9533 5.90605 11.0724 5.84193 11.2022 5.81588C11.3321 5.78983 11.4667 5.80304 11.589 5.85382C11.7113 5.9046 11.8157 5.99064 11.8889 6.10099C11.9621 6.21134 12.0008 6.34098 12 6.4734V13.9201C12.0008 14.0525 11.9621 14.1821 11.8889 14.2925C11.8157 14.4028 11.7113 14.4889 11.589 14.5396C11.4667 14.5904 11.3321 14.6036 11.2022 14.5776C11.0724 14.5515 10.9533 14.4874 10.86 14.3934Z"
        fill={fill}
      />
    </svg>
  );
};

export default LeftArrowIcon;
