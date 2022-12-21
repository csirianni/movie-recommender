import Navbar from "../components/Navbar";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import Recommend from "../components/Recommend";
import { Center, HStack } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import { Option } from "../components/autocomplete/Autocomplete";
import { MovieMetaData } from "../components/MovieCard";
import { fetchMovieData, fetchTitlesToIds, fetchTitles } from "../controller/Data";

let exampleCount = 0;

function Form() {

    const placeholder: MovieMetaData = {
        title: "",
        overview: "",
        voteAverage: 0.0,
        voteCount: 0,
        posterPath: ""
    }

    const [example1, setExample1] = useState<MovieMetaData>(placeholder)
    const [example2, setExample2] = useState<MovieMetaData>(placeholder)
    const [example3, setExample3] = useState<MovieMetaData>(placeholder)
    const [titlesToIds, setTitlesToIds] = useState(new Map())

    async function updateTitlesToIds() {
        const response = await fetchTitlesToIds();
        setTitlesToIds(response);
    }

    // initialize titlesToIds map
    useEffect(() => { updateTitlesToIds() }, [])


    async function selectExample(option: Option) {
        // ensure the number of examples is <= 3
        // TODO: ensure this is enforced across the board
        if (exampleCount > 3) {
            return
        }

        const movieID = titlesToIds.get(option.value)

        let apiData = await fetchMovieData(movieID);

        // convert option into movie metadata
        const properties: MovieMetaData = {
            title: apiData.title,
            overview: apiData.overview,
            voteAverage: apiData.vote_average,
            voteCount: apiData.vote_count,
            posterPath: `https://image.tmdb.org/t/p/original/${apiData.poster_path}`
        }

        // update the state of the next movie card
        switch (exampleCount) {
            case 0:
                setExample1(properties);
                break;
            case 1:
                setExample2(properties);
                break;
            case 2:
                setExample3(properties);
                break;
            default:
                return
        }
        exampleCount++;
    }

    return (
        <div>
            <Navbar />
            <main>
                <Search selectExample={selectExample} />
                <Center>
                    <HStack position="absolute" top="125" zIndex="-1">
                        <MovieCard properties={example1} />
                        <MovieCard properties={example2} />
                        <MovieCard properties={example3} />
                    </HStack>
                </Center>
                <Recommend />
            </main>
        </div>
    )
}

export default Form;