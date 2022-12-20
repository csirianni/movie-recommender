import Navbar from "../components/Navbar";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import Recommend from "../components/Recommend";
import { HStack } from '@chakra-ui/react'

function Form() {
    return (
        <div>
            <Navbar />
            <Search />
            <HStack>
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </HStack>
            <Recommend />
        </div>
    )
}

export default Form;