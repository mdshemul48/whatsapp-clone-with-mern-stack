import { useState, useEffect } from 'react'

const useAuth = () => {
    const [authInfo, setAuthInfo] = useState(undefined)
    useEffect(() => {
        const savedData = localStorage.getItem("auth")
        const jsonData = JSON.parse(savedData)
        setAuthInfo(jsonData)
    }, [])
    const setLoginHandler = (token, userId) => {
        setAuthInfo({ token, userId })
        localStorage.setItem("auth", JSON.stringify({ token, userId }))
    }
    const setLogoutHandler = () => {
        localStorage.removeItem("auth")
    }

    return [authInfo, setLoginHandler, setLogoutHandler]

}
export default useAuth