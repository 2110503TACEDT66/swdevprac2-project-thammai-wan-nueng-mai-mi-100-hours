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
        <div className="h-[60px] bg-white fixed top-0 left-0 right-0 z-30 border-y border-solid border-neutral-300 flex flex-row items-center">
            <Image src={'/img/logo.png'} alt="logo" width={0} height={0} sizes="100vh" className="h-4/5 w-auto mx-[15px]" />
            <TopMenuItem title="Home" pageRef="/" />
            <TopMenuItem title="Co-working Spaces" pageRef="/coworkingspace" />
            <TopMenuItem title="My Reservation" pageRef="/myreservation" />
            <div className="flex-grow"></div>
            {
                session ? (
                    <div className='px-4 text-cyan-600 hover:bg-slate-200'>
                        <Link href="/api/auth/signout">Sign-Out of {session.user?.name}</Link>
                    </div>
                ) : (
                    <>
                        <div className="px-4 text-cyan-600 hover:bg-slate-200">
                            <Link href="/api/auth/signin">Sign-In</Link>
                        </div>
                        <div className="px-4 text-cyan-600 hover:bg-slate-200">
                            <TopMenuItem title="Sign-up" pageRef="/signup" />
                        </div>
                    </>
                )
            }
        </div>

    )
}