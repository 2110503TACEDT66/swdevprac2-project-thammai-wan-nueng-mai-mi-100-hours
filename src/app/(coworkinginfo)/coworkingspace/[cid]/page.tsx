// 'use client'
// import getCoWork from '@/libs/getCoWork'
// import Link from 'next/link'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'

// export default async function CoworkDetailPage({params}: {params:{cid:string}}) {
    
//     const coWorkDetail = await getCoWork(params.cid)
//     // const router = useRouter()
    
//     return (
//         <main className="text-center p-5">
//             <h1 className="text-lg font-medium">{}</h1>
//             <div className="flex flex-row my-5">
//                 <Image src={ coWorkDetail.data.picture} 
//                 alt="coworkpic"
//                 width={0} height={0} sizes="100vw"
//                 className="rounded-lg w-[30%]"/>
//                 <div className="text-md mx-5 text-left">Name: {coWorkDetail.data.name}
//                 <div className="text-md mx-5">Address: {coWorkDetail.data.address}</div>
//                 <div className="text-md mx-5">Tel: {coWorkDetail.data.phonenumber}</div>
//                 <div className="text-md mx-5">Open-time: {coWorkDetail.data.opentime}</div>
//                 <div className="text-md mx-5">Close-time: {coWorkDetail.data.closetime}</div>
//                 <div className="text-md mx-5">Price: {coWorkDetail.data.price}</div>
//                 </div>
              
//                 <Link href={`/reservation?cid=${params.cid}&name=${coWorkDetail.data.name}&price=${coWorkDetail.data.price}`}>
//                 <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1
//                 text-white shadow-sm mt-10">
//                     Make Reservation
//                 </button>
//                 </Link>
//             </div>
//         </main>
//     )
// }

'use client'
import getCoWork from '@/libs/getCoWork'
import Link from 'next/link'
import Image from 'next/image'

export default async function CoworkDetailPage({params}: {params:{cid:string}}) {
    
    const coWorkDetail = await getCoWork(params.cid)
    
    return (
        <main className="text-center p-5">
        <h1 className="text-lg font-medium">{/* Title here */}</h1>
        <div className="flex flex-row my-5">
            <Image src={coWorkDetail.data.picture} 
            alt="coworkpic"
            width={0} height={0} sizes="100vw"
            className="rounded-lg w-[30%]"/>
            <div className="text-lg mx-5 text-left">
                <div>Name: {coWorkDetail.data.name}</div>
                <div>Address: {coWorkDetail.data.address}</div>
                <div>Tel: {coWorkDetail.data.phonenumber}</div>
                <div>Open-time: {coWorkDetail.data.opentime}</div>
                <div>Close-time: {coWorkDetail.data.closetime}</div>
                <div>Price: {coWorkDetail.data.price}</div>
                {/* Button is moved here, directly below the Price */}
                <Link href={`/reservation?cid=${params.cid}&name=${coWorkDetail.data.name}&price=${coWorkDetail.data.price}`}>
                    <button className="mt-5 rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm">
                        Make Reservation
                    </button>
                </Link>
            </div>
        </div>
    </main>
    
    )
}