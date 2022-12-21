import { Center, Button } from '@chakra-ui/react'

type RecommendProps = {
    exampleIDs: number[]
}

function Recommend({ exampleIDs }: RecommendProps) {
    return (
        <Center>
            <Button
                position="absolute"
                top="700"
                onClick={() => console.log(exampleIDs)}
            >
                Recommend
            </Button>
        </Center>
    )
}

export default Recommend;