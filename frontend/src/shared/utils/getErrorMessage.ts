import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { Envelope } from '../models/Envelope'
import { errorMessages } from './errorMessages'

export const getErrorMessage = (error: FetchBaseQueryError | SerializedError | undefined) => {
   if (error) {
      if ('status' in error) {
         const errorData = error.data as Envelope<null> | undefined
         console.log(errorData?.responseErrors)
         if (errorData && errorData.responseErrors) {
            const messages = errorData.responseErrors.map(err => {
               return errorMessages[err.errorCode] || err.errorMessage || 'Произошла неизвестная ошибка'
            })

            return messages.join(', ')
         }
         return 'Серверная ошибка'
      }
      return 'Непредвиденная ошибка'
   }
   return ''
}
