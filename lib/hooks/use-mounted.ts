import { useEffect, useState } from 'react'

export const useMounted = (dep: any, cb: () => void) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
    }
  }, [])
  useEffect(() => {
    if (isMounted && dep) {
      cb()
    }
  }, [isMounted, dep])
  return isMounted
}
