export const SemiCircleProgress = ({ percentage }: { percentage: number }) => {
  const radius = 90;
  const stroke = 10;
  const normalizedRadius = radius - stroke;
  const circumference = Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg width="200" height="100" viewBox="0 0 200 100">
      <path
        d="M10,100 A90,90 0 0,1 190,100"
        fill="none"
        stroke="#f3f4f6"
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      <path
        d="M10,100 A90,90 0 0,1 190,100"
        fill="none"
        stroke="#2086BF"
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
      />
    </svg>
  );
};
