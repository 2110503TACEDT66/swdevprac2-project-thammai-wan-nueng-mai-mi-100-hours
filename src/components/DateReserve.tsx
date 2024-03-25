'use client'
import createReservation from "@/libs/createReservation"
import Image from "next/image"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import { useState } from "react"
import { Dayjs } from "dayjs"

export default function DateReserve({onDatechange}: {onDatechange:Function}) {
    // const reservationDetail = await createReservation(params.cid)
    const [dayselect , setdayselect] = useState<Dayjs|null>(null)


    return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" value={dayselect}
                onChange={(value)=>{setdayselect(value); onDatechange(value)}}/>
            </LocalizationProvider>
    )
}