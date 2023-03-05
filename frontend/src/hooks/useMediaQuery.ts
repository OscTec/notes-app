import { useState, useEffect } from 'react'

import Size from '../interfaces/Size'

const sizeMap = {
  sm: 576,
  md: 768,
  lg: 990,
}

export default function useMediaQuery(size: Size) {
  const [matches, setMatches] = useState(
    window.matchMedia(`(min-width: ${sizeMap[size]}px)`).matches
  )

  useEffect(() => {
    window
      .matchMedia(`(min-width: ${sizeMap[size]}px)`)
      .addEventListener('change', e => setMatches( e.matches ))
  }, [])

  return matches
}
