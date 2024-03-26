'use client'
import Card from "./Card"
import Link from "next/link";

export default function CardPanel() {

    const recommendCoWorkRepo = [
        { cid: "660046fd747e608004f2241e", name: "Baitoey 100", image: "/img/space1.jpg", price: 2000 },
        { cid: "6601f039c281ca71807f1384", name: "Intelligent 110", image: "/img/space5.jpg", price: 4500 },
        { cid: "6601f11acd3029c8ca40255d", name: "Community 100", image: "/img/space12.jpg", price: 4500 },
        { cid: "6601f1f2cd3029c8ca402561", name: "Peach 02", image: "/img/space18.jpg", price: 3000 }
    ]

    return (
        <div>
            <div className="text-3xl font-bold text-center mt-5">Recommended Co-working Space</div>
            <div className="flex flex-row w-full justify-around flex-wrap content-around px-auto text-center mb-4">
                {
                    recommendCoWorkRepo.map((CoWork) => (
                        <Link href={`/coworkingspace/${CoWork.cid}`} className="w-1/5 my-[15px]" id={CoWork.cid}>
                            <Card coWorkName={CoWork.name} imgSrc={CoWork.image} data-testid={CoWork.name} price={CoWork.price}/>
                        </Link>
                    ))
                }
            </div>
        </div>

    )
}
