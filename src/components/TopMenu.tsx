import Image from "next/image"
import TopMenuItem from "./TopMenuItem"
import Link from "next/link"
export default async function TopMenu() {

    //const session = await 

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
                <Link href="/api/auth/signin"><div className="flex items-center absolute right-0 h-full px-4
                text-cyan-600 hover:bg-slate-200">Sign-In</div></Link>
            }
        </div>
    )
}