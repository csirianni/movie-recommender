import Navbar from "../components/Navbar";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import Recommend from "../components/Recommend";
import { Center, HStack } from '@chakra-ui/react'
import { useState } from "react";
import { Option } from "../components/autocomplete/Autocomplete";
import { MovieMetaData } from "../components/MovieCard";

function Form() {

    const placeholder: MovieMetaData = {
        title: "Casino Royale"
    }

    const [example1, setExample1] = useState<MovieMetaData>(placeholder)
    const [example2, setExample2] = useState<MovieMetaData>(placeholder)
    const [example3, setExample3] = useState<MovieMetaData>(placeholder)

    let exampleCount = 0;

    function selectExample(option: Option) {
        // ensure the number of examples is <= 3
        if (exampleCount > 3) {
            return
        }

        // convert option into movie metadata
        const movieMetaData: MovieMetaData = {
            title: option.value
        }

        // update the state of the next movie card
        switch (exampleCount) {
            case 0:
                setExample1(movieMetaData);
                break;
            case 1:
                setExample2(movieMetaData);
                break;
            case 2:
                setExample3(movieMetaData);
                break;
            default:
                return
        }
        console.log("exected selectExample");
        exampleCount++;

    }

    return (
        <div>
            <Navbar />
            <main>
                <Search selectExample={selectExample} />
                <Center>
                    <HStack position="absolute" top="125" zIndex="-1">
                        <MovieCard movie={example1} />
                        <MovieCard movie={example2} />
                        <MovieCard movie={example3} />
                    </HStack>
                </Center>
                <Recommend />
            </main>
        </div>
    )
}

export default Form;