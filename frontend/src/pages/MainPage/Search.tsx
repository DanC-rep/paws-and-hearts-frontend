import {
   Button,
   CardContent,
   Checkbox,
   FormControl,
   MenuItem,
   Select,
   Slider,
   TextField,
} from '@mui/material'
import Card from '@mui/material/Card'
import React from 'react'

export function SearchCard() {
   const [age, setAge] = React.useState<number[]>([1, 30])

   const handleAgeChange = (event: Event, newValue: number | number[]) => {
      setAge(newValue as number[])
   }

   return (
      <Card sx={{ maxWidth: 500, minWidth: 400, borderRadius: 4, boxShadow: 4 }}>
         <CardContent>
            <p className="text-3xl font-medium">Поиск и фильтрация</p>
            <FormControl fullWidth>
               <div className="py-2">
                  <p className="text-lg">Дата добавления</p>
                  <TextField variant="outlined" size="small" fullWidth type="date" />
               </div>
               <div className="py-2">
                  <p className="text-lg">Вид</p>
                  <Select label="Пол" fullWidth size="small" defaultValue={1}>
                     <MenuItem value="">Выберите вид</MenuItem>
                     <MenuItem value={1}>Кошка</MenuItem>
                     <MenuItem value={2}>Собака</MenuItem>
                  </Select>
               </div>
               <div className="py-2">
                  <p className="text-lg">Имя</p>
                  <TextField variant="outlined" size="small" fullWidth />
               </div>
               <div className="py-2">
                  <p className="text-lg">Возраст</p>
                  <Slider value={age} valueLabelDisplay="auto" onChange={handleAgeChange} max={30} min={1} />
               </div>
               <div className="py-2">
                  <p className="text-lg">Порода</p>
                  <Select label="Пол" fullWidth size="small" defaultValue={1}>
                     <MenuItem value="">Выберите породу</MenuItem>
                     <MenuItem value={1}>Порода 1</MenuItem>
                     <MenuItem value={2}>Порода 2</MenuItem>
                  </Select>
               </div>
               <div className="py-2">
                  <p className="text-lg">Окрас</p>
                  <Select label="Пол" fullWidth size="small" defaultValue={1}>
                     <MenuItem value="">Выберите окрас</MenuItem>
                     <MenuItem value={1}>Окрас 1</MenuItem>
                     <MenuItem value={2}>Окрас 2</MenuItem>
                  </Select>
               </div>
               <div className="py-2">
                  <p className="text-lg">Статус</p>
                  <Select label="Пол" fullWidth size="small" defaultValue={1}>
                     <MenuItem value="">Выберите статус</MenuItem>
                     <MenuItem value={1}>Статус 1</MenuItem>
                     <MenuItem value={2}>Статус 2</MenuItem>
                  </Select>
               </div>
               <div className="flex justify-between items-center py-2">
                  <span className="text-lg">Кастрация</span>
                  <Checkbox defaultChecked color="primary" />
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-lg">Прививки</span>
                  <Checkbox defaultChecked color="primary" />
               </div>
               <Button size="medium" variant="contained">
                  Применить
               </Button>
            </FormControl>
         </CardContent>
      </Card>
   )
}
