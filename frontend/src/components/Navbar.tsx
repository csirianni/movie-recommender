import { Text } from '@chakra-ui/react'

function Navbar() {
    return (
        <header>
            <Text fontSize="4xl" py="2" pl="4" mb="6" color="white" backgroundColor="#383838">
                <strong>Movie Recommender</strong>
            </Text>
        </header>
    )
}

export default Navbar;