'use client'
import Card from "./Card"
import Link from "next/link";

export default function CardPanel() {

    const recommendCoWorkRepo = [
        { cid: "660046fd747e608004f2241e", name: "Baitoey 100", image: "/img/space1.jpg" },
        { cid: "6601f039c281ca71807f1384", name: "Intelligent 110", image: "/img/space5.jpg" },
        { cid: "6601f11acd3029c8ca40255d", name: "Community 100", image: "/img/space12.jpg" },
        { cid: "6601f1f2cd3029c8ca402561", name: "Peach 02", image: "/img/space18.jpg" }
    ]

    return (
        <div data-testid="card-panel">
            <div className="flex flex-row w-full justify-center flex-wrap content-around mx-auto">

                {
                    recommendCoWorkRepo.map((CoWork) => (
                        <Link href={`/coworkingspace/${CoWork.cid}`} className="w-1/5 my-[40px] mx-3" id={CoWork.cid}>
                            <Card coWorkName={CoWork.name} imgSrc={CoWork.image} data-testid={CoWork.name} />
                        </Link>
                    ))
                }

            </div>
        </div >
    )
}
