export default async function putReservation(token:string, id:string, reservedate:string) {
    const response = 
    await fetch(`https://backend-project-steel.vercel.app:443/api/v1/reservations/${id}` ,{
        method: "PUT",
        headers: {
            authorization: `Bearer ${token}`,
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            resvDate: reservedate
        }),
    })
    if (!response.ok){
        console.log(response.status)
        return response.status
    }
    return response.status
}