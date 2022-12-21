import { apiKey } from "../private/tmdb"


export async function fetchMovieData(movieID: number) {
    // TODO: use ID not title
    const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}`;
    console.log(url)
    const response = await fetch(url);
    return await response.json();
}

export async function fetchTitlesToIds() {
    const response = await fetch("http://127.0.0.1:5000/titles_to_ids/");
    const responseJSON = await response.json();
    return new Map(Object.entries(responseJSON.data));
}

// let titlesToIds = null;

// async function getMovieID(title: string) {
//     if (titlesToIds === null) {
//         titlesToIds = await fetchTitlesToIds()
//     }

// }

export async function fetchTitles() {
    const response = await fetch("http://127.0.0.1:5000/titles_to_ids/");
    const responseJSON = await response.json();
    console.log("titles fetched")
    return Object.keys(responseJSON.data);
}
