'use client'

import { useState } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setCoWorkData } from "@/redux/features/coworkSlice"

export default function createcowork() {

    const [nameco , setnameco] = useState("")
    const [address, setaddress] = useState("")
    const [telco , settelco] = useState("")
    const [opentime , setopentime] = useState("")
    const [closetime , setclosetime] = useState("")
    const [priceco, setpriceco] = useState("")

    const dispatch = useDispatch();

    const handleSubmit = () => {
        const coWorkData = { nameco, address, telco, opentime, closetime, priceco };
        dispatch(setCoWorkData(coWorkData));
    };

    return (
        <main className="text-center p-5">
            <h1 className="flex flex-col space-y-2 text-2xl">Create Co-Work</h1>
            <form className="flex flex-col items-center my-5">
            <div className="bg-slate-100 rounded-lg shadow-md w-full max-w-md p-8 space-y-4">
                <div className="flex flex-col space-y-2">
                    <label htmlFor="nameco" className="font-medium">Name of Co-Work:</label>
                    <input type="text" id="nameco" name="nameco" value={nameco} onChange={(e)=>{setnameco(e.target.value)}} required className="border rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="address" className="font-medium">Address:</label>
                    <input type="text" id="address" name="address" value={address} onChange={(e)=>{setaddress(e.target.value)}} required className="border rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="telco" className="font-medium">Tel of Co-Work:</label>
                    <input type="text" id="telco" name="telco" value={telco} onChange={(e)=>{settelco(e.target.value)}} required className="border rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="opentime" className="font-medium">Open-time:</label>
                    <input type="text" id="opentime" name="opentime" value={opentime} onChange={(e)=>{setopentime(e.target.value)}} required className="border rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="closetime" className="font-medium">Close-time:</label>
                    <input type="text" id="closetime" name="closetime" value={closetime} onChange={(e)=>{setclosetime(e.target.value)}} required className="border rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="priceco" className="font-medium">Price:</label>
                    <input type="text" id="priceco" name="priceco" value={priceco} onChange={(e)=>{setpriceco(e.target.value)}} required className="border rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>
                <button 
                type="button" 
                onClick={handleSubmit}
                className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >Create Co-Work
                </button>
            </div>
            </form>

        </main>
    )
}