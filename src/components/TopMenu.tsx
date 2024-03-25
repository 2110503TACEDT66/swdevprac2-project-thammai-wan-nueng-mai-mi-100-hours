import Image from "next/image"
import TopMenuItem from "./TopMenuItem"
import { Link } from "@mui/material"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import React from "react"
export default async function TopMenu() {

    //const session = await 
    const session = await getServerSession(authOptions)

    return (
        <div className="h-[60px] bg-white fixed top-0 left-0 right-0 z-30 border-y border-solid border-neutral-300 flex flex-row">
            <Image src={'/img/logo.png'} alt="logo" width={0} height={0} sizes="100vh" 
            className="h-4/5 w-auto my-auto mx-[15px]"
            />
            <TopMenuItem title="Home" pageRef="/"/>
            <TopMenuItem title="Co-working Spaces" pageRef="/coworkingspace"/>
            <TopMenuItem title="My Reservation" pageRef="/myreservation"/>

            {
                //dummy code for auth section
                //session?
                session? <Link href="/api/auth/signout"><div className='flex items-center absolute right-0 h-full px-4
                text-cyan-600 hover:bg-slate-200'>
                Sign-Out of {session.user?.name}</div></Link>:
                <Link href="/api/auth/signin"><div className="flex items-center absolute right-0 h-full px-4
                text-cyan-600 hover:bg-slate-200">Sign-In</div></Link>
            }
        </div>
    )
}