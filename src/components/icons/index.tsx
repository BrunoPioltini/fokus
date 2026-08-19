import Svg, { Path } from "react-native-svg";

export const IconPlay = () => {
  return (
    <Svg width='11' height='15' viewBox='0 0 11 15' fill='none'>
      <Path
        d='M0.015625 0.015625L10.9844 7L0.015625 13.9844V0.015625Z'
        fill='#021123'
      />
    </Svg>
  );
};

export const IconPause = () => {
  return (
    <Svg width='12' height='15' viewBox='0 0 12 15' fill='none'>
      <Path
        d='M8.01562 0.015625H12V13.9844H8.01562V0.015625ZM0 13.9844V0.015625H3.98438V13.9844H0Z'
        fill='#021123'
      />
    </Svg>
  );
};
