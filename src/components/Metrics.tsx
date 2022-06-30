import useFadeIn from 'hooks/useFadeIn'
import styled from 'styled-components'

interface LogoContainerProps {
  transform: string
  opacity: number
}

const MetricsContainer = styled.div<LogoContainerProps>`
  margin-left: 623px;
  padding-top: 150px;

  opacity: ${(props: LogoContainerProps) => props.opacity};
  transform: translateY(${(props: LogoContainerProps) => props.transform});
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
  return (
    <MetricsContainer transform={fadeIn.transform} opacity={fadeIn.opacity}>
      <MetricsItem>
        <strong>350만 명</strong>의 사용자
      </MetricsItem>
      <MetricsItem>
        <strong>21만 개</strong>의 리뷰
      </MetricsItem>
      <MetricsItem>
        <strong>650만 개</strong>의 저장
      </MetricsItem>
    </MetricsContainer>
  )
}

export default Metrics
