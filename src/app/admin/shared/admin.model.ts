export class Admin {
    constructor(  
                public email: string,
                public password: string,
                public isAdmin: boolean,
                public fullname?: string,
                public phone?: number
                ) {}
}