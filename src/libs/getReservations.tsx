export default async function getReservations(token:string) {
    const response = await fetch('https://backend-project-steel.vercel.app/api/v1/reservations', { 
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`
        },
        next: {tags:['reservations']}})
    if(!response.ok) {
        throw new Error('Failed to fetch hospitals')
    }

    const hospital:ReservationJson = await response.json()

    return hospital
}