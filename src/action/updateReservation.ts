'use server'
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import putReservation from "@/libs/putReservation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function UpdateReservation(reservationForm: FormData) {
    const session = await getServerSession(authOptions)
    const rid = reservationForm.get("rid")?.toString() || "";
    const token = session?.user.token||"";
    const reserveDate = reservationForm.get("resvDate")?.toString() || "";

    await putReservation(token, rid, reserveDate);
    revalidatePath('/myreservation');
    redirect('/myreservation');
}
