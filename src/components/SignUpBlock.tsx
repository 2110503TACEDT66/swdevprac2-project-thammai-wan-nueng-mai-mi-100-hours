'use client'
import { useState } from "react"
import { useSession } from "next-auth/react"
import React from "react"

export default function SignUpBlock( {children} : {children:React.ReactNode}) {
    
    const session = useSession()
    const [name , setnames] = useState("")
    const [tel , settel] = useState("")
    const [email , setemail] = useState("")
    const [password , setpassword] = useState("")

    return (
        <div>
            <form className="flex flex-col items-center my-5">
                <div className="bg-slate-100 rounded-lg shadow-md w-full max-w-md p-8 space-y-4">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="name" className="font-medium">Name:</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e)=>{setnames(e.target.value)}} className="border rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="tels" className="font-medium">Tel:</label>
                        <input type="text" id="tels" name="tels" value={tel} onChange={(e)=>{settel(e.target.value)}} className="border rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="email" className="font-medium">Email:</label>
                        <input type="text" id="email" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}} className="border rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                    <label className="font-medium">Password:</label>
                    <input type="text" id="password" name="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} className="border rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                    <input type="hidden" readOnly id="role" name="role" value={"user"} className="border rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                    </div>

                    <button type="submit" className="w-full rounded-md bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-sky-300 text-white font-medium px-4 py-2 mt-4 transition-colors duration-200">Reserve</button>
                </div>
            </form>
            {children}
        </div>
    )
}