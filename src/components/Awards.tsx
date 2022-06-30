import { IMG } from 'constants/Image'
import useFadeIn from 'hooks/useFadeIn'
import styled from 'styled-components'

interface LogoContainerProps {
  transform: string
  opacity: number
}

const AwardsContainer = styled.div<LogoContainerProps>`
  display: flex;
  margin: 50px 0px 140px 623px;

  opacity: ${(props: LogoContainerProps) => props.opacity};
  transform: translateY(${(props: LogoContainerProps) => props.transform});
  transition: all 0.7s ease-out 0.2s;
`
const AwardsItem = styled.div`
  display: inline-block;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;

  background-size: 54px 54px;
  background-position: left top;
  background-repeat: no-repeat;

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
    <AwardsContainer transform={fadeIn.transform} opacity={fadeIn.opacity}>
      <PlayStore>
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </PlayStore>
      <AppleStore>
        2018 애플 스토어 <br />
        오늘의 여행앱 선정
      </AppleStore>
    </AwardsContainer>
  )
}

export default Awards
