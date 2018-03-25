export class Host {
    constructor(  
                public email?: string,
                public fullname ?: string,
                public phone ?: number,
                public password ?: string,  
                public location ?: string,
                public pincode ?: number,
                public isUser ?: boolean,
                public isHost ?: boolean
                ) {}
}