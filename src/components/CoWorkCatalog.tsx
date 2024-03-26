import Card from "./Card";
import Link from "next/link";

export default async function CoWorkCatalog({ coWorkJson }: { coWorkJson: Promise<CoWorkJson> }) {

    const coWorkReady = await coWorkJson
    return (
        <>
        Co-working Space List
            <div className="flex flex-row w-full justify-center flex-wrap content-around mx-[47px]" >
                {
                    coWorkReady.data.map((CoWork) => (
                        <Link href={`/coworkingspace/${CoWork.id}`} className="w-1/4 my-6" >
                            <Card coWorkName={CoWork.name} imgSrc={CoWork.picture} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
} 