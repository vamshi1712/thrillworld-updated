export class Events {
    constructor(
        public title: string,
        public phone: number,
        public type: string,
        public description?: string,
        public packages ?: string,
        public images ?: string,
        public fromdate?: Date,
        public todate?: Date,
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

export class Package {
    constructor(
        public pkgname?: string,
        public pkgincludes?: string,
        public pkgpriceperadult?: string,
        public pkgpriceperchild?: string

    ) { }
}

export class TodayBookings {
    constructor( 
      public date ?: string
    ){}
  }