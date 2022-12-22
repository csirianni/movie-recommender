import { useState, useEffect } from 'react';
import { Autocomplete, Option } from './autocomplete/Autocomplete';
import { fetchTitles } from '../controller/Data';
import { AutoComplete } from 'rsuite';

type SearchProps = {
    selectExample: (option: Option) => void
}

function Search({ selectExample }: SearchProps) {

    const [titles, setTitles] = useState([""])
    const [examples, setExamples] = useState<Option[]>([]);

    async function updateTitles() {
        const response = await fetchTitles();
        setTitles(response);
    }

    // initialize titlesToIds map
    useEffect(() => { updateTitles() }, [])

    const options: Option[] = titles.map(title => { return { value: title, label: title } })

    // console.log(options);

    return (
        <>
            <Autocomplete
                options={options}
                result={examples}
                setResult={(options: Option[]) => setExamples(options)}
                selectExample={selectExample}
                disableRenderBadge={true}
                placeholder="Avatar"
                width="100%"
                position="relative"
            />
            {/* {examples.map(option => option.value)} */}
        </>
    )
}

export default Search;