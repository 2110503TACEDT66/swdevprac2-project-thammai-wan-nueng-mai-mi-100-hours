interface ReservationItem {
    _id: string,
    resvDate: Date,
    user: string,
    cowork: Object,
    uname: string,
    cname: string,
    price: number,
    createdAt: Date,
    __v: number
}

  interface ReservationJson {
    success: boolean,
    count: number,
    data: ReservationItem[]
  }

