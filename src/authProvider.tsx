import React, { createContext, useState } from 'react'
import { fakeAuthProvider } from './Auth'

interface AuthContextType {
  user: any
  signin: (user: string, callback: VoidFunction) => void
  signout: (callback: VoidFunction) => void
}

const authContext = createContext<AuthContextType>(null!)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null)

  const signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser)
      callback()
    })
  }

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null)
      callback()
    })
  }

  const value = { user, signin, signout }

  return <authContext.Provider value={value}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return React.useContext(authContext)
}
