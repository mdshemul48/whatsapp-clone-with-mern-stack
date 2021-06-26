import { createContext } from 'react'

const authContext = createContext({
    authInfo: { token: "", id: "" },
    setLoginHandler: (token, userId) => { },
    setLogoutHandler: () => { }
})

export default authContext