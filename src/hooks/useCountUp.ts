import { useEffect, useState } from 'react'

// output : 0~1 사이의 숫자
const easeOutExpo = (x: number): number => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

const useCountUp = (maxNumber: number): number => {
  const [count, setCount] = useState(0)
  const animationTime = 2000
  const frame = 60

  useEffect(() => {
    let number = 0
    const counter = setInterval(() => {
      number++
      const result = Math.round(easeOutExpo(number / frame) * maxNumber)
      setCount(result)

      if (result === maxNumber) {
        clearInterval(counter)
      }
    }, animationTime / frame)
  }, [maxNumber])

  return count
}

export default useCountUp
