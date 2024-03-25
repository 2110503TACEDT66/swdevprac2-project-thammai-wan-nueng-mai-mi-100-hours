// export default async function registerUser(
//     name:string, tel_number:string, email:string, password:string, role:string) {
//     const response = 
//     await fetch(`https://backend-project-steel.vercel.app:443/api/v1/auth/register` ,{
//         method: "POST",
//         headers: {
//             "Content-Type":"application/json",
//         },
//         body: JSON.stringify({
//             name: name,
//             tel_number: tel_number,
//             email: email,
//             password: password,
//             role: role
//         }),
//     })
//     if (!response.ok){
//        return throw new Error("Failed to fetch user profile")
//     }
//     return response.status
// }