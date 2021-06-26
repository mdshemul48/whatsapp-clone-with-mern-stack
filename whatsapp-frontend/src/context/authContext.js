import { createContext } from 'react'
import useAuth from '../hooks/use-auth'


const authContext = createContext({
    authInfo: { token: "", id: "" },
    setLoginHandler: (token, userId) => { },
    setLogoutHandler: () => { }
})


export const AuthContextProvider = (props) => {
    const [authInfo, setLogInHandler, setLogoutHandler] = useAuth()
    return <authContext.Provider value={{ authInfo, setLogInHandler, setLogoutHandler }}>
        {props.children}
    </authContext.Provider>
}


export default authContext