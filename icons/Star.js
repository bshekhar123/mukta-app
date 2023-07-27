import * as React from "react";
import Svg, { Mask, Rect, G, Path } from "react-native-svg";
const Star = (props) => (
  <Svg
    width={32}
    height={30}
    viewBox="0 0 32 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="mask0_80_20"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={32}
      height={30}
    >
      <Rect x={0.200195} width={31.4} height={30} fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_80_20)">
      <Path
        d="M11.779 22.2812L15.9002 19.9062L20.0215 22.3125L18.9421 17.8125L22.5727 14.8125L17.7973 14.4063L15.9002 10.1562L14.0031 14.375L9.22772 14.7812L12.8583 17.8125L11.779 22.2812ZM7.82126 27.5L9.9473 18.7188L2.81689 12.8125L12.2369 12.0312L15.9002 3.75L19.5635 12.0312L28.9835 12.8125L21.8531 18.7188L23.9792 27.5L15.9002 22.8438L7.82126 27.5Z"
        fill="black"
      />
    </G>
  </Svg>
);
export default Star;
