export class Booking {
    constructor(  
                public date ?: Date,
                public numofadults ?: number,
                public numofchild ?: number,
                public userid ?: string,
                public eventid ?: string
                ) {}
}