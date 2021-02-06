import { useState, useEffect } from 'react'

const useFetch = (service, options) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const doFetch = async () => {
      setLoading(true)

      try {
        const { data } = await service(options)
        setResponse(data)
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    }

    doFetch()
  }, [])

  return { response, error, loading }
}

export default useFetch
