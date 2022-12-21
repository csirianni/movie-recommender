import Navbar from "../components/Navbar";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import Recommend from "../components/Recommend";
import { Center, HStack } from '@chakra-ui/react'
import { useState } from "react";
import { Option } from "../components/autocomplete/Autocomplete";

function Form() {

    const [example1, setExample1] = useState("")
    const [example2, setExample2] = useState("")
    const [example3, setExample3] = useState("")

    let exampleCount = 0;

    function selectExample(option: Option) {
        // ensure the number of examples is <= 3
        if (exampleCount > 3) {
            return
        }

        // convert option into movie metadata
        const movieData = option.value;

        // update the state of the next movie card
        switch (exampleCount) {
            case 0:
                setExample1(movieData);
                break;
            case 1:
                setExample2(movieData);
                break;
            case 2:
                setExample3(movieData);
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
                        <MovieCard title={example1} />
                        <MovieCard title={example2} />
                        <MovieCard title={example3} />
                    </HStack>
                </Center>
                <Recommend />
            </main>
        </div>
    )
}

export default Form;