import styled from "styled-components";

const MetricsContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;
`;
const MetricsItem = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
  font-family: sans-serif;
`;
const Metrics = () => {
  return (
    <MetricsContainer>
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
  );
};

export default Metrics;
