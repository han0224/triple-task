import { IMG } from "constants/Image";
import styled from "styled-components";

const LogoContainer = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  padding-top: 280px;
  box-sizing: border-box;

  background-image: url(${IMG.TRIPLE_LOGO});
  background-size: 400px 338px;
  background-repeat: no-repeat;

  color: rgba(58, 58, 58, 0.7);
  font-size: 15px;
  text-align: center;
  /* font-family: sans-serif; */
`;

const Logo = () => {
  return <LogoContainer>2019년 2월 기준</LogoContainer>;
};

export default Logo;
