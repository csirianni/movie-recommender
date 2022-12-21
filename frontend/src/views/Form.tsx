import Navbar from "../components/Navbar";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import Recommend from "../components/Recommend";
import { Center, HStack } from '@chakra-ui/react'

function Form() {
    return (
        <div>
            <Navbar />
            <main>
                <Search />
                <Center>
                    <HStack position="absolute" top="125" zIndex="-1">
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                    </HStack>
                </Center>
                <Recommend />
            </main>
        </div>
    )
}

export default Form;