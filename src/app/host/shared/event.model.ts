export class Events {
    constructor(   
                public title : string,
                public phone : number,
                public type : string,
                public description ?: string,
                public pkgname ?: string,
                public pkgincludes ?: string,
                public pkgpriceperadult ?: string,
                public pkgpriceperchild ?: string,
                public fromdate ?: Date,
                public todate ?: Date,
                public numofdays ?: number,
                public textarea ?: string,
                public location ?: string,
                public address ?: string,
                public pincode ?: number,
                public isHost ?: boolean
                ) {}
}