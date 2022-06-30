import styled from 'styled-components'
import { FadeInType } from 'types/FadeInType'

export const AppearAnimation = styled.div<FadeInType>`
  opacity: ${(props: FadeInType) => props.opacity};
  transform: translateY(${(props: FadeInType) => props.transform});
  transition: all 0.7s ease-out;
`
