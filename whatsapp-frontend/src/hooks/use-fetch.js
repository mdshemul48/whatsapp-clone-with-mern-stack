import { useState, useCallback } from "react"

const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)


    const fetchData = useCallback(async (url, method, body, headers) => {
        setIsLoading(true)
        const response = await fetch(url, {
            method: method || "GET",
            body: body ? JSON.stringify(body) : null,
            headers: headers || {}
        })
        if (!response.ok) {
            const err = await response.text
            setIsLoading(false)
            return setError(err)
        }
        const responseData = await response.json()
        setIsLoading(false)
        return responseData
    }, [])
    return [error, isLoading, fetchData]
}

export default useFetch