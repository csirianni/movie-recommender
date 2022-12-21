import { useState } from 'react';
import { Flex } from '@chakra-ui/react'
import { Autocomplete, Option } from './autocomplete/Autocomplete';

const options = [
    { value: 'javascript', label: 'Javascript' },
    { value: 'chakra', label: 'Chakra' },
    { value: 'react', label: 'React' },
    { value: 'css', label: 'CSS' },
];


function Search() {
    const [result, setResult] = useState<Option[]>([]);

    return (
        <Autocomplete
            options={options}
            result={result}
            setResult={(options: Option[]) => setResult(options)}
            disableRenderBadge={true}
            allowCreation={false}
            placeholder="Enter a movie title"
            width="100%"
            position="relative"
        />
    )
}

export default Search;