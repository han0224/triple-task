import { useEffect, useState } from 'react'
import { FadeInType } from 'types/FadeInType'

const useFadeIn = (): FadeInType => {
  const [opacity, setOpacity] = useState(0)
  const [transform, setTransform] = useState('20px')

  useEffect(() => {
    setOpacity(1)
    setTransform('0px')
  }, [])

  return { opacity, transform }
}

export default useFadeIn
