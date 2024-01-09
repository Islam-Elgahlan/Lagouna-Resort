export interface Ads {

    createdAt:string,
createdBy:IAds,
isActive:boolean,
room:IRoom,
updatedAt:string,
_id:string
}

export interface IAds {
userName:string,
_id:string
}
export interface IRoom {
roomNumber:number,
_id:string,
price:number,
capacity:number,
discount:number
}