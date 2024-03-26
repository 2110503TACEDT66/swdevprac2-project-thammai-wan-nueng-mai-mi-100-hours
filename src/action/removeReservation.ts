'use server'
import deleteReservation from "@/libs/deleteReservation"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function RemoveReservation(reservationForm: FormData) {
    const id = reservationForm.get("id")?.toString() || ""
    const token = reservationForm.get("token")?.toString() || ""

    await deleteReservation(token, id);
    revalidatePath('/myreservation');
    redirect('/myreservation');
}
