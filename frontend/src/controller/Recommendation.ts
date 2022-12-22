export async function getRecommendations(movieIDs: number[]) {
    const response = await fetch('http://127.0.0.1:5000/recommendations/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "example1": movieIDs[0], "example2": movieIDs[1], "example3": movieIDs[2] })
    })
    const responseJSON = await response.json()
    return responseJSON.data
}