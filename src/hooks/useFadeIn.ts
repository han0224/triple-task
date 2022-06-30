import { useEffect, useState } from 'react'

const useFadeIn = () => {
  const [opacity, setOpacity] = useState(0)
  const [transform, setTransform] = useState('20px')

  useEffect(() => {
    setOpacity(1)
    setTransform('0px')
  }, [])

  return { opacity, transform }
}

export default useFadeIn
