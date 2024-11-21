import React, { createContext, useEffect, useLayoutEffect, useState } from 'react'
import { User } from '../../models/User'
import { AccountsService } from '../../api/Accounts'
import { api } from '../../api/api'

type AuthContextType = {
   accessToken: string | undefined
   user: User | undefined
   isLoading: boolean
   isError: boolean
   login: (email: string, password: string) => Promise<void>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

type Props = { children: React.ReactNode }

export const AuthProvider = ({ children }: Props) => {
   const [accessToken, setAccessToken] = useState<string | undefined>()
   const [user, setUser] = useState<User | undefined>()

   const [isLoading, setIsLoading] = useState(false)
   const [isError, setIsError] = useState(false)

   useEffect(() => {
      const accessTokenInterceptor = api.interceptors.request.use(config => {
         config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : config.headers.Authorization

         return config
      })

      return () => {
         api.interceptors.response.eject(accessTokenInterceptor)
      }
   }, [accessToken])

   useLayoutEffect(() => {
      const refreshInterceptor = api.interceptors.response.use(
         config => config,
         async error => {
            if (error.response.status === 401) {
               const originalRequest = error.config

               try {
                  const response = await AccountsService.refresh()

                  setAccessToken(response.data.result!.accessToken)
                  setUser({
                     id: response.data.result!.user.id,
                     email: response.data.result!.user.email,
                     userName: response.data.result!.user.userName,
                  } as User)

                  originalRequest.headers.Authorization = `Bearer ${response.data.result!.accessToken}`

                  return api(error.config)
               } catch {
                  setAccessToken(undefined)
               }
            }

            return Promise.reject(error)
         },
      )

      return () => {
         api.interceptors.response.eject(refreshInterceptor)
      }
   }, [])

   const login = async (email: string, password: string) => {
      try {
         setIsLoading(true)
         const response = await AccountsService.login(email, password)
         setAccessToken(response.data.result!.accessToken)
         setUser({
            id: response.data.result!.user.userName,
            email: response.data.result!.user.email,
            userName: response.data.result!.user.userName,
         } as User)
         console.log(response.data.result!.user.userName)
         setIsLoading(false)
      } catch {
         setIsLoading(false)
         setIsError(true)
      }
   }

   return (
      <AuthContext.Provider value={{ accessToken, user, isLoading, isError, login }}>{children}</AuthContext.Provider>
   )
}
