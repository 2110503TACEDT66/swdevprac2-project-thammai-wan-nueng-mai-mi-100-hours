export default async function getCoWorks() {
    
    const response = await fetch('https://backend-project-steel.vercel.app:443/api/v1/coworks', {
        next: { revalidate: 3600}
    })
    if(!response.ok) {
        throw new Error('Failed to fetch cars')
    }

    const coworks:CoWorkJson = await response.json()

    return coworks
}