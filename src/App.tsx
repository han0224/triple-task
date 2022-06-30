import Awards from 'components/Awards'
import Logo from 'components/Logo'
import Metrics from 'components/Metrics'
import styled from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'

const ResponsiveSection = styled.div`
  position: relative;
  margin: auto;
  height: auto;
  width: 1200px;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <ResponsiveSection>
          <Logo />
          <Metrics />
          <Awards />
        </ResponsiveSection>
      </main>
    </>
  )
}

export default App
