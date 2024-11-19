import Pagination from '@mui/material/Pagination'
import { PetCard } from './PetCard'
import { SearchCard } from './Search'

const testPet = {
   name: 'Имя',
   healthInfo: 'состояние здоровья',
   isVaccinated: true,
   species: 'Собака',
   breed: 'Порода',
   image: '/src/static/dog.jpg',
}

export function MainPage() {
   return (
      <div className="py-4 px-6">
         <div className="flex flex-row">
            <div className="flex-shrink-0">
               <SearchCard />
            </div>
            <div className="flex flex-col gap-4 px-8  ">
               <div className="flex flex-row gap-8">
                  <PetCard petCard={testPet} />
                  <PetCard petCard={testPet} />
               </div>
               <div className="flex flex-row gap-8">
                  <PetCard petCard={testPet} />
                  <PetCard petCard={testPet} />
               </div>
               <Pagination count={10} color="secondary" />
            </div>
         </div>
      </div>
   )
}
