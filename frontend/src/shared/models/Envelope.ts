import { Error } from "./Error"

export type Envelope<T> = {
   result: T | null
   responseErrors: Error[]
   timeGenerated: Date
}
