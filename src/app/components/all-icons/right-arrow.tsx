import React from "react";

interface RightArrowProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
}

const RightArrow: React.FC<RightArrowProps> = ({
  width = 6,
  height = 10,
  fill = "#C2C6CE",
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 6 10" fill="none">
      <path
        d="M0 8.91921V1.47121C2.81495e-05 1.33938 0.0391425 1.21051 0.112399 1.10091C0.185655 0.9913 0.289764 0.905873 0.411563 0.855427C0.533363 0.80498 0.667384 0.791778 0.796686 0.81749C0.925988 0.843202 1.04476 0.906673 1.138 0.999879L4.86199 4.72388C4.98697 4.8489 5.05718 5.01844 5.05718 5.19521C5.05718 5.37199 4.98697 5.54153 4.86199 5.66655L1.138 9.39055C1.04476 9.48375 0.925988 9.54722 0.796686 9.57293C0.667384 9.59865 0.533363 9.58544 0.411563 9.535C0.289764 9.48455 0.185655 9.39912 0.112399 9.28952C0.0391425 9.17991 2.81495e-05 9.05105 0 8.91921Z"
        fill={fill}
      />
    </svg>
  );
};

export default RightArrow;
