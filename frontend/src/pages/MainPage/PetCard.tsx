import CloseIcon from '@mui/icons-material/Close'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import { Button, CardActions, CardContent, CardMedia } from '@mui/material'
import Card from '@mui/material/Card'
import StarIcon from '@mui/icons-material/Star'

export type PetCard = {
   name: string
   healthInfo: string
   isVaccinated: boolean
   species: string
   breed: string
   image: string
}

export type props = {
   petCard: PetCard
}

export function PetCard(props: props) {
   return (
      <Card sx={{ maxWidth: 600, minWidth: 450 }}>
         <CardMedia image={props.petCard.image} title="pet card" sx={{ height: 350 }} />
         <CardContent>
            <p className="text-2xl font-semibold">{props.petCard.name}</p>
            <p>
               <span className="font-semibold">Вид: </span>
               {props.petCard.species}
            </p>
            <p>
               <span className="font-semibold">Порода: </span>
               {props.petCard.breed}
            </p>
            <p>
               <span className="font-semibold">Вакцинация: </span>
               <span>
                  {props.petCard.isVaccinated == true ? (
                     <DoneAllIcon fontSize="small" color="success" />
                  ) : (
                     <CloseIcon fontSize="small" color="error" />
                  )}
               </span>
            </p>
            <p>
               <span className="font-semibold">Состояние здоровья: </span>
               {props.petCard.healthInfo}
            </p>
         </CardContent>
         <CardActions>
            <Button size="medium" variant="contained">
               Подробнее
            </Button>
            <Button size="medium" variant="contained">
               <StarIcon fontSize="medium" />
            </Button>
         </CardActions>
      </Card>
   )
}
