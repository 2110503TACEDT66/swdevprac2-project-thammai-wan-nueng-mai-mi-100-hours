import getUserProfile from "@/libs/getUserProfile";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ReservationList from "@/components/ReservationList";
import getReservations from "@/libs/getReservations";
// import { Suspense } from "react";
// import { LinearProgress } from "@mui/material";

export default async function MyReservationPage () {

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null
    const profile = await getUserProfile(session.user.token)

    const reservations = getReservations(session.user.token)

    return (
        <main>
            <div>My reservation {profile.data.name}</div>
                <ReservationList reservationJson={reservations}/>
        </main>
    );
}