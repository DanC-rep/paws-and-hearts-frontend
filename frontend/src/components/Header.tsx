import { AppBar } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets'
import PersonIcon from '@mui/icons-material/Person'
import LoginIcon from '@mui/icons-material/Login'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { NavLink } from 'react-router-dom'

export function Header() {
   return (
      <AppBar position="static">
         <div className="flex flex-row items-center justify-between py-2 px-3">
            <NavLink to="/">
               <PetsIcon fontSize="large" />
            </NavLink>
            <span className="text-2xl">Paws And Hearts</span>
            <div className="flex flex-row gap-6">
               <NavLink to="favorite">
                  <FavoriteIcon fontSize="large" />
               </NavLink>
               <NavLink to="profile">
                  <PersonIcon fontSize="large" />
               </NavLink>
               <NavLink to="login">
                  <LoginIcon fontSize="large" />
               </NavLink>
            </div>
         </div>
      </AppBar>
   )
}
