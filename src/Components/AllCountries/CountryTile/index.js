import { useNavigate } from "react-router-dom";
import { Tile,
         Img,
         CountryData,
         Name,
         Details
} from "./styled";

export const CountryTile = ( { flag, cca3, name, population, region, capital } ) => {

    const navigate = useNavigate();

    return (
        <Tile onClick={() => {navigate(`/country/${cca3}`)}}>
            <Img src={flag}/>
            <CountryData>
                <Name>{name}</Name>
                <Details><b>Population:</b> {new Intl.NumberFormat().format(population)}</Details>
                <Details><b>Region:</b> {region}</Details>
                <Details><b>Capital:</b> {capital} </Details>
            </CountryData>
        </Tile>
    );
};