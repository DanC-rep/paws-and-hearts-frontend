import { Envelope } from '../../shared/models/Envelope'
import { baseApi } from '../../shared/api/baseApi'
import { Role } from './authSlice'

export type LoginResponse = {
   accessToken: string
   user: {
      id: string
      email: string
      userName: string
      roles: Role[]
   }
}

export const authApi = baseApi.injectEndpoints({
   endpoints: builder => ({
      login: builder.mutation<LoginResponse, { email: string; password: string }>({
         query: ({ email, password }) => ({
            url: '/accounts/login',
            body: { email, password },
            method: 'POST',
         }),
         transformResponse: (res: Envelope<LoginResponse>) => {
            return res.result!
         },
      }),
      refreshToken: builder.mutation<LoginResponse, void>({
         query: () => ({
            url: '/accounts/refresh',
            method: 'POST',
         }),
         transformResponse: (res: Envelope<LoginResponse>) => res.result!,
      }),
   }),
})

export const { useLoginMutation, useRefreshTokenMutation } = authApi
