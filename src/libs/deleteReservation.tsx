export default async function deleteReservation(token:string, id:string) {
    const response = 
    await fetch(`https://backend-project-steel.vercel.app:443/api/v1/reservations/${id}` ,{
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
        }),
    })
    if (!response.ok){
        console.log(response.status)
        return response.status
    }
    return response.status
}