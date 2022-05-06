import { createContext, useContext } from 'react'

export type User = {
    email: string,
}

export type UserContextType = {
    user: User | null
    setUser: ( User: User) => void
}


export const UserContext = createContext<UserContextType>({
    user: null, 
    setUser: User => console.warn('no user data')
});


const AuthProvider = ({children}: any) =>{

    const { user, setUser } = useContext(UserContext)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}


export default AuthProvider