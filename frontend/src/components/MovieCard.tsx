import { Flex, Card, CardBody, Heading, Text, Image, Box, Center } from '@chakra-ui/react'
import { MdStar } from "react-icons/md";

export type MovieMetaData = {
    title: string
}

type MovieCardProps = {
    movie: MovieMetaData
}

function MovieCard({ movie }: MovieCardProps) {
    const properties = {
        title: "Avatar",
        overview: "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
        runtime: 162,
        genres: ["Action", "Adventure", "Fantasy"],
        release_date: "2009",
        vote_average: 7.2,
        vote_count: 11800,
        poster: "https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_FMjpg_UX1037_.jpg"
    }

    return (
        <Card marginY={6} width="20em">
            <CardBody>
                <Image src={properties.poster} width="20em" borderRadius='lg' />
                <Heading>
                    <Text>{movie.title}</Text>
                </Heading>
                <Text fontSize="xs">{properties.overview}</Text>
                <Flex align="center">
                    <Box as={MdStar} color="orange.400" />
                    <Text ml={1} fontSize="md">
                        <b>{properties.vote_average / 2}</b> ({properties.vote_count})
                    </Text>
                </Flex>
            </CardBody>
        </Card>
    )
}


export default MovieCard;