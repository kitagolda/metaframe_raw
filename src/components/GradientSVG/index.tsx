interface Props {
  startColor: string;
  endColor: string;
  idCSS: string;
  rotation?: string;
}

const GradientSVG = ({ startColor, endColor, idCSS, rotation }: Props) => {
  let gradientTransform = `rotate(${rotation})`;

  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id={idCSS} gradientTransform={gradientTransform}>
          <stop offset="0%" stopColor={startColor} />
          <stop offset="100%" stopColor={endColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientSVG;
