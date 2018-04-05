export class AdminEvents {
    constructor(
        public title: string,
        public phone: number,
        public type: string,
        public description?: string,
        public images ?: string,
       public packages ?: string,
        public rangeDates?: string,
        public numofdays?: number,
        public textarea?: string,
        public location?: string,
        public address?: string,
        public pincode?: number,
        public isHost?: boolean,
        public hostid?: string,
        public isPermittedByAdmin ?: boolean
    ) { }
}

export class AdminPackage {
    constructor(
        public pkgname?: string,
        public pkgincludes?: string,
        public pkgpriceperadult?: string,
        public pkgpriceperchild?: string

    ) { }
}