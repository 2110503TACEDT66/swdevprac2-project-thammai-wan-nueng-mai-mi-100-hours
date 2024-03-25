export default async function getUserProfile(id:string) {
    const response = await fetch(`https://backend-project-steel.vercel.app:443/api/v1/coworks/${id}` ,{
        method: "GET",
        headers: {
        },
    })
    if (!response.ok){
        throw new Error("Failed to fetch user profile")
    }
    return await response.json()
}