import { Button, InputAdornment, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/auth/useAuth'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useState } from 'react'

type LoginFields = {
   email: string
   password: string
}

export function LoginPage() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<LoginFields>()

   const { login, isError } = useAuth()

   const navigate = useNavigate()

   const [showPassword, setShowPassword] = useState(false)

   const onSubmit = async (data: LoginFields) => {
      await login(data.email, data.password)

      if (isError === false) {
         navigate('/profile')
      }
   }

   return (
      <div className="flex flex-col h-full w-full py-6 px-10 justify-center items-start gap-4">
         <NavLink to="/" className="text-lg">
            ← Обратно на главную
         </NavLink>

         <div className="flex flex-col flex-1 min-w-80 mx-auto items-center">
            <p className="text-2xl font-bold text-center mb-6">Вход</p>
            <form className="flex flex-col w-full items-center gap-7" onSubmit={handleSubmit(onSubmit)}>
               <TextField
                  {...register('email', { required: 'Это поле обязательно для заполнения' })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  variant="outlined"
                  size="medium"
                  label="Email"
                  className="mb-4"
                  fullWidth
               />

               <TextField
                  {...register('password', { required: 'Это поле обязательно для заполнения' })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  variant="outlined"
                  size="medium"
                  label="Пароль"
                  className="mb-6 flex-1"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  slotProps={{
                     input: {
                        endAdornment: (
                           <InputAdornment position="end">
                              <Button
                                 onClick={() => setShowPassword(prev => !prev)}
                                 style={{ minWidth: 0 }} // Убираем ширину кнопки
                              >
                                 {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                              </Button>
                           </InputAdornment>
                        ),
                     },
                  }}
               />
            </form>
            <p className="pt-4">Ещё не зарегистрированы?</p>
            <Link to={'/'} className="text-blue-600 underline">
               Зарегистрироваться
            </Link>
         </div>
      </div>
   )
}
