import { configureStore } from '@reduxjs/toolkit/react'
import { baseApi } from '../shared/api/baseApi'
import authReducer from '../modules/auth/authSlice'
import { router } from './Router'

export const extraArgument = {
   router,
}

export const store = configureStore({
   reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      auth: authReducer,
   },
   middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: { extraArgument } }).concat(baseApi.middleware),
})
