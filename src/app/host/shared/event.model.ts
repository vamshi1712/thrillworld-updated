export class Events {
    constructor(
        public title: string,
        public phone: number,
        public type: string,
        public description?: string,
        public packages ?: string,
        public mainimage ?: string,
        public images ?: string,
        public datefrom?: string,
        public dateto?: string,
        public mempertent ?: number,
        public pricepernight ?: number,
        public numofdays?: number,
        public location?: string,
        public address?: string,
        public pincode?: number,
        public reviews ?: string,
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

export class Review {
    constructor(
        public comment ?: string,
        public cleanliness ?: number,
        public comfort ?: number,
        public location ?: number,
        public facilities ?: number,
        public staff ?: number,
        public valueformoney ?: number,
        public reviewedby ?: string,
        public reviewedon ?: string
    ) { }
}

export class TodayBookings {
    constructor( 
      public date ?: string
    ){}
  }