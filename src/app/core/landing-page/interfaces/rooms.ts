export interface IRoom {
    
        _id: string,
        roomNumber: number,
        price: number,
        capacity: number,
        discount: number,
        facilities: [
            {
                _id: string,
                name: number
            }
        ],
        images: [string]
    
}
