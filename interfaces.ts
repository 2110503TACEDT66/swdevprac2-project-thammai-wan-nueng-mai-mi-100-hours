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

interface CoWorkJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: CoWorkItem[]
}

interface CoWorkItem {
  _id: string,
  name: string,
  address: string,
  phonenumber: string,
  opentime: string,
  closetime: string,
  price: number,
  picture: string,
  __v: number,
  reservations: ReservationItem[],
  id: string
}

