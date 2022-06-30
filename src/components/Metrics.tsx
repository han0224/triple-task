import useCountUp from 'hooks/useCountUp'
import useFadeIn from 'hooks/useFadeIn'
import styled from 'styled-components'
import { FadeInType } from 'types/FadeInType'

const MetricsContainer = styled.div<FadeInType>`
  margin-left: 623px;
  padding-top: 150px;

  opacity: ${(props: FadeInType) => props.opacity};
  transform: translateY(${(props: FadeInType) => props.transform});
  transition: all 0.7s ease-out 0.1s;
`
const MetricsItem = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
  font-family: sans-serif;
`
const Metrics = () => {
  const fadeIn = useFadeIn()
  const user = useCountUp(350)
  const review = useCountUp(21)
  const save = useCountUp(650)
  return (
    <MetricsContainer transform={fadeIn.transform} opacity={fadeIn.opacity}>
      <MetricsItem>
        <strong>{user}만 명</strong>의 사용자
      </MetricsItem>
      <MetricsItem>
        <strong>{review}만 개</strong>의 리뷰
      </MetricsItem>
      <MetricsItem>
        <strong>{save}만 개</strong>의 저장
      </MetricsItem>
    </MetricsContainer>
  )
}

export default Metrics
