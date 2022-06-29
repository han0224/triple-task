import { IMG } from 'constants/Image'
import useFadeIn from 'hooks/useFadeIn'
import styled from 'styled-components'

interface LogoContainerProps {
  transform: string
  opacity: number
}

const AwardsContainer = styled.div`
  display: flex;
  margin: 50px 0px 140px 623px;
`
const AwardsItem = styled.div<LogoContainerProps>`
  display: inline-block;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;

  background-size: 54px 54px;
  background-position: left top;
  background-repeat: no-repeat;

  opacity: ${(props: LogoContainerProps) => props.opacity};
  transform: translateY(${(props: LogoContainerProps) => props.transform});
  transition: all 1s ease-in-out 0.3s;

  font-family: sans-serif;
  font-weight: bold;

  color: rgba(58, 58, 58, 0.8);
`

const AppleStore = styled(AwardsItem)`
  background-image: url(${IMG.APPLE_STORE});
`

const PlayStore = styled(AwardsItem)`
  background-image: url(${IMG.PLAY_STORE});
`

const Awards = () => {
  const fadeIn = useFadeIn()
  return (
    <AwardsContainer>
      <PlayStore transform={fadeIn.transform} opacity={fadeIn.opacity}>
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </PlayStore>
      <AppleStore transform={fadeIn.transform} opacity={fadeIn.opacity}>
        2018 애플 스토어 <br />
        오늘의 여행앱 선정
      </AppleStore>
    </AwardsContainer>
  )
}

export default Awards
