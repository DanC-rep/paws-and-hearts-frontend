export type LoginResponse = {
   accessToken: string
   refreshToken: string
   user: {
      id: string
      email: string
      userName: string
   }
}
