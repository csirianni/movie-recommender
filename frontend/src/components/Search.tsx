import { useState } from 'react';
import { Autocomplete, Option } from './autocomplete/Autocomplete';

const options = [
    { value: 'javascript', label: 'Javascript' },
    { value: 'chakra', label: 'Chakra' },
    { value: 'react', label: 'React' },
    { value: 'css', label: 'CSS' },
];

type SearchProps = {
    selectExample: (option: Option) => void
}


function Search({ selectExample }: SearchProps) {
    const [examples, setExamples] = useState<Option[]>([]);

    return (
        <>
            <Autocomplete
                options={options}
                result={examples}
                setResult={(options: Option[]) => setExamples(options)}
                selectExample={selectExample}
                disableRenderBadge={true}
                placeholder="Enter a movie title"
                width="100%"
                position="relative"
            />
            {examples.map(option => option.value)}
        </>
    )
}

export default Search;