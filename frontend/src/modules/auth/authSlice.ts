import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserId } from '../users/user'
import { loginCases } from './login/loginThunk'

export type Role = 'admin' | 'volunteer' | 'participant'

export type AuthState = {
   accessToken: string | undefined
   userId: UserId | undefined
   roles: Role[]
   isAuthenticated: boolean
   fetchStatus: 'idle' | 'loading' | 'succeeded' | 'failed'
   loginError: string | undefined
   registrationError: string | undefined
}

const initialiAuthState: AuthState = {
   accessToken: undefined,
   userId: undefined,
   roles: [],
   isAuthenticated: false,
   fetchStatus: 'idle',
   loginError: undefined,
   registrationError: undefined,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState: initialiAuthState,
   selectors: {
      selectAccessToken: state => state.accessToken,
      selectCurrentUserId: state => state.userId,
      selectCurrentUserRoles: state => state.roles,
      selectIsAuthenticated: state => state.isAuthenticated,
      selectAuthFetchStatus: state => state.fetchStatus,
      selectLoginError: state => state.loginError,
      selectRegistrationError: state => state.registrationError,
   },
   reducers: {
      tokenReceived: (
         state,
         {
            payload,
         }: PayloadAction<{
            accessToken: string
            userId: UserId
            roles: Role[]
         }>,
      ) => {
         state.accessToken = payload.accessToken
         state.userId = payload.userId
         state.roles = payload.roles
         state.isAuthenticated = true
         state.fetchStatus = 'succeeded'
      },
      logOut: state => {
         state.accessToken = undefined
         state.userId = undefined
         state.roles = []
         state.fetchStatus = 'idle'
         state.isAuthenticated = false
      },
   },
   extraReducers: builder => {
      loginCases(builder)
   },
})

export const authActions = authSlice.actions
export const authSelectors = authSlice.selectors

export default authSlice.reducer
