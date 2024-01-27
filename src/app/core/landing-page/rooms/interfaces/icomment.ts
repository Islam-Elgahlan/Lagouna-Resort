import { Iroom, Iuser } from "./ireview"

export interface Icomment {
   

        createdAt:string,
    
    comment:string
    room:Iroom[],
    
    updatedAt:string,
    user:Iuser,
    _id:string
    
    
}
