import { Tab, Tabs } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import Diversity1Icon from '@mui/icons-material/Diversity1'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'

export function NavBar() {
   const [value, setValue] = React.useState(0)
   const navigate = useNavigate()

   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
      switch (newValue) {
         case 0:
            navigate('')
            break
         case 1:
            navigate('volunteers')
            break
         case 2:
            navigate('help-pets')
            break
         default:
            break
      }
   }

   return (
      <Tabs onChange={handleChange} value={value}>
         <Tab label="Главная" icon={<HomeIcon fontSize="medium" />} iconPosition="start" />
         <Tab label="Волонтеры" icon={<Diversity1Icon fontSize="medium" />} iconPosition="start" />
         <Tab label="Помощь животным" icon={<VolunteerActivismIcon fontSize="medium" />} iconPosition="start" />
      </Tabs>
   )
}
