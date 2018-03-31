export class Booking {
    constructor(  
                public date ?: Date,
                public numofadults ?: number,
                public numofchilds ?: number,
                public userid ?: string,
                public eventid ?: string
                ) {}
}