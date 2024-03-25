import Card from "./Card";
import Link from "next/link";
// import { CoWorkJson } from "../../interface";
// import { Rating } from "@mui/material";

export default async function CoWorkCatalog({ coWorkJson }: { coWorkJson: Promise<CoWorkJson> }) {

    const coWorkReady = await coWorkJson
    return (
        <div style={{ margin: "20px", display: "space-around", justifyContent: "space-around", flexWrap: "wrap", padding: "10px" }
        }>

            <div className="flex flex-row w-full justify-center" >
                {
                    coWorkReady.data.map((CoWork) => (
                        <Link href={`/cowork/${CoWork.id}`} className="w-1/5" >
                            <Card coWorkName={CoWork.name} imgSrc={CoWork.picture} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
} 