export interface Ireview {

    createdAt:string,
rating: number,
review:string
room:Iroom[],

updatedAt:string,
user:Iuser,
_id:string
}



export interface Iroom {
roomNumber:number,
_id:string
}
export interface Iuser {
userName:string,
_id:string,
profileImage:string,

}