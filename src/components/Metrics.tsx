import useCountUp from 'hooks/useCountUp'
import useFadeIn from 'hooks/useFadeIn'
import styled from 'styled-components'
import { AppearAnimation } from 'styles/AppearAnimation'

const MetricsContainer = styled(AppearAnimation)`
  margin-left: 623px;
  padding-top: 150px;

  transition-delay: 0.1s;
`
const MetricsItem = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
  font-family: sans-serif;
  strong {
    font-weight: bold;
  }
`

const Metrics = () => {
  const fadeIn = useFadeIn()
  const user = useCountUp(350)
  const review = useCountUp(21)
  const save = useCountUp(650)
  return (
    <MetricsContainer transform={fadeIn.transform} opacity={fadeIn.opacity}>
      <MetricsItem>
        <strong>
          <span>{user}</span>만 명
        </strong>
        의 사용자
      </MetricsItem>
      <MetricsItem>
        <strong>
          <span>{review}</span>만 개
        </strong>
        의 리뷰
      </MetricsItem>
      <MetricsItem>
        <strong>
          <span>{save}</span>만 개
        </strong>
        의 저장
      </MetricsItem>
    </MetricsContainer>
  )
}

export default Metrics
