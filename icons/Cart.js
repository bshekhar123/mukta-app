import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Cart = (props) => (
  <Svg
    width={26}
    height={20}
    viewBox="0 0 26 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.82084 19.75C7.05557 19.75 6.40105 19.5017 5.8573 19.0052C5.31355 18.5087 5.04168 17.9174 5.04168 17.2313V7.18333L2.83647 2.41667H0.208344V0.25H4.46772L6.46147 4.58333H24.3146C24.7778 4.58333 25.1302 4.75486 25.3719 5.09792C25.6136 5.44097 25.6236 5.79306 25.4021 6.15417L21.9583 12.1938C22.9854 12.3382 23.8464 12.7625 24.5412 13.4667C25.2359 14.1708 25.5833 15.0014 25.5833 15.9583C25.5833 17.0056 25.1755 17.8993 24.3599 18.6396C23.5443 19.3799 22.5524 19.75 21.3844 19.75C20.1962 19.75 19.1943 19.3799 18.3787 18.6396C17.563 17.8993 17.1552 17.0056 17.1552 15.9583C17.1552 15.5972 17.2056 15.2632 17.3063 14.9563C17.407 14.6493 17.5479 14.3514 17.7292 14.0625L13.7719 13.7375L10.1469 18.6125C9.88508 18.9736 9.54775 19.2535 9.13491 19.4521C8.72206 19.6507 8.28404 19.75 7.82084 19.75ZM19.3604 12.0312L22.3511 6.75L7.45834 6.77708L8.96876 10C9.12987 10.3611 9.38664 10.6635 9.73907 10.9073C10.0915 11.151 10.4993 11.291 10.9625 11.3271L19.3604 12.0312ZM7.85105 17.5563C7.89133 17.5563 7.98196 17.5111 8.12293 17.4208L11.0531 13.5208C10.0663 13.4306 9.29098 13.2184 8.72709 12.8844C8.16321 12.5503 7.74029 12.2028 7.45834 11.8417V17.2583C7.45834 17.3486 7.49862 17.4208 7.57918 17.475C7.65973 17.5292 7.75036 17.5563 7.85105 17.5563ZM21.3542 17.5833C21.8778 17.5833 22.3108 17.4253 22.6531 17.1094C22.9955 16.7934 23.1667 16.4097 23.1667 15.9583C23.1667 15.4889 22.9955 15.1007 22.6531 14.7938C22.3108 14.4868 21.8778 14.3333 21.3542 14.3333C20.8507 14.3333 20.4228 14.4868 20.0703 14.7938C19.7179 15.1007 19.5417 15.4889 19.5417 15.9583C19.5417 16.4097 19.7179 16.7934 20.0703 17.1094C20.4228 17.4253 20.8507 17.5833 21.3542 17.5833Z"
      fill="#FF4343"
    />
  </Svg>
);
export default Cart;