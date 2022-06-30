import { IMG } from 'constants/Image'
import useFadeIn from 'hooks/useFadeIn'
import styled from 'styled-components'
import { AppearAnimation } from 'styles/AppearAnimation'

const LogoContainer = styled(AppearAnimation)`
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
  font-family: sans-serif;
  font-size: 15px;
  text-align: center;
`

const Logo = () => {
  const fadeIn = useFadeIn()

  return (
    <LogoContainer transform={fadeIn.transform} opacity={fadeIn.opacity}>
      2019년 2월 기준
    </LogoContainer>
  )
}

export default Logo
