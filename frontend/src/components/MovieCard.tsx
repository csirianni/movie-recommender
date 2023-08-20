import { Flex, Card, CardBody, Heading, Text, Image, Box, Center } from '@chakra-ui/react'
import { MdStar } from "react-icons/md";

export type MovieMetaData = {
    title: string
    overview: string,
    voteAverage: number,
    voteCount: number,
    posterPath: string
}

type MovieCardProps = {
    properties: MovieMetaData
}

function MovieCard({ properties }: MovieCardProps) {

    return (
        <Card marginY={6} width="20em">
            <CardBody>
                <Image src={properties.posterPath} width="20em" borderRadius='lg' />
                <Image src="" width="20em" borderRadius='lg' />
                <Heading size="md" noOfLines={1}>
                    {properties.title}
                </Heading>
                {/* <Text fontSize="xs">{properties.overview}</Text> */}
                <Flex align="center">
                    <Box as={MdStar} color="orange.400" />
                    <Text ml={1} fontSize="md">
                        <b>{properties.voteAverage / 2}</b> ({properties.voteCount})
                    </Text>
                </Flex>
            </CardBody>
        </Card>
    )
}


export default MovieCard;