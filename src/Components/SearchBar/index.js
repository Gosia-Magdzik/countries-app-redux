import { Wrapper, Input, Select } from "./styled"

export const SearchBar = () => {
    return (
    <Wrapper>
        <Input
            type="text"
            placeholder=" Search for a Country..."
        />
        <Select>
            <option value="/">Filter by Region</option>
            <option value="America">America</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </Select>
    </Wrapper>
    );
}