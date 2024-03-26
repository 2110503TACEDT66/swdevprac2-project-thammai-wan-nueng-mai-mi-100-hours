'use client'
import { useState } from "react"
import { Dayjs } from "dayjs"
import DateReserve from "@/components/DateReserve"
import { useSession } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import UpdateReservation from "@/action/updateReservation"

export default function EditReservationPage({params}: {params:{rid:string}}) {
    const [dayselect , setdayselect] = useState<Dayjs|null>(null)

    const urlParams = useSearchParams()
    const rid = urlParams.get('rid')
    const namecoworks = urlParams.get('name')
    const price = urlParams.get('price')

    const session = useSession()

    return (
        <main className="text-center p-5">
            <form action={UpdateReservation} className="flex flex-col items-center my-5">
                <div className="bg-slate-100 rounded-lg shadow-md w-full max-w-md p-8 space-y-4">
                   
                        <input type="hidden" readOnly id="rid" name="rid" value={rid||""} className="border rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="uname" className="font-medium">Username:</label>
                        <input type="text" readOnly id="uname" name="uname" value={session.data?.user.name} className="border rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="cname" className="font-medium">Co-working space:</label>
                        <input type="text" readOnly id="cname" name="cname" value={namecoworks||""} className="border rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="price" className="font-medium">Price:</label>
                        <input type="text" readOnly id="price" name="price" value={price||""} className="border rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                    <label className="font-medium">Change date to:</label>
                    <DateReserve onDatechange={(value:Dayjs)=>{setdayselect(value)}}/>
                    <input type="hidden" readOnly id="resvDate" name="resvDate" value={dayselect?.toString()}/>
                    </div>
                    <button type="submit" className="w-full rounded-md bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-sky-300 text-white font-medium px-4 py-2 mt-4 transition-colors duration-200">Reserve</button>
                </div>
            </form>
        </main>
    )
}
