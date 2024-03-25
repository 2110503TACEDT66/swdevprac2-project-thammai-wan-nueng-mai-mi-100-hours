export default async function createReservation(token:string, cid:string, uid:string, 
    uname:string, cname:string, reserveDate:string, price:number, picture:string) {
    const response = 
    await fetch(`https://backend-project-steel.vercel.app:443/api/v1/coworks/${cid}/reservations` ,{
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`,
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            resvDate: reserveDate,
            user: uid,
            uname: uname,
            cname: cname,
            price: price,
            picture: picture
        }),
    })
    if (!response.ok){
       return response.status
    }
    return response.status
}