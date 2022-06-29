import Awards from "components/Awards";
import Logo from "components/Logo";
import Metrics from "components/Metrics";
import styled from "styled-components";

const ResponsiveSection = styled.div`
  position: relative;
  margin: 0 auto;
  height: auto;
  width: 1200px;
`;

function App() {
  return (
    <main>
      <ResponsiveSection>
        <Logo />
        <Metrics />
        <Awards />
      </ResponsiveSection>
    </main>
  );
}

export default App;
