export type Error = {
   errorCode: string
   errorMessage: string
   type: ErrorType
   invalidField: string | undefined
}
enum ErrorType {
   Validation,
   NotFound,
   Failure,
   Conflict,
   Null,
}
