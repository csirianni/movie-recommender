import MovieCard, { MovieMetaData } from "./MovieCard";
import { Flex, Button, Center, Box, VStack } from "@chakra-ui/react";
import { fetchMovieData } from "../controller/Data";
import { useState } from "react";


type RecommendationProps = {
    recommendations: number[]
}

export function Recommendation({ recommendations }: RecommendationProps) {
    const placeholder: MovieMetaData = {
        title: "",
        overview: "",
        voteAverage: 0.0,
        voteCount: 0,
        posterPath: ""
    };

    const [recommendation, setRecommendation] = useState<MovieMetaData>(placeholder);
    const [index, setIndex] = useState(0);


    async function renderNextExample() {
        console.log(recommendations[index]);
        console.log(recommendations);
        let apiData = await fetchMovieData(recommendations[index]);
        console.log(apiData);

        // convert option into movie metadata
        const properties: MovieMetaData = {
            title: apiData.title,
            overview: apiData.overview,
            voteAverage: apiData.vote_average,
            voteCount: apiData.vote_count,
            posterPath: `https://image.tmdb.org/t/p/original/${apiData.poster_path}`
        }
        setRecommendation(properties);
        setIndex(prev => prev + 1);
    }

    return (
        <Flex width="full" align="center" justifyContent="center">
            <VStack>
                <MovieCard properties={recommendation} />
                <Button onClick={renderNextExample}>
                    Next
                </Button>
            </VStack>
        </Flex>
    )
}