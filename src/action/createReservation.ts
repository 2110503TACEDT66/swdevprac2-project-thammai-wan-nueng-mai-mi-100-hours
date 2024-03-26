'use server'
import CoWork from "@/db/models/CoWork"
import Reservation from "@/db/models/Reservation"
import { dbConnect } from "@/db/dbconnect"
import { revalidateTag, revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
export default async function myAction(reserveForm: FormData) {
        
    const session = await getServerSession(authOptions)
    const reserveDate = reserveForm.get("resvDate")
    const userId = session?.user._id
    const coWorkId = reserveForm.get("cid")
    const userName = session?.user.name
    const coWorkName = reserveForm.get("cname")
    const price = reserveForm.get("price")
    const userRole = session?.user.role

        try{
            await dbConnect()
            const cowork= await CoWork.findById(coWorkId);
    
            if(!cowork){
                //throw new Error("Your Co-working space not found")
                //alert("Your Co-working space not found");
                redirect('/error');
            }

            //Check for existed reservation
            const existedReserves = await Reservation.find({user:userId});
            //If the user is not an admin, they can only create 3 reservations
            if(existedReserves.length >= 3 && userRole !== 'admin'){
                //throw new Error("You have already made 3 reservations")
                //alert("You have already made 3 reservations!")
                redirect('/error');
            }
            const reservation = await Reservation.create({
                "resvDate": reserveDate,
                "user": userId,
                "cowork": coWorkId,
                "uname": userName,
                "cname": coWorkName,
                "price": price
            });
            //alert("Successfully create reservation!");
        } catch(err){
            //alert('Invalid reservation')
            //alert("Cannot create Reservation");
            redirect('/error');
        }
        //revalidateTag('reservations')
        //await new Promise( (resolve)=>setTimeout(resolve, 1000))
        revalidatePath('/myreservation');
        redirect('/myreservation');
};