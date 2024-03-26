import Card from "./Card";
import Link from "next/link";

export default async function CoWorkCatalog({ coWorkJson }: { coWorkJson: Promise<CoWorkJson> }) {

    const coWorkReady = await coWorkJson
    return (
        <>
            <div className="text-3xl font-bold">Co-working Space List</div>
            <div className="flex flex-row w-full justify-around flex-wrap content-around" >
                {
                    coWorkReady.data.map((CoWork) => (
                        <Link href={`/coworkingspace/${CoWork.id}`} className="w-1/5 my-6 mx-6" >
                            <Card coWorkName={CoWork.name} imgSrc={CoWork.picture} price={CoWork.price}/>
                        </Link>
                    ))
                }
            </div>
        </>
    )
} 