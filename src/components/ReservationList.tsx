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
            <div style={{paddingBottom:"40px", margin:"20px", display:"flex", flexDirection:"column", 
                flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                    {
                        reservationReady.data.map((reservationItem:ReservationItem)=>(
                            <div className="bg-slate-200 rounded px-5 mx-5 py-3 my-2 w-4/5" key={reservationItem._id}>
                                <div className="text-sm font-semibold">Name: {reservationItem.uname}</div>
                                <div className="text-sm font-semibold">Co-working space: {reservationItem.cname}</div>
                                <div className="text-sm font-semibold">Date: {reservationItem.resvDate.toString().slice(0,10)}</div>
                                <div className="text-sm font-semibold">Cost: {reservationItem.price} Baht</div>
                                <div>
                                    <div className="inline-block my-1">
                                        <Link href={`/myreservation/edit?rid=${reservationItem._id}&name=${reservationItem.cname}&price=${reservationItem.price}`}>
                                            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 
                                            px-3 py-1 text-white shadow-sm">
                                                Edit a Reservation
                                            </button>
                                        </Link>
                                    </div>
                                    <RemoveButton id={reservationItem._id} token={session?.user.token||""}/>
                                </div> 
                            </div>
                        ))
                    }
            </div> 
        </>
    )
}