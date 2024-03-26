import CoWorkCatalog from "@/components/CoWorkCatalog";
import getCoWorks from "@/libs/getCoWorks";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function CoworkingSpacePage () {
    const coworks = getCoWorks()
    return (
        <main className="text-center p-5">
            <Suspense fallback={ <p>Loading ... <LinearProgress/></p> }>
                <CoWorkCatalog coWorkJson={coworks}/>
            </Suspense>
        </main>
    );
}