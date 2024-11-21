import axios, { AxiosResponse } from 'axios'
import { Envelope } from '../models/Envelope'
import { LoginResponse } from '../models/LoginResponse'
import { api, API_URL } from './api'

export class AccountsService {
   static async login(email: string, password: string): Promise<AxiosResponse<Envelope<LoginResponse>>> {
      return api.post<Envelope<LoginResponse>>('accounts/login', {
         email,
         password,
      })
   }

   static async refresh() {
      return axios.post<Envelope<LoginResponse>>(
         API_URL + 'accounts/refresh',
         {},
         {
            withCredentials: true,
         },
      )
   }
}
