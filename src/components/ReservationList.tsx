import RemoveButton from "./RomoveButton"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Link from "next/link"

export default async function ReservationList({reservationJson}: {reservationJson:Promise<ReservationJson>}) {
    const session = await getServerSession(authOptions)
    const reservationReady = await reservationJson
    //console.log(session?.user.token)

    return (
        <>
            <div style={{paddingBottom:"40px", margin:"20px", display:"flex", flexDirection:"row", 
                flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                    {
                        reservationReady.data.map((reservationItem:ReservationItem)=>(
                            <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={reservationItem._id}>
                            <div className="text-sm">Name: {reservationItem.uname}</div>
                            <div className="text-sm">Co-working space: {reservationItem.cname}</div>
                            <div className="text-sm">Date: {reservationItem.resvDate.toString()}</div>
                            <div className="text-sm">Cost: {reservationItem.price} Baht</div>
                            <RemoveButton id={reservationItem._id} token={session?.user.token||""}/>
                            <Link href={`/myreservation/edit?rid=${reservationItem._id}&name=${reservationItem.cname}&price=${reservationItem.price}`}>
                                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 
                                px-3 py-1 text-white shadow-sm">
                                    Edit a Reservation
                                </button>
                            </Link>
                        </div>
                        ))
                    }
            </div> 
        </>
    )
}