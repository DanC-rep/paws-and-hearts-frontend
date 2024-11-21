import { Button } from '@mui/material'
import { useAuth } from '../../contexts/auth/useAuth'

const testUser = {
   fullName: 'Имя фамилия отчество',
   userName: 'user name',
   email: 'abc@mail.ru',
}

export function ProfilePage() {
   const { user } = useAuth()
   return (
      <div className="flex flex-row px-6 py-8 w-full h-full">
         <div className="px-4 py-5 bg-slate-100 rounded-xl w-1/4 h-1/2 flex flex-col items-center shadow-md">
            <p className="text-xl">{testUser.fullName}</p>
            <div className="py-5">
               <Button variant="contained">Редактировать профиль</Button>
            </div>
         </div>
         <div className="px-6 mx-10 py-5 bg-slate-100 rounded-xl flex-1 flex flex-col gap-5">
            <div className="flex flex-col gap-1">
               <p className="text-xl">{user?.email ?? testUser.email}</p>
               <p className="text-xl">{user?.userName ?? testUser.userName}</p>
               {/* и прочие поля */}
            </div>
         </div>
      </div>
   )
}